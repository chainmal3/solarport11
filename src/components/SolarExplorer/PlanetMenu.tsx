'use client';

import styles from './SolarExplorer.module.scss';
import { PlanetType } from './index';

interface RigInfo {
  name: string;
  location: string;
  color: string;
  previewImage: string;
}

const rigData: Record<PlanetType, RigInfo> = {
  adrians_wall: {
    name: "Adrian's Wall",
    location: 'Melbourne',
    color: '#e8927c',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg'
  },
  agape: {
    name: 'Agape',
    location: 'Melbourne',
    color: '#b45d15',
    previewImage: 'https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg'
  },
  battery_acid: {
    name: 'Battery Acid',
    location: 'Melbourne',
    color: '#26daaa',
    previewImage: 'https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg'
  },
  curse_of_the_scarab: {
    name: 'Curse of the Scarab',
    location: 'Melbourne',
    color: '#e55f45',
    previewImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg'
  },
  diy_hifi: {
    name: 'DIY HiFi',
    location: 'Melbourne',
    color: 'orange',
    previewImage: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg'
  },
  dub_divination: {
    name: 'Dub Divination',
    location: 'Melbourne',
    color: '#b29d81',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg'
  },
  echo_chamber: {
    name: 'Echo Chamber',
    location: 'Melbourne',
    color: '#8dcdd8',
    previewImage: 'https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png'
  },
  el_gran_mono: {
    name: 'El Gran Mono',
    location: 'Melbourne',
    color: '#4f83e2',
    previewImage: 'https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png'
  },
  entropy: {
    name: 'Entropy',
    location: 'Melbourne',
    color: '#ff8732',
    previewImage: 'https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png'
  },
  folly_hifi: {
    name: 'Folly HiFi',
    location: 'Melbourne',
    color: '#e8927c',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg'
  },
  general_feelings: {
    name: 'General Feelings',
    location: 'Melbourne',
    color: '#b45d15',
    previewImage: 'https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg'
  },
  goodys_hifi: {
    name: 'Goodys HiFi',
    location: 'Melbourne',
    color: '#26daaa',
    previewImage: 'https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg'
  },
  heartical_hi_powa: {
    name: 'Heartical Hi-Powa',
    location: 'Melbourne',
    color: '#e55f45',
    previewImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg'
  },
  housewifes_choice: {
    name: "Housewife's Choice",
    location: 'Melbourne',
    color: 'orange',
    previewImage: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg'
  },
  hyper_global: {
    name: 'Hyper Global',
    location: 'Melbourne',
    color: '#b29d81',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg'
  },
  mahikai: {
    name: 'Mahikai',
    location: 'Melbourne',
    color: '#8dcdd8',
    previewImage: 'https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png'
  },
  new_flower: {
    name: 'New Flower',
    location: 'Melbourne',
    color: '#4f83e2',
    previewImage: 'https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png'
  },
  redback: {
    name: 'Redback',
    location: 'Melbourne',
    color: '#ff8732',
    previewImage: 'https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png'
  },
  roots_time: {
    name: 'Roots Time',
    location: 'Melbourne',
    color: '#e8927c',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg'
  },
  rudi_sound: {
    name: 'Rudi Sound',
    location: 'Melbourne',
    color: '#b45d15',
    previewImage: 'https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg'
  },
  sasquatch: {
    name: 'Sasquatch',
    location: 'Melbourne',
    color: '#26daaa',
    previewImage: 'https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg'
  },
  slack: {
    name: 'Slack',
    location: 'Melbourne',
    color: '#e55f45',
    previewImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg'
  },
  solidarity: {
    name: 'Solidarity',
    location: 'Melbourne',
    color: 'orange',
    previewImage: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg'
  },
  sub_temple: {
    name: 'Sub Temple',
    location: 'Melbourne',
    color: '#b29d81',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg'
  },
  sub_yard: {
    name: 'Sub Yard',
    location: 'Melbourne',
    color: '#8dcdd8',
    previewImage: 'https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png'
  },
  system_unknown: {
    name: 'System Unknown',
    location: 'Melbourne',
    color: '#4f83e2',
    previewImage: 'https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png'
  },
  tribe: {
    name: 'Tribe',
    location: 'Melbourne',
    color: '#ff8732',
    previewImage: 'https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png'
  },
  trip_hazard: {
    name: 'Trip Hazard',
    location: 'Melbourne',
    color: '#e8927c',
    previewImage: 'https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg'
  },
  virus: {
    name: 'Virus',
    location: 'Melbourne',
    color: '#b45d15',
    previewImage: 'https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg'
  },
  yabai_hifi: {
    name: 'Yabai HiFi',
    location: 'Melbourne',
    color: '#26daaa',
    previewImage: 'https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg'
  }
};

// Order of sound system crews
const rigOrder: PlanetType[] = [
  'adrians_wall', 'agape', 'battery_acid', 'curse_of_the_scarab', 
  'diy_hifi', 'dub_divination', 'echo_chamber', 'el_gran_mono', 
  'entropy', 'folly_hifi', 'general_feelings', 'goodys_hifi',
  'heartical_hi_powa', 'housewifes_choice', 'hyper_global', 'mahikai',
  'new_flower', 'redback', 'roots_time', 'rudi_sound', 
  'sasquatch', 'slack', 'solidarity', 'sub_temple',
  'sub_yard', 'system_unknown', 'tribe', 'trip_hazard',
  'virus', 'yabai_hifi'
];

interface RigMenuProps {
  selectedPlanet: PlanetType;
  onPlanetSelect: (rig: PlanetType) => void;
}

export default function PlanetMenu({ selectedPlanet, onPlanetSelect }: RigMenuProps) {
  const handleRigClick = (rig: PlanetType) => {
    onPlanetSelect(rig);
  };
  
  return (
    <div className="fixed left-20 h-full z-10 flex flex-col justify-center overflow-y-auto max-h-screen py-10">
      {rigOrder.map((rig, index) => (
        <div 
          key={rig}
          className={`flex items-center mb-4 cursor-pointer relative group ${selectedPlanet === rig ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          onClick={() => handleRigClick(rig)}
        >
          {/* Dot indicator */}
          <div className="w-3 h-3 rounded-full border-2 border-white relative">
            {selectedPlanet === rig && (
              <div className="absolute w-1 h-1 bg-white rounded-full left-0.5 top-0.5"></div>
            )}
          </div>
          
          {/* Rig preview */}
          <div 
            className="w-[30px] h-[30px] rounded-full ml-4 bg-cover"
            style={{ 
              backgroundImage: `url(${rigData[rig].previewImage})`,
              boxShadow: '0 -13px 10px 2px black inset' 
            }}
          ></div>
          
          {/* Rig info */}
          <div className="ml-5">
            <h2 className="text-white uppercase text-xs font-light tracking-wider flex items-center mb-1">
              <div 
                className={`h-[9px] transition-all duration-300 ${selectedPlanet === rig ? 'w-[30px] mr-1.5' : 'w-0'}`}
                style={{ backgroundColor: rigData[rig].color }}
              ></div>
              {rigData[rig].name}
            </h2>
            <h3 
              className={`text-[8px] uppercase tracking-wider transition-all duration-300 ${
                selectedPlanet === rig ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'
              }`}
              style={{ 
                color: selectedPlanet === rig ? rigData[rig].color : undefined 
              }}
            >
              {rigData[rig].location}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}