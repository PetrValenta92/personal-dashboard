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
            console.log(data.image.thumb);
            console.log(data.market_data.current_price.usd + " USD");
            console.log(data.market_data.current_price.eur + " EUR");
            console.log(data.market_data.current_price.czk + " CZK");
        }

    } catch (err) {
        console.error(`An error occurred while fetching the data: ${err.message}`);
    }
};

function render () {
    getBackgroundImage();
    getCryptoData();
}


render();


