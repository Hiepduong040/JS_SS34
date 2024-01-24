function add(){
    let a = document.createElement('li')
    a.innerHTML = document.getElementById('infor').value
    document.getElementById('lis').appendChild(a)
}