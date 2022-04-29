import { nanoid } from 'nanoid';
import { useContext } from 'react';
import {NoteContext} from './../pages/index'



const AddNote = () => {
    const noteContext = useContext(NoteContext);
    const { noteList ,  setNoteList } = noteContext;

    const addHandler = () => {
        const note = { id:nanoid() , noteText : '' };
        setNoteList(prevState => {
            localStorage.setItem('notes' , JSON.stringify([...prevState.notes,note]))
            return {
                notes : [
                    ...prevState.notes,
                    note
                ]
            }
            
        }
        )
        console.log(noteList);
    }

    return ( 

        <button className=' bg-gradient-to-bl from-amber-200 to-amber-400  px-10 py-4 w-full mt-8' onClick={addHandler}>
            add note
        </button>
     );
}
 
export default AddNote;
