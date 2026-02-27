import { Marker, Popup, Polyline } from "react-leaflet"
import { useMapFitBounds } from "../../hooks/useMapFitBounds"
import { type LatLngTuple } from "leaflet"
import type { Coordinate } from "../../api/coordinates"

interface Props {
  coordinates: Coordinate[]
  selectedId: number | null
  onSelectMarker: (id: number) => void
}

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
          eventHandlers={{
            click: () => onSelectMarker(coord.id)
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
    </>
  )
}