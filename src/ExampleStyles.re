let reasonReactBlue = "#48a9dc";

// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  *{
    padding: 0px;
    margin: 0px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  }
  input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
  body {
    background-color: #fff;
  }
  .app {
    display: flex;
  }
  .red {
    height: 200px;
    background-color: red;
  }
  .green {
    height: 200px;
    background-color: green;
  }
  .col{
    display: flex;
    flex-direction: column;
  }
  .col-3 {
    display: flex;
    flex-direction: column;
    width: 24.99%;
  }
  .col-4 {
    display: flex;
    flex-direction: column;
    width: 33.32%;
  }
  .col-5 {
    display: flex;
    flex-direction: column;
    width: 41.65%;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .border-right {
    border-right: 1px solid #ccc;
  }
  .border-left {
    border-left: 1px solid #ccc;
  }
  button {
    background-color: rgba(29,161,242,1.00);
    color: #fff;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 8px 17px;
  }
  .postHeader {
    margin-bottom: 20px;
  }
  .postHeader__title {
    padding: 10px;
    border: 1px solid #ccc;
    border-right: none;
    border-left: none;
  }
  .postHeader__title > h3 {
    font-weight: bold;
    line-height: 1.3125;

  }
  .postHeader__content {
    padding: 10px;
  }
  .postHeader__profile {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .postHeader__input {
    width: 100%;
    margin: 10px;
    border: none;
    font-size: 1.05rem;
  }
  .postHeader__footer {
    display:flex;
    justify-content: flex-end;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .post {
    padding: 5px;
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
  }
  .post__image {

  }
  .post__user__info {
    padding: 5px;
  }
  .post__user__info > h3 {
    font-size: 0.95rem;
  }
  .post__user__info > p {
    font-size: 0.94rem;
    color: rgba(0,0,0,0.5);
    margin: 0px 0.5rem;
  }
  .post__content {
    padding: 5px;
  }
|j};
