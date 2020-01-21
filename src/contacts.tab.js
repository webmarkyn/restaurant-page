export default function contacts() {
  const contactsEl = document.createElement('div');
  contactsEl.classList.add('tab');
  contactsEl.id = 'contacts';
  const info = document.createElement('p');
  info.innerText = `
        Book a table: +17777777777
        Ask something: +1888888888
        email: best_restaurant@gmail.com
    `;
  contactsEl.appendChild(info);
  return contactsEl;
}
