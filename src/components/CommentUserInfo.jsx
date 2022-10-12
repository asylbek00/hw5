import "./CommentUserInfo.css";

export function CommentUserInfo(props) {
  return (
    <div className="UserInfo">
      <img src={props.img} alt="img" />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}
 