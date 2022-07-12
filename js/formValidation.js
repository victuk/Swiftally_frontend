const selectMany = document.querySelectorAll(".manys select");
const btn = document.querySelector(".share-btn");
const btnNxt = document.querySelector(".formBtn");
let school = document.querySelector(".select-school");
let ind ;
setInterval(() => {
    let allInput = [...document.querySelectorAll(".de-form input")];
     ind = allInput.every((ele) => ele.value !== "");
  if(school){
     if (ind === true && school?.selectedOptions[0].innerHTML !== "") {
       btn?.classList.remove("btn-not-ready");
     } else {
       btn?.classList.add("btn-not-ready");
     }
  }

}, 0.1);

const form2 = document.querySelector(".de-form2");
setInterval(() => {
   if (selectMany) {
     let allInput = [...form2?.querySelectorAll("input")];
     ind = allInput.every((ele) => ele.value !== "");
     if (ind === true) {
       btn?.classList.remove("btn-not-ready");
     } else {
       btn?.classList.add("btn-not-ready");
     }
   }
}, 0.1);

setInterval(() => {
        let allInput = [...document.querySelectorAll(".de-form input")];
        let seleInd;
        selectMany?.forEach((s)=>{
if(s.selectedOptions[0].innerHTML !== "")seleInd = true;
        })
     ind = allInput.every((ele) => ele.value !== "");
   if (ind === true && seleInd) {
     btnNxt?.classList.remove("btn-not-ready");
   } else {
     btnNxt?.classList.add("btn-not-ready");
   }
}, 0.1);

btn?.addEventListener('click', function(e){
  e.preventDefault()
const wrapper = document.querySelector(".wrapper");
const popup = document?.querySelector(".wrappr");

  if(e.target.classList.contains('btn-not-ready'))return
  setTimeout(()=>{
wrapper?.classList.add('hidden');
popup?.classList.remove('hidden');
  },3000)
})
// console.log(school.selectedoptions)