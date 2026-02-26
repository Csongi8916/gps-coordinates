import { useQuery } from "@tanstack/react-query"
import { getCoordinates } from "../api/coordinates"

export const useCoordinates = () => {
  return useQuery({
    queryKey: ["coordinates"],
    queryFn: getCoordinates,
  })
}