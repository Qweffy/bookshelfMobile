import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export const useCheckToken =  () => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    AsyncStorage.getItem('token').then((data) => {
      setToken(data)
    })
    
  },[token])
  return  token
}
