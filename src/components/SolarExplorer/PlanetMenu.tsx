'use client';

import { useState } from 'react';
import styles from './SolarExplorer.module.scss';
import { PlanetType } from './index';

interface PlanetInfo {
  name: string;
  distance: string;
  color: string;
  previewImage: string;
}

const planetData: Record<PlanetType, PlanetInfo> = {
  mercury: {
    name: 'Mercury',
    distance: '0.39 AU',
    color: '#e8927c',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg'
  },
  venus: {
    name: 'Venus',
    distance: '0.723 AU',
    color: '#b45d15',
    previewImage: 'https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg'
  },
  earth: {
    name: 'Earth',
    distance: '1 AU',
    color: '#26daaa',
    previewImage: 'https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg'
  },
  mars: {
    name: 'Mars',
    distance: '1.524 AU',
    color: '#e55f45',
    previewImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg'
  },
  jupiter: {
    name: 'Jupiter',
    distance: '5.203 AU',
    color: 'orange',
    previewImage: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg'
  },
  saturn: {
    name: 'Saturn',
    distance: '9.539 AU',
    color: '#b29d81',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg'
  },
  uranus: {
    name: 'Uranus',
    distance: '19.18 AU',
    color: '#8dcdd8',
    previewImage: 'https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png'
  },
  neptune: {
    name: 'Neptune',
    distance: '30.06 AU',
    color: '#4f83e2',
    previewImage: 'https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png'
  },
  pluto: {
    name: 'Pluto',
    distance: '39.5 AU',
    color: '#ff8732',
    previewImage: 'https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png'
  }
};

// Order planets from inner to outer
const planetOrder: PlanetType[] = [
  'mercury', 'venus', 'earth', 'mars', 
  'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'
];

interface PlanetMenuProps {
  selectedPlanet: PlanetType;
  onPlanetSelect: (planet: PlanetType) => void;
}

export default function PlanetMenu({ selectedPlanet, onPlanetSelect }: PlanetMenuProps) {
  const handlePlanetClick = (planet: PlanetType) => {
    onPlanetSelect(planet);
  };
  
  return (
    <div className="fixed left-20 h-full z-10 flex flex-col justify-center">
      {planetOrder.map((planet, index) => (
        <div 
          key={planet}
          className={`flex items-center mb-4 cursor-pointer relative group ${selectedPlanet === planet ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          onClick={() => handlePlanetClick(planet)}
        >
          {/* Dot indicator */}
          <div className="w-3 h-3 rounded-full border-2 border-white relative">
            {selectedPlanet === planet && (
              <div className="absolute w-1 h-1 bg-white rounded-full left-0.5 top-0.5"></div>
            )}
          </div>
          
          {/* Planet preview */}
          <div 
            className="w-[30px] h-[30px] rounded-full ml-4 bg-cover"
            style={{ 
              backgroundImage: `url(${planetData[planet].previewImage})`,
              boxShadow: '0 -13px 10px 2px black inset' 
            }}
          ></div>
          
          {/* Planet info */}
          <div className="ml-5">
            <h2 className="text-white uppercase text-xs font-light tracking-wider flex items-center mb-1">
              <div 
                className={`h-[9px] transition-all duration-300 ${selectedPlanet === planet ? 'w-[30px] mr-1.5' : 'w-0'}`}
                style={{ backgroundColor: planetData[planet].color }}
              ></div>
              {planetData[planet].name}
            </h2>
            <h3 
              className={`text-[8px] uppercase tracking-wider transition-all duration-300 ${
                selectedPlanet === planet ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'
              }`}
              style={{ 
                color: selectedPlanet === planet ? planetData[planet].color : undefined 
              }}
            >
              {planetData[planet].distance}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}