import Stack from './ds/stack';
// import Queue from './ds/queue';

import {generateParenthesis} from './leetcode/20-generateParenthesis';
import {numIslands} from './leetcode/200-numberOfIslands';

import "./styles.css";

// const books = new Stack();
// books.push('first');
// books.pop();
// books.push('second');
// books.push('three');
// books.push('four');
// books.isEmpty();

// console.log(books);

//  QUEUE
// const movieQ = new Queue();
// movieQ.enqueue('Finding Nemo');
// movieQ.enqueue('Zootopia');
// movieQ.enqueue('The life of pets');
// movieQ.isEmpty();
// movieQ.dequeue();
// movieQ.dequeue();

const sol = generateParenthesis(3);
console.log(sol);

document.getElementById("app").innerHTML = `
<h1>Hello World!</h1>
<hr />
`;
