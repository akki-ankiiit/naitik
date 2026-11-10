import { projects } from "../../data/projects";
import { archive, studio } from "../../data/studio";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section data-bg="light" className="section clip">
      <div className="container">
        <div className="apart-w">
          <div className="apart-s">
            <div className="u-48" />
            <div className="u-272" />
            <div className="grid">
              <div className="apart-s_cms">
                <div className="apart-s_title">
                  <h1 data-scroll-reveal="h" className="h1">
                    Selected spaces
                  </h1>
                  <div className="h1 b-desk">{String(projects.length).padStart(2, "0")}</div>
                </div>
                <div className="u-24" />
                <p className="p1 portfolio-intro">
                  Residential interiors by M.A.D. Collaboratives, as published by the
                  studio and in Sylph Creatives’ Residence Issue. Designed with
                  restraint, layered with warmth.
                </p>
                <div className="u-64" />
                <div data-scroll-reveal="ctn" className="apart-cms">
                  <div role="list" className="apart-cms_list">
                    {projects.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                </div>
                <div className="u-160" />
                <div className="mad-archive">
                  <div className="mad-archive_head">
                    <p className="l2">Archive</p>
                    <div className="u-16" />
                    <h2 data-scroll-reveal="h" className="h2">
                      More from the studio
                    </h2>
                    <div className="u-24" />
                    <p className="p1">
                      Bodies of work collected on the studio’s Instagram. Full project
                      pages will follow.
                    </p>
                  </div>
                  <ul className="mad-archive_list" role="list">
                    {archive.map((name) => (
                      <li key={name} data-scroll-reveal="p">
                        <a
                          className="h4"
                          href={studio.instagram.studio.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {name}
                          <span className="l2 reg">On Instagram ↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="u-160" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
