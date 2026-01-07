// assets/weather.js
// Objectif : appeler Symfony (/api/weather) au lieu d'appeler OpenWeather directement (clé API cachée côté serveur).

export class Forecast {
  constructor() {
    this.endpoint = '/api/weather';
    this.cityDefault = 'montauban';

    this.btn = document.getElementById('button');
    this.input = document.getElementById('cityValue');
    this.box = document.getElementById('displayWeather');

    // Si la section météo n'est pas présente sur la page, on n'initialise pas.
    if (!this.btn || !this.input || !this.box) return;

    this.bindEvents();
    this.fetchWeather(); // chargement initial (ville par défaut si champ vide)
  }

  bindEvents() {
    this.btn.addEventListener('click', () => this.fetchWeather());

    // Bonus UX : Entrée clavier = recherche
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.fetchWeather();
    });
  }

  fetchWeather() {
    const city = this.input.value.trim() || this.cityDefault;

    fetch(`${this.endpoint}?city=${encodeURIComponent(city)}`)
      .then((response) => {
        if (!response.ok) throw new Error('Ville introuvable');
        return response.json();
      })
      .then((data) => this.render(data))
      .catch(() => {
        alert("Veuillez vérifier l’orthographe ou la ville.");
      });
  }

  render(data) {
    document.getElementById('icon').src =
      `https://openweathermap.org/img/wn/${data.icon}.png`;

    document.getElementById('nameCity').textContent =
      `Ville de ${data.city}.`;

    document.getElementById('description').textContent =
      `Description : ${data.description}.`;

    document.getElementById('temperature').textContent =
      `Température : ${data.temp}°C.`;

    document.getElementById('temperatureMax').textContent =
      `Température maxi : ${data.temp_max}°C.`;

    document.getElementById('temperatureMin').textContent =
      `Température mini : ${data.temp_min}°C.`;

    // Affiche le bloc résultat
    this.box.style.display = 'block';
  }
}
