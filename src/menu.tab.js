export default function menu() {
  const menu = document.createElement("div");
  menu.classList.add('tab')
  menu.id = "menu";
  const menuTable = document.createElement("table");
  menuTable.innerHTML = `
        <thead>
            <tr>
                <td>Item</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lobster</td>
                <td>50$</td>
            </tr>
            <tr>
                <td>Apple cake</td>
                <td>15$</td>
            </tr>
            <tr>
                <td>Pumpkin pie</td>
                <td>20$</td>
            </tr>
            <tr>
                <td>Breakfest menu</td>
                <td>40$</td>
            </tr>
        </tbody>
    `;
  menu.appendChild(menuTable);
  return menu;
}
