import { imgProps } from "../../data/media";
import { studio } from "../../data/studio";

/** Naitik Parekh profile. Interactions are managed by useSiteExperience. */
export default function Architecture() {
  return (
    <section className="section clip" aria-label="Naitik Parekh, Principal Architect">
      <div className="container">
        <div data-video-playpause="" className="arch-scroll-area">
          <div className="arch-intro-s b-desk">
            <div className="w_bg">
              <div className="arch-intro-s_bg_l" />
              <div className="arch-intro-s_bg_r">
                <div className="w-embed" />
              </div>
            </div>
          </div>
          <div className="arch-w theme_on-color">
            <div className="arch-s">
              <div className="arch-s_t">
                <div className="u-48" />
                <h2 data-text="h" data-fit-text="" className="h1 a-center">
                  Naitik Parekh
                </h2>
                <div className="u-32" />
                <div className="grid">
                  <div className="arch-s_desc">
                    <p data-text="p" className="l1 a-center">
                      {studio.principalTitle} · {studio.disciplines.join(" | ")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="arch-s_b">
                <div className="grid">
                  <div className="arch-s_quote w-clearfix">
                    <div className="red-line" />
                    <h3 data-part="p" className="h5">
                      Founder and Principal Architect of M.A.D. Collaboratives,
                      Naitik brings a perspective shaped by an international
                      design education and practice in Bangalore and Singapore.
                    </h3>
                    <div className="u-64" />
                    <div className="grid _4-columns">
                      <div className="arch-s_author">
                        <div data-part="p" className="l1">
                          City Planner | Architect | Interior Designer
                        </div>
                        <div data-part="p" className="l1 reg">
                          Background via Sylph Creatives, Sep 2026
                        </div>
                      </div>
                    </div>
                    <div className="u-160 b-desk" />
                  </div>
                  <div data-part="ctn" className="arch-s_btn b-desk">
                    <div
                      data-magnetic-btn=""
                      hover-nav-item-trigger=""
                      hover-btn-circle=""
                      className="btn-circle"
                    >
                      <div data-magnetic-inner="" className="btn-circle_label">
                        <a
                          hover-nav-item=""
                          aria-label="About the studio"
                          href="/about"
                          className="nav-item w-inline-block"
                        >
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">
                                About the studio
                              </div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">
                                About the studio
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
                        aria-label="About the studio"
                        href="/about"
                        className="btn-circle_link w-inline-block"
                      />
                    </div>
                  </div>
                </div>
                <div className="u-96" />
              </div>
            </div>
            <div className="w_bg">
              <div data-desk="off" data-parallax="w" className="img-w">
                <img
                  className="img"
                  {...imgProps("DdHWUl2TNsn-00")}
                  alt="Naitik Parekh, Principal Architect of M.A.D. Collaboratives, leaning against warm timber joinery"
                  style={{ objectPosition: "50% 22%" }}
                  data-parallax="img"
                  loading="lazy"
                />
                <div className="img-over-grad bot _100vh" />
                <div className="img-over-grad bot _100vh" />
              </div>
            </div>
          </div>
          <div className="_100vh b-desk" />
          <div className="_100vh b-desk" />
          <div className="arch_themes">
            <div data-bg="light" className="arch_themes_light b-desk" />
            <div data-bg="color" className="arch_themes_color" />
          </div>
        </div>
      </div>
    </section>
  );
}
