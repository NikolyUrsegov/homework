import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.name)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                name={o}
                type={'radio'}
                value={value}
                checked={value === o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
