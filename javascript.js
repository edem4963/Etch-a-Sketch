let box = 50;
let columns = box;
let rows = box;

let grid = document.createElement('div');
grid.className = 'grid';

let containerHeight = 500;
let containerWidth = 500;

grid.style.maxHeight= containerHeight + "px";
grid.style.maxWidth = containerWidth + "px";


for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div'); // create column
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let row = document.createElement('div'); // create row
        row.className = 'row';
        row.style.height = (containerHeight/rows) + "px";
        row.style.width = (containerWidth/rows) + "px";
        row.style.borderStyle = "solid";
        row.style.borderWidth = "1px";
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);

const hover = document.querySelectorAll("div.row");
console.log(hover);
hover.forEach( (item) => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = "red";
    })
});