# Base64js-ES6

Package for encoding images to base64 images and resizing base64 images 🔥

## Install

```javascript
npm install base64js-es6 // yarn add base64js-es6
```

## Usage

The functions are [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) based and can be used as [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

### Encode to base64

```javascript
import EncodeToBase64 from 'base64js-es6' // Default export
```

```javascript
import { getBase64 } from 'base64js-es6' // Named export for encoding to base64
```

Example

```javascript

// With <input type="file" name="files[]" onchange="ImageOnChange" />
function ImageOnChange(e) {
    const file = e.target.files;

    // getBase64(src of file)
    getBase64(file[0]).then((response) => {
        // Will log the base64 string
        console.log(response)
    });
}

```

### Resize base64

```javascript
import { getBase64, resizeBase64 } from 'base64js-es6' // Named exports for encoding and resizing
```

Example

```javascript

// With <input type="file" name="files[]" onchange="ImageOnChange" />
function ImageOnChange(e) {
    const file = e.target.files;

    getBase64(file[0]).then((response) => {
        
        // resizeBase64(src of file, width, height)
        resizeBase64(response, 250, 250).then((result) => {
            // Will log a new base64 string
            // Do whatever what you want with this string
            console.log(result);
        });
    });
}

```

## Contribution

Feel free to contribute to this package. If you have any questions you can reach out to me on [twitter](https://twitter.com/glenngijsberts) 😄

## License

MIT