document.addEventListener("DOMContentLoaded", () => {
  const formBtn = document.querySelector("#login-btn");
  const adminId = document.querySelector("#admin-id");
  const adminPassword = document.querySelector("#admin-password");

  formBtn.classList.add("btn-not-ready");
    function btnState(type){
        if(type === "activate"){
            formBtn.classList.remove("btn-not-ready");
        }
        if(type === "deactivate"){
            formBtn.classList.add("btn-not-ready");

        }
    }

setInterval(function(){
     
      if (adminId.value.trim().length === 12 && adminPassword.value.trim().length > 5){
          btnState("activate")
        }else{
            
            btnState("deactivate")
        }
         
 },0.1)
 formBtn.addEventListener("click", (e) => {
     e.preventDefault();
        if (!formBtn.classList.contains("btn-not-ready")) {
    const ID = adminId.value.trim().toLowerCase();
    const password = adminPassword.value.trim().toLowerCase();
    console.log({
        ID,
      password,
    });
    adminId.value = "";
    adminPassword.value = "";
}
});
});