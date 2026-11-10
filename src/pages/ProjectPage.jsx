import StudioLayout from '../components/layout/StudioLayout';
import ProjectCard from '../components/portfolio/ProjectCard';
import ImageLightbox from '../components/media/ImageLightbox';
import { projects } from '../data/projects';
import { imgProps, photo } from '../data/media';

function EnquireButton() {
  return <a data-modal-cta-btn="book-a-call" hover-btn="" href="#" className="btn"><div className="btn_label"><div className="btn_label_text"><span hover="text" className="l1">Discuss a project</span></div></div><div className="btn_bg"><div hover="bg" className="btn_bg_fill" /></div></a>;
}

/** Portrait photographs that follow one another are paired; everything else runs full width. */
function layout(gallery) {
  const rows = [];
  for (let index = 0; index < gallery.length; index++) {
    const current = photo(gallery[index]);
    const next = gallery[index + 1] && photo(gallery[index + 1]);
    if (current.height > current.width && next && next.height > next.width) {
      rows.push({ id: gallery[index], size: 'half' }, { id: gallery[index + 1], size: 'half' });
      index++;
    } else rows.push({ id: gallery[index], size: 'full' });
  }
  return rows;
}

function Gallery({ project }) {
  return <div className="project-gallery">{layout(project.gallery).map(({ id, size }, index) => {
    const item = photo(id);
    return <figure key={id} className={`project-gallery-item is-${size}`} data-parallax="w">
      <div className="img-w"><img data-lightbox="" {...imgProps(id, size === 'half' ? '(max-width: 991px) 45vw, 25vw' : '(max-width: 991px) 100vw, 55vw')} className="img" loading={index ? 'lazy' : 'eager'} /></div>
      <figcaption className="l2 reg">{String(index + 1).padStart(2, '0')} · {item.credit ? `Image: ${item.credit}` : 'Image: M.A.D. Collaboratives'}<a href={item.source} target="_blank" rel="noreferrer">Source ↗</a></figcaption>
    </figure>;
  })}</div>;
}

const accountsFor = project => [...new Set(project.gallery.map(id => {
  const item = photo(id);
  return item.credit ? item.credit : '@m.a.d_collaboratives';
}))].join(' · ');

export default function ProjectPage({ project }) {
  const start = projects.findIndex(item => item.slug === project.slug);
  const related = [1, 2, 3].map(step => projects[(start + step) % projects.length]);
  const rows = [
    ['Type', project.category],
    ['Published by', accountsFor(project)],
    ['Published', project.published],
    ['Photographs', String(project.gallery.length).padStart(2, '0')],
  ];
  return <StudioLayout breadcrumb="Selected spaces" ctaImage={project.slug === 'lounge' ? 'DbEGd80JFW9-00' : undefined}>
    <section data-bg="light" className="section clip project-detail"><div className="container"><div className="lot-w"><div className="lot-s">
      <div className="lot-s_info"><div className="grid h-100"><div className="lot-s_info_c">
        <div className="lot-s_info_header is-top"><div className="u-48" /><div className="u-272 b-mob" /><p className="l2 reg">Space {project.number} · M.A.D. Collaboratives</p><div className="u-24" /><h1 className="h3 project-title">{project.title}</h1><div className="u-24" /><p className="p1">{project.summary}</p><div className="u-16" /></div>
        <div className="b-mob"><Gallery project={project} /></div>
        <div data-lenis-scroll="" className="lot-s_info_t scrollbar-none"><div className="u-32" />
          <div className="lot-s_info_data">{rows.map(([label, value]) => <div className="data-item" key={label}><h2 className="l1 reg">{label}</h2><div className="u-8" /><p className="h5">{value}</p></div>)}</div>
          <div className="u-48" />
          <div data-tabs="" className="lot-s_info_more"><div data-tabs-hilight="hor" className="tabs"><button data-tab="" data-tab-trigger="notes" hover-tab="" className="tab studio-tab"><span className="l1">In their words</span></button><button data-tab="" data-tab-trigger="credits" hover-tab="" className="tab studio-tab"><span className="l1">Credits</span></button><div className="tabs_line"><div className="line-h" /></div><div data-tab-hilight="" className="tabs_hilight" /></div>
            <div className="lot-s_info_more_contents">
              <div data-tab-content="notes" className="lot-s_info_more_content is-1"><div className="u-24" />{project.notes.map(note => <blockquote key={note.source} data-tab="p" className="project-note"><p className="p1">“{note.text}”</p><footer className="l2 reg"><a href={note.source} target="_blank" rel="noreferrer">{note.by} ↗</a></footer></blockquote>)}<div className="u-24" /></div>
              <div data-tab-content="credits" className="lot-s_info_more_content"><div className="u-24" /><p data-tab="p" className="p1">Interior design: M.A.D. Collaboratives, led by Naitik Parekh. Photography as published by {project.credits.join(' and ')}.</p>{project.groupingNote && <><div className="u-16" /><p data-tab="p" className="l2 reg">{project.groupingNote} Project name, location and year to be confirmed by the studio.</p></>}<div className="u-48" /></div>
            </div>
          </div>
        </div>
        <div className="lot-s_info_b"><div className="u-24" /><EnquireButton /><div className="u-48" /></div><div className="lot-s_info_line is-top"><div className="line-v" /></div>
      </div></div></div>
      <div className="lot-s_media b-desk"><div className="grid"><div className="lot-s_media_c"><Gallery project={project} /></div></div></div>
    </div></div></div></section>
    <section data-bg="light" className="section project-related"><div className="container"><p className="l2 a-center">Continue exploring</p><div className="u-32" /><h2 data-scroll-reveal="h" className="h2 a-center">More spaces</h2><div className="u-64" /><div className="apart-cms_list" role="list">{related.map(item => <ProjectCard project={item} key={item.slug} />)}</div><div className="u-96" /></div></section>
    <ImageLightbox />
  </StudioLayout>;
}
