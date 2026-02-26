import { MainLayout } from "./layout/MainLayout"
import { MapView } from "./components/MapView/MapView"
import { SidePanel } from "./components/SidePanel/SidePanel"

function App() {
  return (
    <MainLayout
      sidebar={<SidePanel />}
      map={<MapView />}
    />
  )
}

export default App