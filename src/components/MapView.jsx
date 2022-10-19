import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../style.css";
import { LayerMap, LayerMap2, ControlEd } from "./View/LayersControl";

export const MapView = () => {
	const position = [-24.559, -60.403];
	return (
		<MapContainer center={position} zoom={6} scrollWheelZoom={true}>
			<ControlEd />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<LayerMap />
			<LayerMap2 />
		</MapContainer>
	);
};
