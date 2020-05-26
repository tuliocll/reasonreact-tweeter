'use strict';

var React = require("react");

function TimeLine(Props) {
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
                    }, React.createElement("h3", undefined, "Tulio Calil"), React.createElement("p", undefined, "@tuliocalil"), React.createElement("p", undefined, "2 min")), React.createElement("div", {
                      className: "post__content"
                    }, React.createElement("p", undefined, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"))));
}

var make = TimeLine;

exports.make = make;
/* react Not a pure module */
