import type { Coordinate } from "../../api/coordinates"
import styles from "./SidePanel.module.css"
import { SidePanelList } from "./SidePanelList"
import { SidePanelDetails } from "./SidePanelDetails"

interface Props {
  coordinates: Coordinate[]
  selectedCoordinate: Coordinate | null
  isLoading: boolean
  isError: boolean
  onSelect: (id: number) => void
  onCreateClick: () => void
}

export const SidePanel = ({
  coordinates,
  selectedCoordinate,
  isLoading,
  isError,
  onSelect,
  onCreateClick
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Failed to load data</div>}

      <SidePanelList
        coordinates={coordinates}
        onSelect={onSelect}
        onCreateClick={onCreateClick}
      />

      <SidePanelDetails coordinate={selectedCoordinate} />
    </div>
  )
}