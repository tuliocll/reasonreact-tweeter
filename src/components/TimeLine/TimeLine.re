[@react.component]
let make = () => {
  

  // We can use a fragment here, but we don't, because we want to style the counter
  <div className="post row">
  <div className="col">
    <div className="post__image">
      <img className="postHeader__profile" src="https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg" />
    </div>
  </div>
  <div className="col">
    <div className="post__user__info row">
      <h3>{React.string("Tulio Calil")}</h3>
      <p>{React.string("@tuliocalil")}</p>
      <p>{React.string("2 min")}</p>
    </div>
    <div className="post__content">
      <p>{React.string("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's")}</p>
    </div>
  </div>
  </div>;
};
