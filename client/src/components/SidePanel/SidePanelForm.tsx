import { useState } from "react"
import styles from "./SidePanelForm.module.css"
import type { Coordinate } from "../../api/coordinates"
import type { SidePanelMode } from "./SidePanel"

interface Props {
  isLoading?: boolean
  mode: SidePanelMode
  onSubmit: (data: Omit<Coordinate, "id">) => void
  onCancel: () => void
}

export const SidePanelForm = ({ mode, onSubmit, onCancel }: Props) => {
  const [name, setName] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [orderIndex, setOrderIndex] = useState(0)
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    onSubmit({
      name,
      latitude: Number(latitude),
      longitude: Number(longitude),
      orderIndex,
      description
    })
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>Új koordináta</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Név"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <div className={styles.row}>
          <input
            className={styles.input}
            placeholder="Latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />

          <input
            className={styles.input}
            placeholder="Longitude"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>

        {mode === "edit" && (
          <input
            className={styles.input}
            type="number"
            placeholder="Rendezési index"
            value={orderIndex}
            onChange={e => setOrderIndex(Number(e.target.value))}
          />
        )}

        <textarea
          className={styles.textarea}
          placeholder="Leírás"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <div className={styles.actions}>
          <button type="button" className={styles.secondaryButton} onClick={onCancel}>
            Mégse
          </button>

          <button type="submit" className={styles.primaryButton}>
            Mentés
          </button>
        </div>
      </form>
    </div>
  )
}