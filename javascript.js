let box = 16;// initial box when the page is first loaded

// created a function for the grid to mae it resuable with an event listener
function gridstruct(){

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
hover.forEach( (item) => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = "red";
    })
});
}

gridstruct();// call functions of grid for inital load

// build a button that allow user to input the # of rows and columns for the grid
let btn = document.querySelector('#btn');
btn.addEventListener('click', () =>{
   let x = prompt('Enter a # for number of rows and column');
   let div = document.getElementsByClassName('grid')[0];
   box = x.valueOf();
   gridstruct();
   div.remove();
});
