import { createCoordinate, deleteCoordinate, type Coordinate } from "../../api/coordinates"
import styles from "./SidePanel.module.css"
import { SidePanelList } from "./SidePanelList"
import { SidePanelDetails } from "./SidePanelDetails"
import { useState } from "react"
import { SidePanelForm } from "./SidePanelForm"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface Props {
  coordinates: Coordinate[]
  selectedCoordinate: Coordinate | null
  isLoading: boolean
  isError: boolean
  onSelect: (id: number | null) => void
}

export type SidePanelMode = "details" | "create" | "edit" | "delete"

export const SidePanel = ({
  coordinates,
  selectedCoordinate,
  isLoading,
  isError,
  onSelect,
}: Props) => {

const [mode, setMode] = useState<SidePanelMode>("details")
  const queryClient = useQueryClient()

  const createMutation = useMutation({
    mutationFn: createCoordinate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coordinates"] })
      setMode("details")
    }
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCoordinate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coordinates"] })
      setMode("details")
    }
  })

  return (
    <div className={styles.wrapper}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Failed to load data</div>}

      <SidePanelList
        coordinates={coordinates}
        onSelect={onSelect}
        onCreateClick={() => {
          setMode("create")
          onSelect(null)
        }}
      />

      {mode === "create" ? (
        <SidePanelForm
          onSubmit={(data) => createMutation.mutate(data)}
          onCancel={() => setMode("details")}
          mode={mode}
          isLoading={createMutation.isPending}
        />
      ) : (
        <SidePanelDetails
          coordinate={selectedCoordinate}
          onDeleteClick={() => {
            if (!selectedCoordinate) {
              alert("Nincs kiválasztott koordináta!")
              return
            }
            setMode("details")
            deleteMutation.mutate(selectedCoordinate.id)
          }}
        />
      )}
    </div>
  )
}