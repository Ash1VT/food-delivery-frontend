export type ControlledTextInputProps = {
    label: string
    value: string
    onSave: (value: string) => Promise<void>
}