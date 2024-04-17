import './TextBubble.scss'

type TextBubbleProps = {
    text: string;
}


export const TextBubble = (props: TextBubbleProps) => {

    return(
        <div className="text-bubble">
            {props.text}
        </div>
    )
}