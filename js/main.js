var img=[];
var curimg=0;
function Load_image(){
    for(i=1;i<4;i++){
        img[i]=new Image();
        img[i].src="/img/anava"+i+".jpg";
    }
    
}
function next(){
    if(curimg<img.length-1){
        curimg++;
        document.getElementById("anava").src=img[curimg].src;
    }
    if(curimg==img.length-1){
        curimg=0;
    }
}
function back(){
    if(curimg>0){
        curimg--;
        document.getElementById("anava").src=img[curimg].src;
    }
    if(curimg==0){
        curimg=img.length-1;
    }
}

function validateform(e){
    const form = e.target
    const firstName = form.querySelector("#txt_ho").value
    const lastName = form.querySelector("#txt_ten").value
    const phoneNumb = form.querySelector("#txt_dienthoai").value
    if(firstName==""){
        alert("Ban chua nhap ho");
        return false;
    }
    if(lastName==""){
        alert("Ban chua nhap ten");
        return false;
    }
    if(isNaN(phoneNumb)||length(phoneNumb)==0||length(phoneNumb)>10){
        alert("Dien thoai phai la so");
        return false;
    }
    alert('No fault found')
}
const daySelect = document.querySelector("#op_ngay")
        for (let i = 1; i <= 30; i ++) {
            const option = document.createElement("option")
            option.value=i
            
            option.innerHTML = i
            if (i == 1) {
                option.selected = true
            }
            daySelect.appendChild(option)
        }

        const monthSelect = document.querySelector("#op_thang")
        for (let i = 1; i <= 12; i ++) {
            const option = document.createElement("option")
            option.value=i
            option.innerHTML = i
            if (i == 1) {
                option.selected = true
            }
            monthSelect.appendChild(option)
        }

        const yearSelect = document.querySelector("#op_nam")
        for (let i = 1980; i <= 2010; i ++) {
            const option = document.createElement("option")
            option.value=i
            option.innerHTML = i
            if (i == 1) {
                option.selected = true
            }
            yearSelect.appendChild(option)
        }

        var size="";
        var sizeAr =document.getElementsByName("rdSize");
        for(var i=0;i<sizeAr.length;i++){
            if(sizeAr[i].checked){
                size=sizeAr[i].value;
            }
        }

function show() {
    alert('hihi');
}

