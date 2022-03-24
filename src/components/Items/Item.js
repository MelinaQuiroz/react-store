import React, { useState } from "react";
import Data from "../../data";
import { Card, Button, CardGroup, Col, Row, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
// import {onAdd} from "./ItemListContainer";

export default function Item() {
  return (
    <>
          <div  className="card-container">
            <Container style={{ paddingLeft: "1rem" }}>
              <Row  >
              {Data.map((post) => (
                <Col key={post.id} style={{ paddingBottom: "1rem" }}>
                  <Card 
                    style={{
                      width: "16rem",
                      backgroundColor: "#1b1b20",
                      color: "white",
                    }}
                    className="text-center"
                  >
                    <Card.Img variant="top" src={post.img} />
                    <Card.Body>
                      <Card.Title>{post.name}</Card.Title>
                      <Card.Text>$ {post.price}</Card.Text>
                      <ItemCount stock={5} initial={1} />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              </Row>
            </Container>
          </div>
    </>
  );
}
