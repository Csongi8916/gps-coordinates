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

export const getCoordinates = async (): Promise<Coordinate[]> => {
  const res = await fetch("http://localhost:5226/api/Coordinates")

  if (!res.ok) {
    throw new Error("Failed to fetch coordinates")
  }

  const json: ApiResponse<Coordinate[]> = await res.json()

  if (!json.success || !json.data) {
    throw new Error(json.error ?? "Failed to fetch coordinates")
  }

  return json.data
}