import React from "react";
import { Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

export default function ContactUs() {

  const markerPosition = { lat: 44.200368110177195, lng: -72.50553781664827 } 

    return (
      <div id="contact" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] bg-white items-center bg-opacity-95 shadow-xl rounded-xl w-full p-10 lg:p-16">
        
        <h2 className="col-span-2 text-3xl font-semibold text-center mb-6 text-stone-700">
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
                    style={{width: '30vw', height: '50vh'}}
                    center={markerPosition}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={'DEMO_MAP_ID'}
              >

              <InfoWindow position={{lat:44.201583365429315, lng:-72.50557000312092}} >
                    <div className="p-2">
                        <p>306 North Main Street</p>
                        <p>Barre, VT</p>
                        <a href="https://www.google.com/maps/place/China+Town/@44.2001297,-72.5081449,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb506dc7653546f:0xfe36263aab541e56!8m2!3d44.2001297!4d-72.50557!16s%2Fg%2F1td1jlkn?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 underline block mt-2">
                            Get Directions
                        </a>
                    </div>
              </InfoWindow>

              <AdvancedMarker position={markerPosition} />
            </Map>

          </div>
      
        </div>

      </div>
    );
  }
  
