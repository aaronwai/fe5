const App = () => {
  return React.createElement("div", { style: { color: "red" } }, [
    H1({ name: "john", age: 20, gender: "male" }),
    H1({ name: "peter", age: 20, gender: "male" }),
    H1({ name: "david", age: 20, gender: "male" }),
  ]);
};
const H1 = ({ name, age, gender }) => {
  age = age + 1; // functional part
  return [
    React.createElement("p", null, name),
    React.createElement("p", null, gender),
    React.createElement("p", null, age),
  ]; // jsx part => html
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
