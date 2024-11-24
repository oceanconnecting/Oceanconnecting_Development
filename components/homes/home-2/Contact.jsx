"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact-area">
      <div
        className="contact-wrap style1 fix"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/contactBg1_1.png)" }}
      >
        <div
          className="shape1_1 d-none d-xl-block wow fadeInUp"
          data-wow-delay=".3s"
        >
          <Image
            alt="shape"
            src="/assets/img/shape/contactShape1_1.png"
            width="252"
            height="279"
          />
        </div>
        <div
          className="shape1_2 d-none d-xl-block wow fadeInUp"
          data-wow-delay=".6s"
        >
          <Image
            alt="shape"
            src="/assets/img/shape/contactShape1_2.png"
            width="325"
            height="554"
          />
        </div>
        <div className="container">
          <div className="row gx-0">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="contact-form style1 space-top position-relative">
                <form
                  className="wow fadeInUp"
                  data-wow-delay=".6s"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div
                      className="title-box mb-40 wow fadeInLeft"
                      data-wow-delay=".5s"
                    >
                      <h3 className="section-title mt-10">
                        Feel Free to Contact Us
                      </h3>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <div className="contact__from-input mb-20">
                          <label>Full name*</label>
                          <input type="text" placeholder="Robot fox" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Email Address*</label>
                        <div className="contact__from-input mb-20">
                          <input type="text" placeholder="info@example.com" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Type Of Service*</label>
                        <div className="contact__select mb-20">
                          <select>
                            <option value={0}>Select</option>
                            <option value={2}>Web Design</option>
                            <option value={3}>Web Development</option>
                            <option value={1}>Cyber security</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Select Date*</label>
                        <div className="contact__from-input mb-20">
                          <input type="date" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="form-clt">
                        <span>Message*</span>
                        <textarea
                          className="style2"
                          name="message"
                          id="message"
                          placeholder="Write Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                      <button type="submit" className="gt-btn gt-btn-icon">
                        SUBMIT NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="contact-map wow fadeInUp" data-wow-delay=".9s">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.352009476019!2d8.622686376725891!3d50.135846371533795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd090a2dc6c417%3A0x86cdfff8349cec3!2sPraunheimer%20Landstra%C3%9Fe%2032%2C%2060488%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sma!4v1732481888246!5m2!1sen!2sma"   />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
