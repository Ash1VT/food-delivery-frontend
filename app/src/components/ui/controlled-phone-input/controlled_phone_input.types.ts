export type ControlledPhoneInputProps = {
    label: string
    value: string
    onSave: (value: string) => Promise<void>
}