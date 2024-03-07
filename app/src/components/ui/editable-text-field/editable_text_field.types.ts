import { InputHTMLAttributes } from "react";

export type EditableTextFieldProps = {
    label: string
    value: string
    onSave?: (value: string) => Promise<void>
} & InputHTMLAttributes<HTMLInputElement>