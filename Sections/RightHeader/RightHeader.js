import "./RightHeader.css";


// // Función para cambiar entre el modo claro y oscuro
// function toggleDarkMode() {
//   const body = document.querySelector('body');
//   const img = document.querySelector('#img-mode');
  
//   // Si el body tiene la clase 'dark-mode', lo cambiamos a modo claro
//   if (body.classList.contains('dark-mode')) {
//     body.classList.remove('dark-mode');
//     img.src = './assets/night.png';
//     img.alt = 'Dark Mode';
//   }
//   // Si no, lo cambiamos a modo oscuro
//   else {
//     body.classList.add('dark-mode');
//     img.src = './assets/day.png';
//     img.alt = 'Clear Mode';
//   }
// }


const rightHeader = () => {
  return `
  <div class = "rightHeader">
    <button id = "signIn">Sign in</button>
    <button id = "logIn">Log in</button>
    <button>
        <img src="./assets/CestaCompraTTV.png" alt="Shopping Cart">
    </button>
    <button id = "themeMode" onclick="toggleDarkMode()">
        <img id="img-mode" src="./assets/day.png" alt="Clear mode">
    </button>
  </div>
  `;
};

export default rightHeader;
