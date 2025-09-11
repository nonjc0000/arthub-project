import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin
} from '@vis.gl/react-google-maps';

// JavaScript JSX 版本 - 移除所有類型註解
const locations = [
  { key: '臺北市立美術館', location: { lat: 25.073710223497176, lng: 121.52920746197447 } }, 
  { key: '臺北松山機場', location: { lat: 25.068734615867825, lng: 121.54912018214841 } }, 
  { key: '大佳河濱公園', location: { lat: 25.075468275103084, lng: 121.543288188925 } },
];

const Api_test = () => {
  return (
    <div>
      <h2>Api_test</h2>
      <div style={{ height: '80vh', width: '100%' }}>
        <APIProvider
          apiKey={'AIzaSyB4_IDwgsNFfIzHU9vlKDlvv6yrNB93SsQ'}
          onLoad={() => console.log('Maps API has loaded.')}
        >
          <Map>
            defaultZoom={14}
            defaultCenter={{ lat: 25.07985171038588, lng: 121.54439949417615 }} // 台北座標
            mapId='7e6d708d8bcc7551d6c210d1'
            style={{ height: '100%', width: '100%' }}
            onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }
            <PoiMarkers pois={locations} />
          </Map>

        </APIProvider>
      </div>
    </div>
  )
}

export default Api_test

const PoiMarkers = (props: {pois: Poi[]}) => {
  return (
    <>
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};