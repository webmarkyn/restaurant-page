export default function header() {
  const header = document.createElement("header");
  header.style.cssText = `
        width: 100%;
        height: 400px;
        background: url('./assets/header.jpg');
        background-size: 100% 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
    `;
  const h1 = document.createElement("h1");
  h1.innerText = "The best Restaurant"
  h1.style.cssText = `
        font-family: 'Trebuchet MS', Arial, sans-serif;
        font-size: 43px;
    `;
  header.appendChild(h1);
  return header;
}
