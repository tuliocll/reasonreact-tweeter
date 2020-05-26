'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Home$ReasonReactTweeter = require("./views/Home/Home.bs.js");
var ExampleStyles$ReasonReactTweeter = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReasonReactTweeter.style;

function makeContainer(text) {
  var content = document.createElement("div");
  content.className = "app";
  document.body.appendChild(content);
  return content;
}

ReactDom.render(React.createElement(Home$ReasonReactTweeter.make, { }), makeContainer(undefined));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
