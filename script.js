console.log("Hello World");

var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello world!"
);

ReactDOM.render(element, document.getElementById('root'));

var Temperature = function Temperature(props) {
  return React.createElement(
    "h1",
    null,
    "The current temperature is ",
    props.degree,
    " ",
    props.unit
  );
};

var element2 = React.createElement(Temperature, { degree: 25, unit: 'celsius' });

ReactDOM.render(element2, document.getElementById('root2'));