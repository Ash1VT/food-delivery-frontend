import { EditableTextFieldProps } from './editable_text_field.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useContext, useEffect, useRef, useState } from 'react'
import './editable_text_field.css'
import { Context } from 'src/context/MyContext';

const EditableTextField = ({ id, label, value, ...props }: EditableTextFieldProps) => {
    const {editMode, setEditMode} = useContext(Context)

    const [text, setText] = useState<string>(value)

    const inputRef = useRef<HTMLInputElement>(null)

    const closeEditMode = () => {
        if (!inputRef.current) return

        inputRef.current.value = text
        setEditMode(false)
    }
    
    const openEditMode = () => {
        setEditMode(true)
    }
    
    const onEditHandler = () => {
        setText((previousText) => inputRef.current?.value || previousText)
        setEditMode(false)
    }

    useEffect(() => {
        if (!editMode) return
        inputRef?.current?.focus()
    }, [editMode])


    return (
        <div className="textfield__wrapper">
            <div className="textfield__header">
                <label htmlFor={id}>{label}</label>
                { editMode ? (
                    <div className="textfield__header__actions">
                        <CloseIcon className="textfield__header__action" onMouseDown = {(e) => e.preventDefault()} onClick={closeEditMode}/>
                        <CheckIcon className="textfield__header__action" onMouseDown = {(e) => e.preventDefault()} onClick={onEditHandler}/>
                    </div>) 
                    : 
                    (
                    <EditIcon className="textfield__header__action" fontSize='medium' onMouseDown = {(e) => e.preventDefault()} onClick={openEditMode}/>
                    )
                }
            </div>
            <input  id={id} {...props}

                   readOnly={!editMode} 
                   disabled={!editMode} 
                   ref={inputRef}
                   defaultValue={text}
                   className="textfield__input edit" />
        </div>
    )
}

export default EditableTextField;