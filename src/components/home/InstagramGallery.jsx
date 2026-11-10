import { studio } from "../../data/studio";

/** A curated selection of posts, each linking to the original. Not a live feed. */
const posts = [
  { id: "DbEGd80JFW9-00", account: "m.a.d_collaboratives", alt: "Living room with an ink-wash mural and a veined stone coffee table" },
  { id: "DdTVu4Ak5xq-00", account: "sylph_consultancy", alt: "Sylph Creatives cover: M.A.D Collaborative by Naitik Parekh, The Residence Issue" },
  { id: "DZc4X9PIFWc-00", account: "m.a.d_collaboratives", alt: "Washroom with travertine walls and a dark fluted vanity" },
  { id: "DdHWUl2TNsn-00", account: "naitik67", alt: "Portrait of Naitik Parekh" },
];

const accounts = [
  { ...studio.instagram.studio, label: "The studio" },
  { ...studio.instagram.naitik, label: "Naitik Parekh" },
];

export default function InstagramGallery() {
  return (
    <section data-bg="light" className="section theme_on-light mad-social" aria-labelledby="mad-social-title">
      <div className="container">
        <div className="u-160 b-desk" />
        <div className="u-96 b-mob" />
        <div className="mad-social_head">
          <h2 id="mad-social-title" data-scroll-reveal="h" className="h2">
            On Instagram
          </h2>
          <ul className="mad-social_accounts" role="list">
            {accounts.map((account) => (
              <li key={account.handle} data-scroll-reveal="p">
                <span className="l2 reg">{account.label}</span>
                <a className="h5" href={account.url} target="_blank" rel="noreferrer">
                  {account.handle} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="u-48" />
        <ul data-scroll-reveal="ctn" className="mad-social_grid" role="list">
          {posts.map((post) => (
            <li key={post.id}>
              <a
                hover-img-card=""
                href={`https://www.instagram.com/p/${post.id.split("-")[0]}/`}
                target="_blank"
                rel="noreferrer"
                aria-label={`${post.alt}. View the post by @${post.account} on Instagram`}
              >
                <span className="mad-social_img">
                  <img hover="img" src={`/assets/mad/thumbnails/mad-${post.id}.webp`} alt="" width="480" height="640" loading="lazy" />
                </span>
                <span className="l2 reg">@{post.account}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="u-24" />
        <p className="l2 reg mad-social_note">A curated selection. Each image links to its original post.</p>
        <div className="u-160 b-desk" />
        <div className="u-96 b-mob" />
      </div>
    </section>
  );
}
