import { Edit, Trash2 } from "lucide-react"
import type { Coordinate } from "../../api/coordinates"
import styles from "./SidePanelDetails.module.css"

interface Props {
  coordinate: Coordinate | null
  onDeleteClick: () => void
  onEditClick: () => void
}

export const SidePanelDetails = ({ coordinate, onEditClick, onDeleteClick }: Props) => {
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
      <div className={styles.buttonRow}>
        <button
          className={`${styles.button} ${styles.editButton}`}
          disabled={!coordinate}
          onClick={onEditClick}
        >
          <Edit size={18} />
          Módosítás
        </button>
        <button
          className={`${styles.button} ${styles.deleteButton}`}
          disabled={!coordinate}
          onClick={onDeleteClick}
        >
          <Trash2  size={18} />
          Törlés
        </button>
      </div>
    </div>
  )
}
