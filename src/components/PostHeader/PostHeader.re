
type tweet = {
  .
  userName: string,
  userSlug: string,
  dateTime: string,
  postContent: string,
  profileUrl: string
};

[@react.component]
let make = () => {
  let (post, setPost) = React.useState(() => "");

  let sendTweet = (postContent) => {

    let newTweet: tweet = {
      pub userName = "Tulio Calil";
      pub userSlug = "tuliocalil";
      pub dateTime = "2020-05-26 16:66:33";
      pub postContent = postContent;
      pub profileUrl = "https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg";
    };

    Js.log(newTweet#postContent);
  };

  // We can use a fragment here, but we don't, because we want to style the counter
  <div className="postHeader">
    <div className="postHeader__title">
      <h3>{React.string("Pagina Inicial")}</h3>
    </div>
    <div className="postHeader__content row">
      <img className="postHeader__profile" src="https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg" />
      <input className="postHeader__input" placeholder="O que esta acontecendo ?" type_="text" value={post} onChange={
        event => {
          let value = ReactEvent.Form.target(event)##value;
          setPost(_ => value)
        }
      }/>
    </div>
    <div className="postHeader__footer">
      <button onClick={_event => sendTweet(post)}>
        {React.string("Tweetar")}
      </button>
    </div>
  </div>;
};
