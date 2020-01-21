export default function tabs() {
  const tabsEl = document.createElement('div');
  tabsEl.id = 'tabs';
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
  const currentContent = document.createElement('div');
  currentContent.classList.add('tab');
  currentContent.id = 'currentTab';
  tabsEl.appendChild(currentContent);
  return tabsEl;
}
