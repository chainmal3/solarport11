"use client";

import { useState } from "react";
import styles from "./SolarExplorer.module.scss";
import PlanetMenu from "./PlanetMenu";
import SolarSystem from "./SolarSystem";
import InfoPanel from "./InfoPanel";

export type PlanetType =
  | "adrians_wall"
  | "agape"
  | "battery_acid"
  | "curse_of_the_scarab"
  | "diy_hifi"
  | "dub_divination"
  | "echo_chamber"
  | "el_gran_mono"
  | "entropy"
  | "folly_hifi"
  | "general_feelings"
  | "goodys_hifi"
  | "heartical_hi_powa"
  | "housewifes_choice"
  | "hyper_global"
  | "mahikai"
  | "new_flower"
  | "redback"
  | "roots_time"
  | "rudi_sound"
  | "sasquatch"
  | "slack"
  | "solidarity"
  | "sub_temple"
  | "sub_yard"
  | "system_unknown"
  | "tribe"
  | "trip_hazard"
  | "virus"
  | "yabai_hifi";

export default function SolarExplorer() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType>("agape");
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

      {openPanel && <InfoPanel planet={openPanel} onClose={handleClosePanel} />}
    </div>
  );
}
