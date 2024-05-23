let game = document.getElementById("game-container");

    var rows = 20;
    var cols = 100;
    var grid = new Array(rows);
    var nextGrid = new Array(rows);
    var grid = new Array(rows);
    var nextGrid = new Array(rows);
    var timer;
    var reproductionTimer = 100;

//Initialiser les fonctions
function initializeGrids()
{
    for(var i = 0; i < rows; i++) 
    {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}
    
function initializeGridRandom()
{
    for(var i = 0; i < rows; i++)
    {
        for (var j = 0; j < cols; j++)
        {
            //grid[i][j] = Math.random() >= 0.5 ? 1 : 0;
            grid[i][j] = Math.round(Math.random());
        }
    }
}

//Afficher fonction
function displayGrid()
{
    for(var i = 0; i < rows; i++)
    {
        console.log(grid[i]);
    }
}

//Commencer le jeu
function startGame() 
{
    initializeGrids();
    initializeGridRandom();
    console.log("Starting a game of life ...");
    displayGrid();
    createTable();
    play();
}

//Stopper le jeu
function stopGame() 
{
    initializeGrids();
    clearTimeout(timer);
}

/*RÈGLEMENT
Toute cellule vivante avec moins de deux voisins vivants meurt, comme si elle était causée par la sous-population.
Toute cellule vivante avec deux ou trois voisins vivants vit jusqu’à la génération suivante.
Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpeuplement.
Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.*/
function applyRules(row, col) 
{
    var numNeighbors = countNeighbors(row, col);
    if(grid[row][col] == 1) 
    {
        if(numNeighbors < 2) 
        {
            nextGrid[row][col] = 0;
        }
        else if(numNeighbors == 2 || numNeighbors == 3)
        {
            nextGrid[row][col] = 1;
        }
        else if(numNeighbors > 3)
        {
            nextGrid[row][col] = 0;
        }
    }
    else if(grid[row][col] == 0)
    {
        if(numNeighbors == 3) 
        {
            nextGrid[row][col] = 1;
        }
    }
}

function countNeighbors(row, col) 
{
    var count = 0;
    if(row - 1 >= 0) 
    {
        if(grid[row - 1][col] == 1) count++;
    }
    if(row - 1 >= 0 && col - 1 >= 0) 
    {
        if(grid[row - 1][col - 1] == 1) count++;
    }
    if(row - 1 >= 0 && col + 1 < cols) 
    {
        if(grid[row - 1][col + 1] == 1) count++;
    }
    if(col - 1 >= 0) 
    {
        if(grid[row][col - 1] == 1) count++;
    }
    if(col + 1 < cols) 
    {
        if(grid[row][col + 1] == 1) count++;
    }
    if(row + 1 < rows) 
    {
        if(grid[row + 1][col] == 1) count++;
    }
    if(row + 1 < rows && col - 1 >= 0) 
    {
        if(grid[row + 1][col - 1] == 1) count++;
    }
    if(row + 1 < rows && col + 1 < cols) 
    {
        if(grid[row + 1][col + 1] == 1) count++;
    }
        return count;
}

//Fonction boucle

//Basculer vers grille suivante
function copyAndResetGrid() 
{
    for(var i = 0; i < rows; i++) 
    {
        for(var j = 0; j < cols; j++)
        {
            grid[i][j] = nextGrid[i][j];
            nextGrid[i][j] = 0;
        }
    }
}

//compute next by applying the rules on each cell
function computeNextGen() 
{
    for(var i = 0; i < rows; i++) 
    {
        for(var j = 0; j < cols; j++) 
        {
            applyRules(i, j);
        }
    }

    // copy NextGrid to grid, and reset nextGrid
    copyAndResetGrid();
}

//the main loop
function play() 
{
    console.clear();
    computeNextGen();
    displayGrid();
    updateTable();
    timer = setTimeout(play, reproductionTimer);
}

// Create the table
function createTable() 
{
    var gamecontainer = document.getElementById("game-container");
        
    var table = document.createElement("table");
    for(var i = 0; i < rows; i++) 
    {
        var tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) 
        {
            var td = document.createElement("td");
            td.setAttribute("id", "cell" + i + "_" + j);
            td.style.backgroundColor = grid[i][j] === 1 ? "black" : "white";

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    gamecontainer.appendChild(table);
}

//update the values of the tables after each iteration
function updateTable() 
{
    for(var i = 0; i < rows; i++) 
    {
        for (var j = 0; j < cols; j++) 
        {
            var td = document.getElementById("cell" + i + "_" + j);
            td.style.backgroundColor = grid[i][j] === 1 ? "black" : "white";
        }
    }
}
window.onload = startGame();