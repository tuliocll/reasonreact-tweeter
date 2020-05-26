'use strict';

var React = require("react");
var TimeLine$ReasonReactTweeter = require("../../components/TimeLine/TimeLine.bs.js");
var PostHeader$ReasonReactTweeter = require("../../components/PostHeader/PostHeader.bs.js");

function Home(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "col-3 border-right"
                }), React.createElement("div", {
                  className: "col-5"
                }, React.createElement(PostHeader$ReasonReactTweeter.make, { }), React.createElement(TimeLine$ReasonReactTweeter.make, { })), React.createElement("div", {
                  className: "col-4 border-left"
                }));
}

var make = Home;

exports.make = make;
/* react Not a pure module */
