
// 헤더 서비스 호버
var survice = document.getElementById("survice");
var headsubdiv = document.getElementById("headsubdiv");
var headsubul = document.getElementById("headsubul");

survice.addEventListener('mouseover',()=>{
  headsubdiv.style.maxHeight='85px';
  headsubul.style.visibility='visible'
})
survice.addEventListener('mouseout',()=>{
    headsubdiv.style.maxHeight='0px';
    headsubul.style.visibility='hidden';
})

headsubul.addEventListener('mouseover',()=>{
    headsubdiv.style.maxHeight='85px';
    headsubul.style.visibility='visible'
  })
headsubul.addEventListener('mouseout',()=>{
    headsubdiv.style.maxHeight='0px';
    headsubul.style.visibility='hidden';
})


document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.maintext');
    text.style.animation = 'slideUp 1.1s 0.2s ease-out forwards';
});
document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.mainp');
    text.style.animation = 'slideUp 1s 0.6s ease-out forwards';
});