'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var TimeLine$ReasonReactTweeter = require("../../components/TimeLine/TimeLine.bs.js");
var PostHeader$ReasonReactTweeter = require("../../components/PostHeader/PostHeader.bs.js");

var class_tables = /* Cons */[
  undefined,
  undefined,
  undefined
];

function Home(Props) {
  var match = React.useState((function () {
          if (!class_tables[0]) {
            var $$class = CamlinternalOO.create_table([
                  "postContent",
                  "dateTime",
                  "profileUrl",
                  "userName",
                  "userSlug"
                ]);
            var env = CamlinternalOO.new_variable($$class, "");
            var ids = CamlinternalOO.get_method_labels($$class, [
                  "userSlug",
                  "userName",
                  "profileUrl",
                  "postContent",
                  "dateTime"
                ]);
            var userSlug = ids[0];
            var userName = ids[1];
            var profileUrl = ids[2];
            var postContent = ids[3];
            var dateTime = ids[4];
            CamlinternalOO.set_methods($$class, [
                  userName,
                  (function (self$1) {
                      return "Tulio Calil";
                    }),
                  userSlug,
                  (function (self$1) {
                      return "tuliocalil";
                    }),
                  dateTime,
                  (function (self$1) {
                      return "2020-05-26 16:66:33";
                    }),
                  postContent,
                  (function (self$1) {
                      return "testando tuiter";
                    }),
                  profileUrl,
                  (function (self$1) {
                      return "https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg";
                    })
                ]);
            var env_init = function (env$1) {
              var self = CamlinternalOO.create_object_opt(undefined, $$class);
              self[env] = env$1;
              return self;
            };
            CamlinternalOO.init_class($$class);
            class_tables[0] = env_init;
          }
          return [Curry._1(class_tables[0], undefined)];
        }));
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "col-3 border-right"
                }), React.createElement("div", {
                  className: "col-5"
                }, React.createElement(PostHeader$ReasonReactTweeter.make, { }), React.createElement(TimeLine$ReasonReactTweeter.make, {
                      posts: match[0]
                    })), React.createElement("div", {
                  className: "col-4 border-left"
                }));
}

var make = Home;

exports.make = make;
/* react Not a pure module */
