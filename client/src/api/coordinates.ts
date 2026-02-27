interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string | null
}

export interface Coordinate {
  id: number
  name?: string
  latitude: number
  longitude: number
  orderIndex: number
  description?: string
}

export interface CoordinateMutation {
  name?: string
  latitude: number
  longitude: number
  orderIndex: number
  description?: string
}

export const getCoordinates = async (): Promise<Coordinate[]> => {
  const response = await fetch("http://localhost:5226/api/coordinates")

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates")
  }

  const json: ApiResponse<Coordinate[]> = await response.json()

  if (!json.success || !json.data) {
    throw new Error(json.error ?? "Failed to fetch coordinates")
  }

  return json.data
}

export const createCoordinate = async (
  data: CoordinateMutation
) => {
  const response = await fetch("http://localhost:5226/api/coordinates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error("Failed to create coordinate")
  }

  return response.json()
}

export const deleteCoordinate = async (id: number) => {
  await fetch(`http://localhost:5226/api/coordinates/${id}`, {
    method: "DELETE"
  })
}
