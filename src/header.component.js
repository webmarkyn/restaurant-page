export default function header() {
  const headerEl = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.innerText = 'The best Restaurant';
  headerEl.appendChild(h1);
  return headerEl;
}
