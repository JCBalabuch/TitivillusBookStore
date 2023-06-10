import "./RightHeader.css";

const RightHeader = () => {
  return `
  <div class = "rightHeader">
    <button>Sign in</button>
    <button>Log in</button>
    <button>
        <img src="./assets/CestaCompraTTV.png" alt="Shopping Cart">
    </button>
    <button id = "themeMode">
        <img src="./assets/day.png" alt="Clear mode">
    </button>
  </div>`;
};

export default RightHeader;
