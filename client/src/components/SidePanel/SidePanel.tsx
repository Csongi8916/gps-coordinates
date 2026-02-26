import { useCoordinates } from "../../hooks/useCoordinates"
import styles from "./SidePanel.module.css"

export const SidePanel = () => {
  const { data, isLoading, isError } = useCoordinates()

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Coordinates</div>

      <div className={styles.section}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Failed to load data</div>}
        {data?.map(coord => (
          <div key={coord.id} className={styles.listItem}>
            {coord.latitude.toFixed(4)}, {coord.longitude.toFixed(4)}
          </div>
        ))}
      </div>

      <div className={styles.section}>
        Detail / Edit panel
      </div>
    </div>
  )
}