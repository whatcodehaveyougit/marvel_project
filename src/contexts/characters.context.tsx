import { createContext, useEffect, useState, Dispatch, SetStateAction } from "react"
import { Character } from "../types/types"
import { fetchData } from '../utils/utils'

interface ICharacterContext {
  charactersData: Character[],
  setCharactersData: Dispatch<SetStateAction<Character[]>>,
}

export const CharactersContext = createContext<ICharacterContext>({
  charactersData: [{} as Character],
  setCharactersData: () => { }
})

export const CharactersProvider = ({ children }: any) => {
  const [charactersData, setCharactersData] = useState<Character[]>([])


  useEffect(() => {
    const fetchPageData = async () => {
      const result = await fetchData<Character[]>('/characters')
      setCharactersData(result['data']['results']);
    }
    fetchPageData()
      .catch(console.error)
  }, [])


  // This is where things are added to the context
  const value: ICharacterContext = {
    charactersData,
    setCharactersData
  }

  return (
    <CharactersContext.Provider value={value}>{children}</CharactersContext.Provider>
  )
}