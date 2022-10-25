
// using arrow function, Rest parameter, and reduce for sum array
let result = (...param) => (param.reduce((sum, e) => sum + e, 0)/param.length).toFixed(2);


document.querySelector('#btnKhoi1').onclick = function(event) {
    event.preventDefault();
    let arrK1 = document.querySelectorAll("#frmK1 input");
    let arrK1Value = []
    for (let i of arrK1) {
        arrK1Value.push(i.value*1);
    }
    document.getElementById('tbKhoi1').innerHTML = result(...arrK1Value);
}

document.querySelector('#btnKhoi2').onclick = function(event) {
    event.preventDefault();
    let arrK2 = document.querySelectorAll("#frmK2 input");
    let arrK2Value = []
    for (let i of arrK2) {
        arrK2Value.push(i.value*1);
    }
    console.log(arrK2Value)
    console.log(result(...arrK2Value))
    document.getElementById('tbKhoi2').innerHTML = result(...arrK2Value);
}

