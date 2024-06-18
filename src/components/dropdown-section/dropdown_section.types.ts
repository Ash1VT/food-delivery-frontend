export type DropdownSectionProps = {
    title: string
    children: React.ReactNode
}

export type OpenDropdownContentButtonProps = {
    label: string
    isContentOpen: boolean
    onClick: () => void
}