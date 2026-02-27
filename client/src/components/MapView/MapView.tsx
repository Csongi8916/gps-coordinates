import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import { useCoordinates } from "../../hooks/useCoordinates"
import { useState } from "react"
import styles from "./MapView.module.css"
import type { LatLngTuple } from "leaflet"

export const MapView = () => {
  const { data } = useCoordinates()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const polylinePositions: LatLngTuple[] =
    data?.map(coord => [coord.latitude, coord.longitude]) ?? []

  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={[47.4979, 19.0402]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data?.map(coord => (
          <Marker
            key={coord.id}
            position={[coord.latitude, coord.longitude]}
              eventHandlers={{
                click: () => setSelectedId(coord.id)
              }}
          >
            <Popup>
              <b>{coord.name}</b>
              {selectedId === coord.id && <div>Selected</div>}
            </Popup>
          </Marker>
        ))}
        {polylinePositions.length > 1 && (
          <Polyline
            positions={polylinePositions}
            pathOptions={{ color: "red", weight: 4 }}
          />
        )}
      </MapContainer>
    </div>
  )
}