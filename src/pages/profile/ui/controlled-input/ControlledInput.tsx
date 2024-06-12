import React from 'react';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { ControlledInputProps } from './conrolled_input.types'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import './controlled_input.css'

const ControlledInput = <T,>({label, value, error, disableEdit, setValue, parseValue, convertToString, onSave, children} : ControlledInputProps<T>) => {
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
        console.log('fgafaf')
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
        <tr className='controlled__input__row'>
            <td className='controlled__input__column__width'>
                <div className="controlled__input__label__wrapper">
                    <label className="label">{label}</label>
                </div>
            </td>
            <td>
                <div className="controlled__input controlled__input__margin__left" onBlur={handleBlur}>
                    {React.cloneElement(children as ReactElement, {
                        ...children.props,
                        ref: inputRef,
                        onChange: handleChange,
                        className: 'value',
                        readOnly: !editMode,
                        value: convertToString(value),
                    })}

                </div>
            </td>
            <td>
                { editMode ? (
                        <div className="controlled__input__actions">
                            <button type="button" className="controlled__input__action button__wrapper" onClick={handleCancelClick}>
                                <CloseIcon onMouseDown = {(e) => e.preventDefault()}/>
                            </button>
                            <button type="button" className="controlled__input__action button__wrapper" onClick={handleSaveClick}>
                                <CheckIcon onMouseDown = {(e) => e.preventDefault()}/>
                            </button>
                        </div>
                        ) 
                        : 
                        (
                        <div className="controlled__input__actions">
                            <button type="button" className={`controlled__input__action button__wrapper ${disableEdit ? 'controlled__input__edit__button__disabled' : ''}`} disabled={disableEdit} onClick={handleEditClick}>
                                <EditIcon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
                            </button>
                        </div>
                        )
                }
            </td>
        </tr>
    )
}

export default ControlledInput