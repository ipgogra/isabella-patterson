// Importing necessary libraries and components
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataresume, meta } from "../../content_option";

// Resume component
export const Resume = () => {
  // Function to render resume items
  const renderResumeItems = (data, index) => (
    <div key={index} className="po_item">
      <img src={data.img} alt="" />
      <div className="content">
        <p>{data.description}</p>
        <a href={data.link}>view resume</a>
      </div>
    </div>
  );

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {/* Mapping through dataresume to render resume items */}
          {dataresume.map(renderResumeItems)}
        </div>
      </Container>
    </HelmetProvider>
  );
};
