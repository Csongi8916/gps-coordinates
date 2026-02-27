import type { Coordinate } from "../../api/coordinates"
import styles from "./SidePanel.module.css"

interface Props {
  coordinates: Coordinate[]
  selectedCoordinate: Coordinate | null
  isLoading: boolean
  isError: boolean
  onSelect: (id: number) => void
}

export const SidePanel = ({
  coordinates,
  selectedCoordinate,
  isLoading,
  isError,
  onSelect
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Coordinates</div>

      <div className={styles.section}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Failed to load data</div>}

        {coordinates.map(coord => (
          <div
            key={coord.id}
            className={styles.listItem}
            onClick={() => onSelect(coord.id)}
          >
            {coord.latitude.toFixed(4)}, {coord.longitude.toFixed(4)}
          </div>
        ))}
      </div>

      <div className={styles.section}>
        {selectedCoordinate ? (
          <>
            <div>
              <b>Detail</b>
            </div>

            <div>
              {selectedCoordinate.name}
            </div>

            <div>
              {selectedCoordinate.latitude.toFixed(4)},{" "}
              {selectedCoordinate.longitude.toFixed(4)}
            </div>
          </>
        ) : (
          <div>Detail / Edit panel</div>
        )}
      </div>
    </div>
  )
}