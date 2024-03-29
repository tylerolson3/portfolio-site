import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              {/* <span>News</span> */}
              <h3>Projects</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              {/* <div className="image" onClick={toggleModalOne}> */}
              <div className="image" style={{ pointerEvents: "none" }}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/pic-invoice-app.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <h4> InvoiceNOW App </h4>
                </div>
                {/* END EXTRA */}

                {/* <h3 className="title" onClick={toggleModalOne}> */}
                <p style={{ fontSize: "1.2rem" }}>
                  Full-stack applicaton allowing users to store custom invoices
                  in a database.
                </p>
                <p className="skillz-box">
                  {" "}
                  <button className="skillz">React</button>{" "}
                  <button className="skillz">PostgreSQL</button>{" "}
                  <button className="skillz">Node.js</button>{" "}
                  <button className="skillz">Material UI</button>
                </p>
                {/* </h3> */}
                <div className="tokyo_tm_button">
                  <button
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid black",
                      paddingX: "10px",
                    }}
                    className="ib-button"
                    onClick={() =>
                      window.open(
                        "https://github.com/tylerolson3/invoice-app-fullstack"
                      )
                    }
                  >
                    Source Code
                  </button>

                  <button
                    style={{ border: "1px solid black" }}
                    className="ib-button"
                    onClick={() =>
                      window.open("https://invoice-now.netlify.app")
                    }
                  >
                    See Live
                  </button>
                  <p style={{ color: "white" }}>ll</p>
                  <p style={{ color: "white" }}>ll</p>
                </div>
                <div className="tokyo_tm_read_more">
                  {/* <a href="#"> */}
                  {/* <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a> */}
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/news/goodGifInvoiceApp.gif)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        {/* <div className="extra">
                          <p className="date">
                            By <a href="#">Alex Watson</a>
                            <span>05 April 2021</span>
                          </p>
                        </div> */}
                        <h3 className="title">
                          Format releases a new tool that enables direct video
                          hosting
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner">
              {/* <div className="image" onClick={toggleModalTwo}> */}
              <div className="image" style={{ pointerEvents: "none" }}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/pic-countries.png)",
                    // "url(assets/img/news/goodGifCountries.gif)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <h4>Countries REST API</h4>
                </div>
                {/* END EXTRA */}

                <p style={{ fontSize: "1.2rem" }}>
                  Displays country data from an API and implements search and
                  filter functionality.
                </p>
                <p className="skillz-box">
                  {" "}
                  <button className="skillz">React</button>{" "}
                  {/* <button className="skillz">React Router</button>{" "} */}
                  <button className="skillz">Material UI</button>{" "}
                  <button className="skillz">React Hooks</button>{" "}
                  <button className="skillz">Restful API </button>
                </p>
                <div className="tokyo_tm_button">
                  <button
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid black",
                      paddingX: "10px",
                    }}
                    className="ib-button"
                    onClick={() =>
                      window.open(
                        "https://github.com/tylerolson3/countries-api"
                      )
                    }
                  >
                    Source Code
                  </button>

                  <button
                    style={{ border: "1px solid black" }}
                    className="ib-button"
                    onClick={() =>
                      window.open("https://countries-tyler.netlify.app/")
                    }
                  >
                    See Live
                  </button>
                  <p style={{ color: "white" }}>ll</p>
                  <p style={{ color: "white" }}>ll</p>
                </div>
                <div className="tokyo_tm_read_more">
                  {/* <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a> */}
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/news/goodGifCountries.gif)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Brook Kennedy</a>
                            <span>22 March 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Sony announced two new full frame cameras with zero
                          fanfare
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="list_inner">
              {/* <div className="image" onClick={toggleModalFour}> */}
              <div className="image" style={{ pointerEvents: "none" }}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/quizzical.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <h4>Quizzical Game</h4>
                </div>
                {/* END EXTRA */}

                <p style={{ fontSize: "1.2rem" }}>
                  A quiz app that uses Open Trivia API and tracks your score
                  along with displaying results.
                </p>
                <p className="skillz-box">
                  {" "}
                  <button className="skillz">React</button>{" "}
                  <button className="skillz">React Router</button>{" "}
                  <button className="skillz">Material UI</button>{" "}
                  <button className="skillz">Rest API</button>{" "}
                  <button className="skillz">Javascript (ES6) </button>
                </p>
                <div className="tokyo_tm_button">
                  <button
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid black",
                      paddingX: "10px",
                    }}
                    className="ib-button"
                    onClick={() =>
                      window.open("https://github.com/tylerolson3/Quizzical")
                    }
                  >
                    Source Code
                  </button>

                  <button
                    style={{ border: "1px solid black" }}
                    className="ib-button"
                    onClick={() =>
                      window.open("https://tylerolson3.github.io/Quizzical")
                    }
                  >
                    See Live
                  </button>
                  <p style={{ color: "white" }}>ll</p>
                  <p style={{ color: "white" }}>ll</p>
                </div>
                <div className="tokyo_tm_read_more">
                  {/* <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a> */}
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/news/shopping-cart.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Kevin Stone</a>
                            <span>22 Jan 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Stay creative in lockdown with these fun photo
                          projects
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
