const fallback = {
  title: 'Page not found — M.A.D. Collaboratives',
  description: 'M.A.D. Collaboratives — boutique interior architecture and design by Naitik Parekh.',
  image: '/assets/mad/social/og-default.jpg',
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/** Per-route title, description and social metadata. Canonical URLs wait for a confirmed domain. */
export function applyMeta(route) {
  const title = route?.title || fallback.title;
  const description = route?.description || fallback.description;
  const image = new URL(route?.image || fallback.image, window.location.origin).href;
  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:url', window.location.href);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);
}
