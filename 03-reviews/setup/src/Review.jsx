import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () =>
    setIndex((prevState) =>
      prevState > 0 ? prevState - 1 : people.length - 1
    );

  const nextPerson = () =>
    setIndex((prevState) =>
      prevState < people.length - 1 ? prevState + 1 : 0
    );

  const randomPerson = () => {
    const randomIndexGenerator = () =>
      Math.floor(Math.random() * people.length);

    const setRandomIndex = () => {
      const randomIndex = randomIndexGenerator();
      if (randomIndex === index) {
        setRandomIndex();
      } else {
        setIndex(randomIndex);
      }
    };

    setRandomIndex();
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
