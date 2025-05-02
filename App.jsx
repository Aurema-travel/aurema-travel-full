// App.jsx
import React from 'react';
import './index.css';
import georgia from './georgia.jpg';
import italy from './italy.jpg';
import portugal from './portugal.jpg';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#f97316' }}>Aurema Travel</h1>
      <p>Откройте для себя туры в лучших уголках Европы:</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div>
          <img src={georgia} alt="Грузия" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Грузия: Сванетия</h3>
        </div>
        <div>
          <img src={portugal} alt="Португалия" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Португалия: Лиссабон</h3>
        </div>
        <div>
          <img src={italy} alt="Италия" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Италия: Чинкве-Терре</h3>
        </div>
      </div>
    </div>
  );
}
