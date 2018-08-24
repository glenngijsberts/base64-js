function getBase64(src) {
    return new Promise((resolve) => {
        const file = src;
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            resolve(reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

function resizeBase64(src, w, h) {
    return new Promise((resolve, reject) => {
        // Create and initialize two canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const canvasCopy = document.createElement('canvas');
        const copyContext = canvasCopy.getContext('2d');

        // Create original image
        const img = new Image();
        img.src = src;

        img.onload = () => {
            // Determine new ratio based on max size
            let ratio = 1;
            
            if (img.width > w) {
                ratio = w / img.width;
            } else if (img.height > h) {
                ratio = h / img.height;
            }

            // Draw original image in second canvas
            canvasCopy.width = img.width;
            canvasCopy.height = img.height;
            copyContext.drawImage(img, 0, 0);

            // Copy and resize second canvas to first canvas
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

            resolve(canvas.toDataURL('image/jpeg'));
        };


        img.onerror = () => {
            reject();
        };
    });
}

export { resizeBase64, getBase64 };

export default getBase64;
