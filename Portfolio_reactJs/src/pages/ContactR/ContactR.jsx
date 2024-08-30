import React from "react";

const ContactR = () => {
  return (
    //
    <>
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>Below are the details to reach out to me!</p>
            </div>
          </div>
          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-map-signs" />
                </div>
                <h3 className="mb-4">Address</h3>
                <p>Saraykazi Varanasi (up)</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2" />
                </div>
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a href="tel://7470695586">+91 8004643571</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane" />
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a  href="mailto:devnathanurag7.com">
                    princepatel7601@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-globe" />
                </div>
                <h3 className="mb-4">Download Resume</h3>
                <p>
                  <a href="https://drive.google.com/file/d/1P6JbEgQG4Y5EkCWHCpf-K4ex7mJTtIS7/view?usp=drivesdk">
                    resumelink
                  </a>
                </p>
              </div>
            </div>
            <div className="container">
              <br />
              <br />
              <div className="row justify-content-center">
                <div className="col-md-7 ftco-animate text-center">
                  <h2>
                    Have a<span>Question?</span>
                  </h2>
                  <div className="que" id="send-message">
                    <form
                      action="https://api.web3forms.com/submit"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="access_key"
                        defaultValue="b2996074-8d2a-4869-bbff-1d1fcfbff2ed"
                      />
                      <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                        <div className="col-12">
                          <label htmlFor="fullname" className="form-label">
                            Full Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            defaultValue
                            required="required"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email
                            <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              defaultValue
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-telephone"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                              </svg>
                            </span>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phone"
                              defaultValue
                            />
                          </div>
                        </div>
                        <br />
                        <div className="col-12">
                          <label htmlFor="subject" className="form-label">
                            Subject
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            defaultValue
                            required="required"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">
                            Message
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={3}
                            required="required"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <br />
                            <button
                              className="btn btn-primary btn-lg"
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <ul className="ftco-footer-social list-unstyled d-flex justify-content-center align-items-center mb-0">
                <li className="ftco-animate normal-txt">Find me on</li>
                {/* <li class="ftco-animate"> <a href="https://www.youtube.com/@RishabhMishraOfficial"> <span class="icon-youtube"></span></a> </li> */}
                <li className="ftco-animate">
                  <a href="https://www.linkedin.com/in/prince-patel-949982271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/hacker_pr1nce?igsh=MTB6dmVrdm9yZTJoMw==">
                    <span className="icon-twitter" />
                  </a>
                </li>
                {/* <li class="ftco-animate"> <a href="https://twitter.com/rishabhnmishra"> <span class="icon-facebook"></span></a> </li> */}
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/html.css.js_?igsh=MXc3MndnMHpuZTVuNg==">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactR;
