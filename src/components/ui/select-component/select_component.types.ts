export type SelectOption = {
    label: string
    value: string
}
  
export type OpenSelectButtonProps = {
    openSelectButtonLabel: string
}

export type SelectComponentProps = {
    options: SelectOption[]
    openSelectButtonLabel: string
    selectLabel: string
    selectButtonLabel: string
    onSelect: (selectOption: string) => Promise<void>
}