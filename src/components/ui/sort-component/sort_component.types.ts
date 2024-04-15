export type SortingOption = {
    label: string
    value: string
}
  
export type SortComponentProps = {
    options: SortingOption[]
    onSort: (sortOption: string) => Promise<void>
}