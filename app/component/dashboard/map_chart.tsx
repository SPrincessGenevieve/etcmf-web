"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useState } from "react";

// Fix marker icons issue
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Mapchart() {
  const [position, setPosition] = useState<LatLngExpression>([
    8.4542, 124.6319,
  ]);

  return (
    <div className="h-full w-full flex justify-center items-center relative min-h-[300px] bg-white p-4 rounded-2xl">
      <MapContainer
        center={position}
        zoom={12}
        style={{ height: "90%", width: "90%", zIndex: 1, position: "absolute" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Cagayan de Oro!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
