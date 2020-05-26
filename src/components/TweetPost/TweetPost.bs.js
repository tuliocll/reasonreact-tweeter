'use strict';

var React = require("react");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");

function TweetPost(Props) {
  var post = Props.post;
  return React.createElement("div", {
              className: "post row"
            }, React.createElement("div", {
                  className: "col"
                }, React.createElement("div", {
                      className: "post__image"
                    }, React.createElement("img", {
                          className: "postHeader__profile",
                          src: "https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg"
                        }))), React.createElement("div", {
                  className: "col"
                }, React.createElement("div", {
                      className: "post__user__info row"
                    }, React.createElement("h3", undefined, Caml_oo_curry.js1(197440054, 1, post)), React.createElement("p", undefined, Caml_oo_curry.js1(253436694, 2, post)), React.createElement("p", undefined, Caml_oo_curry.js1(-636813989, 3, post))), React.createElement("div", {
                      className: "post__content"
                    }, React.createElement("p", undefined, Caml_oo_curry.js1(-709919559, 4, post)))));
}

var make = TweetPost;

exports.make = make;
/* react Not a pure module */
