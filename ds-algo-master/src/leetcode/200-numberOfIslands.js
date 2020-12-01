export const numIslands = function(grid) {
  let islandCount = 0;
  
  
  for(let rowIndex in grid) {
      for(let colIndex in grid[rowIndex]) {
          if(grid[rowIndex][colIndex] === '1') {
              islandCount++;
              transform(parseInt(rowIndex), parseInt(colIndex), grid);
          }
      }
  }   
  return islandCount;

  const transform = (rowId, colId, grid) => {  
    if(grid[rowId] === undefined || grid[rowId][colId] === undefined || grid[rowId][colId] === '0') return;
    
    grid[rowId][colId] = '0';
    transform(rowId+1, colId, grid);
    transform(rowId-1, colId, grid);
    transform(rowId, colId+1, grid);
    transform(rowId, colId-1, grid);
  }
};

