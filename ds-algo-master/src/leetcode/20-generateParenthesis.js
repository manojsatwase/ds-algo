
/**
 * @param {number} n
 * @return {string[]}
 */
export const generateParenthesis = function(n) {
  let solution = [];
  
  const generator = (leftCount, rightCount, partial) => {
      // check
      if(leftCount > rightCount) return;
      //exit condition
      if(!leftCount && !rightCount) solution.push(partial);
      
      if(leftCount > 0) {
          generator(leftCount-1, rightCount, partial+'(');
      }
      if(rightCount > 0) {
          generator(leftCount, rightCount-1, partial+')');
      }
  }
  generator(n,n,'')
  return solution;
};

