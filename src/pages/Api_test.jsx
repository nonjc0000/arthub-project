import React, { useEffect, useState, useRef } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
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

// 標記叢集組件
const PoiMarkersWithCluster = (props) => {
  // 取得 useMap Hook
  const map = useMap();

  // 建立儲存在狀態變數中的標記清單
  const [markers, setMarkers] = useState({});

  // 將叢集器儲存為參照
  const clusterer = useRef(null);

  // 建立 MarkerClusterer 的例項
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
  const setMarkerRef = (marker, key) => {
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

  // POI click互動
  // 建立 click callbackFn
  const handleClick = (ev) => {
    if(!map) return;
    if(!ev.latLng) return;
    console.log('marker clicked:', ev.latLng.toString());
    map.panTo(ev.latLng);
  };

  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => setMarkerRef(marker, poi.key)}
          clickable={true}
          onClick={handleClick}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

// 簡單版本的標記組件 (不使用叢集)
const SimplePoiMarkers = (props) => {
  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

// 更改標記
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
const parser = new DOMParser();
// A marker with a custom inline SVG.
const pinSvgString = <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.674" cy="13.7591" r="9.78635" fill="#C76666" stroke="#C76666" stroke-width="0.932033"/>
<circle cx="13.674" cy="13.759" r="12.5825" stroke="#C76666" stroke-width="0.932033"/>
</svg>;
const pinSvg = parser.parseFromString(pinSvgString, 'image/svg+xml').documentElement;;

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
            {/* 使用簡單版本或叢集版本，您可以選擇其中一個 */}
            {/* <SimplePoiMarkers pois={locations} /> */}
            <PoiMarkersWithCluster pois={locations} />
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}

export default Api_test