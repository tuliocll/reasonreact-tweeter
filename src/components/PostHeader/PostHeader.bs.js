'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

var class_tables = /* Cons */[
  undefined,
  undefined,
  undefined
];

function PostHeader(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setPost = match[1];
  var post = match[0];
  return React.createElement("div", {
              className: "postHeader"
            }, React.createElement("div", {
                  className: "postHeader__title"
                }, React.createElement("h3", undefined, "Pagina Inicial")), React.createElement("div", {
                  className: "postHeader__content row"
                }, React.createElement("img", {
                      className: "postHeader__profile",
                      src: "https://pbs.twimg.com/profile_images/1261633014989238273/NnilazdA_400x400.jpg"
                    }), React.createElement("input", {
                      className: "postHeader__input",
                      placeholder: "O que esta acontecendo ?",
                      type: "text",
                      value: post,
                      onChange: (function ($$event) {
                          var value = $$event.target.value;
                          return Curry._1(setPost, (function (param) {
                                        return value;
                                      }));
                        })
                    })), React.createElement("div", {
                  className: "postHeader__footer"
                }, React.createElement("button", {
                      onClick: (function (_event) {
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
                                      return self$1[env][0];
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
                          var envs = [post];
                          var newTweet = Curry._1(class_tables[0], envs);
                          console.log(Caml_oo_curry.js1(-709919559, 1, newTweet));
                          
                        })
                    }, "Tweetar")));
}

var make = PostHeader;

exports.make = make;
/* react Not a pure module */
