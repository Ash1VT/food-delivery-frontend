import { EditableTextFieldProps } from './editable_text_field.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useRef, useState } from 'react'
import './editable_text_field.css'

const EditableTextField = ({ id, label, value, ...props }: EditableTextFieldProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const [text, setText] = useState<string>(value)
    const [editingText, setEditingText] = useState<string>(value)

    const inputRef = useRef<HTMLInputElement>(null)

    const closeEditMode = () => {
        setEditingText(text)
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingText(event.target.value);
    };


    return (
        <div className="textfield__wrapper">
            <div className="textfield__header">
                <label htmlFor={id}>{label}</label>
                { editMode ? (
                    <div className="textfield__header__actions">
                        <CloseIcon className="textfield__header__action" onClick={closeEditMode}/>
                        <CheckIcon className="textfield__header__action" onClick={onEditHandler}/>
                    </div>) 
                    : 
                    (
                    <EditIcon className="textfield__header__action" fontSize='medium' onClick={openEditMode}/>
                    )
                }
            </div>
            <input id={id} {...props} 
                   readOnly={!editMode} 
                   disabled={!editMode} 
                   ref={inputRef} 
                   value={editingText}
                   onChange={handleInputChange}
                   className="textfield__input" />
        </div>
    )
}

export default EditableTextField