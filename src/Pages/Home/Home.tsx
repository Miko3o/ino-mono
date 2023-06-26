import './Home.scss';

import { useState } from 'react'
import { TextSendBar } from '../../UI/TextSendBar/TextSendBar';


export const Home = () => {
    const [senderMessage, setSenderMessage] = useState('')
    const [recipientMessage, setRecipientMessage] = useState('')
    const message = (textInput: string, senderTextReturn: boolean) => {
        senderTextReturn ? setSenderMessage(textInput) : setRecipientMessage(textInput)
    }
    return(
        <>
            <div className="page-home-wrapper">
                <h1>
                    sender: {senderMessage}
                </h1>
                <h1>
                    recipient: {recipientMessage}
                </h1>
                <div className="sender-wrapper">
                    Sender:
                    <TextSendBar 
                        message={message}
                        senderText={true}
                    />
                </div>
                <div className="recipient-wrapper">
                    Recipient:
                    <TextSendBar
                        message={message}
                        senderText={false}
                    />
                </div>
            </div>
        </>
    )
}