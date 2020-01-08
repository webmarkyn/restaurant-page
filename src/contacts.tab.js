export default function contacts() {
  const contacts = document.createElement("div");
  contacts.classList.add('tab')
  contacts.id = "contacts";
  const info = document.createElement("p");
  info.innerText = `
        Book a table: +17777777777
        Ask something: +1888888888
        email: best_restaurant@gmail.com
    `;
  contacts.appendChild(info);
  return contacts;
}
