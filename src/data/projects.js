import { photo } from './media';

/**
 * Spaces published by or about M.A.D. Collaboratives (docs/research/project-inventory.md).
 * Titles describe what the photographs show; the studio's own project names, locations
 * and years are not public yet, so `detailsVerified` stays false until confirmed.
 */
const list = [
  {
    slug: 'living-dining-bar',
    title: 'Living, Dining & Bar',
    category: 'Residential interior',
    location: null,
    summary: 'A restrained palette and elevated materiality: soft ink-wash walls, veined stone and navy accents, carried from the living room to a mirrored bar niche and a black marble dining table.',
    notes: [
      { text: 'We don’t decorate spaces. We compose experiences. Designed with a restrained palette and elevated materiality, this seating area celebrates the beauty of proportion, texture, and light. A home where every corner invites you to pause.', source: 'https://www.instagram.com/p/DbEGd80JFW9/', by: '@m.a.d_collaboratives' },
      { text: 'Where mornings begin with sunlight and evenings settle into comfort. Designed with restraint, layered with warmth, and finished with timeless elegance.', source: 'https://www.instagram.com/p/DbGTXd8JiZZ/', by: '@m.a.d_collaboratives' },
    ],
    cover: 'DbGTXd8JiZZ-00',
    card: 'DdTVTrgzFru-00-dining',
    gallery: ['DbGTXd8JiZZ-00', 'DbEGd80JFW9-00', 'DbEGd80JFW9-00-mural', 'DdTVeuiTnjm-00-bar', 'DdTVTrgzFru-00-dining', 'DbGTXd8JiZZ-00-table', 'DdTVjZYzpDC-00-corner'],
    sources: ['https://www.instagram.com/p/DbEGd80JFW9/', 'https://www.instagram.com/p/DbGTXd8JiZZ/', 'https://www.instagram.com/p/DdTVu4Ak5xq/'],
    published: 'July & September 2026',
    groupingNote: 'Grouped by the shared mirrored niche, navy armchairs and marble dining table seen across the photographs.',
  },
  {
    slug: 'gilded-bedroom',
    title: 'Bedroom with Gilded Relief',
    category: 'Residential interior',
    location: null,
    summary: 'A sculpted ivory wall relief traced in gold rises behind a soft upholstered headboard, layered with velvet, quilting and faux fur.',
    notes: [
      { text: 'Arrival, movement, light, air, landscape, water, entertaining, retreat, unwinding: every seemingly ordinary moment is treated as part of the architecture of everyday life.', source: 'https://www.instagram.com/p/DdTVu4Ak5xq/', by: 'Sylph Creatives' },
    ],
    cover: 'DdTVvujTxs9-00-bedroom',
    card: 'DdTVvujTxs9-00-bedroom',
    gallery: ['DdTVvujTxs9-00-bedroom', 'DdTVvujTxs9-00-relief', 'DdTVvujTxs9-00-headboard'],
    sources: ['https://www.instagram.com/p/DdTVvujTxs9/'],
    published: 'September 2026',
  },
  {
    slug: 'four-poster-bedroom',
    title: 'Bedroom with Glass Four-Poster',
    category: 'Residential interior',
    location: null,
    summary: 'A clear four-poster frame joined in brass keeps the room light, between full-height drapes, warm timber floors and quiet storage walls.',
    notes: [
      { text: 'The studio has continued to evolve, but the destination has remained remarkably clear: to become a defining boutique name in high end residential design, recognised for spaces that are refined, layered, experiential and profoundly individual.', source: 'https://www.instagram.com/p/DdTVTrgzFru/', by: 'Sylph Creatives' },
    ],
    cover: 'DdTVTrgzFru-00-fourposter',
    card: 'DdTVTrgzFru-00-fourposter',
    gallery: ['DdTVTrgzFru-00-fourposter'],
    sources: ['https://www.instagram.com/p/DdTVTrgzFru/'],
    published: 'September 2026',
  },
  {
    slug: 'lounge',
    title: 'Lounge in Stone & Ivory',
    category: 'Residential interior',
    location: null,
    summary: 'Cream upholstery, layered stone tables and a sculptural wall piece, softened by full-height sheers and daylight.',
    notes: [
      { text: 'Natural light and air are not afterthoughts. Landscape and water are not decorative punctuation. Indoor and outdoor spaces are deliberately brought into conversation from the earliest stages, allowing the environment to become part of the experience.', source: 'https://www.instagram.com/p/DdTVeuiTnjm/', by: 'Sylph Creatives' },
    ],
    cover: 'DdTVeuiTnjm-00-living',
    card: 'DdTVeuiTnjm-00-living',
    gallery: ['DdTVeuiTnjm-00-living'],
    sources: ['https://www.instagram.com/p/DdTVeuiTnjm/'],
    published: 'September 2026',
  },
  {
    slug: 'washroom-vanity',
    title: 'Washroom & Powder Vanity',
    category: 'Residential interior',
    location: null,
    summary: 'Travertine-clad walls, fluted dark joinery and black fittings: small rooms given the same material care as the rest of the home.',
    notes: [
      { text: 'Just making sure one of the most neglected space[s] are also well designed with thoughtful materials curation.', source: 'https://www.instagram.com/p/DZc4X9PIFWc/', by: '@m.a.d_collaboratives' },
    ],
    cover: 'DZc4X9PIFWc-00-vanity',
    card: 'DZc4X9PIFWc-00-vanity',
    gallery: ['DZc4X9PIFWc-00-vanity', 'DdTVjZYzpDC-00-vanity'],
    sources: ['https://www.instagram.com/p/DZc4X9PIFWc/', 'https://www.instagram.com/p/DdTVjZYzpDC/'],
    published: 'June & September 2026',
  },
];

export const projects = list.map((project, index) => ({
  ...project,
  id: `project-${String(index + 1).padStart(3, '0')}`,
  number: String(index + 1).padStart(2, '0'),
  coverImage: photo(project.cover).src,
  sourceUrl: project.sources[0],
  credits: [...new Set(project.gallery.map(id => photo(id).credit || 'M.A.D. Collaboratives'))],
  detailsVerified: false,
}));
