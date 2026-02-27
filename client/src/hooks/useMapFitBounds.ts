import { useEffect, useRef } from "react"
import { useMap } from "react-leaflet"
import { LatLngBounds, type LatLngTuple } from "leaflet"

export const useMapFitBounds = (positions: LatLngTuple[]) => {
  const map = useMap()

  const hasFitRef = useRef(false)

  useEffect(() => {
    if (!positions.length) return
    if (hasFitRef.current) return

    const bounds = new LatLngBounds(positions)

    map.fitBounds(bounds, {
      padding: [150, 150]
    })

    hasFitRef.current = true
  }, [positions, map])
}