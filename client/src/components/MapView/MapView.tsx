import { MapContainer, TileLayer } from "react-leaflet"
import { MapContent } from "./MapContent"
import styles from "./MapView.module.css"

export const MapView = () => {
  return (
    <MapContainer className={styles.wrapper}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapContent />
    </MapContainer>
  )
}