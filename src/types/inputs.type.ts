export type BaseInputProps = {
    placeholder: string
    className?: string
}

export type EmailInputProps = {
} & BaseInputProps

export type AddressInputProps = {
    value: string
    setValue: (value: string) => void
} & BaseInputProps