const response = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space`)

const data = await response.json();

document.body.style.backgroundImage = `url('${data.urls.full}')`;

