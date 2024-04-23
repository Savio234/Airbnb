export interface Props {
    children?: React.ReactNode
}

export interface MenuItemProps {
    onclick?: () => void
    label?: string
}

export interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit?: () => void
    secondaryAction?: () => void
    children?: React.ReactNode
    className?: string
    disabled?: boolean
    actionLabel?: string
    secondaryLabel?: string
    title?: string
    footer?: React.ReactElement

}