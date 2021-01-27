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
import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col, Button, Badge, Card, CardImg, CardBody, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from "reactstrap";
import { useForm } from '@formcarry/react';
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import classnames from "classnames";
// index page sections
import Hero from "./IndexSections/Hero.js";
import Carousel from "./IndexSections/Carousel.js";
import Slider from "react-slick";
import CustomAction, { baseAssetsUrl } from "./../actions/customAction";


class Index extends React.Component {
  state = {
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    const self = this;
    CustomAction('productos?activo=true').then((r) => {
      console.log('productos!', r);
      setTimeout(() => {
        self.setState({
          productos: r.data,
        });
      }, 2000);
    }).catch((e) => {
      console.log('e', e);
    });

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
    slidesToShow: 2,
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

  buildText = (text) => {
    return text.split(' ').join('%20');
  }

  goToWhatsapp = (number, text) => {
    window.open(`https://wa.me/54${number}?text=${text}`);
  }

  buildProduct = (producto) => (
    <Card className="card-lift--hover slider-card shadow border-0">
      <CardBody className="py-5 mx-auto text-center">
        <div className="d-none icon icon-shape icon-shape-primary rounded-circle mb-4">
          <i className="ni ni-check-bold" />
        </div>
        {producto.Imagen_portada && (
          <img
            alt="..."
            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
            src={baseAssetsUrl + producto.Imagen_portada.url}
            style={{ width: "200px", height: "200px" }}
          />
        )}
        <h6 className="text-primary text-uppercase mt-2">
          {producto.Titulo}
        </h6>
        <p className="description mt-3">
          {producto.Descripcion}
        </p>
        <div className="" style={{ height: "40px" }}>
          <Badge color="primary" pill className="mr-1 d-none"> Descuento </Badge>
        </div>
        {producto.numeroWhatsapp && (
          <Button
            className="mt-4 "
            color="primary"
            href="#'"
            onClick={() => this.goToWhatsapp(producto.numeroWhatsapp, this.buildText(`Hola! Que tal? Me interesa ${producto.Titulo}`))}
          >
            Lo quiero
          </Button>
        )}
      </CardBody>
    </Card>
  );

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />

          <section className="section section-lg pt-0" id="quienes-somos">
            <Container>
              <Row className="justify-content-center text-center mb-4 pb-3">
                <Col xs="12">
                  <h2 className="display-3">Quiénes somos</h2>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <p className="lead text-muted">
                    Somos un equipo de profesionales del área de la actividad física que compartimos nuestra afinidad por los deportes y, en especial, por los desafíos en el medio acuático.
                  </p>
                  <p className="lead text-muted">
                    El agua es, para nosotros, un espacio de disfrute personal. Promovemos el deporte acuático con el fin de mejorar el estado físico, mantener nuestra salud, y como actividad lúdico-recreativa.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col lg="6">
                  <h2 className="display-3">Misión</h2>
                  <p className="lead text-muted">
                    Nuestra misión es acercar los beneficios del medio acuático a cada grupo etario respetando todas las etapas del ciclo vital, las necesidades individuales y sus intereses particulares.
                  </p>
                </Col>
                <Col lg="6">
                  <h2 className="display-3">Visión</h2>
                  <p className="lead text-muted">
                    Acercar el medio acuático de una manera <b>CONFIABLE&nbsp;y&nbsp;DURADERA</b> cada vez a más personas.
                    <br />
                    Ser un referente en nuestra zona en el brindando de actividades acuáticas para la comunidad.
                  </p>
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
                            <small className="h6 text-muted">Lic. en Educación Física y Deportes - UAI</small>
                            <br />
                            <small className="h6 text-muted">Guardavidas - AMGAA</small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="http://www.linkedin.com/in/sebastianvalente"
                            >
                              <i className="fa fa-linkedin" />
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
                          src={require("assets/img/theme/fotos/Pablo.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Pablo Ponomareff</span>
                            <small className="h6 text-muted">Prof.  Nacional de Educación Física - ISEF N°2</small>
                            <br />
                            <small className="h6 text-muted">Guardavidas - AMGAA</small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="primary"
                              href="http://www.linkedin.com/in/pponomareff"
                            >
                              <i className="fa fa-linkedin" />
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
          <section className="section bg-secondary" id="actividades">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">ACTIVIDADES ACUÁTICAS A DOMICILIO</h2>
                  <p className="lead text-muted d-none">
                    Nos dedicamos a todo tipo de actividades acuaticas. Donde hay agua, <br /> ahi estaremos.
                  </p>
                </Col>
              </Row>

              <Row className="row-grid align-items-center">
                <Col className="" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/fotos/natacionAdomicilio.jpg")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Clases de natación: </b>
                      Nos trasladamos hasta tu domicilio  con todos los materiales necesarios. La cantidad de sesiones por semana y el horario son a convenir.
                      <br />Las clases pueden ser individuales o de grupos reducidos. Todos los niveles.
                    </p>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="button"
                      onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdVw0zlovkLRAe41seHSeGHeEkg8M9KU40ZjuD8IELR9bGbpw/viewform?usp=sf_link")}
                    >
                      Preinscripcion
                    </Button>
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
                    src={require("assets/img/theme/fotos/coloniaRodante.jpg")}
                  />
                </Col>
                <Col md="6" className="order-md-1">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Colonia Rodante: </b>
                      “¡Una colonia a domicilio! formada por grupos reducidos que realizamos durante los recesos escolares. <br />
                      Una propuesta flexible que se adapta a las necesidades del grupo y del lugar. <br />
                      Realizamos actividades en pileta, actividades de agua (fuera de la pileta),
                      arte, expresión corporal, talleres, distintos tipos de juegos y mucho mas.
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
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/fotos/acuagym.jpg")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Aquagym: </b>
                      Clases de Gimnasia acuática individual ó grupal en tu pileta particular. LLevamos todo lo necesario. Mejora el  acondicionamiento físico general, aeróbico y muscular de una forma divertida.
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
                    src={require("assets/img/theme/fotos/tardeAmigos.jpg")}
                  />
                </Col>
                <Col md="6" className="order-md-1">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Tarde con amigos: </b>
                      ¡Es una forma original de juntarte con amigos y pasarla bomba! Consiste en una jornada de 2/3 horas, donde se desarrollan juegos acuáticos con distintos materiales: Lanza-aguas, bombuchas, juegos de pesca, juegos de encestar, etc.
                      <br />Se comparte una merienda todos juntos y se realiza una actividad de finalización.
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

              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">ACTIVIDADES EN PILETA</h2>
                </Col>
              </Row>

              <Row className="row-grid align-items-center">
                <Col className="" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/fotos/Pile16.jpg")}
                  />
                </Col>
                <Col className="" md="6">
                  <div className="pr-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Clases de natación para niños, adolescentes y adultos </h3>
                    <p>
                      <Button
                        className="mt-4 "
                        color="primary"
                        href="#'"
                        onClick={() => this.goToWhatsapp("541150133314", this.buildText(`Hola! Quiero saber las sedes disponibles`))}
                      >
                        (Consulta sedes disponibles)
                      </Button>

                    </p>
                    <ul className="list-unstyled mt-5 d-none">
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
                            <h6 className="mb-0">Algun Agregado ?</h6>
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
                              Algun Agregado ?
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

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">EVENTOS Y FIESTAS ACUÁTICAS</h2>
                </Col>
              </Row>

              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/fotos/cumple2.jpg")}
                  />
                </Col>
                <Col md="6" className="order-md-1">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Cumpleaños acuáticos: </b>
                      La forma más divertida de festejar tu cumpleaños. Una propuesta original,  con o sin pileta, te ofrecemos las mejores actividades con agua y terrestres para jugar y divertirse..
                      <br />Incluye material deportivo y Profes de Ed. Física que para ponerle la mejor onda a la fiesta.
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
                    </ul>
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
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/fotos/empresariales.jpg")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Eventos empresariales: </b>
                      Organización de jornadas lúdicas en pileta, jornadas náuticas, y clases grupales. Coordinados por Profesores de Educación física y equipos de guardavidas. Todo lo que necesitas para disfrutar al máximo del agua, de una manera segura y divertida.
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

          <section className="section bg-secondary">
            <Container>

              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/fotos/jornadaNautica.jpg")}
                  />
                </Col>
                <Col md="6" className="order-md-1">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Jornadas náuticas: </b>
                      No te pierdas nuestro  ¨Adventure Day¨. Una jornada náutica al aire libre llena de buenos momentos. Brindamos de acuerdo al tipo de actividad, salidas en Kayaks, SUP e iniciación al Windsurf.
                      <br />Están pensadas para que todos/as puedan participar y disfrutar sin conocimientos previos. Sumate a una experiencia única en contacto con la naturaleza.
                    </p>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="button"
                      onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdVw0zlovkLRAe41seHSeGHeEkg8M9KU40ZjuD8IELR9bGbpw/viewform?usp=sf_link")}
                    >
                      Preinscripcion
                    </Button>
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

          <section className="section bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">GESTIÓN DE INSTALACIONES ACUÁTICAS</h2>
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
                    <p className="lead">
                      <b>Colegios: </b>
                      Servicio integral de Natación para Alumno/as de Nivel Inicial y EGB. Brindamos el Taller de Natación de manera Extracurricular (optativo) y Curricular de manera articulada con el PEI de la Institución contratante.
                      <br />Las clases pueden ser individuales o de grupos reducidos. Todos los niveles.
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
                    src={require("assets/img/theme/fotos/clasesBarrios.jpg")}
                  />
                </Col>
                <Col md="6" className="order-md-1">
                  <div className="pl-md-5">
                    <div className="d-none icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <p className="lead">
                      <b>Edificios, Clubes y Barrios cerrados: </b>
                    </p>
                    <p>
                      Gracias a nuestra formación como Profesores de Ed. Física y como guardavidas, estamos habilitados para dictar clases y encargarnos de la seguridad del natatorio, como también para gestionar, administrar, publicitar y coordinar las diversas actividades.
                    <br />Para lo cual brindamos nuestro profesionalismo, compromiso y pasión.
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
          {(!this.state.productos || this.state.productos.length !== 0) && (
            <>
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
                          <a style={{color: "white", "text-decoration": "underline" }} href="https://drive.google.com/file/d/1RInYP5CNODjo_Iwkmqz0a-18wgWKPsVn/view?usp=sharing" rel="noopener noreferrer" target="_blank">Guia de recomendaciones para padres y madres</a>
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
              <section className="section section-lg pt-lg-0 mt--200" id="productos">
                <Container>
                  <Row className="row-grid">
                    <Col xs="12">
                      {(this.state.productos ? (
                        <>
                          {this.state.productos.length > 3 ? (
                            <Slider {...this.settings}>
                              {this.state.productos.map(producto => (
                                this.buildProduct(producto)
                              ))}
                            </Slider>
                          ) : (
                              <Row className="row-grid">
                                {this.state.productos.map(producto => (
                                  <Col xs="12" md="4">
                                    {this.buildProduct(producto)}
                                  </Col>
                                ))}
                              </Row>
                            )}
                        </>
                      ) : (
                          <div className="CardShimmerHolder">
                            <div className="CardShimmer" />
                            <div className="CardShimmer" />
                            <div className="CardShimmer" />
                          </div>
                        ))}
                    </Col>
                  </Row>
                </Container>
                <Carousel />
              </section>
            </>
          )}
          
          <section className="section section-lg bg-gradient-default" id="contacto">
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
                  <Form />
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


function Form() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const { state, submit } = useForm({
    id: 'nvTG0P-GEw'
  });

  // Success message
  if (state.submitted) {
    return <div>Gracias por tu mensaje</div>;
  }
  return (
    <Card className="bg-gradient-secondary shadow">
      <CardBody className="p-lg-5">
        <form onSubmit={submit}>
          <h4 className="mb-1">Escribenos tu mensaje</h4>
          <FormGroup
            className={classnames("mt-5", { focused: nameFocused })}
          >
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-user-run" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                id="name"
                placeholder="Nombre"
                type="text"
                name="Nombre"
                onFocus={e => setNameFocused(true)}
                onBlur={e => setNameFocused(false)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup
            className={classnames({
              focused: emailFocused
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
                name="Email"
                id="email"
                onFocus={e => setEmailFocused(true)}
                onBlur={e => setEmailFocused(false)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-4">
            <Input
              className="form-control-alternative"
              cols="80"
              name="Mensaje"
              id="mensaje"
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
              type="submit"
            >
              Enviar
          </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );

}
export default Index;


