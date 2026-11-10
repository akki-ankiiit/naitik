import MadMark from "../layout/MadMark";
import SocialLinks from "../layout/SocialLinks";
import { imgProps } from "../../data/media";
/** Contact details: verified channels only. Interactions are managed by useSiteExperience. */
export default function ContactPageContent() {
  return (
    <section data-bg="light" className="section clip theme_on-brand">
      <div className="container">
        <div className="contact-w">
          <div className="contact-s">
            <div data-scroll-reveal="w" className="conatc-s_t">
              <div className="u-48" />
              <div className="u-272 b-mob" />
              <div className="grid">
                <div className="contact-s_title">
                  <h1
                    data-prevent-flicker=""
                    data-scroll-reveal="h"
                    className="h1 a-center"
                  >
                    Let’s talk
                  </h1>
                </div>
              </div>
              <div className="u-96" />
              <div className="grid">
                <div
                  data-prevent-flicker=""
                  data-scroll-reveal="ctn"
                  className="contact-s_email"
                >
                  <h2 className="l1 reg a-center">Message the studio</h2>
                  <div className="u-4" />
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div
                        role="listitem"
                        className="contact-cms_list_item w-dyn-item"
                      >
                        <a
                          hover-nav-item=""
                          aria-label="@m.a.d_collaboratives"
                          href="https://www.instagram.com/m.a.d_collaboratives/" target="_blank" rel="noopener noreferrer"
                          className="nav-item w-inline-block"
                        >
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">
                                @m.a.d_collaboratives
                              </div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">
                                @m.a.d_collaboratives
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32" />
                </div>
                <div className="contact-s_loc">
                  <div className="loc-cms w-dyn-list">
                    <div role="list" className="loc-cms_list w-dyn-items">
                      <div
                        data-prevent-flicker=""
                        data-scroll-reveal="ctn"
                        role="listitem"
                        className="loc-cms_list_item w-dyn-item"
                      >
                        <h3 className="l1 reg a-center">Based in</h3>
                        <div className="u-4" />
                        <a
                          hover-nav-item=""
                          aria-label="Raipur, Chhattisgarh, India"
                          href="https://www.google.com/maps/search/?api=1&query=Raipur+Chhattisgarh+India"
                          className="nav-item w-inline-block"
                        >
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">
                                Raipur, Chhattisgarh, India
                              </div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">
                                Raipur, Chhattisgarh, India
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32" />
                </div>
                <div
                  data-prevent-flicker=""
                  data-scroll-reveal="ctn"
                  className="contact-s_phone"
                >
                  <h3 className="l1 reg a-center">Principal Architect</h3>
                  <div className="u-4" />
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div
                        role="listitem"
                        className="contact-cms_list_item w-dyn-item"
                      >
                        <a
                          hover-nav-item=""
                          aria-label="Naitik Parekh · @naitik67"
                          href="https://www.instagram.com/naitik67/" target="_blank" rel="noopener noreferrer"
                          className="nav-item w-inline-block"
                        >
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">
                                Naitik Parekh · @naitik67
                              </div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">
                                Naitik Parekh · @naitik67
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32" />
                </div>
              </div>
              <div className="u-160" />
              <div className="grid">
                <div
                  data-prevent-flicker=""
                  data-scroll-reveal="ctn"
                  className="contact-s_social"
                >
                  <SocialLinks />
                </div>
                <div
                  data-parallax="w"
                  data-scroll-reveal="ctn"
                  data-prevent-flicker=""
                  className="contact-s_map"
                >
                  <div data-parallax="img" className="contact-s_map_c">
                    <img
                      {...imgProps("DbGTXd8JiZZ-00", "(max-width: 991px) 90vw, 40vw")}
                      loading="eager"
                      className="img h-auto"
                    />
                    <div className="contact-s_map_pin">
                      <div className="contact-s_map_pin_c theme_on-dark">
                        <div className="contact-s_map_pin_info">
                          <div className="l2">
                            <strong>M.A.D. Collaboratives</strong>
                          </div>
                          <div className="l2 reg">Raipur, Chhattisgarh</div>
                        </div>
                        <div
                          data-modal-close="menu"
                          aria-label="M.A.D. Collaboratives"
                          className="logo_symbol ico-28"
                        >
                          <div className="logo w-embed">
                            <MadMark />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-prevent-flicker=""
                  data-scroll-reveal="ctn"
                  className="contact-s_btn"
                >
                  <div
                    data-modal-cta-btn="book-a-call"
                    data-magnetic-btn=""
                    hover-nav-item-trigger=""
                    hover-btn-circle=""
                    className="btn-circle"
                  >
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a
                        hover-nav-item=""
                        aria-label="Start a project"
                        href="#"
                        className="nav-item w-inline-block"
                      >
                        <div className="nav-item_label">
                          <div className="nav-item_label_text">
                            <div hover="text" className="l1">
                              Start a project
                            </div>
                          </div>
                          <div className="nav-item_label_text is-2">
                            <div hover="text" className="l1">
                              Start a project
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="btn-circle_bg w-embed">
                      <svg
                        data-circle=""
                        viewBox="0 0 208 208"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                      >
                        <circle
                          data-arc=""
                          cx={104}
                          cy={104}
                          r="103.5"
                          stroke="currentColor"
                          strokeWidth={1}
                          fill="none"
                          transform="rotate(-150 104 104)"
                        />
                        <circle
                          data-arc=""
                          cx={104}
                          cy={104}
                          r="103.5"
                          stroke="currentColor"
                          strokeWidth={1}
                          fill="none"
                          transform="rotate(30 104 104)"
                        />
                        <circle
                          cx={104}
                          cy={104}
                          r="103.5"
                          stroke="var(--_colors---base-1000--line)"
                          strokeWidth={1}
                          fill="none"
                        />
                      </svg>
                    </div>
                    <a
                      aria-label="Start a project"
                      href="#"
                      className="btn-circle_link w-inline-block"
                    />
                  </div>
                </div>
              </div>
              <div className="u-272 b-mob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
