import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";


const Portfolio = () => {
  const [isModalClosed, setModalClosed] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleModalOne = () => {
    setIsOpen1(!isOpen1);
    setModalClosed(true);
  };

  const toggleModalTwo = () => {
    setIsOpen2(!isOpen2);
    setModalClosed(true);
  };

  const toggleModalThree = () => {
    setIsOpen3(!isOpen3);
    setModalClosed(true);
  };

  const toggleModalFour = () => {
    setIsOpen4(!isOpen4);
    setModalClosed(true);
  };

  useEffect(() => {
    if (!isModalClosed) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  return (
      <div className="portfolio-tab-content blog">
        <ul className="row grid justify-content-center">
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
            <figure className="vh-25" onClick={toggleModalOne}>
              <img
                src="img/certificates/yandex1.png"
                alt="Portolio"
                className="max-height"
              />
              <div className="hover-content-wrapper">
                <span className="content-title">Яндекс Практикум</span>
              </div>
            </figure>

            {/* Start ModalOneContent */}
            <Modal
              isOpen={isOpen1}
              onRequestClose={toggleModalOne}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
              ariaHideApp={false}
            >
              <div>
                <button className="close-modal" onClick={toggleModalOne}>
                  <img src="img/cancel2.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post mt-5">
                  <ModalOneContent />
                </div>
              </div>
            </Modal>
            {/* End  ModalOneContent */}
          </li>
          {/* <!-- Portfolio Item Ends --> */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
            <figure className="vh-25" onClick={toggleModalTwo}>
              <img
                src="img/certificates/karpov.png"
                alt="Portolio"
                className="max-height"
              />
              <div className="hover-content-wrapper">
                <span className="content-title">Основы Статистики by Bioinformatics Institute</span>
              </div>
            </figure>

            {/* Start ModalOneContent */}
            <Modal
              isOpen={isOpen2}
              onRequestClose={toggleModalTwo}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
              ariaHideApp={false}
            >
              <div>
                <button className="close-modal" onClick={toggleModalTwo}>
                  <img src="img/cancel2.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post mt-5">
                  <ModalTwoContent />
                </div>
              </div>
            </Modal>
            {/* End  ModalOneContent */}
          </li>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
            <figure className="vh-25" onClick={toggleModalThree}>
              <img
                src="img/certificates/gleb-mikh.png"
                alt="Portolio"
                className="max-height"
              />
              <div className="hover-content-wrapper">
                <span className="content-title">Machine Learning by Gleb Mikhailov</span>
              </div>
            </figure>

            {/* Start ModalOneContent */}
            <Modal
              isOpen={isOpen3}
              onRequestClose={toggleModalThree}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
              ariaHideApp={false}
            >
              <div>
                <button className="close-modal" onClick={toggleModalThree}>
                  <img src="img/cancel2.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post mt-5">
                  <ModalThreeContent />
                </div>
              </div>
            </Modal>
            {/* End  ModalOneContent */}
          </li>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
            <figure className="vh-25" onClick={toggleModalFour}>
              <img
                src="img/certificates/omsk-uni.png"
                alt="Portolio"
                className="max-height"
              />
              <div className="hover-content-wrapper">
                <span className="content-title">Машинное обучение от ОМГТУ</span>
              </div>
            </figure>

            {/* Start ModalOneContent */}
            <Modal
              isOpen={isOpen4}
              onRequestClose={toggleModalFour}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
              ariaHideApp={false}
            >
              <div>
                <button className="close-modal" onClick={toggleModalFour}>
                  <img src="img/cancel2.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post mt-5">
                  <ModalFourContent />
                </div>
              </div>
            </Modal>
            {/* End  ModalOneContent */}
          </li>
          {/* <!-- Portfolio Item Starts --> */}
        </ul>
      </div>
  );
};

export default Portfolio;