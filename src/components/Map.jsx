import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ ipInfo }) => {
  return (
    <MapContainer
      key={`${ipInfo.location.lat}${ipInfo.location.lng}`}
      center={[ipInfo.location.lat, ipInfo.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipInfo.location.lat, ipInfo.location.lng]}></Marker>
    </MapContainer>
  );
};

export default Map;
