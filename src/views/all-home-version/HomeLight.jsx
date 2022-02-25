import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Portfolio from "../../components/PortfolioCreative";
import News from "../../components/News";
import Contact from "../../components/Contact";

const HomeLight = () => {
  return (
    <>
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <span>
                {/* <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link> */}
              </span>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    {/* <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    /> */}
                    <span className="menu_content">Home</span>
                  </Tab>
                  <p hidden>hey</p>
                  <Tab>
                    {/* <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    /> */}
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    {/* <img
                      hidden
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    /> */}
                    <span id="hidden-menu-item" hidden className="menu_content">
                      Bad Link
                    </span>
                  </Tab>
                  <Tab>
                    {/* <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    /> */}
                    <span className="menu_content">Projects</span>
                  </Tab>
                  {/* <div style={{ color: "white" }}>.</div> */}
                  <Tab>
                    {/* <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    /> */}
                    <span className="menu_content"> Contact</span>
                  </Tab>
                  <span></span>
                </ul>
              </div>
              {/* END MENU */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                  </div>
                </TabPanel>

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <About />
                  </div>
                </TabPanel>

                <TabPanel>
                  <Portfolio />
                </TabPanel>

                <TabPanel>
                  <News />
                </TabPanel>

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <Contact />
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
