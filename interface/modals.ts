
export interface RegisterModalProps {
    isOpen?: boolean
    onClose: () => void
}

export interface RegisterModalData {
    name?: string
    email?: string
    password?: string
}