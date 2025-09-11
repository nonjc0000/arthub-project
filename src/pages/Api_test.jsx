import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';

// JavaScript JSX 版本 - 移除所有類型註解
// POI (point of interest) array
const locations = [
  { key: '臺北市立美術館', location: { lat: 25.073710223497176, lng: 121.52920746197447 } },
  { key: '臺北松山機場', location: { lat: 25.068734615867825, lng: 121.54912018214841 } },
  { key: '大佳河濱公園', location: { lat: 25.075468275103084, lng: 121.543288188925 } },
];

// 自定義 SVG 標記組件
const CustomSvgMarker = () => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.674" cy="13.7591" r="9.78635" fill="#C76666" stroke="#C76666" strokeWidth="0.932033" />
      <circle cx="13.674" cy="13.759" r="12.5825" stroke="#C76666" strokeWidth="0.932033" fill="none" />
    </svg>
  );
};

// 目前位置標記組件
const CurrentLocationMarker = () => {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      backgroundColor: '#ED972E',
      border: '3px solid #fff',
      borderRadius: '50%',
      // boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      position: 'relative'
    }}>
      {/* 外圈脈衝效果 */}
      <div style={{
        position: 'absolute',
        bottom: '-13px',
        left: '-13px',
        width: '40px',
        height: '40px',
        border: '2px solid #ED972E',
        borderRadius: '50%',
        opacity: 0.3,
        animation: 'pulse 2s infinite'
      }} />
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

// 位置控制按鈕組件
const LocationControl = ({ onLocationClick }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // 創建自定義控制按鈕
    const locationButton = document.createElement('button');
    locationButton.textContent = '📍 目前位置';
    locationButton.style.cssText = `
      background: white;
      border: 2px solid #dadce0;
      border-radius: 2px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      cursor: pointer;
      font-family: Roboto,Arial,sans-serif;
      font-size: 14px;
      line-height: 30px;
      margin: 8px;
      padding: 0 12px;
      text-align: center;
      user-select: none;
    `;

    // 添加懸停效果
    locationButton.addEventListener('mouseenter', () => {
      locationButton.style.backgroundColor = '#f1f3f4';
    });
    locationButton.addEventListener('mouseleave', () => {
      locationButton.style.backgroundColor = 'white';
    });

    locationButton.addEventListener('click', onLocationClick);

    // 將按鈕添加到地圖控制區域
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    // 清理函數
    return () => {
      const index = map.controls[google.maps.ControlPosition.TOP_CENTER].indexOf(locationButton);
      if (index > -1) {
        map.controls[google.maps.ControlPosition.TOP_CENTER].removeAt(index);
      }
    };
  }, [map, onLocationClick]);

  return null;
};

// React Google Maps 的 AdvancedMarker 組件
const ReactAdvancedMarkers = (props) => {
  const map = useMap();

  const handleClick = useCallback((poi) => {
    if (!map) return;
    console.log(`Clicked on: ${poi.key}`);
    map.panTo(poi.location);
    map.setZoom(16);
  }, [map]);

  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          clickable={true}
          onClick={() => handleClick(poi)}
        >
          <CustomSvgMarker />
        </AdvancedMarker>
      ))}
    </>
  );
};

const Api_test = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [showLocationInfo, setShowLocationInfo] = useState(false);

  // 取得目前位置的函數
  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError('您的瀏覽器不支援地理位置服務');
      return;
    }

    // 顯示載入狀態
    setLocationError('正在取得位置...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        
        setCurrentLocation(pos);
        setLocationError(null);
        setShowLocationInfo(true);
        
        console.log('目前位置:', pos);
      },
      (error) => {
        let errorMessage = '無法取得位置資訊';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = '位置存取被拒絕，請允許位置權限';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = '位置資訊無法取得';
            break;
          case error.TIMEOUT:
            errorMessage = '位置請求逾時';
            break;
        }
        setLocationError(errorMessage);
        setCurrentLocation(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }, []);

  return (
    <div>
      <h2>Api_test</h2>
      
      {/* 錯誤訊息顯示 */}
      {locationError && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: locationError.includes('正在取得') ? '#e3f2fd' : '#ffebee',
          color: locationError.includes('正在取得') ? '#1976d2' : '#c62828',
          marginBottom: '10px',
          borderRadius: '4px'
        }}>
          {locationError}
        </div>
      )}

      <div style={{ height: '80vh', width: '100%' }}>
        <APIProvider
          apiKey={'AIzaSyB4_IDwgsNFfIzHU9vlKDlvv6yrNB93SsQ'}
          onLoad={() => console.log('Maps API has loaded.')}
        >
          <Map
            defaultZoom={14}
            defaultCenter={currentLocation || { lat: 25.07985171038588, lng: 121.54439949417615 }}
            center={currentLocation}
            mapId='7e6d708d8bcc7551d6c210d1'
            style={{ height: '100%', width: '100%' }}
            onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }
          >
            {/* 景點標記 */}
            <ReactAdvancedMarkers pois={locations} />
            
            {/* 目前位置標記 */}
            {currentLocation && (
              <AdvancedMarker
                position={currentLocation}
                clickable={true}
                onClick={() => setShowLocationInfo(true)}
              >
                <CurrentLocationMarker />
              </AdvancedMarker>
            )}

            {/* 目前位置資訊窗 */}
            {currentLocation && showLocationInfo && (
              <InfoWindow
                position={currentLocation}
                onCloseClick={() => setShowLocationInfo(false)}
              >
                <div style={{ padding: '8px' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>目前位置</h3>
                  <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                    緯度: {currentLocation.lat.toFixed(6)}<br />
                    經度: {currentLocation.lng.toFixed(6)}
                  </p>
                </div>
              </InfoWindow>
            )}

            {/* 位置控制按鈕 */}
            <LocationControl onLocationClick={getCurrentLocation} />
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}

export default Api_test