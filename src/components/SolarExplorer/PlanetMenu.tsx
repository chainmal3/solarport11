"use client";

import styles from "./SolarExplorer.module.scss";
import { PlanetType } from "./index";

interface RigInfo {
  name: string;
  location: string;
  color: string;
  previewImage: string;
}

const rigData: Record<PlanetType, RigInfo> = {
  adrians_wall: {
    name: "Adrian's Wall",
    location: "Melbourne",
    color: "#e8927c",
    previewImage: "/images/placeholder.png",
  },
  agape: {
    name: "Agape",
    location: "Melbourne",
    color: "#b45d15",
    previewImage: "/images/placeholder.png",
  },
  battery_acid: {
    name: "Battery Acid",
    location: "Melbourne",
    color: "#26daaa",
    previewImage: "/images/placeholder.png",
  },
  curse_of_the_scarab: {
    name: "Curse of the Scarab",
    location: "Melbourne",
    color: "#e55f45",
    previewImage: "/images/placeholder.png",
  },
  diy_hifi: {
    name: "DIY HiFi",
    location: "Melbourne",
    color: "orange",
    previewImage: "/images/placeholder.png",
  },
  dub_divination: {
    name: "Dub Divination",
    location: "Melbourne",
    color: "#b29d81",
    previewImage: "/images/placeholder.png",
  },
  echo_chamber: {
    name: "Echo Chamber",
    location: "Melbourne",
    color: "#8dcdd8",
    previewImage: "/images/placeholder.png",
  },
  el_gran_mono: {
    name: "El Gran Mono",
    location: "Melbourne",
    color: "#4f83e2",
    previewImage: "/images/placeholder.png",
  },
  entropy: {
    name: "Entropy",
    location: "Melbourne",
    color: "#ff8732",
    previewImage: "/images/placeholder.png",
  },
  folly_hifi: {
    name: "Folly HiFi",
    location: "Melbourne",
    color: "#e8927c",
    previewImage: "/images/placeholder.png",
  },
  general_feelings: {
    name: "General Feelings",
    location: "Melbourne",
    color: "#b45d15",
    previewImage: "/images/placeholder.png",
  },
  goodys_hifi: {
    name: "Goodys HiFi",
    location: "Melbourne",
    color: "#26daaa",
    previewImage: "/images/placeholder.png",
  },
  heartical_hi_powa: {
    name: "Heartical Hi-Powa",
    location: "Melbourne",
    color: "#e55f45",
    previewImage: "/images/placeholder.png",
  },
  housewifes_choice: {
    name: "Housewife's Choice",
    location: "Melbourne",
    color: "orange",
    previewImage: "/images/placeholder.png",
  },
  hyper_global: {
    name: "Hyper Global",
    location: "Melbourne",
    color: "#b29d81",
    previewImage: "/images/placeholder.png",
  },
  mahikai: {
    name: "Mahikai",
    location: "Melbourne",
    color: "#8dcdd8",
    previewImage: "/images/placeholder.png",
  },
  new_flower: {
    name: "New Flower",
    location: "Melbourne",
    color: "#4f83e2",
    previewImage: "/images/placeholder.png",
  },
  redback: {
    name: "Redback",
    location: "Melbourne",
    color: "#ff8732",
    previewImage: "/images/placeholder.png",
  },
  roots_time: {
    name: "Roots Time",
    location: "Melbourne",
    color: "#e8927c",
    previewImage: "/images/placeholder.png",
  },
  rudi_sound: {
    name: "Rudi Sound",
    location: "Melbourne",
    color: "#b45d15",
    previewImage: "/images/placeholder.png",
  },
  sasquatch: {
    name: "Sasquatch",
    location: "Melbourne",
    color: "#26daaa",
    previewImage: "/images/placeholder.png",
  },
  slack: {
    name: "Slack",
    location: "Melbourne",
    color: "#e55f45",
    previewImage: "/images/placeholder.png",
  },
  solidarity: {
    name: "Solidarity",
    location: "Melbourne",
    color: "orange",
    previewImage: "/images/placeholder.png",
  },
  sub_temple: {
    name: "Sub Temple",
    location: "Melbourne",
    color: "#b29d81",
    previewImage: "/images/placeholder.png",
  },
  sub_yard: {
    name: "Sub Yard",
    location: "Melbourne",
    color: "#8dcdd8",
    previewImage: "/images/placeholder.png",
  },
  system_unknown: {
    name: "System Unknown",
    location: "Melbourne",
    color: "#4f83e2",
    previewImage: "/images/placeholder.png",
  },
  tribe: {
    name: "Tribe",
    location: "Melbourne",
    color: "#ff8732",
    previewImage: "/images/placeholder.png",
  },
  trip_hazard: {
    name: "Trip Hazard",
    location: "Melbourne",
    color: "#e8927c",
    previewImage: "/images/placeholder.png",
  },
  virus: {
    name: "Virus",
    location: "Melbourne",
    color: "#b45d15",
    previewImage: "/images/placeholder.png",
  },
  yabai_hifi: {
    name: "Yabai HiFi",
    location: "Melbourne",
    color: "#26daaa",
    previewImage: "/images/placeholder.png",
  },
};

// Order of sound system crews
const rigOrder: PlanetType[] = [
  "adrians_wall",
  "agape",
  "battery_acid",
  "curse_of_the_scarab",
  "diy_hifi",
  "dub_divination",
  "echo_chamber",
  "el_gran_mono",
  "entropy",
  "folly_hifi",
  "general_feelings",
  "goodys_hifi",
  "heartical_hi_powa",
  "housewifes_choice",
  "hyper_global",
  "mahikai",
  "new_flower",
  "redback",
  "roots_time",
  "rudi_sound",
  "sasquatch",
  "slack",
  "solidarity",
  "sub_temple",
  "sub_yard",
  "system_unknown",
  "tribe",
  "trip_hazard",
  "virus",
  "yabai_hifi",
];

interface RigMenuProps {
  selectedPlanet: PlanetType;
  onPlanetSelect: (rig: PlanetType) => void;
}

export default function PlanetMenu({
  selectedPlanet,
  onPlanetSelect,
}: RigMenuProps) {
  const handleRigClick = (rig: PlanetType) => {
    onPlanetSelect(rig);
  };

  return (
    <div className={`flex flex-col justify-center z-10 ${styles.planetMenu}`}>
      {rigOrder.map((rig, index) => (
        <div
          key={rig}
          className={`flex items-center mb-1 cursor-pointer relative group ${
            selectedPlanet === rig
              ? "opacity-100"
              : "opacity-40 hover:opacity-70"
          }`}
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
              boxShadow: "0 -13px 10px 2px black inset",
            }}
          ></div>

          {/* Rig info */}
          <div className="ml-5">
            <h2 className="text-white uppercase text-xs font-light tracking-wider flex items-center mb-1">
              <div
                className={`h-[9px] transition-all duration-300 ${
                  selectedPlanet === rig ? "w-[30px] mr-1.5" : "w-0"
                }`}
                style={{ backgroundColor: rigData[rig].color }}
              ></div>
              {rigData[rig].name}
            </h2>
            <h3
              className={`text-[8px] uppercase tracking-wider transition-all duration-300 ${
                selectedPlanet === rig
                  ? "opacity-100"
                  : "opacity-30 group-hover:opacity-100"
              }`}
              style={{
                color: selectedPlanet === rig ? rigData[rig].color : undefined,
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
