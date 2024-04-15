import React from 'react';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { ControlledInputProps } from './conrolled_input.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import './controlled_input.css'

const ControlledInput = <T,>({label, value, error, setValue, parseValue, convertToString, onSave, children} : ControlledInputProps<T>) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [cachedValue, setCachedValue] = useState<T>(value)

    const inputRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if (!editMode) {
    //         inputRef?.current?.blur()
    //         return
    //     }
    //     inputRef?.current?.focus()
    // }, [editMode])
    
    const closeEditMode = () => {
        setValue(cachedValue)
        setEditMode(false)
        inputRef?.current?.blur()
    }

    const openEditMode = () => {
        setEditMode(true)
        inputRef?.current?.focus()
    }

    const handleCancelClick  = () => {
        closeEditMode()
    }
    
    const handleEditClick  = () => {
        openEditMode()
    }
    
    const handleSaveClick = async () => {
        await onSave(value)

        if (!error) {
            setCachedValue(value)
            setEditMode(false)
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        closeEditMode()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseValue(event.target.value))
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
                    ...children.props,
                    ref: inputRef,
                    onChange: handleChange,
                    readOnly: !editMode,
                    value: convertToString(value),
                })}

            </div>
        </div>
    )
}

export default ControlledInput