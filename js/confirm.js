const allInput = document.querySelector(".inputs");
const Input1 = document.querySelector(".input-1");
const Input6 = document.querySelector(".input-6");
const allInput2 = [...document.querySelectorAll(".inputs input")];
let pin = [];
const randPin = "123456";
Input1.focus();

//FUNCTIONS
const deleteInp = function (e) {
  if (e.keyCode === 8 && e.target.value === "") {
    allInput2[Math.max(0, this - 1)].focus();
  }
};


allInput2.forEach((inp, i) => {
  inp.addEventListener("keydown", deleteInp.bind(i));
  inp.addEventListener("input", (e) => {
    const [first, ...rest] = e.target.value;
    e.target.value = first ?? "";
    const lastBox = i === allInput2.length - 1;
    const inserted = first !== undefined;
    if (inserted && !lastBox) {
      allInput2[i + 1].focus();
      allInput2[i + 1].value = rest.join("");
      allInput2[i + 1].dispatchEvent(new Event("input"));
    }
    // const chid = [...e.target.parentElement.children]
    allInput2.forEach((input) => {
      if (Input6.value === "") {
        input.classList.remove("email-pin-wrong");
        return;
      }
      pin.push(input.value.toLowerCase());
      if (pin.length === randPin.length) {
        allInput2.forEach((input) => {
          // pin = pin.join("");
          if (pin.join("") === randPin) {
            input.disabled = true;
            input.classList.remove("email-pin-wrong");
            input.classList.add("email-pin-correct");
          } else {
            input.classList.add("email-pin-wrong");
            pin = [];
          }
        });
      }
    });
  });
});



