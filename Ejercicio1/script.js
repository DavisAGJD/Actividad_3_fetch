document.addEventListener('DOMContentLoaded', function() {
    searchProducts('ordenadores');
});

function searchProducts(query) {
    let searchQuery = query || document.getElementById('search-input').value || 'ordenadores';
    document.getElementById('search-query').textContent = searchQuery;
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            let mlList = document.getElementById('ml-list');
            mlList.innerHTML = '';
            data.results.forEach(item => {
                let card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="card">
                        <img src="${item.thumbnail.replace('I.jpg', 'B.jpg')}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">$${item.price}</p>
                        </div>
                    </div>
                `;
                mlList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data from Mercado Libre API:', error));
}
