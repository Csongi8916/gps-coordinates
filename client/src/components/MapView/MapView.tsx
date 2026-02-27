import { MapContainer, TileLayer } from "react-leaflet"
import { MapContent } from "./MapContent"
import type { Coordinate } from "../../api/coordinates"
import styles from "./MapView.module.css"

interface Props {
  coordinates: Coordinate[]
  selectedId: number | null
  onSelectMarker: (id: number) => void
}

export const MapView = ({ coordinates, selectedId, onSelectMarker }: Props) => {
  return (
    <MapContainer className={styles.wrapper}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapContent
        coordinates={coordinates ?? []}
        selectedId={selectedId}
        onSelectMarker={onSelectMarker}
      />
    </MapContainer>
  )
}