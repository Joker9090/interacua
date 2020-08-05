/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/g.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/h.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/a.jpeg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/f.jpeg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/e.jpeg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/d.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="12">
                <h1 className="text-white font-weight-light">
                  Momentos
                </h1>
                <p className="lead text-white mt-4">
                  Algunas de nuestras fotos para que puedas visualizar nuestra diversion.
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="12">
                <div className="rounded shadow-lg overflow-hidden">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          
        </section>
      </>
    );
  }
}

export default Carousel;
