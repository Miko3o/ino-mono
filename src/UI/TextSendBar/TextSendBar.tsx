import { useState } from 'react'
import './TextSendBar.scss';

type TextSendBarProps = {
    message: (textInput: string, senderTextReturn: boolean) => void;
    senderText: boolean;
}

export const TextSendBar = (props: TextSendBarProps) => {
    const {message} = props
    const [textInput, setTextInput] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value)
    }

    const handleOnClick = () => {
        message(textInput, props.senderText)
    }

    return(
        <>
        <div className="ui-searchbar-wrapper">
            <input
                placeholder='Type Here'
                value={textInput}
                onChange = {handleOnChange}
            />
            <button onClick = {handleOnClick}>Send</button>
        </div>
        </>
    )
}