/*
  1 - pascalsTriangle -> declare array of size(numRows)

  2 -  generate row by row
       row[0] = 1
       row[row.length -1] = 1

       [1]
      [1, 1]
     [1, 2, 1] 
    [1, 3, 3, 1]
   [1, 4, 6, 4, 1] 

   to generate the values bet 1.. and ..1 look at the row above (previous row)
   rowAbove = pascalsTriangle[i-1]
   then add
   rowAbove[j] + rowAbove[j-1]
*/

const generate = function (numRows) {
    let pascalsTriangle = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pascalsTriangle[i - 1];
            row[j] = rowAbove[j] + rowAbove[j - 1]
        }
        pascalsTriangle[i] = row;
    }
    return pascalsTriangle;
};

const a = generate(5);
console.log(a)
