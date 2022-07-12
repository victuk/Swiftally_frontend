const generateLink = function (lengthNum) {
    const alphaNumerics = "abcdefghijklmnopqrstuvwxyz1234567890-/";
    const rand = Math.trunc(Math.random() + 1) * lengthNum
}
const formHolder = document.querySelector(".voters-form");
const sharedLink = "geunn/fyt-/swiftvote";
const overlayShare = document.createElement('div')
overlayShare.innerHTML = `<div class="overlay ">
        <div class="box ">
            <div class="intro-text">
                <p class="text-white">Candidate Registration link</p>
            </div>
          <div class="link-box">
               <div class="link-content">
                <p class="">URL</p>
                <p class="">${sharedLink}</p>
                <i class="fa-solid fa-copy "></i>
           </div>
          </div>
          <div class="share"> 
           
            <p class="text-white">Share With</p>
                 
          </div>
           
           <div class="social">
            
            <i class="fa-brands fa-google-mail"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-brands fa-reddit"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-yahoo"></i>
          
           </div>
          
        </div>
    </div>`;
const shareLinkBtn = document.querySelector(".shareBtn");
const moreForm = document.querySelector("#more--candidate");
let details = {};
const closeOverLay = function(e){
//   if(e.target.classList.contains('overylay')){

//   overlayShare.remove();
// }
addMoreBox.remove();
 
}
const borderColor = function(indClass){
  const colorArray = ["darkB", "darkR", "darkPurple", "darkG", "darkBrown"];
  return colorArray[indClass - 1]
}
const submitForm = function (e) {
  const votersForm = document.querySelectorAll(".voters-form input");
  e.preventDefault();
  votersForm.forEach((inp, i) => {
    if (inp.value === "") {
      details[`${inp.getAttribute("placeholder")}`] = inp.value;
      // details.push(inp.getAttribute('placeholder'))
    }
      document.body.append(overlayShare);
      document.body.style.overflow = "hidden";
  });
document.querySelector(".overlay")?.addEventListener("click", (e)=>{
  closeOverLay(e)
  if(!e.target.classList.contains('overlay'))return
  overlayShare.remove()
});
 
};
const increaseFormRow = function(){
  
const Num = document.querySelector(".rowNum")?.value;
if (Num === 0) return;
let rowLength = [...formHolder.children].length;

for (let ind = 1; ind <= Num; ind++) {
  if (indClass > 5) {
    indClass = 1;
  }
  let border = borderColor(indClass)
  if (moreForm.classList.contains("more-cand")) {
    moreReg = `  <div class="single-row">
                    <div class="ind${indClass}"></div>
                    <div class="voters-details row-1 ${border}">
                        <div class="">
                            <input type="text" placeholder="Surname" class="" />
                        </div>
                        <div class="">
                            <input type="text" placeholder="initials" class="" />
                        </div>
                        <div class="">
                            <input type="text" placeholder="School email" class="" />
                        </div>
                        <div class="">
                            <input type="text" placeholder="Faculty" class="" />
                        </div>
                        <div class="">
                            <input type="text" placeholder="Reg. No" class="" />
                        </div>
                        <div class="">
                            <input type="text" placeholder="Department" class="" />
                        </div>
                        <div class="">
                            <input type="text" placeholder="Level" class="" />
                        </div>
                    </div>
                </div>`;
  } else {
    moreReg = `<div class="single-row">
                                <div class="ind${indClass}"></div>
                                <div class="voters-details cand-row ${border}">
                                    <div class="cand-data normal-gap">
                                        <div class="cand-name ">
                                            <input type="text" placeholder="candidate ${
                                              rowLength + ind
                                            } name" class="  ${border}" />
                                        </div>
                                        <div class="cand-image ">
                                            <i class=" fa-solid fa-2x fa-user-circle"></i>
                                            <input type="file" class="  ${border}" hidden />
                                        </div>
                                    </div>
                                    <div class="">
                                        <input type="text" placeholder="Position" class="" />
                                    </div>
                                    <div class="">
                                        <input type="text" placeholder="Level" class="" />
                                    </div>
                                   
                                    <div class=" cand-data prob-gap">
                                        <div class="">
                                            <input type="text" placeholder="Manifesto" class="  ${border} " />
                                        </div>
                                        <div class="add-btn">
                                            <div class="circle">
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
  }

  formHolder.insertAdjacentHTML("beforeend", moreReg);
  indClass++;

  closeOverLay();
}
;

}
let indClass = 1;
const addMoreBox = document.createElement('div');
let moreReg;
const addRow = function (e) {
  e.preventDefault();
  document.body.append(addMoreBox);
     document.querySelector(".rowNum").focus();

  const addMoreBtn = document.querySelector(".add-more");
  addMoreBtn.addEventListener("click",increaseFormRow.bind(null));
   document
     .querySelector(".moreInput")
     ?.addEventListener("click", function (e) {
       if (!e.target.classList.contains("close-popup")) return;
       closeOverLay();
     });
// document.querySelector(".overlay")?.addEventListener("click", closeOverLay);
document.querySelector(".rowNum").value = "";
};
const fileOpen = function (e) {
  if (
    e.target.classList.contains("cand-image") ||
    e.target.classList.contains("fa-user-circle")
  )
    document.querySelector(".cand-image input").click();
};
addMoreBox.innerHTML = `<div class="overlay ">
<div class="moreInput">
    <div class="top ">
        <img src="image/Swiftvote Logo.svg" alt="">
        <div class="close-box">
            <i class="fa-solid fa-close fa-2x close-popup"></i>
        </div>
    </div>      
         <div>
               <label class="border-label "for="">Number of columns</label>   
               <input type="number" class="rowNum" placeholder="Number of columns" min="1">
          </div>
         <div class="bottom">
 <button class="btnSpecial add-more">Add</button>
 <button class="btnSpecial close-popup">Cancel</button>
         </div>
</div>
  </div>`;
moreForm.addEventListener('click',addRow);
document.querySelector(".voters-form").addEventListener('click',fileOpen);
shareLinkBtn?.addEventListener("click", submitForm);

document.querySelector('.spreedupload').addEventListener('click',function(){
  const link = `${document.querySelector(".spreedupload").dataset.link}`;
  window.location["pathname"] = `/${link}`;

})