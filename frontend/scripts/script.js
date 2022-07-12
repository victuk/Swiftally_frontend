// const inputElements = [...document.querySelectorAll('input.code-input')]

// inputElements.forEach((ele, index) => {
//     ele.addEventListener('keydown', (e) => {
//         // if the keycode is backspace & the current field is empty
//         // focus the input before the current. Then the event happens
//         // which will clear the "before" input box.
//         if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
//     })
//     ele.addEventListener('input', (e) => {
//         // take the first character of the input
//         // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
//         // but I'm willing to overlook insane security code practices.
//         const [first, ...rest] = e.target.value
//         e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
//         const lastInputBox = index === inputElements.length - 1
//         const insertedContent = first !== undefined
//         if (insertedContent && !lastInputBox) {
//             // continue to input the rest of the string
//             inputElements[index + 1].focus()
//             inputElements[index + 1].value = rest.join('')
//             inputElements[index + 1].dispatchEvent(new Event('input'))
//         }
//     })
// })


// // mini example on how to pull the data on submit of the form
// function submitData() {
//     e.preventDefault()
//     const code = [...document.getElementsByTagName('input')]
//         .filter(({ name }) => name)
//         .map(({ value }) => value)
//         .join('')
//     console.log(code)
// }

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
