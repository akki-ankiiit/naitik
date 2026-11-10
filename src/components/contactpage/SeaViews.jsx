import { imgProps } from "../../data/media";

/** Closing CTA on the contact page, pointing back to the work. */
export default function SeaViews() {
  return (
    <section data-bg="color" className="section theme_on-color">
      <div data-footer-clip="" className="container">
        <div className="cta-w">
          <div className="cta-s">
            <div className="u-48" />
            <div className="grid">
              <div className="cta-s_desc">
                <p data-scroll-reveal="p" className="l1 a-center">
                  Homes designed to be lived in, not just admired.
                </p>
              </div>
            </div>
            <div className="u-272" />
            <div className="grid">
              <div className="cta-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  Selected
                  <br />
                  spaces
                </h2>
                <div className="u-32" />
                <h3 data-scroll-reveal="h" className="c1 a-center">
                  Boutique design. Bespoke living.
                </h3>
                <div className="u-160" />
                <div data-scroll-reveal="ctn" className="cta-s_title_btn">
                  <div
                    hover-btn-circle=""
                    data-magnetic-btn=""
                    hover-nav-item-trigger=""
                    className="btn-circle"
                  >
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a
                        hover-nav-item=""
                        aria-label="Explore the work"
                        href="/projects"
                        className="nav-item w-inline-block"
                      >
                        <div className="nav-item_label">
                          <div className="nav-item_label_text">
                            <div hover="text" className="l1">
                              Explore the work
                            </div>
                          </div>
                          <div className="nav-item_label_text is-2">
                            <div hover="text" className="l1">
                              Explore the work
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
                      aria-label="Explore the work"
                      href="/projects"
                      className="btn-circle_link w-inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w_bg">
            <div data-parallax="w" className="img-w">
              <img
                data-parallax="img"
                {...imgProps("DdTVTrgzFru-00-fourposter")}
                loading="lazy"
                className="img-p"
              />
              <div className="img-over-grad from-top _4x" />
              <div className="img-over-grad" />
              <div className="img-over-grad" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
