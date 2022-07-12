

// let cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dae4sosbl/image/upload';
// let cloudinaryPreset = 'g94jlyni';

// Upload image to cloudinary
const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'swiftally');

    let response = await fetch('https://api.cloudinary.com/v1_1/swiftally-limited/image/upload', {
    method: 'POST',
    body: formData
    });

    let data = await response.json();
    localStorage.setItem('response', response.secure_url)
    localStorage.setItem('response', response.public_id)
    return data;
}

