import { ReactElement, ReactNode, RefObject } from "react"

export type ControlledInputProps<T> = {
    label: string
    children: ReactElement<HTMLInputElement>
    value: T
    error: string | undefined | null
    parseValue: (value: string) => T
    convertToString: (value: T) => string
    setValue: (value: T) => void
    onSave: (value: T) => Promise<void>
}