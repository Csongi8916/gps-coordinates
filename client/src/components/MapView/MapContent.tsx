import { Marker, Popup, Polyline } from "react-leaflet"
import L from "leaflet"
import { useMapFitBounds } from "../../hooks/useMapFitBounds"
import { type LatLngTuple } from "leaflet"
import type { Coordinate } from "../../api/coordinates"

interface Props {
  coordinates: Coordinate[]
  selectedId: number | null
  onSelectMarker: (id: number) => void
}

const defaultIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const selectedIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [35, 55], // nagyobb
  iconAnchor: [17, 55],
})

export const MapContent = ({
  coordinates,
  selectedId,
  onSelectMarker
}: Props) => {
  const polylinePositions: LatLngTuple[] =
    coordinates.map(coord => [
      coord.latitude,
      coord.longitude
    ])

  useMapFitBounds(polylinePositions)

  return (
    <>
      {coordinates.map(coord => (
        <Marker
          key={coord.id}
          position={[coord.latitude, coord.longitude]}
          icon={selectedId === coord.id ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelectMarker(coord.id)
          }}
        >
          <Popup offset={[0, -50]}>
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
    </>
  )
}