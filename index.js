const response = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space`)

const data = await response.json();

// console.log(data);

document.body.style.backgroundImage = `url('${data.urls.full}')`;

document.getElementById('author').textContent = `By: ${data.user.name}`;

