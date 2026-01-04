import './styles.css';

// Import image & icon
import logo from './assets/logo.avif';
import icon from './assets/ProtestGuerrilla-Regular.ttf';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="container">
    <h1>Rsbuild JavaScript Project 🚀</h1>
    
    <p>Image support:</p>
    <img src="${logo}" class="logo" />

    <div class="test1">Test</div>

   
  </div>
`;
