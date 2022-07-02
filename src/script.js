console.log("Hello World")

const element = <h1 className="greeting">Hello world!</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);


const Temperature = (props) => {
  return <h1>The current temperature is {props.degree} {props.unit}</h1>;
};

const element2 = <Temperature degree={25} unit={'celsius'}/>;

ReactDOM.render(
  element2,
  document.getElementById('root2')
);