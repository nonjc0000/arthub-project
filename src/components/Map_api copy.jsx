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
  { 
    key: '臺北市立美術館', 
    location: { lat: 25.073710223497176, lng: 121.52920746197447 },
    eventName: '夏末微光祭',
    date: '2025.07.14-07.15',
    time: '9:00-18:00',
    venue: 'city link松山壹號店',
    tag: '夏日祭典'
  },
  { 
    key: '臺北松山機場', 
    location: { lat: 25.068734615867825, lng: 121.54912018214841 },
    eventName: '機場藝術節',
    date: '2025.08.01-08.02',
    time: '10:00-19:00',
    venue: '松山機場藝文區',
    tag: '藝術展演'
  },
  { 
    key: '大佳河濱公園', 
    location: { lat: 25.075468275103084, lng: 121.543288188925 },
    eventName: '河畔音樂市集',
    date: '2025.07.20-07.21',
    time: '15:00-21:00',
    venue: '大佳河濱公園草地',
    tag: '音樂祭'
  },
];

// 自定義 SVG 標記組件
const CustomSvgMarker = () => {
  return (
    <div className="custom_marker poi_marker">
      <svg className="poi_marker_svg" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className='inner' cx="13.674" cy="13.7591" r="9.78635" />
        <circle className='outer' cx="13.674" cy="13.759" r="12.5825" strokeWidth="0.932033" fill="none" />
      </svg>
    </div>
  );
};

// 目前位置標記組件
const CurrentLocationMarker = () => {
  return (
    <div className="custom_marker current_location">
      <div className="location_marker_container"></div>
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
    locationButton.className = 'location_control_button';

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
  const [selectedPoi, setSelectedPoi] = useState(null);

  const handleClick = useCallback((poi) => {
    if (!map) return;
    console.log(`Clicked on: ${poi.key}`);
    map.panTo(poi.location);
    map.setZoom(16);
    // 設定選中的景點以顯示 InfoWindow
    setSelectedPoi(poi);
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
      
      {/* 景點 InfoWindow - 修改為卡片樣式 */}
      {selectedPoi && (
        <InfoWindow
          position={selectedPoi.location}
          onCloseClick={() => setSelectedPoi(null)}
        >
          <div className="event_card_infowindow">
            {/* 圖片區域 */}
            <div className="event_image_placeholder">
              {/* 這裡可以放實際的活動圖片 */}
            </div>
            
            {/* 標籤 */}
            <div className="event_tag">
              # {selectedPoi.tag}
            </div>
            
            {/* 活動資訊 */}
            <div className="event_info">
              <h3 className="event_title">{selectedPoi.eventName}</h3>
              <div className="event_details">
                <p className="event_date">{selectedPoi.date}</p>
                <p className="event_time">{selectedPoi.time}</p>
                <p className="event_venue">{selectedPoi.venue}</p>
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

const Map_api = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const mapRef = useRef(null);

  // 取得目前位置的函數
  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError('您的瀏覽器不支援地理位置服務');
      return;
    }

    // 顯示載入狀態
    // setLocationError('正在取得位置...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        
        setCurrentLocation(pos);
        setLocationError(null);
        setShowLocationInfo(true);
        
        // 使用 panTo 移動地圖，而不是設定 center
        if (mapRef.current) {
          mapRef.current.panTo(pos);
          mapRef.current.setZoom(16);
        }
        
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

  // 儲存 map 實例的回調函數
  const handleMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="api_test_main">
      
      {/* 錯誤訊息顯示 */}
      {locationError && (
        <div className={`error_message ${locationError.includes('正在取得') ? 'loading' : 'error'}`}>
          {locationError}
        </div>
      )}

      <div className="map_container">
        <APIProvider
          apiKey={'AIzaSyB4_IDwgsNFfIzHU9vlKDlvv6yrNB93SsQ'}
          onLoad={() => console.log('Maps API has loaded.')}
        >
          <Map
            defaultZoom={14}
            defaultCenter={{ lat: 25.07985171038588, lng: 121.54439949417615 }}
            mapId='7e6d708d8bcc7551d6c210d1'
            style={{ height: '100%', width: '100%' }}
            onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }
            ref={handleMapLoad}
            streetViewControl={false}
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
                <div className="info_window current_location_info">
                  <div className="info_content">
                    <h3 className="info_title">目前位置</h3>
                    <p className="info_coordinates">
                      緯度: {currentLocation.lat.toFixed(6)}<br />
                      經度: {currentLocation.lng.toFixed(6)}
                    </p>
                  </div>
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

export default Map_api