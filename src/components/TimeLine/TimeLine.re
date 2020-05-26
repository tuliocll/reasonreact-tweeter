type item = {
  userName: string,
  userSlug: string,
  dateTime: string,
  postContent: string,
  profileUrl: string
};

[@react.component]
let make = (~posts) => {

  <>
  {
    posts->Belt.Array.map(item => 
    <TweetPost post={item} />
    )->React.array
  }
  </>
};