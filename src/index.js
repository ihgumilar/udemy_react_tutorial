import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
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
  return <h4> Amelia Hepworth (Author), Tim Warnes (Illustrator) </h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
