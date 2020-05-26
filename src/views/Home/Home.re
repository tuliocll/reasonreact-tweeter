type state = {count: int};

type action =
  | Increment
  | Decrement;

let initialState = {count: 0};

let reducer = (state, action) => {
  switch (action) {
  | Increment => {count: state.count + 1}
  | Decrement => {count: state.count - 1}
  };
};

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);

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
