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
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
  },
  agape: {
    name: "Agape",
    description:
      "Agape delivers deep, spiritual vibes with their meticulously tuned sound system, captivating Melbourne audiences with every session.",
    bgImage:
      "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
  },
  battery_acid: {
    name: "Battery Acid",
    description:
      "Battery Acid brings raw, energetic sound to Melbourne's underground scene, known for their hard-hitting bass and powerful top-end.",
    bgImage:
      "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
    speakers: [
      {
        name: "Sub",
        image:
          "https://img2.cgtrader.com/items/702173/682fad2a11/92k-moon-color-map-3d-model.jpg",
        position: { top: "-160px", left: "800px" },
        size: "0.45",
      },
    ],
  },
  curse_of_the_scarab: {
    name: "Curse of the Scarab",
    description:
      "With a uniquely atmospheric sound, Curse of the Scarab delivers deep, mystical rhythms to Melbourne's dub and bass community.",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg",
    speakers: [
      {
        name: "Mid",
        image:
          "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
        position: { top: "-100px", left: "900px" },
        size: "0.45",
      },
      {
        name: "Bass",
        image:
          "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
        position: { top: "-160px", left: "100px" },
        size: "0.5",
      },
    ],
  },
  diy_hifi: {
    name: "DIY HiFi",
    description:
      "DIY HiFi embodies the self-built ethos, crafting their own speaker stacks to deliver authentic, homegrown sound in Melbourne.",
    bgImage:
      "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
    speakers: [
      {
        name: "Tweeter",
        image: "http://stevealbers.net/albers/sos/jupiter/io/io_rgb_cyl.jpg",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Horn",
        image: "http://i.imgur.com/ZZBiHOH.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Woofer",
        image:
          "https://vignette.wikia.nocookie.net/planet-texture-maps/images/1/14/Ganymede.jpg/revision/latest?cb=20180104001948",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  dub_divination: {
    name: "Dub Divination",
    description:
      "Dub Divination creates spiritual sound experiences, channeling deep, meditative dub vibrations through their powerful system.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg",
    speakers: [
      {
        name: "Scoop",
        image:
          "https://pre00.deviantart.net/bea3/th/pre/i/2017/057/7/f/titan_texture_map_8k_by_fargetanik-db0f8m0.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Mid",
        image:
          "https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA12577-640x350.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Top",
        image:
          "https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0NC8yMzkvb3JpZ2luYWwvZW5jZWxhZHVzLW1hcC1jYXNzaW5pLmpwZw==",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  echo_chamber: {
    name: "Echo Chamber",
    description:
      "Echo Chamber specializes in spatial, reverberant sound that fills venues completely, creating immersive dub experiences for Melbourne audiences.",
    bgImage:
      "https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png",
    speakers: [
      {
        name: "Bass",
        image:
          "http://celestia.simulatorlabbs.com/CelSL/textures/medres/miranda.jpg",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Echo",
        image:
          "http://celestia.freedoors.org/Celestia-Doors/textures/medres/ariel.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Delay",
        image:
          "http://celestia.freedoors.org/Celestia-Doors/textures/medres/titania.jpg",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  el_gran_mono: {
    name: "El Gran Mono",
    description:
      "El Gran Mono brings Latin-influenced sounds to Melbourne's scene, with a distinctively warm, rhythmic sound system setup.",
    bgImage:
      "https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png",
    speakers: [
      {
        name: "Bajo",
        image:
          "https://img00.deviantart.net/b934/i/2016/198/b/0/triton_texture_map_14k_by_fargetanik-daac9tm.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Medio",
        image:
          "http://2.bp.blogspot.com/-NrsDNbSk8TU/VKmLHdOgw0I/AAAAAAAAHvY/dod1Kqv2Ta8/s1600/NereidTxt2.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Alto",
        image:
          "http://4.bp.blogspot.com/-3eyaVs4az74/VKmMpLo6FYI/AAAAAAAAHvs/zK5NTllQYnk/s1600/NereidTxt.jpg",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  entropy: {
    name: "Entropy",
    description:
      "Entropy creates chaotic yet harmonious sound experiences, with a system designed to generate organized sonic disorder.",
    bgImage:
      "https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png",
    isMobile: true,
  },
  folly_hifi: {
    name: "Folly HiFi",
    description:
      "Folly HiFi delivers a warm, classic sound that honors traditional dub methods while innovating for modern Melbourne audiences.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
  },
  general_feelings: {
    name: "General Feelings",
    description:
      "General Feelings creates emotional, mood-driven sound experiences that resonate deeply with Melbourne's conscious bass community.",
    bgImage:
      "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
  },
  goodys_hifi: {
    name: "Goodys HiFi",
    description:
      "Goodys HiFi brings quality, balanced sound with their meticulously crafted system, a mainstay in Melbourne's sound system culture.",
    bgImage:
      "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
  },
  heartical_hi_powa: {
    name: "Heartical Hi-Powa",
    description:
      "Heartical Hi-Powa delivers soulful, roots-driven bass music through their powerful, heart-centered sound system setup.",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg",
  },
  housewifes_choice: {
    name: "Housewife's Choice",
    description:
      "Housewife's Choice brings a distinctive, domestic-inspired sound system experience that resonates with everyday rhythms and relatable vibes.",
    bgImage:
      "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
  },
  hyper_global: {
    name: "Hyper Global",
    description:
      "Hyper Global connects Melbourne to worldwide bass culture, with a system designed to showcase international sounds and influences.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg",
  },
  mahikai: {
    name: "Mahikai",
    description:
      "Mahikai delivers exotic, deep bass experiences influenced by global rhythms and sounds, with a uniquely crafted system.",
    bgImage:
      "https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png",
  },
  new_flower: {
    name: "New Flower",
    description:
      "New Flower brings fresh, blooming sound to Melbourne's scene, with innovative approaches to traditional sound system culture.",
    bgImage:
      "https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png",
  },
  redback: {
    name: "Redback",
    description:
      "Redback delivers distinctly Australian sound system culture, with powerful, dangerous bass that stings like its namesake.",
    bgImage:
      "https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png",
  },
  roots_time: {
    name: "Roots Time",
    description:
      "Roots Time honors the foundations of dub and reggae with their traditionally built sound system focusing on authentic vibrations.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
  },
  rudi_sound: {
    name: "Rudi Sound",
    description:
      "Rudi Sound delivers raw, unprocessed bass experiences, with a focus on natural acoustics and pure sound reproduction.",
    bgImage:
      "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
  },
  sasquatch: {
    name: "Sasquatch",
    description:
      "Sasquatch brings mythically large, hard-to-find bass to Melbourne, with a system that leaves a legendary impact on all who hear it.",
    bgImage:
      "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
  },
  slack: {
    name: "Slack",
    description:
      "Slack creates laid-back, easy-flowing sound with a system designed for maximum vibes with minimum tension.",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg",
  },
  solidarity: {
    name: "Solidarity",
    description:
      "Solidarity unites Melbourne's bass community with a collectively built and operated sound system focused on community power.",
    bgImage:
      "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
  },
  sub_temple: {
    name: "Sub Temple",
    description:
      "Sub Temple creates sacred bass experiences with their sound system designed to honor the spiritual dimensions of dub culture.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg",
  },
  sub_yard: {
    name: "Sub Yard",
    description:
      "Sub Yard cultivates deep, grounded bass culture with their earthy, garden-grown sound system setup.",
    bgImage:
      "https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png",
  },
  system_unknown: {
    name: "System Unknown",
    description:
      "System Unknown brings mysterious, anonymous bass to Melbourne with their enigmatic sound system setup and secretive approach.",
    bgImage:
      "https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png",
  },
  tribe: {
    name: "Tribe",
    description:
      "Tribe brings communal, collective bass experiences that unite Melbourne's sound system community through shared vibrations.",
    bgImage:
      "https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png",
  },
  trip_hazard: {
    name: "Trip Hazard",
    description:
      "Trip Hazard creates dangerously psychedelic bass experiences with their mind-altering sound system approach.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
  },
  virus: {
    name: "Virus",
    description:
      "Virus spreads infectious bass throughout Melbourne, with sound designed to replicate and spread through the community.",
    bgImage:
      "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
  },
  yabai_hifi: {
    name: "Yabai HiFi",
    description:
      "Yabai HiFi delivers intense, Japanese-influenced sound system culture with their precisely engineered speaker stacks.",
    bgImage:
      "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
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
}

export default function SolarSystem({
  selectedPlanet,
  onReadMore,
}: SoundSystemProps) {
  // Calculate rig position styles based on selected rig
  const getRigStyles = (rig: PlanetType, index: number) => {
    const rigIndex = rigOrder.findIndex((p) => p === rig);
    const selectedIndex = rigOrder.findIndex((p) => p === selectedPlanet);
    const distance = index - selectedIndex;

    // Exponential spacing to create more gradual progression
    const baseSpacingMultiplier = 1.5; // Adjust this to control spacing
    const zSpacing =
      Math.sign(distance) *
      Math.pow(Math.abs(distance) + 1, baseSpacingMultiplier) *
      -4000;
    const ySpacing =
      Math.sign(distance) *
      Math.pow(Math.abs(distance) + 1, baseSpacingMultiplier) *
      500;

    // Scaling with more gradual falloff
    const scaleValue =
      distance === 0
        ? 1
        : Math.max(0.2, 1 - Math.pow(Math.abs(distance), 1.2) * 0.3);

    // Opacity with smoother transition
    const opacity = Math.max(0, 1 - Math.pow(Math.abs(distance), 1.5) * 0.6);

    const isActive = rig === selectedPlanet;

    return {
      transform: `translateZ(${zSpacing}px) translateY(${ySpacing}px) rotatex(20deg) scale3d(${scaleValue}, ${scaleValue}, 1)`,
      opacity,
      backgroundImage: `url(${rigData[rig].bgImage})`,
      animation: isActive ? "planet-rotate 60s infinite linear" : "none",
      transition:
        "transform 2.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 2s cubic-bezier(0.19, 1, 0.22, 1)",
    };
  };

  // Set rig-specific shadow and glow colors
  const getRigShadow = (rig: PlanetType) => {
    // Generate default colors if not in the original set
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
    const shadowColor = shadowColors[rig] || "rgba(188, 143, 127, 0.6)";
    const glowColor = glowColors[rig] || "rgba(234, 205, 199, 0.6)";

    return {
      boxShadow: `0 -590px 150px black inset, 0 0px 130px 40px ${glowColor} inset, 0 0px 23px 4px ${glowColor} inset, 0 -10px 130px ${shadowColor}`,
    };
  };

  const handleReadMoreClick = (e: React.MouseEvent, rig: PlanetType) => {
    e.preventDefault();
    onReadMore(rig);
  };

  return (
    <>
      {/* Fixed text container outside 3D transform space */}
      {rigOrder.map(
        (rig) =>
          rig === selectedPlanet && (
            <div
              key={`desc-${rig}`}
              className={styles.rigDescription}
              style={{
                opacity: 1,
                position: "fixed",
                top: "60vh", // Position text in the lower part of the viewport
                left: "0",
                right: "0",
                zIndex: 9999,
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
        {rigOrder.map((rig, index) => (
          <div key={rig} className={styles.soundSystem}>
            <div className={styles.rigContainer}>
              <div
                className={styles.rig}
                style={{
                  ...getRigStyles(rig, index),
                  ...getRigShadow(rig),
                }}
              >
                {/* Render speakers if rig has them */}
                {rigData[rig].speakers?.map((speaker, speakerIndex) => (
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
                        backgroundImage: `url(${speaker.image})`,
                        left: speaker.position.left,
                        top: speaker.position.top,
                        transform: `scale(${speaker.size})`,
                        boxShadow: "0px -30px 30px 10px black inset",
                        opacity: rig === selectedPlanet ? 1 : 0,
                        transition:
                          rig === selectedPlanet
                            ? "all 1s 1.2s"
                            : "all 0.6s 0s",
                      }}
                    >
                      <h3 style={{ color: `var(--color-${rig})` }}>Speaker</h3>
                      <h2>{speaker.name}</h2>
                    </div>
                  </div>
                ))}

                {/* Dark overlay for rig ground shadow */}
                <div className={styles.overlay}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
