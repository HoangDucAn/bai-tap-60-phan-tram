const box = document.querySelector("div.img-box");
const img = document.createElement("img")

console.log(box)

function hienthianh(loaicho){
    if (loaicho=="cho1"){
        img.src = 'dog3.jpg'
        box.appendChild(img)
    }else{
        img.src = 'dog5.jpg'
        box.appendChild(img);
    }
}