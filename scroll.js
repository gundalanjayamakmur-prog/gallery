// contoh javascript sederhana
// klik foto untuk melihat ukuran besar

const images = document.querySelectorAll("img");

images.forEach(img=>{
img.addEventListener("click",()=>{

let popup = document.createElement("div");
popup.classList.add("popup");

popup.innerHTML = `<img src="${img.src}">`;

document.body.appendChild(popup);

popup.addEventListener("click",()=>{
popup.remove();
});

});
});