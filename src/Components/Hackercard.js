import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hackercard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((curElem) => {
        return (
          <>
            <Link
              to={"hackerpage/" + curElem.id}
              className="text-decoration-none"
              data={data}
            >
              <div className="marg bg-dark">
                <Card className="bg-dark text-white">
                  <Card.Title>{curElem.title}</Card.Title>
                  <Card.Text>{curElem.Author}</Card.Text>
                  <Card.Text>{curElem.Date}</Card.Text>
                  <Card.Text>{curElem.Content.slice(0, 300)}...</Card.Text>
                </Card>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Hackercard;
