let num = 9;
// let num_set = Number(prompt("enter a number (integer > 0) : ", "9"));

const table = document.createElement("table");
table.setAttribute("style", "border-collapse: collapse; text-align: center; font-family: 'Comic Sans MS', cursive; font-size: 20px; color: white;");
const tbody = document.createElement("tbody");

// [1..9]
const row = document.createElement("tr");
row.setAttribute("style", "border: 1px solid white; width: 50px; height: 40px;");
for (let i = 0; i <= 9; i++) {
    const cell = document.createElement("td");
    cell.setAttribute("style", "border: 1px solid white; width: 50px; height: 40px;");
    let cell_block = document.createElement("span");
    let cell_value;
    if (i === 0){
        cell_value = document.createTextNode(` `);
    } else {
        cell_value = document.createTextNode(`${i}`);
        cell_block.style.color = "blueviolet";
    }
    cell_block.appendChild(cell_value);
    cell.appendChild(cell_block);
    row.appendChild(cell);
}
tbody.appendChild(row);

// [1..9][1..9]
for (let i = 1; i <= 9; i++) {
    const row = document.createElement("tr");
    row.setAttribute("style", "border: 1px solid white; width: 50px; height: 40px;");
    for (let j = 0; j <= 9; j++) {
        const cell = document.createElement("td");
        cell.setAttribute("style", "border: 1px solid white; width: 50px; height: 40px;");
        let cell_block = document.createElement("span");
        let cell_value;
        if (i*j === 0){
            cell_value = document.createTextNode(`${i}`);
            cell_block.style.color = "blueviolet";
        } else {
            cell_value = document.createTextNode(`${i*j}`);
        }
        cell_block.appendChild(cell_value);
        cell.appendChild(cell_block);
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

table.appendChild(tbody);
document.body.appendChild(table);

