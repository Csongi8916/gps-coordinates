import { createCoordinate, deleteCoordinate, editCoordinate, type Coordinate, type CoordinateMutation } from "../../api/coordinates"
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

  const editMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: CoordinateMutation }) =>
      editCoordinate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coordinates"] })
      setMode("details")
    }
  })

  const checkCoordinate = () => {
    if (!selectedCoordinate) {
      alert("Nincs kiválasztott koordináta!")
      return
    }
  }

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

      {["create", "edit"].includes(mode) ? (
        <SidePanelForm
          onSubmit={(data) => {
            mode === "create"
              ? createMutation.mutate(data)
              : editMutation.mutate({
                  id: selectedCoordinate!.id,
                  data: data
                })
          }}
          onCancel={() => setMode("details")}
          mode={mode}
          coordinate={
            mode === 'edit'
            ? selectedCoordinate
            : null
          }
        />
      ) : (
        <SidePanelDetails
          coordinate={selectedCoordinate}
          onEditClick={() => {
            checkCoordinate()
            setMode("edit")
          }}
          onDeleteClick={() => {
            checkCoordinate()
            setMode("details")
            deleteMutation.mutate(selectedCoordinate!.id)
          }}
        />
      )}
    </div>
  )
}