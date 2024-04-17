import './SenderBubble.scss'

type SenderBubbleProps = {
    textInput: string;
}


export const SenderBubble = (props: SenderBubbleProps) => {

    return(
        <div className="sender-bubble">
            hi
            {props.textInput}
        </div>
    )
}