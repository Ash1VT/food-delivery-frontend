import { InputHTMLAttributes } from "react";

export type EditableTextFieldProps = {
    label: string
    value: string
} & InputHTMLAttributes<HTMLInputElement>