import React, { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function CustomMap() {
  // 44.20030657759968, -72.5055592743199

  
    return (
      <div className="map-container">
        <h1>Contact Us</h1>
        <h1>Mon. - Thurs.  11:00 a.m - 10:00 p.m</h1>
        <h1>Fri. - Sat.    11:00 a.m - 11:00 p.m</h1>
        <h1>Sunday         12:00 p.m - 10:00 p.m</h1>
        <h1>☎️ 802-479-1999 or 802479-5243</h1>
        <h1>302 North Main Street, STE 1 </h1>
        <h1>Barre, VT 05641</h1>
        <Map
              style={{width: '50vw', height: '50vh'}}
              defaultCenter={{lat: 44.20, lng: -72.50}}
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId={'DEMO_MAP_ID'}
        >
          <AdvancedMarker position={{lat: 44.20030657759968,lng: -72.5055592743199 }} />
        </Map>
      </div>
    );
  }
  
