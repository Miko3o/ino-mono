import './Home.scss';

import { useState } from 'react'
import { TextSendBar } from '../../UI/TextSendBar/TextSendBar';
import { TextBubble } from '../../UI/TextBubble/TextBubble';


export const Home = () => {
    const [senderMessage, setSenderMessage] = useState('')
    const [recipientMessage, setRecipientMessage] = useState('')

    const [textsInConversation, setTextsInConversation] = useState([])

    const loadConversation = () => {
        textsInConversation.map((text, senderTextReturn) => {
            console.log(text[0])
            console.log(text[1])
            return <TextBubble text={text[0]}/>
        })
    }


    const message = (textInput: string, senderTextReturn: boolean) => {
        const tempTextsInConversation: any = textsInConversation
        tempTextsInConversation.push([textInput, senderTextReturn])
        setTextsInConversation(tempTextsInConversation)
        console.log(textsInConversation)
    }
    return(
        <>
            <div className="page-home-wrapper">
                
                <div className='input-boxes-wrapper'>
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
                <div className='chat-wrapper'>
                    <div className='chat-window'>
                        <h1>
                            hi
                            {loadConversation}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}