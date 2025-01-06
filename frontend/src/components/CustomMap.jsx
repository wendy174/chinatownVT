import React, { useState } from "react";
import { Map } from "@vis.gl/react-google-maps";

export default function CustomMap() {
    // shows marker on London by default
    const [markerLocation, setMarkerLocation] = useState({
      lat: 51.509865,
      lng: -0.118092,
    });
  
    return (
      <div className="map-container">
        <Map
              style={{width: '50vw', height: '50vh'}}
              defaultCenter={{lat: 22.54992, lng: 0}}
              defaultZoom={3}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
        >
        </Map>
      </div>
    );
  }
  
