/* =========================================================
   CONFIGURACIÓN DE ZONAL SONG
   La usan index.html y lista.html. Cuando actualices esas
   páginas, este archivo se queda como está.
   Cada valor va entre comillas y termina con coma.
   ========================================================= */
window.ZONAL_CONFIG = {
  // Client ID de Google (Google Auth Platform → Clients)
  GOOGLE_CLIENT_ID: "947464063019-133v6cfuid8grvj7lsetag127484rjjj.apps.googleusercontent.com",

  // API key de YouTube, para buscar canciones por nombre
  YOUTUBE_API_KEY: "AIzaSyBzsFEpARSq2s0wzFkCEOVXLLcrrP8MyPk",

  // Tu canal de Twitch
  CANAL_TWITCH: "zonalman",

  // Datos de Firebase (los mismos que ya tenías)
  FIREBASE: {
    apiKey: "AIzaSyBzsFEpARSq2s0wzFkCEOVXLLcrrP8MyPk",
    authDomain: "zonal-song.firebaseapp.com",
    databaseURL: "https://zonal-song-default-rtdb.firebaseio.com",
    projectId: "zonal-song",
    appId: "1:947464063019:web:8ae624fbb3aa1db929026e",
  },

  // Comando del chat
  COMANDO: "!song",
  // Canciones de relleno que se toman al azar de tus Me gusta
  RELLENO_CANTIDAD: 50,
  // Duración máxima en minutos para peticiones del chat (0 = sin límite)
  DURACION_MAXIMA_MIN: 0,
  // Volumen inicial (0 a 100)
  VOLUMEN_INICIAL: 60,
};
