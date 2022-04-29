import { useContext } from 'react';
import { NoteContext } from './../pages/index'


const Note = () => {

    const noteContext = useContext(NoteContext);
    const { noteList ,  setNoteList } = noteContext;
    
    const deleteNote = noteId => {
        const deleteNote = noteList.notes.filter(note => note.id !== noteId)
        console.log(deleteNote);
        setNoteList({notes : deleteNote});

        localStorage.setItem('notes' , JSON.stringify([deleteNote]))
    }
    const textAdd = (e , noteId) => {
        const myNote = noteList.notes.find(note => note.id === noteId)
        myNote.noteText = e.target.value;
    }

    return ( 
        <div className="w-full lg:w-3/4 flex flex-row flex-wrap justify-around">
            {   
                noteList.notes.map(note => 
                    <div className="note w-1/3 mb-24 relative" key={note.id}>
                        <textarea name="note" onChange={e => textAdd(e , note.id)} defaultValue={note.noteText} spellCheck="false"></textarea>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteNote(note.id)} className="h-10 w-10 absolute top-3 right-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
            }
        </div >
     );
}
 
export default Note;