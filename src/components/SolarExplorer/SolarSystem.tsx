"use client";

import styles from "./SolarExplorer.module.scss";
import { PlanetType } from "./index";

interface RigData {
  name: string;
  description: string;
  bgImage: string;
  speakers?: {
    name: string;
    image: string;
    position: {
      top: string;
      left: string;
    };
    size: string;
  }[];
  isMobile?: boolean;
}

// Sound system rig data including descriptions, images, and speaker data
const rigData: Record<PlanetType, RigData> = {
  adrians_wall: {
    name: "Adrian's Wall",
    description:
      "Adrian's Wall sound system, bringing massive bass to Melbourne events with their custom-built stacks.",
    bgImage: "/images/placeholder.png",
  },
  agape: {
    name: "Agape",
    description:
      "Agape delivers deep, spiritual vibes with their meticulously tuned sound system, captivating Melbourne audiences with every session.",
    bgImage: "/images/placeholder.png",
  },
  battery_acid: {
    name: "Battery Acid",
    description:
      "Battery Acid brings raw, energetic sound to Melbourne's underground scene, known for their hard-hitting bass and powerful top-end.",
    bgImage: "/images/placeholder.png",
    speakers: [
      {
        name: "Sub",
        image: "/images/placeholder.png",
        position: { top: "-160px", left: "800px" },
        size: "0.45",
      },
    ],
  },
  curse_of_the_scarab: {
    name: "Curse of the Scarab",
    description:
      "With a uniquely atmospheric sound, Curse of the Scarab delivers deep, mystical rhythms to Melbourne's dub and bass community.",
    bgImage: "/images/placeholder.png",
    speakers: [
      {
        name: "Mid",
        image: "/images/placeholder.png",
        position: { top: "-100px", left: "900px" },
        size: "0.45",
      },
      {
        name: "Bass",
        image: "/images/placeholder.png",
        position: { top: "-160px", left: "100px" },
        size: "0.5",
      },
    ],
  },
  diy_hifi: {
    name: "DIY HiFi",
    description:
      "DIY HiFi embodies the self-built ethos, crafting their own speaker stacks to deliver authentic, homegrown sound in Melbourne.",
    bgImage: "/images/placeholder.png",
    speakers: [
      {
        name: "Tweeter",
        image: "/images/placeholder.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Horn",
        image: "/images/placeholder.png",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Woofer",
        image: "/images/placeholder.png",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  dub_divination: {
    name: "Dub Divination",
    description:
      "Dub Divination creates spiritual sound experiences, channeling deep, meditative dub vibrations through their powerful system.",
    bgImage: "/images/placeholder.png",
    speakers: [
      {
        name: "Scoop",
        image: "/images/placeholder.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Mid",
        image: "/images/placeholder.png",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Top",
        image: "/images/placeholder.png",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  echo_chamber: {
    name: "Echo Chamber",
    description:
      "Echo Chamber specializes in spatial, reverberant sound that fills venues completely, creating immersive dub experiences for Melbourne audiences.",
    bgImage: "/images/placeholder.png",
    speakers: [
      {
        name: "Bass",
        image: "/images/placeholder.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Echo",
        image: "/images/placeholder.png",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Delay",
        image: "/images/placeholder.png",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  el_gran_mono: {
    name: "El Gran Mono",
    description:
      "El Gran Mono brings Latin-influenced sounds to Melbourne's scene, with a distinctively warm, rhythmic sound system setup.",
    bgImage: "/images/placeholder.png",
    speakers: [
      {
        name: "Bajo",
        image: "/images/placeholder.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Medio",
        image: "/images/placeholder.png",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Alto",
        image: "/images/placeholder.png",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  entropy: {
    name: "Entropy",
    description:
      "Entropy creates chaotic yet harmonious sound experiences, with a system designed to generate organized sonic disorder.",
    bgImage: "/images/placeholder.png",
    isMobile: true,
  },
  folly_hifi: {
    name: "Folly HiFi",
    description:
      "Folly HiFi delivers a warm, classic sound that honors traditional dub methods while innovating for modern Melbourne audiences.",
    bgImage: "/images/placeholder.png",
  },
  general_feelings: {
    name: "General Feelings",
    description:
      "General Feelings creates emotional, mood-driven sound experiences that resonate deeply with Melbourne's conscious bass community.",
    bgImage: "/images/placeholder.png",
  },
  goodys_hifi: {
    name: "Goodys HiFi",
    description:
      "Goodys HiFi brings quality, balanced sound with their meticulously crafted system, a mainstay in Melbourne's sound system culture.",
    bgImage: "/images/placeholder.png",
  },
  heartical_hi_powa: {
    name: "Heartical Hi-Powa",
    description:
      "Heartical Hi-Powa delivers soulful, roots-driven bass music through their powerful, heart-centered sound system setup.",
    bgImage: "/images/placeholder.png",
  },
  housewifes_choice: {
    name: "Housewife's Choice",
    description:
      "Housewife's Choice brings a distinctive, domestic-inspired sound system experience that resonates with everyday rhythms and relatable vibes.",
    bgImage: "/images/placeholder.png",
  },
  hyper_global: {
    name: "Hyper Global",
    description:
      "Hyper Global connects Melbourne to worldwide bass culture, with a system designed to showcase international sounds and influences.",
    bgImage: "/images/placeholder.png",
  },
  mahikai: {
    name: "Mahikai",
    description:
      "Mahikai delivers exotic, deep bass experiences influenced by global rhythms and sounds, with a uniquely crafted system.",
    bgImage: "/images/placeholder.png",
  },
  new_flower: {
    name: "New Flower",
    description:
      "New Flower brings fresh, blooming sound to Melbourne's scene, with innovative approaches to traditional sound system culture.",
    bgImage: "/images/placeholder.png",
  },
  redback: {
    name: "Redback",
    description:
      "Redback delivers distinctly Australian sound system culture, with powerful, dangerous bass that stings like its namesake.",
    bgImage: "/images/placeholder.png",
  },
  roots_time: {
    name: "Roots Time",
    description:
      "Roots Time honors the foundations of dub and reggae with their traditionally built sound system focusing on authentic vibrations.",
    bgImage: "/images/placeholder.png",
  },
  rudi_sound: {
    name: "Rudi Sound",
    description:
      "Rudi Sound delivers raw, unprocessed bass experiences, with a focus on natural acoustics and pure sound reproduction.",
    bgImage: "/images/placeholder.png",
  },
  sasquatch: {
    name: "Sasquatch",
    description:
      "Sasquatch brings mythically large, hard-to-find bass to Melbourne, with a system that leaves a legendary impact on all who hear it.",
    bgImage: "/images/placeholder.png",
  },
  slack: {
    name: "Slack",
    description:
      "Slack creates laid-back, easy-flowing sound with a system designed for maximum vibes with minimum tension.",
    bgImage: "/images/placeholder.png",
  },
  solidarity: {
    name: "Solidarity",
    description:
      "Solidarity unites Melbourne's bass community with a collectively built and operated sound system focused on community power.",
    bgImage: "/images/placeholder.png",
  },
  sub_temple: {
    name: "Sub Temple",
    description:
      "Sub Temple creates sacred bass experiences with their sound system designed to honor the spiritual dimensions of dub culture.",
    bgImage: "/images/placeholder.png",
  },
  sub_yard: {
    name: "Sub Yard",
    description:
      "Sub Yard cultivates deep, grounded bass culture with their earthy, garden-grown sound system setup.",
    bgImage: "/images/placeholder.png",
  },
  system_unknown: {
    name: "System Unknown",
    description:
      "System Unknown brings mysterious, anonymous bass to Melbourne with their enigmatic sound system setup and secretive approach.",
    bgImage: "/images/placeholder.png",
  },
  tribe: {
    name: "Tribe",
    description:
      "Tribe brings communal, collective bass experiences that unite Melbourne's sound system community through shared vibrations.",
    bgImage: "/images/placeholder.png",
  },
  trip_hazard: {
    name: "Trip Hazard",
    description:
      "Trip Hazard creates dangerously psychedelic bass experiences with their mind-altering sound system approach.",
    bgImage: "/images/placeholder.png",
  },
  virus: {
    name: "Virus",
    description:
      "Virus spreads infectious bass throughout Melbourne, with sound designed to replicate and spread through the community.",
    bgImage: "/images/placeholder.png",
  },
  yabai_hifi: {
    name: "Yabai HiFi",
    description:
      "Yabai HiFi delivers intense, Japanese-influenced sound system culture with their precisely engineered speaker stacks.",
    bgImage: "/images/placeholder.png",
  },
};

// Sound system rig order
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

interface SoundSystemProps {
  selectedPlanet: PlanetType;
  onReadMore: (rig: PlanetType) => void;
  onPlanetChange?: (rig: PlanetType) => void; // Callback for planet navigation
  useHighDetail?: boolean; // Flag for progressive enhancement based on device capability
}

export default function SolarSystem({
  selectedPlanet,
  onReadMore,
  onPlanetChange,
  useHighDetail = true, // Default to high detail if not specified
}: SoundSystemProps) {
  // Calculate rig position styles based on selected rig and device capability
  const getRigStyles = (rig: PlanetType, index: number) => {
    const rigIndex = rigOrder.findIndex((p) => p === rig);
    const selectedIndex = rigOrder.findIndex((p) => p === selectedPlanet);
    const distance = index - selectedIndex;

    // Adjust spacing and animation complexity based on device capability
    const baseSpacingMultiplier = useHighDetail ? 1.5 : 1.2; // Less dramatic spacing on lower-end devices

    // Use simpler transforms for low-end devices
    const zSpacing =
      Math.sign(distance) *
      Math.pow(Math.abs(distance) + 1, baseSpacingMultiplier) *
      (useHighDetail ? -4000 : -3000); // Less extreme depth for low-end devices

    const ySpacing =
      Math.sign(distance) *
      Math.pow(Math.abs(distance) + 1, baseSpacingMultiplier) *
      (useHighDetail ? 500 : 400);

    // Simpler scaling for low-end devices
    const scaleValue = useHighDetail
      ? distance === 0
        ? 1
        : Math.max(0.2, 1 - Math.pow(Math.abs(distance), 1.2) * 0.3)
      : distance === 0
      ? 1
      : Math.max(0.2, 1 - Math.abs(distance) * 0.2);

    // Simpler opacity calculation for low-end devices
    const opacity = useHighDetail
      ? Math.max(0, 1 - Math.pow(Math.abs(distance), 1.5) * 0.6)
      : Math.max(0, 1 - Math.abs(distance) * 0.3);

    const isActive = rig === selectedPlanet;

    // No texture animation for the placeholder
    const animationStyle = "none";

    // Use simpler transitions on lower-capability devices
    const transitionStyle = useHighDetail
      ? "transform 2.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 2s cubic-bezier(0.19, 1, 0.22, 1)"
      : "transform 2s ease-out, opacity 1.5s ease-out";

    // Use the same approach for all sound systems - no planet shapes or texture animations
    return {
      transform: `translateZ(${zSpacing}px) translateY(${ySpacing}px) rotatex(20deg) scale3d(${scaleValue}, ${scaleValue}, 1)`,
      opacity,
      background: "transparent", // No backgroundImage - we'll use img elements instead
      animation: "none", // No texture animation
      transition: transitionStyle,
      borderRadius: "0", // Remove the circular shape
      overflow: "visible", // Allow glow to extend beyond container
    };
  };
  // Get rig-specific color info for shadows and glows
  const getRigColors = (rig: PlanetType) => {
    // Color mappings for each sound system
    const shadowColors: Record<string, string> = {
      adrians_wall: "rgba(188, 143, 127, 0.6)",
      agape: "#b85a07",
      battery_acid: "#7894a9",
      curse_of_the_scarab: "#6b261a",
      diy_hifi: "rgba(188, 143, 127, 0.6)",
      dub_divination: "rgba(188, 143, 127, 0.6)",
      echo_chamber: "rgba(127, 188, 171, 0.6)",
      el_gran_mono: "rgb(45, 65, 83)",
      entropy: "rgb(45, 65, 83)",
    };

    const glowColors: Record<string, string> = {
      adrians_wall: "rgba(234, 205, 199, 0.6)",
      agape: "#ffcb9c",
      battery_acid: "#8cbaff",
      curse_of_the_scarab: "#e86363",
      diy_hifi: "rgba(234, 205, 199, 0.6)",
      dub_divination: "rgba(234, 205, 199, 0.6)",
      echo_chamber: "rgba(234, 205, 199, 0.6)",
      el_gran_mono: "rgba(234, 205, 199, 0.6)",
      entropy: "rgba(234, 205, 199, 0.6)",
    };

    // Generate default colors for rigs not explicitly defined
    return {
      shadowColor: shadowColors[rig] || "rgba(188, 143, 127, 0.6)",
      glowColor: glowColors[rig] || "rgba(234, 205, 199, 0.6)",
    };
  };

  const handleReadMoreClick = (e: React.MouseEvent, rig: PlanetType) => {
    e.preventDefault();
    onReadMore(rig);
  };

  return (
    <>
      {/* Fixed text container outside 3D transform space - with responsive position */}
      {rigOrder.map(
        (rig) =>
          rig === selectedPlanet && (
            <div
              key={`desc-${rig}`}
              className={styles.rigDescription}
              style={{
                opacity: 1,
                position: "fixed",
                // Position text in the lower part of the viewport
                top: "60vh",
                left: "0",
                right: "0",
                zIndex: 9999,
                // Add media query class instead of window.innerWidth check
                ...(typeof window !== "undefined" && window.innerWidth < 768
                  ? { top: "50vh" }
                  : {}),
              }}
            >
              <h2
                style={{
                  color: `var(--color-${rig})`,
                  transform: `translateY(${
                    rig === selectedPlanet ? "0" : "-100px"
                  })`,
                  transition:
                    rig === selectedPlanet ? "all 0.3s 0.2s" : "all 0.2s 0s",
                }}
              >
                {rigData[rig].isMobile ? "Mobile rig" : "Sound system"}
              </h2>

              <h1
                style={{
                  transform: `translateY(${
                    rig === selectedPlanet ? "0" : "-100px"
                  })`,
                  transition:
                    rig === selectedPlanet ? "all 0.3s 0.2s" : "all 0.2s 0s",
                }}
              >
                {rigData[rig].name}
              </h1>

              <p
                style={{
                  opacity: rig === selectedPlanet ? 1 : 0,
                  transition:
                    rig === selectedPlanet ? "all 0.4s 0.3s" : "all 0.2s 0s",
                }}
              >
                {rigData[rig].description}
              </p>

              <a
                href="#"
                onClick={(e) => handleReadMoreClick(e, rig)}
                style={{
                  color: `var(--color-${rig})`,
                  opacity: rig === selectedPlanet ? 1 : 0,
                  transition:
                    rig === selectedPlanet ? "all 0.4s 0.3s" : "all 0.2s 0s",
                  textShadow: "0 0 5px black",
                }}
              >
                Read Mor<span>e</span>
              </a>
            </div>
          )
      )}

      <div className={styles.viewport}>
        {/* Only render visible planets to improve performance on low-end devices */}
        {rigOrder.map((rig, index) => {
          // For low-capability devices, only render planets that are close to the selected one
          const selectedIndex = rigOrder.findIndex((p) => p === selectedPlanet);
          const distance = Math.abs(index - selectedIndex);

          // Skip rendering far planets on low-capability devices
          if (!useHighDetail && distance > 5) {
            return null;
          }

          return (
            <div key={rig} className={styles.soundSystem}>
              <div className={styles.rigContainer}>
                <div
                  className={styles.rig}
                  style={{
                    ...getRigStyles(rig, index),
                    // Remove shadow effects for all sound systems
                  }}
                >
                  {/* Use image with glow for all sound systems */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Clickable planet image with white glow effect */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        if (!onPlanetChange) return;

                        // Determine if click was on left or right side of the image
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const isLeftSide = clickX < rect.width / 2;

                        // Find next/previous planet
                        const currentIndex = rigOrder.findIndex(
                          (p) => p === selectedPlanet
                        );
                        let newIndex;

                        if (isLeftSide) {
                          // Go to previous planet
                          newIndex =
                            currentIndex > 0
                              ? currentIndex - 1
                              : rigOrder.length - 1;
                        } else {
                          // Go to next planet
                          newIndex =
                            currentIndex < rigOrder.length - 1
                              ? currentIndex + 1
                              : 0;
                        }

                        onPlanetChange(rigOrder[newIndex]);
                      }}
                    >
                      <img
                        src={rigData[rig].bgImage}
                        alt={rigData[rig].name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          filter:
                            rig === selectedPlanet
                              ? "drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.4))"
                              : "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.3))",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                  {/* Render speakers if rig has them and device can handle it */}
                  {useHighDetail &&
                    rigData[rig].speakers?.map((speaker, speakerIndex) => (
                      <div key={`${rig}-${speaker.name}`}>
                        {/* Speaker trajectory */}
                        <div
                          className={styles.trajectory}
                          style={{
                            width: `${1500 + speakerIndex * 30}px`,
                            height: `${1500 + speakerIndex * 30}px`,
                            left: `${-210 - speakerIndex * 50}px`,
                            top: `${-189 - speakerIndex * 20}px`,
                            opacity: rig === selectedPlanet ? 0.2 : 0,
                            transition:
                              rig === selectedPlanet
                                ? "all 0.6s 0.9s"
                                : "all 0.6s 0s",
                          }}
                        ></div>

                        {/* Speaker itself */}
                        <div
                          className={styles.moon}
                          style={{
                            left: speaker.position.left,
                            top: speaker.position.top,
                            transform: `scale(${speaker.size})`,
                            background: "transparent", // No background image
                            borderRadius: "0", // Remove circular shape
                            overflow: "visible", // Allow glow to extend beyond container
                            opacity: rig === selectedPlanet ? 1 : 0,
                            transition:
                              rig === selectedPlanet
                                ? "all 1s 1.2s"
                                : "all 0.6s 0s",
                          }}
                        >
                          {/* Use img for speaker instead of background-image */}
                          <img
                            src={speaker.image}
                            alt={`${speaker.name} speaker`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              filter:
                                "drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))",
                            }}
                          />
                          <h3 style={{ color: `var(--color-${rig})` }}>
                            Speaker
                          </h3>
                          <h2>{speaker.name}</h2>
                        </div>
                      </div>
                    ))}

                  {/* Removing the overlay div that was creating the curved black shadow */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
