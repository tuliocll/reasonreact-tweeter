'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var TweetPost$ReasonReactTweeter = require("../TweetPost/TweetPost.bs.js");

function TimeLine(Props) {
  var posts = Props.posts;
  return React.createElement(React.Fragment, undefined, Belt_Array.map(posts, (function (item) {
                    return React.createElement(TweetPost$ReasonReactTweeter.make, {
                                post: item
                              });
                  })));
}

var make = TimeLine;

exports.make = make;
/* react Not a pure module */
