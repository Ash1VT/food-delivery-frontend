import { ReactElement, useEffect, useRef, useState } from 'react';
import { ControlledInputProps } from './conrolled_input.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import './controlled_input.css'
import React from 'react';

const ControlledInput = <T,>({label, value, setValue, editingValue, setEditingValue, onValueSave, children} : ControlledInputProps<T>) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const inputRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!editMode) {
            inputRef?.current?.blur()
            return
        }
        inputRef?.current?.focus()
    }, [editMode])
    
    const closeEditMode = () => {
        setEditingValue(value)
        setEditMode(false)
    }

    const openEditMode = () => {
        setEditMode(true)
    }

    const handleCancelClick  = () => {
        closeEditMode()
    }
    
    const handleEditClick  = () => {
        openEditMode()
    }
    
    const handleSaveClick = async () => {
        setValue(editingValue)
        await onValueSave(editingValue)
        setEditMode(false)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        closeEditMode()
    }

    return (
        <div className="controlled__input__wrapper">
            <div className="controlled__input__header">
                <label className="label">{label}</label>
                { editMode ? (
                    <div className="controlled__input__header__actions">
                        <button className="controlled__input__header__action button__wrapper" onClick={handleCancelClick}>
                            <CloseIcon onMouseDown = {(e) => e.preventDefault()}/>
                        </button>
                        <button className="controlled__input__header__action button__wrapper" onClick={handleSaveClick}>
                            <CheckIcon onMouseDown = {(e) => e.preventDefault()}/>
                        </button>
                    </div>) 
                    : 
                    (
                    <button className="controlled__input__header__action button__wrapper" onClick={handleEditClick}>
                        <EditIcon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
                    </button>
                    )
                }
            </div>
            <div className="controlled__input" onBlur={handleBlur}>
                {React.cloneElement(children as ReactElement, {
                    ref: inputRef,
                    readOnly: !editMode
                })}
            </div>
        </div>
    )
}

export default ControlledInput