// // console.dir(document);


// //query HTML element
// //1.getElementById

// // console.log("Thẻ HTML có id demo-id",document.getElementById("demo-id"));
// // cho phép gọi thẻ html sang js thông qua id.


// // document.getElementById("demo-id2");

// //2.getElementsByClassName
// let lis = document.getElementsByClassName("list-item")

// // console.log("Danh sách lis", lis);

// let firstLi = lis[0];

// let lastLi = lis[lis.length - 1];

// // console.log("Thẻ li đầu tiên là:", firstLi);
// // console.log("Thẻ li cuối cùng là: ", lastLi);

// //Lấy toàn bộ thẻ Li trong lis
// // for(let i = 0; i < lis.length; i++){
// //     console.log("Các thẻ li", lis[i]);
// // }

// //3.document.getElemtsByTagName(tag)
// // let divs = document.getElementsByTagName("div");
// // console.log("Danh sách thẻ divs", divs);

// let h1 = document.getElementById("demo-id");

// console.dir(h1);

// h1.innerHTML = "<i>Hello world after update</i>";
// h1.textContent = "<b>Đổi nội dung = text content</b>";
// h1.innerText = "Hello, nội dung đã cập nhật = innerTexxt";

// h1.innerText += ", nội dung được nối vào"

// console.log("id của thẻ h1 demo-id là",h1.id);

// // if(h1.id === "demo-id"){
// //     alert("Hello world");
// // }

// //class

// let classList = h1.classList;

// // for(let i =0 ; i< classList.length ; i++){
// //     console.log(classList[i]);
// // }

// console.log(classList);
// classList.add("demo-class3");
// classList.remove("demo-class1");
// console.log(classList.contains("demo-class1"));


// let h1 = document.getElementById("demo-id");
// console.log(h1.style);
// nhận đc đối tượng.

// h1.style.backgroundColor = "red";
// h1.style.fontSize = "20px";
// h1.style.border = "solid 10px"
// h1.style.fontWeight = "bold";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.borderRadius = "50%";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";

// let input = document.getElementById("demo-value");
// console.log("Giá trị nawmg trong input tại thời điểm hiện tại", input.value);

// input.value = "Hello word";


let div = document.createElement("div")
 let li = document.createElement("li")
let ul = document.getElementsByTagName("ul")[0]; //[ul]
//tạo ra thẻ bất kỳ

li.innerText = " <i>Hello New Element</i>";
li.classList.add("List-item");


ul.appendChild(li);

li.remove();

ul.remove();

console.log(div);
console.log(li);