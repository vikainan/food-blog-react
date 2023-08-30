import React from "react";
import "./card.css";

type Props = {
  image: string;
  title: string;
  description: string;
  position: number;
};

export default function Card({ image, title, description, position }: Props) {
  return (
    <div className="card-container">
      <img className="card-img" src={image} />
      <h4>
        {title} - {position}
      </h4>
      <p>{description}</p>
    </div>
  );
}
