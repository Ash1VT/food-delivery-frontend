import { FormikErrors } from "formik"

export type CustomTextInputProps = {
    label?: string
    placeholder?: string
    type: "text" | "email" | "password"
    value: string
    error: string | undefined
    setValue: (value: string) => void
}

export type CustomNumberInputProps = {
    label?: string
    placeholder?: string
    value: number
    error: string | undefined
    setValue: (value: number) => void
}

export type CustomPhoneInputProps = {
    label?: string
    placeholder?: string
    value: string
    country: string | number
    countryCodeEditable: boolean
    error: string | undefined
    setValue: (value: string) => void
}

export type CustomDateInputProps = {
    label?: string
    placeholder?: string
    value?: Date
    error: FormikErrors<Date> | undefined
    setValue: (value: Date) => void
}