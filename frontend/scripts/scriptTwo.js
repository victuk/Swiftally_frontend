const theFile = document.getElementById('sch_logo');


next.addEventListener('click', async function(e) {
    e.preventDefault();

    const response = await uploadImage(theFile.files[0]);

    console.log(response);

    // let swiftVResponse = await fetch('swiftvote', {
    //     method: 'GET',
    //     // headers:
    //     body: JSON.stringify({
    //         schoolLogo: response.secure_url,
    //         schoolLogoPublicId: response.public_id
    //     })
    // });
   localStorage.setItem('schoolLogo', response.secure_url)
   localStorage.setItem('schoolLogoPublicId', response.public_id)

    location.replace('role.html');

});



