const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/swiftally-limited/image/upload';
const cloudinaryPreset = 'swiftally';

const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset);

    let response = await fetch(cloudinaryUrl, {
    method: 'POST',
    body: formData
    });

    let data = await response.json();

    return data;
}