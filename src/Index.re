// Entry point

[@bs.val] external document: Js.t({..}) = "document";

// We're using raw DOM manipulations here, to avoid making you read
// ReasonReact when you might precisely be trying to learn it for the first
// time through the examples later.
let style = document##createElement("style");
document##head##appendChild(style);
style##innerHTML #= ExampleStyles.style;

let makeContainer = text => {
  let content = document##createElement("div");
  content##className #= "app";

  let () = document##body##appendChild(content);

  content;
};

 ReactDOMRe.render(
   <Home />,
   makeContainer(),
 );
