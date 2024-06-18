export type ModalWindowProps = {
    button?: JSX.Element | ((isOpen: boolean) => JSX.Element) | undefined
    children: React.ReactNode
}