//lấy theo id
let headingElement = document.getElementById("heading");
//Giá trị trả về sẽ là phần tử đầu tiên đc tìm thấy





let boxElement = document.querySelector("div");
//Giá trị trả về sẽ là phần tử đầu tiên ma fnos tìm thấy

//Lấy theo querySelecter
let boxes = document.querySelectorAll(".box-1");
boxes.forEach((element) => {
    console.log(element);
})

//thêm 1 phần tử vào trong DOM
let ulElement = document.createElement("ul");
document.body.append(ulElement);

let liElement = document.createElement("li");//tạo thẻ li

ulElement.appendChild(liElement);//gắn thẻ li vào ul

const users = {
    id:1,
    userName:"Nguyễn Van A",
    age: 20,
    adress: "Hà Nội",
    email: "nva@gmail.com",
}

//b1. lấy ra phần tử tbody
//b2. Dùng map để lặp qua từng phần tử của mảng và kèm dữ liệu trong mảng
//b3. Ép mảng về dạng chuỗi HTML
//b4. Lấy chuỗi HTML ở b3 để gắn vào trong tbody

let tbodyElement = document.querySelector("#tbody")




let userHtmls = users.map((user, index ) => {
    return `
    <tr>
        <td>${index}</td>
        <td>${user.userName}</td>
        <td>${user.age}</td>
        <td>${user.adress}</td>
        <td>${user.email}</td>
    </tr>
    `
})



//