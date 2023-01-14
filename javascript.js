var columns = 3;
var rows = 4;

var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.textContent = i + '-' +j; // set text
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);