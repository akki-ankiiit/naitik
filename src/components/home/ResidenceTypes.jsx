import { projects } from "../../data/projects";
import { imgProps, photo } from "../../data/media";

const featured = [
  { slug: "gilded-bedroom", image: "DdTVvujTxs9-00-bedroom" },
  { slug: "living-dining-bar", image: "DdTVTrgzFru-00-dining" },
  { slug: "washroom-vanity", image: "DZc4X9PIFWc-00-vanity" },
].map((item) => ({ ...item, project: projects.find((p) => p.slug === item.slug) }));

const Arrow = ({ d }) => (
  <div className="ico-16">
    <div className="ico w-embed">
      <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={d} fill="currentColor" />
      </svg>
    </div>
  </div>
);

/** Featured work. Interactions are managed by useSiteExperience. */
export default function ResidenceTypes() {
  return (
    <section data-bg="light" data-snap="" className="section theme_on-brand" aria-label="Featured work">
      <div className="container">
        <div className="apart-type-w">
          <div className="apart-type-s">
            <div className="u-48 b-desk" />
            <div className="u-96 b-mob" />
            <div className="grid fill">
              <div data-slider="" className="apart-type-s_cms">
                <div className="apart-type-cms w-dyn-list">
                  <div role="list" className="apart-type-cms_list w-dyn-items">
                    {featured.map(({ project, image }) => (
                      <div
                        key={project.slug}
                        data-reveal-first=""
                        data-slider="slide"
                        role="listitem"
                        className="apart-type-cms_list_item w-dyn-item"
                      >
                        <div className="apart-type-slide">
                          <div className="apart-type-slide_t b-desk" />
                          <div className="apart-type-slide_c">
                            <div className="grid _8-columns">
                              <div className="apart-type-slide_data">
                                <div className="data-list">
                                  <div className="data-item">
                                    <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">
                                      Type
                                    </h4>
                                    <div className="u-8" />
                                    <p data-scroll-reveal="p" data-slider="p" className="h5">
                                      {project.category}
                                    </p>
                                  </div>
                                  <div className="data-item">
                                    <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">
                                      {photo(image).credit ? "Featured in" : "Published"}
                                    </h4>
                                    <div className="u-8" />
                                    <p data-scroll-reveal="p" data-slider="p" className="h5">
                                      {photo(image).credit || "@m.a.d_collaboratives"}
                                    </p>
                                  </div>
                                </div>
                                <div className="u-48 b-mob" />
                              </div>
                              <div className="apart-type-slide_desc">
                                <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                  {project.summary}
                                </p>
                                <div className="u-24" />
                                <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                  <a
                                    aria-label={`View ${project.title}`}
                                    hover-btn=""
                                    hover-nav-item=""
                                    href={`/projects/${project.slug}`}
                                    className="btn w-inline-block"
                                  >
                                    <div className="btn_label">
                                      <div className="btn_label_text">
                                        <div hover="text" className="l1">View the space</div>
                                      </div>
                                      <div className="btn_label_text is-2">
                                        <div hover="text" className="l1">View the space</div>
                                      </div>
                                    </div>
                                    <div className="btn_bg">
                                      <div hover="bg" className="btn_bg_fill" />
                                    </div>
                                  </a>
                                </div>
                                <div className="u-16 b-mob" />
                              </div>
                            </div>
                          </div>
                          <div className="apart-type-slide_b">
                            <div className="u-48 b-desk" />
                            <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">
                              {project.title}
                            </h3>
                            <div className="u-32 b-mob" />
                          </div>
                          <div className="apart-type-slide_img-w">
                            <div className="apart-type-slide_img">
                              <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                                <img
                                  {...imgProps(image, "(max-width: 991px) 90vw, 40vw")}
                                  loading="eager"
                                  className="img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="u-16" />
                <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                  <div data-slider="prev" className="pag_prev">
                    <Arrow d="M10.4717 12.4717C10.2113 12.7321 9.78866 12.7321 9.52831 12.4717L5.52831 8.47173C5.26796 8.21138 5.26796 7.78872 5.52831 7.52837L9.52831 3.52837C9.78866 3.26802 10.2113 3.26802 10.4717 3.52837C10.732 3.78872 10.732 4.21138 10.4717 4.47173L6.94335 8.00005L10.4717 11.5284C10.732 11.7887 10.732 12.2114 10.4717 12.4717Z" />
                    <div className="pag_prev_label">
                      <div data-slider="current" className="l1">00</div>
                    </div>
                  </div>
                  <div className="pag_progress">
                    <div data-slider="progress" className="pag_progress_fill" />
                  </div>
                  <div data-slider="next" className="pag_next">
                    <div className="pag_prev_label">
                      <div data-slider="next-num" className="l1">00</div>
                    </div>
                    <Arrow d="M5.52833 3.52827C5.78868 3.26792 6.21134 3.26792 6.47169 3.52827L10.4717 7.52827C10.732 7.78862 10.732 8.21128 10.4717 8.47163L6.47169 12.4716C6.21134 12.732 5.78868 12.732 5.52833 12.4716C5.26798 12.2113 5.26798 11.7886 5.52833 11.5283L9.05665 7.99995L5.52833 4.47163C5.26798 4.21128 5.26798 3.78862 5.52833 3.52827Z" />
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48" />
          </div>
        </div>
      </div>
    </section>
  );
}
