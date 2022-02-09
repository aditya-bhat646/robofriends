import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <>
      {robots.map((robot, index) => {
        return (
          <Card
            key={robot.name}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </>
  );
}
