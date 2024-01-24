let arr = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];
for(const key in arr){
    let item = document.createElement("li");
    item.innerText = arr[key];
    document.body.appendChild(item);
}