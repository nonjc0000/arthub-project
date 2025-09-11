import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';

const Api_test = () => {
  return (
    <div>Api_test

      <APIProvider apiKey={'AIzaSyB4_IDwgsNFfIzHU9vlKDlvv6yrNB93SsQ'} onLoad={() => console.log('Maps API has loaded.')}>

        <Map
          defaultZoom={13}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
        </Map>

      </APIProvider>
    </div>
  )
}

export default Api_test