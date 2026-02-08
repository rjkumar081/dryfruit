let index=0;
const slides=document.querySelectorAll(".slide");
setInterval(()=>{
slides.forEach(s=>s.classList.remove("active"));
index=(index+1)%slides.length;
slides[index].classList.add("active");
},4000);
