export type OptionType = {
    value: string
    label: string
}

export interface ISelectProps {
    handleselect: (value: any) => void,
    value: OptionType;
    option: OptionType[]
}