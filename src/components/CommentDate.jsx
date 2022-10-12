import './CommentDate.css'

export function CommentDate(props){
    function formatDate(date) {
        return date?.toLocaleDateString(); //? props келгенин текшерет. датаны стринг кылып алдык
      }

    return(
        <div className="Comment-date">{formatDate(props.date)}</div>
        )
}