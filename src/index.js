import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" />
);

const Title = () => <h2>I Love You to the Moon and Back</h2>;
const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
      {" "}
      Amelia Hepworth (Author), Tim Warnes (Illustrator){" "}
    </h4>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
