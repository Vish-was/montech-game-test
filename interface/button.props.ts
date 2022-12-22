import React, { ReactNode } from "react";

export interface IButtonProps {
    text: string;
    className?: string;
    icon?: ReactNode
    disabled?: boolean
    handleSubmit: () => void
}