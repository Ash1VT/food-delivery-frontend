export type ControlledDateInputProps = {
    label: string
    value: Date
    onSave: (value: Date) => Promise<void>
}