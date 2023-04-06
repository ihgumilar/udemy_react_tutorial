import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Ihshan Gumilar</h2>;
const Message = () => {
  return <p>this is my message bro !</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
