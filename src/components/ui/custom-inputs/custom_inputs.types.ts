import { FormikErrors } from "formik"

export type CustomTextInputProps = {
    label: string
    type: "text" | "email" | "password"
    value: string
    error: string | undefined
    setValue: (value: string) => void
}

export type CustomPhoneInputProps = {
    label: string
    value: string
    country: string | number
    error: string | undefined
    setValue: (value: string) => void
}

export type CustomDateInputProps = {
    label: string
    value: Date
    error: FormikErrors<Date> | undefined
    setValue: (value: Date) => void
}