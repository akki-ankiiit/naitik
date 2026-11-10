import { imgProps, photo } from "../../data/media";

export default function ProjectCard({ project }) {
  const credit = photo(project.card).credit;
  return (
    <div role="listitem" className="apart-cms_list_item">
      <a
        href={`/projects/${project.slug}`}
        hover-apart-card=""
        hover-img-card=""
        className="apart-card portfolio-card"
      >
        <div className="apart-card_c">
          <div className="apart-card_t">
            <p className="l2 a-center">{project.number}</p>
            <div className="u-4" />
            <p className="l2 reg a-center">{project.category}</p>
          </div>
          <div className="u-24" />
          <div className="portfolio-card-image">
            <img
              hover="img"
              {...imgProps(project.card, "(max-width: 991px) 90vw, 30vw")}
              loading="lazy"
            />
          </div>
          <div className="u-24" />
          <div className="apart-card_b">
            <h2 className="h5 a-center portfolio-card-title">{project.title}</h2>
            <div className="u-16" />
            <div className="apart-card_data-list">
              <span className="l2 reg">
                {project.gallery.length} {project.gallery.length === 1 ? "photograph" : "photographs"}
              </span>
              <span className="data-divider" />
              <span className="l2 reg">{credit ? `Via ${credit}` : "Studio post"}</span>
            </div>
            <div className="u-16" />
            <p className="l2 reg a-center">
              View the space <span aria-hidden="true">↗</span>
            </p>
          </div>
        </div>
        <div className="portfolio-card-frame" />
        <div hover="shadow" className="apart-card_shadow" />
      </a>
    </div>
  );
}
