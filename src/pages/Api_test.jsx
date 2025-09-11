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

// 自定義 SVG 標記組件
const CustomSvgMarker = () => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.674" cy="13.7591" r="9.78635" fill="#C76666" stroke="#C76666" strokeWidth="0.932033" />
      <circle cx="13.674" cy="13.759" r="12.5825" stroke="#C76666" strokeWidth="0.932033" fill="none" />
    </svg>
  );
};

// 使用原生 AdvancedMarkerElement 的組件
const NativeAdvancedMarkers = (props) => {
  const map = useMap();
  const [nativeMarkers, setNativeMarkers] = useState([]);

  useEffect(() => {
    if (!map || !window.google) return;

    // 動態載入 marker library
    const loadMarkers = async () => {
      try {
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

        // 清除現有標記
        nativeMarkers.forEach(marker => {
          if (marker.map) {
            marker.map = null;
          }
        });

        // 創建自定義 SVG 元素
        const parser = new DOMParser();
        const pinSvgString = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13.674" cy="13.7591" r="9.78635" fill="#C76666" stroke="#C76666" stroke-width="0.932033"/>
          <circle cx="13.674" cy="13.759" r="12.5825" stroke="#C76666" stroke-width="0.932033" fill="none"/>
        </svg>`;

        // 創建新標記
        const newMarkers = props.pois.map((poi) => {
          const pinSvg = parser.parseFromString(pinSvgString, 'image/svg+xml').documentElement;

          const marker = new AdvancedMarkerElement({
            map: map,
            position: poi.location,
            content: pinSvg,
            title: poi.key
          });

          // 添加點擊事件
          marker.addListener('click', () => {
            console.log(`Clicked on: ${poi.key}`);
            map.panTo(poi.location);
            map.setZoom(16);
          });

          return marker;
        });

        setNativeMarkers(newMarkers);

      } catch (error) {
        console.error('Error loading markers:', error);
      }
    };

    loadMarkers();

    // 清理函數
    return () => {
      nativeMarkers.forEach(marker => {
        if (marker.map) {
          marker.map = null;
        }
      });
    };
  }, [map, props.pois]);

  // 這個組件不渲染任何 JSX，因為標記是直接添加到地圖上的
  return null;
};

// 使用 React Google Maps 的 AdvancedMarker 組件（推薦）
const ReactAdvancedMarkers = (props) => {
  const map = useMap();

  const handleClick = (poi) => {
    if (!map) return;
    console.log(`Clicked on: ${poi.key}`);
    map.panTo(poi.location);
    map.setZoom(16);
  };

  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          clickable={true}
          onClick={() => handleClick(poi)}
        >
          {/* 使用自定義 SVG */}
          <CustomSvgMarker />
        </AdvancedMarker>
      ))}
    </>
  );
};

// 標記叢集組件（使用 React 版本）
const PoiMarkersWithCluster = (props) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

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

  const handleClick = (poi) => {
    if (!map) return;
    console.log(`Clicked on: ${poi.key}`);
    map.panTo(poi.location);
    map.setZoom(16);
  };

  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => setMarkerRef(marker, poi.key)}
          clickable={true}
          onClick={() => handleClick(poi)}
        >
          <CustomSvgMarker />
        </AdvancedMarker>
      ))}
    </>
  );
};

// 顯示目前位置
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap;

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
            <ReactAdvancedMarkers pois={locations} />
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}

export default Api_test