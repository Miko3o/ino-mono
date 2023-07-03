import './Home.scss';

import { JSXElementConstructor, useState } from 'react'
import { TextSendBar } from '../../UI/TextSendBar/TextSendBar';
import { TextBubble } from '../../UI/TextBubble/TextBubble';


export const Home = () => {

    const [textsInConversation, setTextsInConversation] = useState<any[]>([])

    const loadConversation = () => {
         return (
            textsInConversation.map((text, senderTextReturn) => {
            console.log("text[0]:", text[0]);
            console.log("text[1]:", text[1]);
            return ( <TextBubble text={text[0]}/>
         )}))
    }


    const message = (textInput: string, senderTextReturn: boolean) => {
        const tempTextsInConversation: any = textsInConversation
        tempTextsInConversation.push({messageId: textsInConversation.length, textInput: textInput, senderTextReturn: senderTextReturn})
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
                            {textsInConversation.map((text) =>
                                <li key={text.messageId}>
                                    <TextBubble
                                        text={text.textInput}
                                    />
                                </li>
                                )}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}