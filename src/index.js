import header from "./header.component";
import article from "./article.component";
import tabs from "./tabs.component";
import menu from "./menu.tab";
import contacts from "./contacts.tab";

const content = document.getElementById("content");
const docTabs = tabs();
const menuTab = menu();
const contactsTab = contacts();
content.appendChild(header());
content.appendChild(article());
content.appendChild(docTabs);

docTabs.appendChild(menuTab);
docTabs.appendChild(contactsTab);

const domTabs = [...docTabs.querySelectorAll(".tab")];

const ShowTab = target => {
    domTabs.forEach(el => el.style.display = "none")
    document.getElementById(target).style.display = "block"
}

[...docTabs.querySelector('.tabs-nav').querySelectorAll('a')].forEach(el => {
    el.addEventListener('click', e => {
        ShowTab(e.target.href.split('#').pop())
    }) 
})

ShowTab('contacts')

console.log([...docTabs.querySelector('.tabs-nav').querySelectorAll('a')]);
