import styles from "./MainLayout.module.css"

interface Props {
  sidebar: React.ReactNode
  map: React.ReactNode
}

export const MainLayout = ({ sidebar, map }: Props) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.map}>{map}</main>
    </div>
  )
}