export interface ITabProps {
    tab: string[]
    setSelectedTab: (tab: string) => void
    className?: string
    selectTab?: string
    textClassName?: string
}

export enum TabValue {
    AVAILABLE_GAMES = "Available Games",
    COMPLETED_GAMES = "Completed Games"
}