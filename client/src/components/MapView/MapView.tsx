import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet"
import { useCoordinates } from "../../hooks/useCoordinates"
import { useEffect, useState } from "react"
import styles from "./MapView.module.css"
import { LatLngBounds, type LatLngTuple } from "leaflet"

interface BoundsProps {
  positions: LatLngTuple[]
}

const MapBoundsController = ({ positions }: BoundsProps) => {
  const map = useMap()

  useEffect(() => {
    if (!positions.length) return
    const bounds = new LatLngBounds(positions)
    map.fitBounds(bounds, {
      padding: [50, 50]
    })
  }, [positions, map])

  return null
}

export const MapView = () => {
  const { data } = useCoordinates()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const polylinePositions: LatLngTuple[] =
    data?.map(coord => [coord.latitude, coord.longitude]) ?? []

  return (
    <MapContainer
      center={[47.4979, 19.0402]}
      zoom={13}
      className={styles.wrapper}
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

      <MapBoundsController positions={polylinePositions} />
    </MapContainer>
  )
}