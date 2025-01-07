import React, { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function CustomMap() {

  const markerPosition = { lat: 44.200368110177195, lng: -72.50553781664827 } 

    return (
      <div className="flex justify-center items-center ">
        <div className=" grid grid-cols-1 lg:grid-cols-[1fr,1fr] bg-white items-center bg-opacity-95 shadow-xl rounded-xl max-w-4xl w-full mx-6 lg;mx-12 p-10 lg;p-16">
        
        <h2 className="col-span-2 text-3xl font-semibold text-center mb-6 underline underline-offset-4 text-stone-700">
          Contact Us
        </h2>
          <div className='flex flex-col justify-center items-center text-center lg:items-center space-y-3'>
            <div className='text-lg space-y-2 lg:pl-4'>
              <p>Mon. - Thurs.  11:00 a.m - 10:00 p.m</p>
              <p>Fri. - Sat.    11:00 a.m - 11:00 p.m</p>
              <p>Sunday         12:00 p.m - 10:00 p.m</p>
              <p>☎️ 802-479-1999 or 802-479-5243</p>
              <p>📍 302 North Main Street, STE 1 </p>
              <p>Barre, VT 05641</p>
            </div>
          </div>
       
          <div className='flex justify-center items-center '>
            <Map
                  style={{width: '30vw', height: '30vh'}}
                  center={markerPosition}
                  defaultZoom={15}
                  gestureHandling={'greedy'}
                  disableDefaultUI={true}
                  mapId={'DEMO_MAP_ID'}
            >
              <AdvancedMarker position={markerPosition} />
            </Map>

          </div>
      
        </div>

      </div>
    );
  }
  
