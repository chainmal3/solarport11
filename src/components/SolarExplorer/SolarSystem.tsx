"use client";

import styles from "./SolarExplorer.module.scss";
import { PlanetType } from "./index";

interface PlanetData {
  name: string;
  description: string;
  bgImage: string;
  moons?: {
    name: string;
    image: string;
    position: {
      top: string;
      left: string;
    };
    size: string;
  }[];
  isDwarf?: boolean;
}

// Planet data including descriptions, images, and moon data
const planetData: Record<PlanetType, PlanetData> = {
  mercury: {
    name: "Mercury",
    description:
      "The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
  },
  venus: {
    name: "Venus",
    description:
      "Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.",
    bgImage:
      "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
  },
  earth: {
    name: "Earth",
    description:
      "Earth, our home. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.",
    bgImage:
      "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
    moons: [
      {
        name: "Moon",
        image:
          "https://img2.cgtrader.com/items/702173/682fad2a11/92k-moon-color-map-3d-model.jpg",
        position: { top: "-160px", left: "800px" },
        size: "0.45",
      },
    ],
  },
  mars: {
    name: "Mars",
    description:
      'Fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war often described as the "Red Planet".',
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg",
    moons: [
      {
        name: "Deimos",
        image:
          "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
        position: { top: "-100px", left: "900px" },
        size: "0.45",
      },
      {
        name: "Phobos",
        image:
          "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
        position: { top: "-160px", left: "100px" },
        size: "0.5",
      },
    ],
  },
  jupiter: {
    name: "Jupiter",
    description:
      "Jupiter is the largest planet in the solar system. Fittingly, it was named after the king of the gods in Roman mythology.",
    bgImage:
      "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
    moons: [
      {
        name: "Io",
        image: "http://stevealbers.net/albers/sos/jupiter/io/io_rgb_cyl.jpg",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Europa",
        image: "http://i.imgur.com/ZZBiHOH.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Ganymede",
        image:
          "https://vignette.wikia.nocookie.net/planet-texture-maps/images/1/14/Ganymede.jpg/revision/latest?cb=20180104001948",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  saturn: {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the sun and the second largest planet in the solar system. Saturn was the Roman name for Cronus, the lord of the Titans.",
    bgImage:
      "https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg",
    moons: [
      {
        name: "Titan",
        image:
          "https://pre00.deviantart.net/bea3/th/pre/i/2017/057/7/f/titan_texture_map_8k_by_fargetanik-db0f8m0.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Dione",
        image:
          "https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA12577-640x350.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Enceladus",
        image:
          "https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0NC8yMzkvb3JpZ2luYWwvZW5jZWxhZHVzLW1hcC1jYXNzaW5pLmpwZw==",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  uranus: {
    name: "Uranus",
    description:
      "The first planet to be discovered by scientists. The planet is notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.",
    bgImage:
      "https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png",
    moons: [
      {
        name: "Miranda",
        image:
          "http://celestia.simulatorlabbs.com/CelSL/textures/medres/miranda.jpg",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Ariel",
        image:
          "http://celestia.freedoors.org/Celestia-Doors/textures/medres/ariel.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Umbriel",
        image:
          "http://celestia.freedoors.org/Celestia-Doors/textures/medres/titania.jpg",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  neptune: {
    name: "Neptune",
    description:
      "Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope.",
    bgImage:
      "https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png",
    moons: [
      {
        name: "Triton",
        image:
          "https://img00.deviantart.net/b934/i/2016/198/b/0/triton_texture_map_14k_by_fargetanik-daac9tm.png",
        position: { top: "-100px", left: "100px" },
        size: "0.4",
      },
      {
        name: "Proteus",
        image:
          "http://2.bp.blogspot.com/-NrsDNbSk8TU/VKmLHdOgw0I/AAAAAAAAHvY/dod1Kqv2Ta8/s1600/NereidTxt2.jpg",
        position: { top: "-210px", left: "400px" },
        size: "0.45",
      },
      {
        name: "Nereid",
        image:
          "http://4.bp.blogspot.com/-3eyaVs4az74/VKmMpLo6FYI/AAAAAAAAHvs/zK5NTllQYnk/s1600/NereidTxt.jpg",
        position: { top: "-70px", left: "900px" },
        size: "0.4",
      },
    ],
  },
  pluto: {
    name: "Pluto",
    description:
      "Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar system.",
    bgImage:
      "https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png",
    isDwarf: true,
  },
};

// Planet order from inner to outer
const planetsOrder: PlanetType[] = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
];

interface SolarSystemProps {
  selectedPlanet: PlanetType;
  onReadMore: (planet: PlanetType) => void;
}

export default function SolarSystem({
  selectedPlanet,
  onReadMore,
}: SolarSystemProps) {
  // Calculate planet position styles based on selected planet
  const getPlanetStyles = (planet: PlanetType, index: number) => {
    const planetIndex = planetsOrder.findIndex((p) => p === planet);
    const selectedIndex = planetsOrder.findIndex((p) => p === selectedPlanet);
    const distance = index - selectedIndex;

    // More dramatic translateZ value for better 3D effect
    const translateZ = -2800 * distance;

    // Enhanced vertical shift for more visible movement
    const translateY = distance * 300;

    // More dramatic scaling for clearer depth perception
    const scaleValue =
      distance === 0 ? 1 : Math.max(0.2, 1 - Math.abs(distance) * 0.35);

    // Sharper opacity falloff for distant planets
    const opacity = Math.max(0, 1.5 - Math.abs(distance) * 0.6);

    const isActive = planet === selectedPlanet;

    return {
      transform: `translateZ(${translateZ}px) translateY(${translateY}px) rotatex(4deg) scale3d(${scaleValue}, ${scaleValue}, 1)`,
      opacity,
      backgroundImage: `url(${planetData[planet].bgImage})`,
      animation: isActive ? "planet-rotate 60s infinite linear" : "none",
      transition:
        "transform 2.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 2s cubic-bezier(0.19, 1, 0.22, 1)",
    };
  };

  // Set planet-specific shadow and glow colors
  const getPlanetShadow = (planet: PlanetType) => {
    const shadowColors = {
      mercury: "rgba(188, 143, 127, 0.6)",
      venus: "#b85a07",
      earth: "#7894a9",
      mars: "#6b261a",
      jupiter: "rgba(188, 143, 127, 0.6)",
      saturn: "rgba(188, 143, 127, 0.6)",
      uranus: "rgba(127, 188, 171, 0.6)",
      neptune: "rgb(45, 65, 83)",
      pluto: "rgb(45, 65, 83)",
    };

    const glowColors = {
      mercury: "rgba(234, 205, 199, 0.6)",
      venus: "#ffcb9c",
      earth: "#8cbaff",
      mars: "#e86363",
      jupiter: "rgba(234, 205, 199, 0.6)",
      saturn: "rgba(234, 205, 199, 0.6)",
      uranus: "rgba(234, 205, 199, 0.6)",
      neptune: "rgba(234, 205, 199, 0.6)",
      pluto: "rgba(234, 205, 199, 0.6)",
    };

    return {
      boxShadow: `0 -590px 150px black inset, 0 0px 130px 40px ${glowColors[planet]} inset, 0 0px 23px 4px ${glowColors[planet]} inset, 0 -10px 130px ${shadowColors[planet]}`,
    };
  };

  const handleReadMoreClick = (e: React.MouseEvent, planet: PlanetType) => {
    e.preventDefault();
    onReadMore(planet);
  };

  return (
    <>
      {/* Fixed text container outside 3D transform space */}
      {planetsOrder.map(
        (planet) =>
          planet === selectedPlanet && (
            <div
              key={`desc-${planet}`}
              className={styles.planetDescription}
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
                  color: `var(--color-${planet})`,
                  transform: `translateY(${
                    planet === selectedPlanet ? "0" : "-100px"
                  })`,
                  transition:
                    planet === selectedPlanet ? "all 0.3s 0.2s" : "all 0.2s 0s",
                }}
              >
                {planetData[planet].isDwarf ? "Dwarf planet" : "Planet"}
              </h2>

              <h1
                style={{
                  transform: `translateY(${
                    planet === selectedPlanet ? "0" : "-100px"
                  })`,
                  transition:
                    planet === selectedPlanet ? "all 0.3s 0.2s" : "all 0.2s 0s",
                }}
              >
                {planetData[planet].name}
              </h1>

              <p
                style={{
                  opacity: planet === selectedPlanet ? 1 : 0,
                  transition:
                    planet === selectedPlanet ? "all 0.4s 0.3s" : "all 0.2s 0s",
                }}
              >
                {planetData[planet].description}
              </p>

              <a
                href="#"
                onClick={(e) => handleReadMoreClick(e, planet)}
                style={{
                  color: `var(--color-${planet})`,
                  opacity: planet === selectedPlanet ? 1 : 0,
                  transition:
                    planet === selectedPlanet ? "all 0.4s 0.3s" : "all 0.2s 0s",
                  textShadow: "0 0 5px black",
                }}
              >
                Read Mor<span>e</span>
              </a>
            </div>
          )
      )}

      <div className={styles.viewport}>
        {planetsOrder.map((planet, index) => (
          <div key={planet} className={styles.solarSystem}>
            <div className={styles.planetContainer}>
              <div
                className={styles.planet}
                style={{
                  ...getPlanetStyles(planet, index),
                  ...getPlanetShadow(planet),
                }}
              >
                {/* Render moons if planet has them */}
                {planetData[planet].moons?.map((moon, moonIndex) => (
                  <div key={`${planet}-${moon.name}`}>
                    {/* Moon trajectory */}
                    <div
                      className={styles.trajectory}
                      style={{
                        width: `${1500 + moonIndex * 30}px`,
                        height: `${1500 + moonIndex * 30}px`,
                        left: `${-210 - moonIndex * 50}px`,
                        top: `${-189 - moonIndex * 20}px`,
                        opacity: planet === selectedPlanet ? 0.2 : 0,
                        transition:
                          planet === selectedPlanet
                            ? "all 0.6s 0.9s"
                            : "all 0.6s 0s",
                      }}
                    ></div>

                    {/* Moon itself */}
                    <div
                      className={styles.moon}
                      style={{
                        backgroundImage: `url(${moon.image})`,
                        left: moon.position.left,
                        top: moon.position.top,
                        transform: `scale(${moon.size})`,
                        boxShadow: "0px -30px 30px 10px black inset",
                        opacity: planet === selectedPlanet ? 1 : 0,
                        transition:
                          planet === selectedPlanet
                            ? "all 1s 1.2s"
                            : "all 0.6s 0s",
                      }}
                    >
                      <h3 style={{ color: `var(--color-${planet})` }}>Moon</h3>
                      <h2>{moon.name}</h2>
                    </div>
                  </div>
                ))}

                {/* Dark overlay for planet ground shadow */}
                <div className={styles.overlay}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
