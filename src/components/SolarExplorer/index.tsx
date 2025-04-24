"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import styles from "./SolarExplorer.module.scss";
import PlanetMenu from "./PlanetMenu";
import SolarSystem from "./SolarSystem";

// Lazy load non-critical components for better performance
const InfoPanel = lazy(() => import("./InfoPanel"));

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
  const [isHighCapabilityDevice, setIsHighCapabilityDevice] = useState(false);

  useEffect(() => {
    // Detect device capabilities for progressive enhancement
    const checkCapabilities = () => {
      // Simple heuristic - can be enhanced
      const isHighEnd =
        !window.matchMedia("(max-width: 767px)").matches &&
        (navigator.hardwareConcurrency > 2 ||
          !("hardwareConcurrency" in navigator));

      setIsHighCapabilityDevice(isHighEnd);
    };

    checkCapabilities();

    // Re-check on resize for adaptive enhancement
    window.addEventListener("resize", checkCapabilities);
    return () => window.removeEventListener("resize", checkCapabilities);
  }, []);

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
        onPlanetChange={handlePlanetSelect}
        useHighDetail={isHighCapabilityDevice}
      />

      {openPanel && (
        <Suspense
          fallback={<div className={styles.loading}>Loading details...</div>}
        >
          <InfoPanel planet={openPanel} onClose={handleClosePanel} />
        </Suspense>
      )}
    </div>
  );
}
