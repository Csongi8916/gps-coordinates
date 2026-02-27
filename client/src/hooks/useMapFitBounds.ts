import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { LatLngBounds, type LatLngTuple } from "leaflet"

export const useMapFitBounds = (positions: LatLngTuple[]) => {
  const map = useMap()

  useEffect(() => {
    if (!positions.length) return

    const bounds = new LatLngBounds(positions)

    map.fitBounds(bounds, {
      padding: [50, 50]
    })
  }, [positions, map])
}