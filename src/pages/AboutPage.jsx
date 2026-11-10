import StudioLayout from '../components/layout/StudioLayout';
import { imgProps } from '../data/media';
import { quotes, studio } from '../data/studio';

const approach = [
  { title: 'Composed, not decorated', text: quotes.compose.text, by: quotes.compose.by, url: quotes.compose.url },
  { title: 'Light, air, landscape', text: quotes.light.text, by: quotes.light.by, url: quotes.light.url },
  { title: 'Every layer, aligned', text: quotes.layers.text, by: quotes.layers.by, url: quotes.layers.url },
  { title: 'Made to be lived in', text: quotes.lived.text, by: quotes.lived.by, url: quotes.lived.url },
];

const recognition = [
  { label: 'Award', title: 'FOAID 2021, Best Apartment Design (Interiors), Under 35', note: 'For the first complete project after the studio’s launch. As reported by Sylph Creatives.', url: 'https://www.instagram.com/p/DdTVTrgzFru/' },
  { label: 'Feature', title: 'Sylph Creatives, The Residence Issue', note: '“The art of designing the way life is lived”. Cover feature, September 2026.', url: studio.feature.url },
  { label: 'Panel', title: 'Design Unfiltered × Kajaria, Raipur Edition', note: 'Naitik Parekh in conversation as a panellist, October 2026.', url: null },
];

export default function AboutPage() {
  return <StudioLayout breadcrumb="About the studio" ctaImage="DbEGd80JFW9-00">
    <section data-bg="light" className="section clip mad-about">
      <div className="container">
        <div className="u-272" />
        <div className="mad-about_intro">
          <p className="l2">About · {studio.meaning}</p>
          <div className="u-24" />
          <h1 data-scroll-reveal="h" className="h1">M.A.D. Collaboratives</h1>
          <div className="u-48" />
          <div className="mad-about_intro_cols">
            <p data-scroll-reveal="p" className="h5">A boutique design firm creating holistic spatial spaces. The name is a promise: M.A.D. stands for Make A Difference.</p>
            <p data-scroll-reveal="p" className="p1">Led by Principal Architect {studio.principal}, the studio works across architecture, spatial planning and interiors for distinctive, deeply personal residences. There is no signature look. Each home begins with its context, its architecture and the people who will live in it.</p>
          </div>
        </div>
        <div className="u-160" />
      </div>
    </section>

    <section data-bg="light" className="section clip mad-about">
      <div className="container">
        <div className="mad-about_wide" data-parallax="w">
          <div className="img-w"><img data-parallax="img" {...imgProps('DbGTXd8JiZZ-00', '100vw')} className="img" loading="eager" /></div>
        </div>
        <div className="u-24" />
        <p className="l2 reg">Living room, as published by @m.a.d_collaboratives</p>
        <div className="u-160" />
      </div>
    </section>

    <section data-bg="light" className="section clip mad-about" aria-labelledby="about-naitik">
      <div className="container">
        <div className="mad-about_person">
          <div className="mad-about_portrait" data-parallax="w">
            <div className="img-w"><img data-parallax="img" {...imgProps('DdHWUl2TNsn-00', '(max-width: 991px) 90vw, 40vw')} alt="Naitik Parekh, Principal Architect of M.A.D. Collaboratives" className="img" loading="lazy" /></div>
            <p className="l2 reg">Photograph: @ravina.nathani</p>
          </div>
          <div className="mad-about_bio">
            <p className="l2">Founder · {studio.principalTitle}</p>
            <div className="u-24" />
            <h2 id="about-naitik" data-scroll-reveal="h" className="h2">{studio.principal}</h2>
            <div className="u-24" />
            <p data-scroll-reveal="p" className="l1">{studio.disciplines.join(' | ')}</p>
            <div className="u-48" />
            <p data-scroll-reveal="p" className="p1">Naitik’s approach is shaped by an international design education and professional experience in Bangalore and Singapore. That wider exposure informs a practice where the built environment, its landscape and the life lived within it are considered together.</p>
            <div className="u-48" />
            <blockquote className="mad-about_quote">
              <p data-scroll-reveal="p" className="h5">“{quotes.signature.text}”</p>
              <div className="u-24" />
              <footer className="l2 reg">{quotes.signature.by}, <a href={quotes.signature.url} target="_blank" rel="noreferrer">via {quotes.signature.via} ↗</a></footer>
            </blockquote>
            <div className="u-48" />
            <a className="h5" href={studio.instagram.naitik.url} target="_blank" rel="noreferrer">{studio.instagram.naitik.handle} ↗</a>
          </div>
        </div>
        <div className="u-160" />
      </div>
    </section>

    <section data-bg="color" className="section clip theme_on-color mad-about" aria-labelledby="about-approach">
      <div className="container">
        <div className="u-160" />
        <p className="l2 a-center">Approach</p>
        <div className="u-24" />
        <h2 id="about-approach" data-scroll-reveal="h" className="h2 a-center">One complete experience</h2>
        <div className="u-96" />
        <ol className="mad-about_approach">
          {approach.map((item, index) => <li key={item.title}>
            <span className="l2">{String(index + 1).padStart(2, '0')}</span>
            <h3 data-scroll-reveal="h" className="h4">{item.title}</h3>
            <p data-scroll-reveal="p" className="p1">“{item.text}”</p>
            <a className="l2 reg" href={item.url} target="_blank" rel="noreferrer">{item.by} ↗</a>
          </li>)}
        </ol>
        <div className="u-160" />
      </div>
    </section>

    <section data-bg="light" className="section clip mad-about" aria-labelledby="about-recognition">
      <div className="container">
        <div className="u-160" />
        <div className="mad-about_press">
          <div className="mad-about_press_cover" data-parallax="w">
            <div className="img-w"><img data-parallax="img" {...imgProps('DdTVu4Ak5xq-00', '(max-width: 991px) 90vw, 35vw')} className="img" loading="lazy" /></div>
            <p className="l2 reg">Cover: Sylph Creatives, The Residence Issue</p>
          </div>
          <div>
            <p className="l2">Recognition</p>
            <div className="u-24" />
            <h2 id="about-recognition" data-scroll-reveal="h" className="h2">In print and in conversation</h2>
            <div className="u-64" />
            <ul className="mad-about_list" role="list">
              {recognition.map(item => <li key={item.title}>
                <span className="l2 reg">{item.label}</span>
                <div>
                  <h3 className="h5">{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title} ↗</a> : item.title}</h3>
                  <div className="u-8" />
                  <p className="p1">{item.note}</p>
                </div>
              </li>)}
            </ul>
          </div>
        </div>
        <div className="u-160" />
      </div>
    </section>
  </StudioLayout>;
}
