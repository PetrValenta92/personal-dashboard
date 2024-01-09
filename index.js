async function getBackgroundImage() {
    // fetch call is awaited
    try {
        const response = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // console.log(data.urls.full);
        // console.log(data.user.name);

        if (data) {
            document.body.style.backgroundImage = `url('${data.urls.regular}')`;
            document.getElementById('author').textContent = `By: ${data.user.name}`;
        }

    } catch (err) {
        console.error(`An error occurred while fetching the data: ${error.message}`);
        document.body.style.backgroundImage = 
        `url('https://images.unsplash.com/photo-1528818955841-a7f1425131b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDQ2NjA1ODB8&ixlib=rb-4.0.3&q=85')`;
        document.getElementById('author').textContent = `By: Felix Mittermeier`;
    }
}

async function getCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // console.log(data);

        if (data) {

            document.getElementById('crypto-name').innerHTML = `
                <img
                    src="${data.image.small}"
                    alt="Bitcoin image"
                />${data.name}
            `;

            document.getElementById('price-current').innerHTML = `
                🎯: ${data.market_data.current_price.usd} USD
            `;

            document.getElementById('price-high').innerHTML = `
                📈: ${data.market_data.high_24h.usd} USD
            `;

            document.getElementById('price-low').innerHTML = `
                📉: ${data.market_data.low_24h.usd} USD
            `;
        }


    } catch (err) {
        console.error(`An error occurred while fetching the data: ${err.message}`);
    }
};

function getTime() {
    let date = new Date();
    // 12h format
    document.getElementById('time').innerHTML = `
        ${date.toLocaleTimeString("cz-cz", {timeStyle: 'short'})}
    `;
    
    // 24h format
    // let minutes = date.getMinutes();
    // Ensure minutes always have two digits
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // console.log(date.getHours() + ':' + minutes);
}

function render () {
    getBackgroundImage();
    getCryptoData();
    setInterval(getTime, 1000);
}


render();


