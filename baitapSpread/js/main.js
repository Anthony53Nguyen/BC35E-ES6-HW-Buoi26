// let jump = char => {
    
// }



let txt = document.querySelector('h2').innerHTML;
let chars = [...txt];
console.log(txt)
console.log(chars)
let content = ``;
for (let char of chars) {
    content += `<span>${char}</span>`;
}
document.querySelector('h2').innerHTML = content;




