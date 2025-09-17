import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  InfoWindow
} from '@vis.gl/react-google-maps';
import marketsData from '../data/market.json'; // 引入市集資料

// 將 market.json 轉換為 locations 格式
const createLocationsFromMarkets = (markets) => {
  return markets.map(market => ({
    key: market.name, // API 需要的 key 屬性
    location: { lat: market.lat, lng: market.lng }, // API 需要的 location 屬性
    // 保留原有的事件資訊，但使用 market.json 的資料
    eventName: market.name,
    date: market.date,
    time: market.time,
    venue: market.venue || market.district, // 使用 venue 或 district
    tag: market.tag[0] || '市集活動', // 取第一個標籤
    // 額外的市集資訊
    marketId: market.id,
    city: market.city,
    district: market.district,
    description: market.desc,
    allTags: market.tag.slice(0, 1),
  }));
};

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

    const locationButton = document.createElement('button');
    locationButton.textContent = '📍 目前位置';
    locationButton.className = 'location_control_button';

    locationButton.addEventListener('click', onLocationClick);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

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
const ReactAdvancedMarkers = ({ pois, onMarkerClick }) => {
  const map = useMap();
  const [selectedPoi, setSelectedPoi] = useState(null);

  const handleClick = useCallback((poi) => {
    if (!map) return;
    console.log(`Clicked on: ${poi.key}`);
    map.panTo(poi.location);
    map.setZoom(16);
    setSelectedPoi(poi);

    // 如果有傳入 onMarkerClick 回調，也執行它
    if (onMarkerClick) {
      onMarkerClick(poi);
    }
  }, [map, onMarkerClick]);

  return (
    <>
      {pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          clickable={true}
          onClick={() => handleClick(poi)}
        >
          <CustomSvgMarker />
        </AdvancedMarker>
      ))}

      {/* 市集 InfoWindow */}
      {selectedPoi && (
        <InfoWindow
          position={selectedPoi.location}
          onCloseClick={() => setSelectedPoi(null)}
        >
          <div className="event_card_infowindow">
            {/* 圖片區域 */}
            <div className="event_image_placeholder">
              {/* 可以根據 marketId 或其他屬性載入對應圖片 */}
            </div>

            {/* 標籤顯示所有 tags */}
            <div className="event_tag">
              # {selectedPoi.allTags ? selectedPoi.allTags.join(' #') : selectedPoi.tag}
            </div>

            {/* 活動資訊 */}
            <div className="event_info">
              <h3 className="event_title">{selectedPoi.eventName}</h3>
              <div className="event_details">
                <p className="event_date">{selectedPoi.date}</p>
                <p className="event_time">{selectedPoi.time}</p>
                <p className="event_venue">{selectedPoi.venue}</p>
                {selectedPoi.description && (
                  <p className="event_description">{selectedPoi.description}</p>
                )}
                <p className="event_location">{selectedPoi.city} {selectedPoi.district}</p>
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

const Map_api = ({ selectedMarkets = null, onMarkerClick = null }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const mapRef = useRef(null);

  // 根據傳入的 selectedMarkets 或使用全部市集資料
  const markets = selectedMarkets || marketsData;
  const locations = createLocationsFromMarkets(markets);

  // 取得目前位置的函數
  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError('您的瀏覽器不支援地理位置服務');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setCurrentLocation(pos);
        setLocationError(null);
        setShowLocationInfo(true);

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
            {/* 市集標記 */}
            <ReactAdvancedMarkers
              pois={locations}
              onMarkerClick={onMarkerClick}
            />

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

export default Map_api;