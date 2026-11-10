import MadMark from "./MadMark";
import { studio } from "../../data/studio";

const NavLabel = ({ children }) => (
  <div className="nav-item_label">
    <div className="nav-item_label_text">
      <div hover="text" className="l1">{children}</div>
    </div>
    <div className="nav-item_label_text is-2">
      <div hover="text" className="l1">{children}</div>
    </div>
  </div>
);

/** Site footer. Interactions are managed by useSiteExperience. */
export default function Footer({ showTop = true }) {
  return (
    <section data-bg="dark" className="section theme_on-dark">
      <div className="container">
        <div className="footer-w">
          {showTop && <a href="#hero" className="footer-s_s-top w-inline-block">
            <div className="l2">To top</div>
            <div className="s-down_arrow w-embed">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 48 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.6345 9C40.8959 8.45299 41.1486 7.97436 41.3926 7.56411C41.6541 7.15385 41.9068 6.81197 42.1508 6.53846L2.99981 6.53846L2.99981 5.46154L42.1508 5.46154C41.9068 5.17094 41.6541 4.82051 41.3926 4.41026C41.1486 4 40.8959 3.52992 40.6345 3L41.5495 3C42.6475 4.24787 43.7979 5.17094 45.0005 5.76923L45.0005 6.23077C43.7979 6.81197 42.6475 7.73504 41.5495 9L40.6345 9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>}
          <div className="footer-s">
            <div className="footer-s_t" />
            <div className="footer-s_c">
              <div className="grid">
                <div className="footer-s_contact">
                  <div className="s_logo">
                    <div data-text="ctn" className="logo_symbol ico-64">
                      <div className="logo w-embed">
                        <MadMark />
                      </div>
                    </div>
                  </div>
                  <div className="u-32" />
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div
                        role="listitem"
                        className="contact-cms_list_item w-dyn-item"
                      >
                        <a
                          href={studio.instagram.studio.url}
                          target="_blank"
                          className="nav-item w-inline-block"
                          rel="noopener noreferrer"
                          aria-label="M.A.D. Collaboratives on Instagram"
                        >
                          <div data-text="h" className="h2 a-center mad-footer-handle">
                            {studio.instagram.studio.handle}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-48" />
                </div>
                <div className="footer-s_address">
                  <div className="loc-cms w-dyn-list">
                    <div role="list" className="loc-cms_list w-dyn-items">
                      <div
                        data-text="ctn"
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
                </div>
              </div>
            </div>
            <div className="footer-s_b">
              <div className="grid">
                <div className="footer-s_info">
                  <div data-text="p" className="l1">
                    M.A.D. Collaboratives.
                  </div>
                  <div data-text="p" className="l1 reg no-wrap">
                    ©<span className="year">{new Date().getFullYear()}</span> All rights reserved
                  </div>
                  <div className="u-12" />
                  <div data-text="p" className="legal-cms w-dyn-list">
                    <div
                      data-comma-list=""
                      role="list"
                      className="legal-cms_list w-dyn-items"
                    >
                      <div
                        role="listitem"
                        className="legal-cms_list_item w-dyn-item"
                      >
                        <a
                          hover-nav-item=""
                          aria-label="Privacy policy"
                          href="/privacy"
                          className="nav-item w-inline-block"
                        >
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">
                                Privacy policy
                              </div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">
                                Privacy policy
                              </div>
                            </div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">
                          ,
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="legal-cms_list_item w-dyn-item"
                      >
                        <a
                          hover-nav-item=""
                          aria-label="Terms of Use"
                          href="/terms"
                          className="nav-item w-inline-block"
                        >
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">
                                Terms of Use
                              </div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">
                                Terms of Use
                              </div>
                            </div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">
                          ,
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-s_credits">
                  <div hover-nav-item-trigger="" className="credits">
                    <div data-text="ctn" className="credits_logo-w">
                      <div className="studio-credit-mark">Make A Difference</div>
                    </div>
                    <div className="u-12" />
                    <div data-text="p" className="l1 reg a-right">
                      {studio.principalTitle}
                    </div>
                    <div data-text="p">
                      <a
                        hover-nav-item=""
                        aria-label="Naitik Parekh on Instagram"
                        href={studio.instagram.naitik.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-item w-inline-block"
                      >
                        <NavLabel>{studio.principal}</NavLabel>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-48" />
            </div>
          </div>
          <div className="footer-w_bg" />
        </div>
      </div>
    </section>
  );
}
