interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string | null
}

export interface Coordinate {
  id: string
  name: string
  latitude: number
  longitude: number
  createdAt: string
}

export const getCoordinates = async (): Promise<Coordinate[]> => {
  const res = await fetch("http://localhost:5226/api/Coordinates")

  if (!res.ok) {
    throw new Error("Failed to fetch coordinates")
  }

  const json: ApiResponse<Coordinate[]> = await res.json()

  return json.data
}