[@react.component]
let make = () => {
  // We can use a fragment here, but we don't, because we want to style the counter
  <>
  <div className="col-3 border-right">
   
  </div>
  <div className="col-5">
   <PostHeader />
   <TimeLine/>
  </div>
  <div className="col-4 border-left">
   
  </div>
  </>;
};
