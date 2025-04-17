'use client';

import { useState } from 'react';
import styles from './SolarExplorer.module.scss';
import PlanetMenu from './PlanetMenu';
import SolarSystem from './SolarSystem';
import InfoPanel from './InfoPanel';

export type PlanetType = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto';

export default function SolarExplorer() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType>('earth');
  const [openPanel, setOpenPanel] = useState<PlanetType | null>(null);

  const handlePlanetSelect = (planet: PlanetType) => {
    setSelectedPlanet(planet);
  };

  const handleReadMore = (planet: PlanetType) => {
    setOpenPanel(planet);
  };

  const handleClosePanel = () => {
    setOpenPanel(null);
  };

  return (
    <div className={styles.solarExplorer}>
      <PlanetMenu 
        selectedPlanet={selectedPlanet} 
        onPlanetSelect={handlePlanetSelect} 
      />
      
      <SolarSystem 
        selectedPlanet={selectedPlanet} 
        onReadMore={handleReadMore} 
      />
      
      {openPanel && (
        <InfoPanel 
          planet={openPanel} 
          onClose={handleClosePanel} 
        />
      )}
    </div>
  );
}