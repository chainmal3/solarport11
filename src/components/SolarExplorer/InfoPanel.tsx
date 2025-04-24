"use client";

import styles from "./SolarExplorer.module.scss";
import { PlanetType } from "./index";

// Data for each rig's information panel
const rigInfo: Record<
  PlanetType,
  {
    title: string;
    paragraphs: string[];
    facts: { title: string; content: string }[];
    image: string;
  }
> = {
  adrians_wall: {
    title: "Adrian's Wall",
    paragraphs: [
      "Adrian's Wall is one of Melbourne's influential sound system crews, known for their unique sound engineering and vibrant performances.",
      "The crew has been active in the Melbourne sound system scene for several years, bringing their distinctive style to venues across the city.",
    ],
    facts: [
      {
        title: "Adrian's Wall is known for their powerful bass frequencies.",
        content:
          "Their custom sound system delivers deep, resonant bass that creates an immersive experience for dancers and listeners alike.",
      },
      {
        title: "The crew hosts regular events throughout Melbourne.",
        content:
          "From warehouse parties to festival stages, Adrian's Wall has become a fixture in Melbourne's vibrant music scene.",
      },
      {
        title: "Their musical selection spans multiple genres.",
        content:
          "While rooted in dub and reggae traditions, Adrian's Wall incorporates elements of electronic music, creating a unique sonic landscape.",
      },
      {
        title: "The sound system features custom-built speakers.",
        content:
          "Each component of Adrian's Wall's rig has been carefully designed and constructed to deliver optimal sound quality and power.",
      },
    ],
    image: "/images/placeholder.png",
  },
  agape: {
    title: "Agape",
    paragraphs: [
      "Agape is a beloved sound system crew in Melbourne's rich audio culture. Their name, derived from the Greek concept of unconditional love, reflects their approach to music and community.",
      "With a focus on bringing people together through sound, Agape has cultivated a devoted following in Melbourne's music scene, known for creating immersive sonic environments that foster connection and joy.",
    ],
    facts: [
      {
        title: "Agape's sound system emphasizes clarity and warmth.",
        content:
          "Unlike systems that prioritize raw power, Agape's rig is carefully tuned to deliver a balanced, enveloping sound that allows for extended listening without fatigue.",
      },
      {
        title: "The crew is known for their eclectic musical selections.",
        content:
          "Spanning from roots reggae to contemporary electronic music, Agape's sets take listeners on a journey through diverse sonic landscapes united by positive vibrations.",
      },
      {
        title: "Agape regularly collaborates with local artists and musicians.",
        content:
          "Their events often feature live performances alongside DJs, creating unique experiences that bridge various aspects of Melbourne's creative community.",
      },
      {
        title: "The sound system incorporates vintage and modern technology.",
        content:
          "Agape's rig combines classic audio equipment with contemporary innovations, creating a distinctive sound that honors tradition while embracing new possibilities.",
      },
    ],
    image: "/images/placeholder.png",
  },
  battery_acid: {
    title: "Battery Acid",
    paragraphs: [
      "Battery Acid has established itself as one of Melbourne's most energetic and experimental sound system crews. True to their name, their sound cuts through with a powerful, electrifying presence.",
      "Known for pushing boundaries in both sound design and musical selection, Battery Acid has become synonymous with high-energy events that challenge conventional approaches to sound system culture.",
    ],
    facts: [
      {
        title: "Battery Acid is renowned for their high-powered sound system.",
        content:
          "Their rig is capable of delivering exceptional volume while maintaining clarity, creating an immersive wall of sound that energizes crowds.",
      },
      {
        title: "The crew specializes in bass-heavy electronic music.",
        content:
          "From dubstep to drum and bass, Battery Acid's musical selections emphasize powerful low frequencies and innovative sound design.",
      },
      {
        title: "Their system features custom amplification technology.",
        content:
          "Battery Acid has developed proprietary amplification techniques that allow for exceptional power handling and dynamic range.",
      },
      {
        title: "The crew is known for their striking visual aesthetic.",
        content:
          "Their events combine powerful sound with carefully designed lighting and visual elements, creating a multi-sensory experience.",
      },
    ],
    image: "/images/placeholder.png",
  },
  curse_of_the_scarab: {
    title: "Curse of the Scarab",
    paragraphs: [
      "Curse of the Scarab brings a mysterious and hypnotic energy to Melbourne's sound system culture. Drawing inspiration from ancient traditions and contemporary electronic music, they've carved out a unique space in the city's audio landscape.",
      "With a reputation for creating trance-like atmospheres and deep, ritualistic rhythms, Curse of the Scarab events are known for their immersive quality and transportive power.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes sub-bass frequencies.",
        content:
          "Curse of the Scarab has designed their rig to reproduce extremely low frequencies with exceptional fidelity, creating physically felt sound experiences.",
      },
      {
        title:
          "The crew incorporates acoustic instruments into their performances.",
        content:
          "Alongside electronic elements, Curse of the Scarab often features live percussion and other acoustic instruments, creating a unique hybrid sound.",
      },
      {
        title: "Their events often take place in unusual locations.",
        content:
          "From abandoned warehouses to natural settings, Curse of the Scarab chooses venues that enhance the immersive quality of their sonic journeys.",
      },
      {
        title: "The sound system includes specialized directional speakers.",
        content:
          "Their rig features carefully positioned speakers that create distinct zones of sound, allowing for dynamic spatial audio experiences.",
      },
    ],
    image: "/images/placeholder.png",
  },
  diy_hifi: {
    title: "DIY HiFi",
    paragraphs: [
      "DIY HiFi embodies the grassroots spirit of sound system culture in Melbourne. As their name suggests, they champion a hands-on approach to sound, building their entire system from scratch and continuously evolving their setup.",
      "Founded on principles of accessibility and knowledge-sharing, DIY HiFi not only delivers powerful sound experiences but also hosts workshops and skill-sharing events to empower others in the community.",
    ],
    facts: [
      {
        title: "Every component of their sound system is custom-built.",
        content:
          "From speaker cabinets to crossovers, DIY HiFi designs and constructs all elements of their rig, giving them complete control over their sound.",
      },
      {
        title: "The crew hosts regular build workshops.",
        content:
          "DIY HiFi is committed to sharing knowledge, regularly hosting events where participants can learn about sound system design and construction.",
      },
      {
        title: "Their system emphasizes efficiency and sustainability.",
        content:
          "Through innovative design approaches, DIY HiFi has created a powerful sound system that uses significantly less energy than comparable commercial systems.",
      },
      {
        title: "The rig incorporates repurposed and recycled materials.",
        content:
          "In line with their sustainability focus, many components of DIY HiFi's sound system give new life to salvaged materials and equipment.",
      },
    ],
    image: "/images/placeholder.png",
  },
  dub_divination: {
    title: "Dub Divination",
    paragraphs: [
      "Dub Divination is renowned in Melbourne's sound system scene for their deep, spiritual approach to sound. Rooted in dub traditions but expanding into new sonic territories, they create transcendent audio experiences.",
      "With a philosophy that treats sound as a healing and transformative force, Dub Divination events are known for their meditative quality and attention to acoustic detail.",
    ],
    facts: [
      {
        title: "Their sound system is built for exceptional clarity.",
        content:
          "Dub Divination has tuned their rig to reproduce subtle details and textures in music, allowing for nuanced listening experiences even at high volumes.",
      },
      {
        title: "The crew incorporates live dub mixing techniques.",
        content:
          "Drawing on classic dub traditions, Dub Divination treats their mixing desk as an instrument, creating live reinterpretations of music during their sessions.",
      },
      {
        title: "Their events often feature extended sets.",
        content:
          "Dub Divination is known for long, journey-like performances that allow listeners to fully immerse themselves in evolving soundscapes.",
      },
      {
        title: "The sound system includes specialized echo and reverb units.",
        content:
          "Their rig features both vintage and custom-built effects processors that are central to their distinctive sound.",
      },
    ],
    image: "/images/placeholder.png",
  },
  echo_chamber: {
    title: "Echo Chamber",
    paragraphs: [
      "Echo Chamber has established itself as a pioneering force in Melbourne's sound system culture. Specializing in spatial audio experiences, they've developed innovative approaches to creating immersive sonic environments.",
      "Their events are characterized by carefully controlled acoustics and thoughtful musical programming that takes listeners on a journey through different moods and textures.",
    ],
    facts: [
      {
        title: "Their sound system features a unique speaker arrangement.",
        content:
          "Echo Chamber employs a circular speaker configuration that surrounds the audience, creating 360-degree sound experiences.",
      },
      {
        title: "The crew has developed custom delay and reverb systems.",
        content:
          "Central to Echo Chamber's sound is their sophisticated processing of spatial effects, allowing them to create the illusion of vast acoustic spaces.",
      },
      {
        title: "They specialize in ambient and atmospheric music.",
        content:
          "While versatile in their selections, Echo Chamber is particularly known for showcasing music that emphasizes space, texture, and atmosphere.",
      },
      {
        title: "Their events emphasize listening as much as dancing.",
        content:
          "Echo Chamber creates environments that encourage deep listening experiences, often incorporating comfortable seating areas alongside dance spaces.",
      },
    ],
    image: "/images/placeholder.png",
  },
  el_gran_mono: {
    title: "El Gran Mono",
    paragraphs: [
      "El Gran Mono brings Latin American influences to Melbourne's sound system scene, creating a vibrant fusion of traditional rhythms and contemporary production techniques.",
      "Known for their energetic performances and community-focused approach, El Gran Mono events celebrate cultural diversity through sound, bringing together different musical traditions in dynamic conversation.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes mid-range clarity.",
        content:
          "El Gran Mono's rig is specially tuned to highlight the rich percussion and vocal elements central to Latin American musical traditions.",
      },
      {
        title: "The crew regularly features live musicians alongside DJs.",
        content:
          "Their events often include percussionists, vocalists, and other instrumentalists performing with electronic music, creating unique hybrid performances.",
      },
      {
        title: "They host regular community workshops.",
        content:
          "El Gran Mono is committed to cultural education, offering sessions on everything from traditional rhythms to contemporary production techniques.",
      },
      {
        title: "The sound system incorporates traditional and modern elements.",
        content:
          "Their rig includes both contemporary sound system technology and traditional acoustic elements, reflecting their musical approach.",
      },
    ],
    image: "/images/placeholder.png",
  },
  entropy: {
    title: "Entropy",
    paragraphs: [
      "Entropy has made a name for themselves in Melbourne's sound system culture through their exploration of chaos and order in sound. Their approach embraces unpredictability and evolution, creating dynamic sonic experiences.",
      "With a background in experimental music and sound art, the Entropy crew brings an innovative perspective to sound system culture, pushing boundaries while honoring foundational traditions.",
    ],
    facts: [
      {
        title: "Their sound system features modular components.",
        content:
          "Entropy's rig can be reconfigured for different spaces and sonic goals, allowing for adaptability and continuous evolution.",
      },
      {
        title: "The crew incorporates generative and algorithmic elements.",
        content:
          "Alongside traditional DJing, Entropy employs real-time sound generation techniques that create ever-changing sonic landscapes.",
      },
      {
        title: "They specialize in genre-defying musical selections.",
        content:
          "Entropy's sets seamlessly blend disparate styles, creating unexpected connections between different musical traditions and approaches.",
      },
      {
        title: "Their events often feature collaborative performances.",
        content:
          "Entropy regularly invites other artists and sound systems to participate in their events, fostering a spirit of community and creative exchange.",
      },
    ],
    image: "/images/placeholder.png",
  },
  folly_hifi: {
    title: "Folly HiFi",
    paragraphs: [
      "Folly HiFi brings a warm, soulful approach to Melbourne's sound system culture. With deep roots in reggae, dub, and soul traditions, they've become known for their rich, inviting sound and thoughtful musical selections.",
      "Their events create spaces for connection and celebration, emphasizing community and shared experience through carefully curated soundscapes.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes warmth and richness.",
        content:
          "Folly HiFi's rig is tuned to deliver a full, enveloping sound that highlights the emotional resonance of the music they play.",
      },
      {
        title: "The crew maintains an extensive vinyl collection.",
        content:
          "While embracing digital technologies, Folly HiFi remains committed to vinyl culture, regularly featuring rare and classic records in their sets.",
      },
      {
        title: "They host regular listening sessions.",
        content:
          "Alongside dance-focused events, Folly HiFi creates dedicated spaces for deep listening, showcasing albums and artists in their entirety.",
      },
      {
        title: "The sound system incorporates vintage audio equipment.",
        content:
          "Their rig features carefully restored classic amplifiers and processors that contribute to their distinctive warm sound.",
      },
    ],
    image: "/images/placeholder.png",
  },
  general_feelings: {
    title: "General Feelings",
    paragraphs: [
      "General Feelings has established themselves as a versatile and innovative presence in Melbourne's sound system scene. Their approach embraces emotional range and expression through sound, creating spaces for authentic connection.",
      "With a background spanning various musical traditions, the General Feelings crew brings an inclusive and expansive vision to their events, welcoming diverse audiences and sonic explorations.",
    ],
    facts: [
      {
        title: "Their sound system is designed for tonal versatility.",
        content:
          "General Feelings' rig can adapt to different musical styles and emotional qualities, from delicate ambient textures to powerful dance floor moments.",
      },
      {
        title: "The crew is known for their thoughtfully paced journeys.",
        content:
          "Rather than focusing on peak energy throughout, General Feelings creates narrative arcs in their sets that traverse various emotional landscapes.",
      },
      {
        title: "They incorporate visual art into their events.",
        content:
          "General Feelings regularly collaborates with visual artists, creating multi-sensory environments that enhance the emotional impact of their sonic experiences.",
      },
      {
        title: "The sound system features innovative speaker design.",
        content:
          "Their rig includes custom-built speakers that deliver exceptional midrange detail, bringing out the emotional nuances in vocals and melodic elements.",
      },
    ],
    image: "/images/placeholder.png",
  },
  goodys_hifi: {
    title: "Goodys HiFi",
    paragraphs: [
      "Goodys HiFi represents the classic sound system tradition in Melbourne's audio culture. With an approach that honors foundational reggae and dub techniques, they deliver authentic sound system experiences.",
      "Known for their respect for tradition alongside openness to innovation, Goodys HiFi has become a beloved institution in Melbourne, bringing together generations of sound system enthusiasts.",
    ],
    facts: [
      {
        title: "Their sound system follows classic designs.",
        content:
          "Goodys HiFi's rig is built according to traditional sound system specifications, with separate bass, mid, and high frequency cabinets arranged in careful configuration.",
      },
      {
        title: "The crew maintains an extensive collection of dubplates.",
        content:
          "Goodys HiFi features custom-recorded exclusive tracks in their sets, connecting them to the dubplate culture central to sound system tradition.",
      },
      {
        title: "They regularly host international artists and selectors.",
        content:
          "Goodys HiFi events often feature guests from around the world, creating connections between Melbourne and the global sound system community.",
      },
      {
        title: "The sound system emphasizes physical bass experience.",
        content:
          "Their rig delivers bass frequencies that can be felt throughout the body, creating the immersive experience central to sound system culture.",
      },
    ],
    image: "/images/placeholder.png",
  },
  heartical_hi_powa: {
    title: "Heartical Hi-Powa",
    paragraphs: [
      "Heartical Hi-Powa brings the spiritual and conscious dimensions of sound system culture to Melbourne's audio landscape. With a focus on positive vibrations and uplifting messages, they create transformative sonic experiences.",
      "Rooted in reggae traditions but embracing contemporary innovations, Heartical Hi-Powa events are known for their powerful atmosphere of unity and celebration.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes vocal clarity.",
        content:
          "Heartical Hi-Powa's rig is specially tuned to highlight lyrics and vocal performances, centering the messages and stories in the music they play.",
      },
      {
        title: "The crew regularly features live vocalists and MCs.",
        content:
          "Their events often include performances by singers and toasters who bring additional energy and direct communication to the sound system experience.",
      },
      {
        title: "They prioritize conscious and spiritual music.",
        content:
          "Heartical Hi-Powa's selections emphasize positive messages and spiritual themes, creating uplifting experiences for their audiences.",
      },
      {
        title:
          "The sound system incorporates traditional design with modern technology.",
        content:
          "Their rig honors classic sound system approaches while integrating contemporary innovations for maximum impact and clarity.",
      },
    ],
    image: "/images/placeholder.png",
  },
  housewifes_choice: {
    title: "Housewife's Choice",
    paragraphs: [
      "Housewife's Choice has carved out a unique space in Melbourne's sound system culture with their eclectic, genre-spanning approach and inclusive atmosphere. Their name, referencing a classic reggae tune, hints at their playful yet respectful relationship with tradition.",
      "Known for creating welcoming environments that center joy and connection, Housewife's Choice events bring together diverse crowds united by appreciation for quality sound and musical exploration.",
    ],
    facts: [
      {
        title: "Their sound system balances power with refinement.",
        content:
          "Housewife's Choice's rig delivers impressive volume and impact while maintaining the detail and nuance necessary for their diverse musical selections.",
      },
      {
        title: "The crew is known for their unpredictable, wide-ranging sets.",
        content:
          "From roots reggae to disco, soul to electronic experiments, Housewife's Choice creates surprising and delightful musical journeys.",
      },
      {
        title: "They host regular all-day events.",
        content:
          "Housewife's Choice is famous for their extended sessions that allow for expansive musical exploration and community building.",
      },
      {
        title: "The sound system features modified components.",
        content:
          "Their rig includes uniquely adapted speakers and processing that contribute to their distinctive sound signature.",
      },
    ],
    image: "/images/placeholder.png",
  },
  hyper_global: {
    title: "Hyper Global",
    paragraphs: [
      "Hyper Global represents the forward-thinking edge of Melbourne's sound system culture. With a focus on futuristic sounds and global connections, they bring an innovative approach to sound system tradition.",
      "Their events create spaces where cutting-edge electronic music meets traditional sound system power, resulting in unique experiences that point toward new possibilities in audio culture.",
    ],
    facts: [
      {
        title: "Their sound system incorporates advanced digital processing.",
        content:
          "Hyper Global's rig features sophisticated digital tools alongside traditional analog components, allowing for complex sound manipulation and design.",
      },
      {
        title: "The crew regularly features international sounds.",
        content:
          "Their selections span global bass music traditions, creating connections between different regional approaches to low frequency sound.",
      },
      {
        title: "They pioneer hybrid event formats.",
        content:
          "Hyper Global events often combine physical gatherings with digital streaming components, expanding access to their sonic experiences.",
      },
      {
        title: "The sound system emphasizes extreme frequency range.",
        content:
          "Their rig is designed to reproduce both subsonic bass and crystalline high frequencies with exceptional clarity, pushing the boundaries of auditory experience.",
      },
    ],
    image: "/images/placeholder.png",
  },
  mahikai: {
    title: "Mahikai",
    paragraphs: [
      "Mahikai brings elements of Pacific and Oceanic sound traditions to Melbourne's audio landscape. Their approach honors indigenous sonic practices while engaging with contemporary electronic music, creating unique cultural conversations.",
      "With respect for tradition and openness to innovation, Mahikai events create immersive environments where different cultural approaches to sound and rhythm can be experienced and celebrated.",
    ],
    facts: [
      {
        title: "Their sound system features unique percussion elements.",
        content:
          "Mahikai's rig incorporates specialized components designed to highlight rhythmic details and textures central to Pacific musical traditions.",
      },
      {
        title: "The crew regularly collaborates with traditional musicians.",
        content:
          "Their events often include performances by artists versed in indigenous musical practices, creating dialogue between traditional and contemporary approaches.",
      },
      {
        title: "They emphasize environmental awareness in their practices.",
        content:
          "Mahikai approaches sound system culture with ecological consciousness, minimizing environmental impact in their operations and highlighting environmental themes in their programming.",
      },
      {
        title: "The sound system includes custom-built resonators.",
        content:
          "Their rig features specialized acoustic elements inspired by traditional Pacific instruments, creating unique harmonic textures.",
      },
    ],
    image: "/images/placeholder.png",
  },
  new_flower: {
    title: "New Flower",
    paragraphs: [
      "New Flower brings influences from Ethiopian and East African music traditions to Melbourne's sound system scene. Their name, referencing the meaning of 'Addis Ababa' (Ethiopia's capital), hints at their cultural inspirations and forward-looking approach.",
      "Known for their vibrant, rhythm-focused events and community-building initiatives, New Flower creates spaces where diverse musical traditions can flourish and evolve.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes intricate mid-range frequencies.",
        content:
          "New Flower's rig is specially tuned to highlight the complex melodic and rhythmic patterns characteristic of East African musical traditions.",
      },
      {
        title:
          "The crew maintains an extensive collection of rare Ethiopian records.",
        content:
          "Their sets often feature hard-to-find gems from the golden age of Ethiopian jazz and funk alongside contemporary productions.",
      },
      {
        title: "They regularly host educational workshops.",
        content:
          "New Flower is committed to sharing knowledge about East African musical traditions, organizing sessions on history, techniques, and cultural context.",
      },
      {
        title: "The sound system incorporates horn-loaded speakers.",
        content:
          "Their rig features specialized horn designs that deliver exceptional clarity and projection, particularly suited to brass and vocal elements common in Ethiopian music.",
      },
    ],
    image: "/images/placeholder.png",
  },
  redback: {
    title: "Redback",
    paragraphs: [
      "Redback has established themselves as one of Melbourne's most powerful and distinctive sound system crews. Named after the notorious Australian spider, they're known for their venomous bass and striking visual identity.",
      "With a focus on high-impact sound and immersive environments, Redback events create memorable physical and emotional experiences through carefully crafted audio journeys.",
    ],
    facts: [
      {
        title: "Their sound system is among the most powerful in Melbourne.",
        content:
          "Redback's rig delivers exceptional volume and physical impact, creating sound experiences that can be felt throughout the body.",
      },
      {
        title:
          "The crew is known for their distinctive red and black aesthetic.",
        content:
          "Their visual identity extends from their equipment to their event design, creating cohesive and recognizable experiences.",
      },
      {
        title: "They specialize in bass-heavy music across genres.",
        content:
          "From dub techno to dubstep, reggae to drum and bass, Redback unites diverse styles through their emphasis on powerful low frequency energy.",
      },
      {
        title: "The sound system features custom bass amplification.",
        content:
          "Their rig includes proprietary amplification systems specifically designed to deliver clean, impactful bass even at extreme volumes.",
      },
    ],
    image: "/images/placeholder.png",
  },
  roots_time: {
    title: "Roots Time",
    paragraphs: [
      "Roots Time honors the foundational traditions of reggae and dub sound systems in Melbourne's audio culture. With deep respect for the historical lineage of sound system practice, they create authentic experiences that connect audiences to rich musical heritage.",
      "Known for their knowledge of reggae history and culture, the Roots Time crew brings educational as well as entertainment value to their events, sharing the stories and contexts behind the music they love.",
    ],
    facts: [
      {
        title: "Their sound system follows traditional Jamaican designs.",
        content:
          "Roots Time's rig is built according to classic specifications developed in Jamaica's golden age of sound system culture, delivering authentic sound quality and impact.",
      },
      {
        title:
          "The crew has an extensive collection of original pressing reggae records.",
        content:
          "Their sets feature rare and valuable original recordings that showcase the evolution of reggae music through its various stages.",
      },
      {
        title: "They employ traditional sound system techniques.",
        content:
          "From the 'pull-up' (rewinding a track to play it again) to toasting (vocal performance over instrumental tracks), Roots Time preserves the traditional practices of sound system culture.",
      },
      {
        title: "The sound system emphasizes the 'roots rockers' sound.",
        content:
          "Their rig is specifically tuned to highlight the distinctive qualities of roots reggae and dub, with particular attention to drum and bass elements.",
      },
    ],
    image: "/images/placeholder.png",
  },
  rudi_sound: {
    title: "Rudi Sound",
    paragraphs: [
      "Rudi Sound brings a sophisticated, jazz-influenced approach to Melbourne's sound system culture. Named in reference to both Jamaican rude boy culture and the improvisational spirit of jazz, they bridge different musical traditions in their distinctive sonic approach.",
      "Known for their musical knowledge and technical precision, the Rudi Sound crew creates experiences that appeal to deep listeners while maintaining the physical impact essential to sound system tradition.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes tonal accuracy and detail.",
        content:
          "Rudi Sound's rig is designed for exceptional reproduction of harmonic complexity and subtle dynamics, particularly suited to jazz-influenced music.",
      },
      {
        title: "The crew regularly features instrumental performers.",
        content:
          "Their events often include live horns, keyboards, and other instruments alongside electronic elements, creating unique hybrid performances.",
      },
      {
        title:
          "They host regular listening sessions focused on jazz and dub connections.",
        content:
          "Rudi Sound creates dedicated spaces for exploring the historical and ongoing dialogue between jazz and dub traditions.",
      },
      {
        title: "The sound system incorporates specialized horn speakers.",
        content:
          "Their rig features carefully designed horn-loaded components that deliver exceptional midrange detail and presence.",
      },
    ],
    image: "/images/placeholder.png",
  },
  sasquatch: {
    title: "Sasquatch",
    paragraphs: [
      "Sasquatch has made a name for themselves in Melbourne's sound system scene with their larger-than-life presence and powerful, elusive sound. Like their cryptid namesake, they create experiences that are both impressive and somewhat mysterious.",
      "Known for their dense, forest-like atmospheres and primal bass weight, Sasquatch events create immersive environments where sound becomes a physical, transformative force.",
    ],
    facts: [
      {
        title: "Their sound system delivers exceptional physical bass impact.",
        content:
          "Sasquatch's rig is designed to produce subsonic frequencies that create visceral, full-body experiences beyond just auditory sensation.",
      },
      {
        title: "The crew is known for their naturalistic visual environments.",
        content:
          "Their events often feature organic decorative elements and lighting that evokes forest environments, complementing their sonic approach.",
      },
      {
        title: "They specialize in slower tempo, spacious music.",
        content:
          "From dub to downtempo electronic styles, Sasquatch creates sonic experiences that allow listeners to inhabit expansive sound environments.",
      },
      {
        title: "The sound system includes specialized infrasonic generators.",
        content:
          "Their rig features components designed to produce frequencies at the very threshold of human perception, creating subtle yet powerful physical effects.",
      },
    ],
    image: "/images/placeholder.png",
  },
  slack: {
    title: "Slack",
    paragraphs: [
      "Slack brings a laid-back yet technically precise approach to Melbourne's sound system culture. Their name reflects both their relaxed attitude and the loose, dubby delays that characterize much of their sound.",
      "Known for creating comfortable, welcoming environments with exceptional audio quality, Slack events balance accessibility with sonic depth, appealing to both casual listeners and dedicated sound system enthusiasts.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes smooth frequency response.",
        content:
          "Slack's rig is carefully tuned to avoid harsh elements while maintaining clarity and impact, creating a sound that can be enjoyed for extended periods.",
      },
      {
        title: "The crew is known for their thoughtful venue preparation.",
        content:
          "Their events feature careful acoustic treatment and comfortable seating options alongside dance spaces, creating versatile environments for different modes of engagement.",
      },
      {
        title: "They specialize in dubby, spacious selections.",
        content:
          "From classic dub reggae to contemporary ambient dub techno, Slack creates sonic spaces characterized by echoing delays and reverberant atmospheres.",
      },
      {
        title:
          "The sound system features specialized delay and reverb processing.",
        content:
          "Their rig includes both vintage and custom-built time-based effects units that are central to their distinctive sound.",
      },
    ],
    image: "/images/placeholder.png",
  },
  solidarity: {
    title: "Solidarity",
    paragraphs: [
      "Solidarity brings a politically conscious approach to Melbourne's sound system culture. As their name suggests, they emphasize community support and collective action, using sound as a tool for bringing people together around shared values.",
      "Known for their benefit events and social justice focus, Solidarity creates experiences where celebration and consciousness-raising go hand in hand, honoring sound system's historical role in community empowerment.",
    ],
    facts: [
      {
        title: "Their sound system was built through community effort.",
        content:
          "Solidarity's rig was created through collaborative work sessions involving many members of Melbourne's extended sound system community.",
      },
      {
        title: "The crew regularly organizes benefits for social causes.",
        content:
          "Their events often raise funds and awareness for various community initiatives and political movements.",
      },
      {
        title: "They emphasize music with political and social messages.",
        content:
          "From roots reggae to protest songs, political hip-hop to activist electronic music, Solidarity highlights artists who address social issues through their work.",
      },
      {
        title: "The sound system operates on a non-hierarchical basis.",
        content:
          "Their rig is collectively owned and operated, with decisions made through consensus rather than individual authority.",
      },
    ],
    image: "/images/placeholder.png",
  },
  sub_temple: {
    title: "Sub Temple",
    paragraphs: [
      "Sub Temple approaches sound system culture with spiritual reverence in Melbourne's audio scene. Their name reflects their view of bass-focused sound experiences as potentially sacred spaces for communion and transcendence.",
      "Known for their meditative yet powerful sonic environments, Sub Temple events create opportunities for deep listening and physical immersion in carefully crafted sound.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes sustained, meditative bass.",
        content:
          "Sub Temple's rig is designed to produce clean, continuous low frequencies that create a foundation for contemplative sound experiences.",
      },
      {
        title: "The crew incorporates ritual elements into their events.",
        content:
          "From incense to specific spatial arrangements, Sub Temple creates ceremonial contexts that enhance the focused, intentional experience of sound.",
      },
      {
        title: "They specialize in ambient and minimal dub styles.",
        content:
          "Sub Temple showcases music characterized by spaciousness and subtle evolution, encouraging deep, attentive listening states.",
      },
      {
        title: "The sound system includes specialized resonant chambers.",
        content:
          "Their rig features architectural elements designed to enhance certain frequencies through acoustic resonance, creating unique spatial effects.",
      },
    ],
    image: "/images/placeholder.png",
  },
  sub_yard: {
    title: "Sub Yard",
    paragraphs: [
      "Sub Yard represents the foundational power of bass culture in Melbourne's sound system scene. Their name evokes both the central focus on sub-bass frequencies and the communal 'yard' spaces where Jamaican sound system culture first flourished.",
      "Known for their raw, direct approach to sound and straightforward presentation, Sub Yard strips sound system experience back to its essential elements: massive bass, quality selection, and community vibes.",
    ],
    facts: [
      {
        title: "Their sound system delivers exceptional raw power.",
        content:
          "Sub Yard's rig is built for maximum impact, with stacks of speakers capable of moving serious air and creating physical bass experiences.",
      },
      {
        title: "The crew maintains a strictly vinyl-focused approach.",
        content:
          "Their sets feature exclusively vinyl selections, connecting them to the tactile tradition of sound system culture before digital technologies.",
      },
      {
        title: "They host regular outdoor events.",
        content:
          "True to their name, Sub Yard often creates sound system experiences in outdoor spaces, connecting to the open-air roots of the culture.",
      },
      {
        title: "The sound system follows traditional 'four-way' design.",
        content:
          "Their rig separates frequencies into distinct speaker components (bass, lower mid, upper mid, and high), following classic sound system design principles.",
      },
    ],
    image: "/images/placeholder.png",
  },
  system_unknown: {
    title: "System Unknown",
    paragraphs: [
      "System Unknown brings an air of mystery and exploration to Melbourne's sound system culture. As their name suggests, they embrace the unknown and unexpected in both their sonic approach and event concepts.",
      "Known for their unpredictable locations and surprising musical journeys, System Unknown events create experiences where audiences surrender to uncertainty and discover new sonic possibilities.",
    ],
    facts: [
      {
        title: "Their sound system configuration regularly changes.",
        content:
          "System Unknown continuously modifies their rig, experimenting with different speaker arrangements and processing approaches for each event.",
      },
      {
        title: "The crew announces events with minimal advance notice.",
        content:
          "Their gatherings often materialize suddenly and in unexpected locations, creating an atmosphere of spontaneity and adventure.",
      },
      {
        title: "They specialize in unreleased and obscure music.",
        content:
          "System Unknown showcases tracks that exist outside established channels, including unreleased dubs, test pressings, and overlooked gems.",
      },
      {
        title: "The sound system incorporates experimental technologies.",
        content:
          "Their rig often features prototype components and unconventional approaches to sound reproduction, pushing the boundaries of audio experience.",
      },
    ],
    image: "/images/placeholder.png",
  },
  tribe: {
    title: "Tribe",
    paragraphs: [
      "Tribe centers community-building through sound in Melbourne's audio culture. Their name reflects their approach to sound system events as opportunities for creating temporary autonomous communities united by sonic experience.",
      "Known for their inclusive atmosphere and attention to creating safe, welcoming environments, Tribe events emphasize connection and collective joy through high-quality sound and thoughtful curation.",
    ],
    facts: [
      {
        title: "Their sound system is designed for circular arrangement.",
        content:
          "Tribe's rig can be configured to create sound that emanates from a central point, with audiences gathering around rather than facing a front-oriented stack.",
      },
      {
        title: "The crew implements comprehensive harm reduction practices.",
        content:
          "Their events feature dedicated care spaces, free water, and trained support persons to ensure participant wellbeing.",
      },
      {
        title: "They emphasize music that promotes unity and connection.",
        content:
          "From world music traditions to contemporary global bass, Tribe showcases sounds that transcend cultural boundaries and create shared experiences.",
      },
      {
        title: "The sound system incorporates participatory elements.",
        content:
          "Their rig sometimes includes components that attendees can respectfully interact with, creating collaborative sound experiences.",
      },
    ],
    image: "/images/placeholder.png",
  },
  trip_hazard: {
    title: "Trip Hazard",
    paragraphs: [
      "Trip Hazard brings a psychedelic perspective to Melbourne's sound system culture. Their playful yet cautionary name hints at the mind-altering potential of their sonic journeys and their attention to creating safe contexts for expansive experiences.",
      "Known for their vibrant visual aesthetic and unexpected sonic combinations, Trip Hazard events create immersive environments where perceptual boundaries can dissolve in waves of carefully crafted sound.",
    ],
    facts: [
      {
        title: "Their sound system emphasizes dimensional sound design.",
        content:
          "Trip Hazard's rig is configured to create three-dimensional sound fields with detailed spatial positioning and movement.",
      },
      {
        title:
          "The crew is known for their synchronized audio-visual experiences.",
        content:
          "Their events feature carefully coordinated light and projection elements that complement and enhance the sonic journey.",
      },
      {
        title: "They specialize in psychedelic music across genres.",
        content:
          "From dub to trance, experimental electronics to psychedelic rock, Trip Hazard unites diverse styles through their mind-expanding qualities.",
      },
      {
        title:
          "The sound system incorporates specialized frequency modulation.",
        content:
          "Their rig includes unique processing that creates subtle frequency shifts and modulations, adding to the psychedelic quality of the experience.",
      },
    ],
    image: "/images/placeholder.png",
  },
  virus: {
    title: "Virus",
    paragraphs: [
      "Virus has established themselves as one of the most contagious forces in Melbourne's sound system scene. Their name reflects their approach to sound as something that spreads, replicates, and transforms environments and communities.",
      "Known for their technical precision and innovative sound design, Virus events create immersive experiences where cutting-edge electronic music meets sound system tradition.",
    ],
    facts: [
      {
        title: "Their sound system features advanced digital processing.",
        content:
          "Virus's rig incorporates sophisticated real-time analysis and adaptation, allowing for responsive adjustments to different acoustic environments.",
      },
      {
        title: "The crew is known for their technical workshops.",
        content:
          "They regularly host sessions sharing knowledge about sound design, production techniques, and system engineering.",
      },
      {
        title: "They specialize in forward-thinking electronic music.",
        content:
          "From advanced dubstep to experimental techno, Virus showcases producers who push the boundaries of sound design and structure.",
      },
      {
        title: "The sound system emphasizes extreme clarity at high volumes.",
        content:
          "Their rig is designed to maintain definition and detail even at intense sound pressure levels, allowing for complex music to remain coherent.",
      },
    ],
    image: "/images/placeholder.png",
  },
  yabai_hifi: {
    title: "Yabai HiFi",
    paragraphs: [
      "Yabai HiFi brings Japanese influence to Melbourne's sound system culture. Their name, using the Japanese term 'yabai' (expressing extremity or intensity), reflects their approach to creating powerful, boundary-pushing sonic experiences.",
      "Known for their precision engineering and attention to detail, Yabai HiFi creates environments where sound quality and physical impact come together in carefully balanced experiences.",
    ],
    facts: [
      {
        title: "Their sound system reflects Japanese engineering principles.",
        content:
          "Yabai HiFi's rig demonstrates exceptional build quality and precision, with careful attention to every component and connection.",
      },
      {
        title: "The crew incorporates elements of Japanese music culture.",
        content:
          "From dub interpretations of enka to bass-heavy takes on city pop, Yabai HiFi creates unique cultural connections through their musical approach.",
      },
      {
        title: "They are known for their minimalist visual aesthetic.",
        content:
          "Their events feature carefully considered design elements that emphasize simplicity and functionality, complementing their sonic approach.",
      },
      {
        title: "The sound system achieves exceptional efficiency.",
        content:
          "Their rig produces remarkable sound pressure levels with relatively modest power requirements, demonstrating sophisticated engineering.",
      },
    ],
    image: "/images/placeholder.png",
  },
};

import { useEffect } from "react";

interface InfoPanelProps {
  planet: PlanetType;
  onClose: () => void;
}

export default function InfoPanel({ planet, onClose }: InfoPanelProps) {
  const info = rigInfo[planet];

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay/backdrop for closing the panel */}
      <div
        className={styles.closeButton}
        onClick={onClose}
        role="button"
        aria-label="Close information panel"
        tabIndex={0}
      >
        Back
      </div>

      {/* Info panel content - preserving original animation with open class */}
      <div className={`${styles.infoPanel} ${styles.open}`}>
        <h1>{info.title}</h1>

        {/* Main paragraphs */}
        {info.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Image */}
        <img src={info.image} alt={info.title} className="my-4" />

        {/* Facts */}
        {info.facts.map((fact, index) => (
          <div key={index} className="mb-4">
            <h2>{fact.title}</h2>
            <p>{fact.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
