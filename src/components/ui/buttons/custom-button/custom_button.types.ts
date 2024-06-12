export type CustomButtonProps = {
    label: string
    className?: string
    onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void
}