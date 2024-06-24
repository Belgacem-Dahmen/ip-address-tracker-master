

const API_KEY = 'at_G7PYaYcwXNJ6nLsXQBF7WJJbakdAi';
const url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_G7PYaYcwXNJ6nLsXQBF7WJJbakdAi'




async function getPosition(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : statut ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Erreur lors de la requête GET:', error);
        throw error;
    }
}





// select elements 
let user_ip = document.getElementById('user_ip')
let user_location = document.getElementById('location')
let user_timezone = document.getElementById('timezone')
let user_isp = document.getElementById('isp')




// Exemple d'utilisation
getPosition(url)
    .then(data => {
        // Traitement des données reçues
        let ip = data.ip
        let data_location = data.location.region
        let timezone = data.location.timezone
        let isp = data.isp
        let lat = data.location.lat
        let lng = data.location.lng




        user_ip.innerHTML = ip ? ip : '101.101.101.1'
        user_location.innerHTML = data_location ? data_location : 'anywhere'
        user_timezone.innerHTML = timezone ? timezone : 'UTC - 05:00'
        user_isp.innerHTML = isp ? isp : 'space X'





        // console.log({
        //     ip, data_location, timezone, lng, lat
        // });
        let map = L.map('map').setView([lat, lng], 13);
        L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([lat, lng]).addTo(map);
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Erreur attrapée:', error);
    });


