import { imgProps } from "../../data/media";
/** Migrated reference markup. Interactions are managed by useSiteExperience. */
export default function Hero() {
  return (
    <section id="hero" className="section clip theme_on-color">
      <div className="container">
        <div className="hero-scroll-area">
          <div data-tabs-hero="" className="hero-w">
            <div className="hero-s">
              <div className="u-48" />
              <div className="u-272 b-mob" />
              <div className="grid">
                <div className="hero-s_logo">
                  <h1
                    data-prevent-flicker=""
                    data-scroll-reveal="h"
                    className="h1 a-center"
                  >
                    M.A.D.
                  </h1>
                  <div className="hero-s_logo_a">
                    <h2
                      data-prevent-flicker=""
                      data-scroll-reveal="a"
                      className="a2"
                    >
                      Collaboratives
                    </h2>
                  </div>
                </div>
              </div>
              <div className="u-48" />
              <div className="grid">
                <h3 className="hero-s_title h5">
                  <span
                    data-scroll-reveal="h"
                    data-prevent-flicker=""
                    className="a-left"
                  >
                    <div className="span">Make a</div>
                  </span>
                  <div
                    data-prevent-flicker=""
                    data-scroll-reveal="ctn"
                    className="hero-s_tabs"
                  >
                    <a
                      hover-tab=""
                      aria-label="Show the living photograph"
                      hover-nav-item-l2=""
                      data-tab-trigger="day"
                      href="#"
                      className="nav-item w-inline-block"
                    >
                      <div className="nav-item_label">
                        <div hover="text" className="nav-item_label_text">
                          <div className="l2">living</div>
                        </div>
                        <div hover="text" className="nav-item_label_text is-2">
                          <div className="l2">living</div>
                        </div>
                      </div>
                    </a>
                    <div className="hero-s_tabs_divider" />
                    <a
                      hover-tab=""
                      aria-label="Show the retreat photograph"
                      hover-nav-item-l2=""
                      data-tab-trigger="night"
                      href="#"
                      className="nav-item w-inline-block"
                    >
                      <div className="nav-item_label">
                        <div hover="text" className="nav-item_label_text">
                          <div className="l2">retreat</div>
                        </div>
                        <div hover="text" className="nav-item_label_text is-2">
                          <div className="l2">retreat</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <span
                    data-scroll-reveal="h"
                    data-prevent-flicker=""
                    className="a-right"
                  >
                    <div className="span">difference</div>
                  </span>
                </h3>
              </div>
            </div>
            <div className="hero-w_bg">
              <div className="hero-w_bg_master">
                <div className="hero-w_bg_master_img">
                  <div
                    data-tab-content="day"
                    className="hero-w_bg_master_img_day"
                  >
                    <div data-tab="img" className="img-w h-auto">
                      <img
                        loading="eager"
                        fetchPriority="high"
                        {...imgProps("DbGTXd8JiZZ-00")}
                        className="img h-auto hero-img"
                      />
                    </div>
                  </div>
                  <div
                    data-tab-content="night"
                    className="hero-w_bg_master_img_night"
                  >
                    <div data-tab="img" className="img-w h-auto">
                      <img
                        loading="lazy"
                        {...imgProps("DdTVvujTxs9-00-bedroom")}
                        className="img h-auto hero-img"
                      />
                    </div>
                  </div>
                  <div className="img-over-grad from-top _100vh" />
                  <div className="img-over-grad from-bot bot _6x" />
                  <div className="img-over-grad from-bot bot _6x" />
                </div>
                <div className="hero-s_b">
                  <div
                    data-prevent-flicker=""
                    data-scroll-reveal="ctn"
                    className="hero-s_btn"
                  >
                    <div className="e-auto">
                      <div
                        hover-btn-circle=""
                        data-magnetic-btn=""
                        hover-nav-item-trigger=""
                        className="btn-circle"
                      >
                        <div
                          data-magnetic-inner=""
                          className="btn-circle_label"
                        >
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
                  <div className="u-32" />
                  <div className="grid">
                    <div className="hero-s_desc">
                      <p className="l1 a-center">
                        Interior architecture &amp; design · Naitik Parekh
                      </p>
                    </div>
                  </div>
                  <div className="u-48" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero_themes">
            <div data-bg="color" className="hero_themes_color" />
            <div data-bg="light" className="hero_themes_light" />
          </div>
        </div>
      </div>
    </section>
  );
}
