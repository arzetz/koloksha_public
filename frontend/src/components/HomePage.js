import "./HomePage.scss";
import React, { useState, useEffect } from "react";
import { Image, Form, Button } from "react-bootstrap";
import { p_desc } from "./Descriptions";

import backgroundImg from "../images/main_background.png";
import backgroundImgSmall from "../images/main_background_small.png";

import historyBar from "../images/history_bar.png";
import logo from "../images/logo.png";
import history_1 from "../images/history_1.png";
import history_2 from "../images/history_2.png";
import history_3 from "../images/history_3.png";

import ka240 from "../images/fullsize_ka240.png";
import ka160 from "../images/fullsize_ka160.png";
import ka120 from "../images/fullsize_ka120.png";
import ugs240 from "../images/fullsize_ugs.png";
import details from "../images/fullsize_details.png";
import details_not_ka from "../images/fullsize_details_not_kaz.png";
import close_button from "../images/button.png";

import icon_gear from "../images/icon_gear.png";
import icon_auction from "../images/icon_auction.png";
import icon_like from "../images/icon_like.png";
import icon_truck from "../images/icon_truck.png";

import myVideo from "../videos/koloksha.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleImageClick = (product) => {
    setSelectedProduct(product); // Устанавливаем выбранный продукт
    setFadeOut(false);
  };

  const closeOverlay = () => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 400);
  };

  const [bgImage, setBgImage] = useState(backgroundImg);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage(backgroundImgSmall);
        setIsHidden(true);
      } else {
        setBgImage(backgroundImg);
        setIsHidden(false);
      }
    };

    // Обработчик события
    window.addEventListener("resize", handleResize);

    // Инициализация при первом рендере
    handleResize();

    // Очистка обработчика события при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const sendEmail = () => {
    window.location.href = `mailto:${"mail@koloksha.ru"}`;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;

    const formData = {
      name: name,
      phone: phone,
    };

    try {
      // Отправка данных на сервер через fetch
      const response = await fetch('/api/place_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Отправляем данные в формате JSON
      });

      if (response.ok) {
        alert('Заявка успешно отправлена!');
        // Очистить форму после успешной отправки
        document.getElementById('formName').value = '';
        document.getElementById('formPhone').value = '';
      } else {
        alert('Ошибка при отправке заявки. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке данных. Попробуйте еще раз.');
    }
  };


  return (
    <>
      <body>
        <header>
          <div className="bg-container">
            <Image src={bgImage} className="bg-image" fluid />
            <div className="flex">
              <div className="logo">
                <Image src={logo} className="logo_img" />
              </div>
              <div className="header">
                <span className="header">
                  КОЛОКШАНСКИЕ
                  <br />
                  АСФАЛЬТОСМЕСИТЕЛИ
                </span>
              </div>
            </div>
            <div className="p_header">
              <p className="header">
                №1 СРЕДИ РОССИЙСКИХ
                <br />
                ПРОИЗВОДИТЕЛЕЙ
                <br />
                АСФАЛЬТОСМЕСИТЕЛЕЙ
              </p>
            </div>
            <div className="flex_small">
              <div className="logo_small">
                <Image src={logo} className="logo_img" />
              </div>
              <div>
                <p className="header">№1 В РОССИИ</p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <br />
          <h1 className="about_us">Знакомство с предприятием</h1>
          <div className="about_us">
            <div className="about_us_p_div">
              <div className="about_us_inner">
                <p className="about_us p_1">
                  История завода начинается с 1913 года, когда были построены
                  первые производственные цеха для изготовления сажи. В 1965
                  году предприятие получило статус филиала «Владимирского
                  тракторного завода», а уже позже было переименовано в
                  «Колокшанский агрегатный завод».
                </p>
                <Image
                  src={history_1}
                  style={{ display: isHidden ? "flex" : "none" }}
                  className="i_1"
                  data-aos="fade-left"
                />
              </div>
              <div className="about_us_inner">
                <Image
                  src={history_2}
                  style={{ display: isHidden ? "flex" : "none" }}
                  className="i_2"
                  data-aos="fade-right"
                />
                <p className="about_us p_2">
                  В 1994 году на базе «КАЗ» был образован филиал Московской
                  промышленно-коммерческой фирмы «Тельтосервис», крупнейшей
                  компании на территории РФ, занимающейся поставкой и
                  реализацией запасных частей, узлов и агрегатов к
                  асфальтосмесительным установкам «Тельтомат».
                </p>
              </div>
              <div className="about_us_inner">
                <p className="about_us p_1">
                  В короткий срок «Колокшанский агрегатный завод» освоил выпуск
                  многих узлов и агрегатов: дозаторов, транспортёров, сушильных
                  барабанов, и уже в 2002 году специалистами завода была
                  спроектирована, разработана и изготовлена первая
                  асфальтосмесительная установка «КА-160»
                </p>
                <Image
                  src={history_3}
                  style={{ display: isHidden ? "flex" : "none" }}
                  className="i_1"
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div className="historybar" data-aos="fade-left">
              <Image
                src={historyBar}
                className="historybar_image"
                style={{ display: isHidden ? "none" : "flex" }}
              />
            </div>
          </div>
          <div>
            <h1 className="products">Наша продукция</h1>
          </div>
          <div className="outer_product flex">
            <div
              className="inner_product"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <Image
                src={ka240}
                onClick={() =>
                  handleImageClick({
                    src: ka240,
                    description: p_desc.ka240_p,
                  })
                }
              />
              <span>КА-240</span>
            </div>
            <div
              className="inner_product"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Image
                src={ka160}
                onClick={() =>
                  handleImageClick({
                    src: ka160,
                    description: p_desc.ka160_p,
                  })
                }
              />
              <span>КА-160</span>
            </div>
            <div
              className="inner_product"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                src={ka120}
                onClick={() =>
                  handleImageClick({
                    src: ka120,
                    description: p_desc.ka120_p,
                  })
                }
              />
              <span>КА-120</span>
            </div>
            <div
              className="inner_product"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                src={ugs240}
                onClick={() =>
                  handleImageClick({
                    src: ugs240,
                    description: p_desc.ugs240_p,
                  })
                }
              />
              <span>УГС-240</span>
            </div>
            <div
              className="inner_product"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Image
                src={details}
                onClick={() =>
                  handleImageClick({
                    src: details,
                    description: p_desc.details_p,
                  })
                }
              />
              <span className="details">
                Запчасти для <br></br> заводов КАЗ
              </span>
            </div>
            <div
              className="inner_product"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Image
                src={details_not_ka}
                onClick={() =>
                  handleImageClick({
                    src: details_not_ka,
                    description: p_desc.details_not_ka_p,
                  })
                }
              />
              <span className="details">
                Запчасти для <br></br>импортных АСУ{" "}
              </span>
            </div>
          </div>
          {selectedProduct && (
            <div
              className={`overlay ${fadeOut ? "fadeOut" : "fadeIn"}`}
              onClick={closeOverlay}
            >
              <div
                className="overlay-content"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={selectedProduct.src} className="overlay-image" />
                <Image
                  src={close_button}
                  className={`close ${fadeOut ? "fadeOut" : "fadeIn"}`}
                  onClick={closeOverlay}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: selectedProduct.description,
                  }}
                />
                {(selectedProduct.src === details ||
                  selectedProduct.src === details_not_ka) && (
                  <div className="button_telto">
                    <a href="https://teltoservis.ru/" className="button_telto">
                      На сайт "ООО Тельтосервис"
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="advantages_outer ">
            <h1 className="advantages">Преимущества работы с нами</h1>
            <hr className="advantages" />
            <div className="advantages_inner flex">
              <div className="advantages_image_div" data-aos="fade-right">
                <Image src={icon_gear} className="advantages_image" />
              </div>
              <div className="advantages_p" data-aos="fade-left">
                <p className="advantages_p">
                  Используем 99% деталей отечественного производства
                </p>
              </div>
            </div>
            <div className="advantages_inner flex">
              <div className="advantages_image_div" data-aos="fade-right">
                <Image src={icon_auction} className="advantages_image" />
              </div>
              <div className="advantages_p" data-aos="fade-left">
                <p className="advantages_p">
                  Сотрудничаем с государственными и частными заказчиками{" "}
                </p>
              </div>
            </div>
            <div className="advantages_inner flex">
              <div className="advantages_image_div" data-aos="fade-right">
                <Image src={icon_like} className="advantages_image" />
              </div>
              <div className="advantages_p" data-aos="fade-left">
                <p className="advantages_p">
                  Обеспечиваем годовую гарантию на запчасти и обслуживание
                </p>
              </div>
            </div>
            <div className="advantages_inner flex">
              <div className="advantages_image_div" data-aos="fade-right">
                <Image src={icon_truck} className="advantages_image" />
              </div>
              <div className="advantages_p" data-aos="fade-left">
                <p className="advantages_p">
                  Доставим завод в любую часть Российской Федерации
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="video_div">
            <h1 className="video_h1">Ещё немного о нас</h1>
            <div className="video_inner flex">
              <video width="75%" height="auto" controls>
                <source src={myVideo} type="video/mp4" />
                Ваш браузер не поддерживает HTML5 видео.
              </video>
              <div class="background-line"></div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer_bg">
            <div className="flex form">
              <div className="form_div">
                <Form onSubmit={handleSubmit}>
                  <h1 className="form_h1">Оставьте заявку</h1>
                  <p className="form_p">
                    мы отправим Вам цены,<br></br> условия и сроки поставки
                  </p>
                  <div className="centered-elements">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Ваше имя"
                        required
                        className="inner_label"
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                      <Form.Control
                        type="tel"
                        placeholder="Ваш телефон"
                        required
                        className="inner_label"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="form-button"
                    >
                      ОТПРАВИТЬ
                    </Button>
                    <Form.Group controlId="formCheckbox">
                      <Form.Check
                        type="checkbox"
                        id="custom-checkbox"
                        label="Согласен с условиями"
                        className="custom-checkbox" // Класс для стилизации
                      />
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="phone_block">
                <p className="phone_block_p">Телефон для связи
                <br></br>
                  +7 (961) 111-24-17
                  <br></br>
                  +7 (905) 618-38-83</p>
                <br></br>
                <p className="phone_block_p">Электронная почта
                  <br></br>
                <span onClick={sendEmail} style={{cursor: 'pointer', textDecoration: 'underline'}}>mail@koloksha.ru</span></p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default HomePage;
