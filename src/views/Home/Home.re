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
  
  let (posts, setPosts) = React.useState(() => [|{
       pub userName = "Tulio Calil";
      pub userSlug = "tuliocalil";
      pub dateTime = "2020-05-26 16:66:33";
      pub postContent = "testando tuiter";
      pub profileUrl = "https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg";
    }|]);
  <>
  <div className="col-3 border-right">
   
  </div>
  <div className="col-5">
   <PostHeader />
   <TimeLine posts={posts} />
  </div>
  <div className="col-4 border-left">
   
  </div>
  </>;
};
