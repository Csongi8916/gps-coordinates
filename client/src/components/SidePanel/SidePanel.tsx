import styles from "./SidePanel.module.css"

export const SidePanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Coordinates</div>

      <div className={styles.section}>
        Coordinate list will appear here
      </div>

      <div className={styles.section}>
        Detail / Edit panel
      </div>
    </div>
  )
}