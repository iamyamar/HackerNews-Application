import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, FormControl, Form, Button } from "react-bootstrap";
const Navb = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="../" className="text-decoration-none">
            <Navbar.Brand>Hacker News</Navbar.Brand>
          </Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <h6>" "</h6>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Navb;
