import { defaultEasing } from "framer-motion";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from "react";

export default function Mapchart() {
    const [position, setPosition] = useState<[number, number]>([8.4542, 124.6319]); // Default to Cagayan de Oro

    return (
        <div className="h-[180px] ">
            <MapContainer center={position as L.LatLngExpression} zoom={12} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Cagayan de Oro!</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

