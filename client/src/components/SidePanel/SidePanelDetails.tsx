import type { Coordinate } from "../../api/coordinates"
import styles from "./SidePanelDetails.module.css"

interface Props {
  coordinate: Coordinate | null
}

export const SidePanelDetails = ({ coordinate }: Props) => {
  if (!coordinate) return null

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>Részletek</div>

      <div className={styles.detailGrid}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Név</span>
          <span className={styles.detailValue}>
            {coordinate.name?.trim()
              ? coordinate.name
              : <span className={styles.placeholder}>Nincs név</span>}
          </span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Latitude</span>
          <span className={styles.detailValue}>
            {coordinate.latitude.toFixed(4)}
          </span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Longitude</span>
          <span className={styles.detailValue}>
            {coordinate.longitude.toFixed(4)}
          </span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Rendezési Index</span>
          <span className={styles.detailValue}>
            {coordinate.orderIndex}
          </span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Leírás</span>
          <span className={styles.detailValue}>
            {coordinate.description?.trim()
              ? coordinate.description
              : <span className={styles.placeholder}>Nincs leírás</span>}
          </span>
        </div>
      </div>
    </div>
  )
}