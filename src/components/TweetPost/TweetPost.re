type post = {
  userName: string,
  userSlug: string,
  dateTime: string,
  postContent: string,
  profileUrl: string
};

[@react.component]
let make = (~post) => {

  <div className="post row">
  <div className="col">
    <div className="post__image">
      <img className="postHeader__profile" src="https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg" />
    </div>
  </div>
  <div className="col">
    <div className="post__user__info row">
      <h3>{React.string(post#userName)}</h3>
      <p>{React.string(post#userSlug)}</p>
      <p>{React.string(post#dateTime)}</p>
    </div>
    <div className="post__content">
      <p>{React.string(post#postContent)}</p>
    </div>
  </div>
  </div>;
};
