import { getCenter } from 'geolib';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useState } from 'react';
import { Map as LibreMap, Marker, NavigationControl, Popup } from 'react-map-gl';

const Map = ({ results }) => {
    const [selected, setSelected] = useState({});
    const coordinates = results.map((e) => ({
        longitude: e.long,
        latitude: e.lat,
    }));

    const center = getCenter(coordinates);
    const [viewState, setViewState] = useState({
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });
    return (
        <LibreMap
            mapLib={maplibregl}
            style={{ width: '100%', height: '100%' }}
            mapStyle='https://api.maptiler.com/maps/streets/style.json?key=Ge91ErqahQjGiDjn821H'
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
        >
            <NavigationControl position='top-left' />
            {results.map((e) => (
                <div key={e.long}>
                    <Marker longitude={e.long} latitude={e.lat} offsetLeft={-20} offsetTop={-10}>
                        <p
                            className='cursor-pointer text-2xl'
                            role='img'
                            aria-label='push-pin'
                            onClick={() => setSelected(e)}
                        >
                            📌
                        </p>
                    </Marker>

                    {selected.long === e.long ? (
                        <Popup
                            closeOnClick={false}
                            onClose={() => setSelected({})}
                            latitude={e.lat}
                            longitude={e.long}
                        >
                            {e.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </LibreMap>
    );
};

export default Map;
