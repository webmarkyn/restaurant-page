export default function article() {
  const articleEl = document.createElement('articleEl');
  articleEl.style.cssText = `
        display: flex;
        justify-content: center;
    `;
  const p = document.createElement('p');
  p.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    aliquid eligendi, cum, aut minus tenetur facilis asperiores quis
    itaque ex hic neque debitis aperiam sed quibusdam sequi eum aspernatur
    dolores laboriosam exercitationem natus quam officia at voluptatum.
    Suscipit, ipsum culpa distinctio illo officiis, quidem unde alias
    voluptates modi similique, mollitia enim non perspiciatis ad
    accusantium consectetur debitis! Itaque, nisi. Voluptatem magnam nulla
    obcaecati magni aut. Labore expedita voluptates alias. Mollitia,
    necessitatibus? Enim atque quidem eligendi quo! Sequi deleniti
    voluptas recusandae. Dolores, sequi at omnis saepe totam iusto
    voluptate. Nesciunt maxime ab officiis quidem, harum sint libero quo
    sequi ratione velit error repellendus similique facere esse autem,
    eaque repellat, pariatur molestiae? Exercitationem eos voluptatibus
    odit voluptates, corporis earum nihil, ipsa harum neque, pariatur
    reiciendis sint et veritatis quo perferendis ullam voluptate quisquam
    incidunt deserunt! Dolorem, quidem? Tenetur mollitia, vel soluta
    tempore in cupiditate odit quis voluptatum debitis, ullam officia ad
    error provident quia deserunt atque delectus quaerat voluptas fuga
    incidunt ex aperiam aut illo sit! Ea a, ipsa ipsum ducimus dolore at
    atque impedit neque fugiat ab illo quae repellat dicta itaque
    consequuntur, doloremque aspernatur omnis maxime cumque magni. Debitis
    corporis deleniti iusto aspernatur aperiam nesciunt, mollitia alias
    nisi provident obcaecati?`;
  p.style.cssText = `
        max-width: 600px;
        font-size: 17px;
        text-align: center;
      `;
  articleEl.appendChild(p);
  return articleEl;
}
