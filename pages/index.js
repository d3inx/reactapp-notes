import react from 'react'
import { useEffect, useState } from 'react'
import AddNote from '../components/AddNote'
import Note from '../components/Note'

export const NoteContext = react.createContext();

export default function Home() {

  const [noteList , setNoteList] = useState({notes : []})

  

  useEffect(() => {
    let localData = localStorage.getItem('notes')
    setNoteList({notes : localData ? JSON.parse(localData) : []})
  },[])

  return (
    <>
      <NoteContext.Provider value={{noteList ,  setNoteList}}>
        <div className="container mx-auto flex flex-wrap flex-row mt-12 space-y-4 lg:space-x-4">
          <div className='w-full my-12 lg:w-1/4'>
            <h1>Sticky Note({noteList.notes.length})</h1>
            <AddNote /> 
          </div>
          <Note />
        </div>
      </NoteContext.Provider>
    </>
  )
}
