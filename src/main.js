import './style.css';

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  document.getElementById('time-widget').innerText = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();
function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById('month-year').innerText = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = document.getElementById('calendar-grid');
  let gridHTML = '';

  for (let i = 0; i < firstDay; i++) {
    gridHTML += `<div></div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    if (i === today) {
      gridHTML += `<div class="today">${i}</div>`;
    } else {
      gridHTML += `<div>${i}</div>`;
    }
  }
  
  grid.innerHTML = gridHTML;
}
renderCalendar();

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const query = document.getElementById('search-input').value;
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

async function fetchNASA() {
  const container = document.getElementById('nasa-widget');
  const apiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'; 
  
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await response.json();
    
    container.href = "https://apod.nasa.gov/apod/astropix.html";
    
    if (data.media_type === 'image') {
      container.innerHTML = `
        <img class="nasa-img" src="${data.url}" alt="${data.title}">
        <div class="nasa-text">
          <h3>${data.title}</h3>
          <p>${data.explanation}</p>
        </div>
      `;
    } else {
      container.innerHTML = `<p>Today's NASA feature is a video. Click here to view it!</p>`;
    }
  } catch (error) {
    container.innerHTML = `<p>Failed to load NASA data.</p>`;
  }
}
fetchNASA();