// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
let a=prompt("Enter the name");
let b=prompt("Start Slice");
let c=prompt("End Slice");
let d=a.slice(b,c);
alert(d);
 