import { Plus } from "lucide-react"
import type { Coordinate } from "../../api/coordinates"
import styles from "./SidePanelList.module.css"

interface Props {
  coordinates: Coordinate[]
  onSelect: (id: number) => void
  onCreateClick: () => void
}

export const SidePanelList = ({
  coordinates,
  onSelect,
  onCreateClick
}: Props) => {
  return (
    <div className={styles.section}>
      <div className={styles.listContainer}>
        {coordinates.map(coord => (
          <div
            key={coord.id}
            className={styles.listItem}
            onClick={() => onSelect(coord.id)}
          >
            {coord.name && <b>{coord.name}</b>}
            <div>
              {coord.latitude.toFixed(4)}, {coord.longitude.toFixed(4)}
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.button}
        onClick={onCreateClick}
      >
        <Plus size={18} />
        Új Koordináta
      </button>
    </div>
  )
}