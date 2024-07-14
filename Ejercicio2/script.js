async function searchPokemon() {
    const pokemonName = document.getElementById('search-input').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (response.ok) {
        const data = await response.json();

        document.getElementById('pokemon-name').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        document.getElementById('pokemon-image').src = data.sprites.front_default;
        document.getElementById('pokemon-type').innerText = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        document.getElementById('pokemon-hp').innerText = data.stats[0].base_stat;
        document.getElementById('pokemon-attack').innerText = data.stats[1].base_stat;
        document.getElementById('pokemon-defense').innerText = data.stats[2].base_stat;
        document.getElementById('pokemon-speed').innerText = data.stats[5].base_stat;
        document.getElementById('pokemon-height').innerText = data.height / 10;
        document.getElementById('pokemon-weight').innerText = data.weight / 10;

        document.getElementById('pokedex-card').style.display = 'block';
    } else {
        alert('Pokémon not found!');
        document.getElementById('pokedex-card').style.display = 'none';
    }
}
