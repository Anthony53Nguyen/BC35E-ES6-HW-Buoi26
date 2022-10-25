/*--------- Bài tập thay đổi màu sắc ------

*/
let colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia','cinnabar'];

//Cách 1: Create element
let renderButton = () => {
    for (let index = 0; index < colorList.length; index++) {
        let color = colorList[index];
        let btn = document.createElement('button');
        btn.className = 'color-button ' + color;
        
        btn.onclick = () => {
            for (let o of document.querySelectorAll('button')) {
                o.classList.remove('active')
            }
            btn.classList.add('active');
            document.getElementById('house').classList = 'house ' + color;
        }  
        document.getElementById('colorContainer').appendChild(btn);
    }
}
renderButton();

//Cách 2: Sử dụng stringTemplate

// let renderButtonString = () => {
//     let content = '';
//     for (let index = 0; index < colorList.length; index++) {
//         let color = colorList[index];
//         console.log(color)
//         content += `
//             <button class="color-button ${color};" onclick="changeColor('${color}')">${color}</button>
        
//         `;
//     }
//     document.getElementById('colorContainer').innerHTML = content;
// }

// window.changeColor = (color) => {
//     document.getElementById('house').classList.add(color);
// }


// renderButtonString();


// /*
//     ------------- Default param: Tham số mặc định của hàm ----------
// */

// let getUserInfo = (name = "Mị", age = 18) => {
//     if (age > 0 && age < 30) {
//         console.log(`${name} còn trẻ ${name} muốn đi chơi !`);
//     }else {
//         console.log('quá lứa rồi !')
//     }
// }
// getUserInfo();

// getUserInfo('Quách Hải');

// getUserInfo('Quách Hải', 40);