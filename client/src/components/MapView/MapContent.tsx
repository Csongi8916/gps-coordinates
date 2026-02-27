import { Marker, Popup, Polyline } from "react-leaflet"
import { useCoordinates } from "../../hooks/useCoordinates"
import { useMapFitBounds } from "../../hooks/useMapFitBounds"
import { useState } from "react"
import { type LatLngTuple } from "leaflet"

export const MapContent = () => {
  const { data } = useCoordinates()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const polylinePositions: LatLngTuple[] =
    data?.map(coord => [coord.latitude, coord.longitude]) ?? []

  useMapFitBounds(polylinePositions)

  return (
    <>
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
    </>
  )
}