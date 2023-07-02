import './RecipientBubble.scss'

type RecipientBubbleProps = {
    textInput: string;
}


export const RecipientBubble = (props: RecipientBubbleProps) => {

    return(
        <div className='recipient-bubble'>
            {props.textInput}
        </div>
    )
}