import { ReactNode } from 'react';
export interface IModalProps {
    children: ReactNode
    show: boolean
    onClose: () => void;
}