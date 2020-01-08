export default function tabs() {
  const tabsEl = document.createElement('div');
  tabsEl.style.cssText = `
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center
    `;
  const tabsNav = document.createElement('div');
  const contacts = document.createElement('a');
  contacts.innerText = 'Contacts';
  contacts.href = '#contacts';
  const menu = document.createElement('a');
  menu.innerText = 'Menu';
  menu.href = '#menu';
  tabsNav.appendChild(contacts);
  tabsNav.appendChild(menu);
  tabsNav.classList.add('tabs-nav');
  tabsEl.appendChild(tabsNav);
  return tabsEl;
}
