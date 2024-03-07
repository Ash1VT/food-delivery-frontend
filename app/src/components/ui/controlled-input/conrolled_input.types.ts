import { ReactElement, ReactNode, RefObject } from "react"

export type ControlledInputProps<T> = {
    label: string
    children: ReactElement<HTMLInputElement>
    value: T
    editingValue: T
    setValue: (value: T) => void
    setEditingValue: (editingValue: T) => void
    onValueSave: (value: T) => Promise<void>
}