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
import { Container, Row, Col, Button, Badge, Card, CardImg, CardBody, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import classnames from "classnames";
// index page sections
import Hero from "./IndexSections/Hero.js";
import Carousel from "./IndexSections/Carousel.js";
import Slider from "react-slick";

class Index extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          arrows: true,
        }
      },
    ],
  };

  settings2 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          arrows: true,
        }
      },
    ],
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Quiénes somos</h2>
                  <p className="lead text-muted"> Un equipo de profesionales destinados al entrenamiento didactico.</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <Slider {...this.settings2}>
                    <div className="mb-5 mb-lg-0">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/seba.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Sebastian Valente</span>
                            <small className="h6 text-muted">Profesor de Natación</small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5 mb-lg-0">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/seba.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Sebastian Valente</span>
                            <small className="h6 text-muted">Profesor de Natación</small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5 mb-lg-0">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/seba.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Sebastian Valente</span>
                            <small className="h6 text-muted">Profesor de Natación</small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5 mb-lg-0">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/seba.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Sebastian Valente</span>
                            <small className="h6 text-muted">Profesor de Natación</small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Qué hacemos</h2>
                  <p className="lead text-muted">
                    Nos dedicamos a todo tipo de actividades acuaticas. Donde hay agua, <br /> ahi estaremos.
                  </p>
                </Col>
              </Row>

              <Row className="row-grid align-items-center">
                <Col className="" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/f.jpg")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Actividades Acuáticas</h3>
                    <p className="lead">
                      Usando piletas municipales, creamos espacios de trabajo
                      donde son bienvenidos tanto grandes como chicos.
                    </p>
                    <p>
                      Las <b>Actividades</b> son de entrentamiento, practica, o recuperacion muscular.
                    </p>
                    <p>
                      Las clases pueden ser armadas a medida dependiendo del las personas que la integren
                      y creando ejercicios para los mimsos.
                    </p>
                    { /*
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                    */ }
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/a.jpeg")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Eventos y Fiestas acuáticas</h3>
                    <p>
                      Días festivos con multipes personas y eventos personalizados para sacar lo maximo en diversion!
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Juegos y competencias
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Comidas integradas</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Descuentos por cantidad
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/i.jpg")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Colonia de vacaciones</h3>
                    <p className="lead">
                      Espacios verdes con acceso a pileta. Días enteros de diversión y ejercicio.
                    </p>
                    <p>
                      Las colonias son en los meses <b>Noviembre</b> y <b>Diciembre</b>.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#cupos"
                      onClick={e => e.preventDefault()}
                    >
                      Consulte cupos disponibles
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Nuestros Productos{" "}
                      </h1>
                      <p className="lead text-white">
                        Los productos estan limitados stock. Nos comunicaremos por WhatsApp para concordar el pago y el envio.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="row-grid">
                <Col xs="12">
                  <Slider {...this.settings}>
                    <Card className="card-lift--hover slider-card shadow border-0">
                      <CardBody className="py-5 mx-auto text-center">
                        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/P1.jpeg")}
                          style={{ width: "200px", height: "200px" }}
                        />
                        <h6 className="text-primary text-uppercase mt-2">
                          Antiparras
                          </h6>
                        <p className="description mt-3">
                          Varios colores y modelos
                          </p>
                        <div className="" style={{ height: "40px" }}>
                          <Badge color="primary" pill className="mr-1 d-none">
                            Diseño
                            </Badge>
                          
                        </div>
                        <Button
                          className="mt-4 "
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Lo quiero
                          </Button>
                      </CardBody>
                    </Card>
                    <Card className="card-lift--hover slider-card shadow border-0">
                      <CardBody className="py-5 mx-auto text-center">
                        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/P2.jpeg")}
                          style={{ width: "200px", height: "200px" }}
                        />
                        <h6 className="text-primary text-uppercase mt-2">
                          Gorras
                          </h6>
                        <p className="description mt-3">
                          Varios colores y modelos
                          </p>
                          <div className="" style={{ height: "40px" }}>
                          <Badge color="primary" pill className="mr-1">
                            Descuento
                          </Badge>
                        </div>
                        <Button
                          className="mt-4 "
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Lo quiero
                          </Button>
                      </CardBody>
                    </Card>
                    <Card className="card-lift--hover slider-card shadow border-0">
                      <CardBody className="py-5 mx-auto text-center">
                        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/P3.jpeg")}
                          style={{ width: "200px", height: "200px" }}
                        />
                        <h6 className="text-primary text-uppercase mt-2">
                          Antiparras
                          </h6>
                        <p className="description mt-3">
                          Varios colores y modelos
                          </p>
                          <div className="" style={{ height: "40px" }}>
                          <Badge color="primary" pill className="mr-1">
                            Descuento
                          </Badge>
                        </div>
                        <Button
                          className="mt-4 "
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Lo quiero
                          </Button>
                      </CardBody>
                    </Card>
                    <Card className="card-lift--hover slider-card shadow border-0">
                      <CardBody className="py-5 mx-auto text-center">
                        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/P1.jpeg")}
                          style={{ width: "200px", height: "200px" }}
                        />
                        <h6 className="text-primary text-uppercase mt-2">
                          Antiparras
                          </h6>
                        <p className="description mt-3">
                          Varios colores y modelos
                          </p>
                          <div className="" style={{ height: "40px" }}>
                          <Badge color="primary" pill className="mr-1 d-none">
                            Diseño
                            </Badge>
                        </div>
                        <Button
                          className="mt-4 "
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Lo quiero
                          </Button>
                      </CardBody>
                    </Card>
                    <Card className="card-lift--hover slider-card shadow border-0">
                      <CardBody className="py-5 mx-auto text-center">
                        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/P2.jpeg")}
                          style={{ width: "200px", height: "200px" }}
                        />
                        <h6 className="text-primary text-uppercase mt-2">
                          Gorras
                          </h6>
                        <p className="description mt-3">
                          Varios colores y modelos
                          </p>
                          <div className="" style={{ height: "40px" }}>
                          <Badge color="primary" pill className="mr-1">
                            Descuento
                          </Badge>
                        </div>
                        <Button
                          className="mt-4 "
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Lo quiero
                          </Button>
                      </CardBody>
                    </Card>
                    <Card className="card-lift--hover slider-card shadow border-0">
                      <CardBody className="py-5 mx-auto text-center">
                        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/P3.jpeg")}
                          style={{ width: "200px", height: "200px" }}
                        />
                        <h6 className="text-primary text-uppercase mt-2">
                          Antiparras
                          </h6>
                        <p className="description mt-3">
                          Varios colores y modelos
                          </p>
                          <div className="" style={{ height: "40px" }}>
                          <Badge color="primary" pill className="mr-1">
                            Descuento
                          </Badge>
                        </div>
                        <Button
                          className="mt-4 "
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Lo quiero
                          </Button>
                      </CardBody>
                    </Card>

                  </Slider>
                </Col>
              </Row>
            </Container>
          </section>
          <Carousel />
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Contacto</h2>
                  <p className="lead text-white">
                    Si tienes alguna duda o simplemente quieres comunicarte con nosotros.
                    <br />
                    ¡Este es el lugar!
                  </p>
                </Col>
              </Row>

            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Escribenos tu mensaje</h4>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nombre"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Correo Electronico"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Mensaje..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Enviar
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
