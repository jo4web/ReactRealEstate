import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginBottom: '30px'
};

function Maps({ center, zoom }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "xxxxxx"
  })

  const [map, setMap] = React.useState(null)
  const [updateZoom, setUpdateZoom] = useState(false)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(()=> {
    setTimeout(() => {
      setUpdateZoom(true)
    }, 1000)
  }, [])


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={updateZoom ? 16 : zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      <Marker
        position={center}
      />  
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)