import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createRoot } from "react-dom/client";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  useMap,
  Pin
} from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

// JavaScript JSX 版本 - 移除所有類型註解
// POI (point of interest) array
const locations = [
  { key: '臺北市立美術館', location: { lat: 25.073710223497176, lng: 121.52920746197447 } },
  { key: '臺北松山機場', location: { lat: 25.068734615867825, lng: 121.54912018214841 } },
  { key: '大佳河濱公園', location: { lat: 25.075468275103084, lng: 121.543288188925 } },
];

const PoiMarkers = (props) => {
  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

// 標記叢集 (Marker Cluster) 設定
// 取得useMap Hook
const map = useMap();

// 建立儲存在狀態變數中的標記清單
const [markers, setMarkers] = useState < { [key: string]: Marker } > ({});

// 將叢集器儲存為參照
const clusterer = useRef < MarkerClusterer | null > (null);

// 同樣在 PoiMarkers 元件中，建立 MarkerClusterer 的例項，並將標記叢集要顯示的 Map 例項傳遞給該例項：
useEffect(() => {
  if (!map) return;
  if (!clusterer.current) {
    clusterer.current = new MarkerClusterer({ map });
  }
}, [map]);

// 建立效果，在標記清單變更時更新叢集
useEffect(() => {
  clusterer.current?.clearMarkers();
  clusterer.current?.addMarkers(Object.values(markers));
}, [markers]);

// 建立函式，為新標記鑄造參照
const setMarkerRef = (marker: Marker | null, key: string) => {
  if (marker && markers[key]) return;
  if (!marker && !markers[key]) return;

  setMarkers(prev => {
    if (marker) {
      return { ...prev, [key]: marker };
    } else {
      const newMarkers = { ...prev };
      delete newMarkers[key];
      return newMarkers;
    }
  });
};

const Api_test = () => {
  return (
    <div>
      <h2>Api_test</h2>
      <div style={{ height: '80vh', width: '100%' }}>
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
          >
            <AdvancedMarker
              key={poi.key}
              position={poi.location}
              ref={marker => setMarkerRef(marker, poi.key)}
            >
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}

export default Api_test