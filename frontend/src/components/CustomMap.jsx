import React, { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function CustomMap() {

    return (
      <div className="flex justify-center items-center ">
      
        <div className=" grid grid-cols-1 lg:grid-cols-2 bg-white items-center big-opacity-95 shadow-xl rounded-xl max-w-7xl w-full mx-6 lg;mx-12 p-10 lg;p-16">
      
          <div className='flex flex-col justify-center items-center lg:items-start space-y-3'>
            <h1 className="text-4xl font-bold text-center lg:text-left">
              Contact Us
            </h1>
            <div className='text-lg space-y-2 lg:pl-4'>
              <p>Mon. - Thurs.  11:00 a.m - 10:00 p.m</p>
              <p>Fri. - Sat.    11:00 a.m - 11:00 p.m</p>
              <p>Sunday         12:00 p.m - 10:00 p.m</p>
              <p>☎️ 802-479-1999 or 802479-5243</p>
              <p>302 North Main Street, STE 1 </p>
              <p>Barre, VT 05641</p>
            </div>
        
          </div>
       
          <div className='flex justify-center items-center '>
            <Map
                  style={{width: '30vw', height: '30vh'}}
                  defaultCenter={{lat: 44.20, lng: -72.50}}
                  defaultZoom={15}
                  gestureHandling={'greedy'}
                  disableDefaultUI={true}
                  mapId={'DEMO_MAP_ID'}
            >
              <AdvancedMarker position={{lat: 44.20030657759968,lng: -72.5055592743199 }} />
            </Map>

          </div>
      
        </div>

      </div>
    );
  }
  
