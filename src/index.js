import header from './header.component';
import article from './article.component';
import tabs from './tabs.component';
import menu from './menu.tab';
import contacts from './contacts.tab';

const content = document.getElementById('content');
const docTabs = tabs();
const allTabs = [menu(), contacts()];
content.appendChild(header());
content.appendChild(article());
content.appendChild(docTabs);
const currentTab = document.getElementById('currentTab');

const ShowTab = (target) => {
  currentTab.innerHTML = allTabs.filter(el => el.id === target).shift().innerHTML;
};

[...docTabs.querySelector('.tabs-nav').querySelectorAll('a')].forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    ShowTab(e.target.href.split('#').pop());
  });
});

ShowTab('contacts');
