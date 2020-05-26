'use strict';

var React = require("react");
var TimeLine$ReasonReactTweeter = require("../../components/TimeLine/TimeLine.bs.js");
var PostHeader$ReasonReactTweeter = require("../../components/PostHeader/PostHeader.bs.js");

var initialState = {
  count: 0
};

function reducer(state, action) {
  if (action) {
    return {
            count: state.count - 1 | 0
          };
  } else {
    return {
            count: state.count + 1 | 0
          };
  }
}

function Home(Props) {
  React.useReducer(reducer, initialState);
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "col-3 border-right"
                }), React.createElement("div", {
                  className: "col-5"
                }, React.createElement(PostHeader$ReasonReactTweeter.make, { }), React.createElement(TimeLine$ReasonReactTweeter.make, { })), React.createElement("div", {
                  className: "col-4 border-left"
                }));
}

var make = Home;

exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
