import { useState } from "react"
import { MainLayout } from "./layout/MainLayout"
import { MapView } from "./components/MapView/MapView"
import { SidePanel } from "./components/SidePanel/SidePanel"
import { useCoordinates } from "./hooks/useCoordinates"

function App() {
  const { data, isLoading, isError } = useCoordinates()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedCoordinate =
    data?.find(coord => coord.id === selectedId) ?? null

  return (
    <MainLayout
      sidebar={
        <SidePanel
          coordinates={data ?? []}
          selectedCoordinate={selectedCoordinate}
          isLoading={isLoading}
          isError={isError}
          onSelect={setSelectedId}
        />
      }
      map={
        <MapView
          coordinates={data ?? []}
          selectedId={selectedId}
          onSelectMarker={setSelectedId}
        />
      }
    />
  )
}

export default App