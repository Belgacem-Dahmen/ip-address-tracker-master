let map = L.map('map').setView([51.505, -0.09],13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const API_KEY = 'at_G7PYaYcwXNJ6nLsXQBF7WJJbakdAi'; 
const url = "https://geo.ipify.org/api/v2/country?apiKey=at_G7PYaYcwXNJ6nLsXQBF7WJJbakdAi&ipAddress=8.8.8.8"



async function getPosition(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : statut ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la requête GET:', error);
        throw error;
    }
}

// Exemple d'utilisation
getPosition(url)
    .then(data => {
        // Traitement des données reçues
        console.log('Données reçues:', data);
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Erreur attrapée:', error);
    });
