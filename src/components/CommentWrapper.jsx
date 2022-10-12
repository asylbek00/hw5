import "./CommentWrapper.css"

export function CommentWrapper(props){
    const classes = props.className + ' wrapper'  
    return(
        <div className={classes}>{props.children}</div>
    )
}