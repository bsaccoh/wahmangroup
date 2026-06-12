import miningImg from '../assets/mining-industry-img1.jpg';
import aviationImg from '../assets/aviation-img.jpg';
import realEstateImg from '../assets/real-estate.jpg';

export const sectors = [
  {
    id: 'mining',
    name: 'Mining',
    subtitle: 'WAHMAN Abu Minerals and Investment Group',
    tagline: "Unlocking the Earth's Wealth, Responsibly.",
    icon: 'GiMining',
    color: '#C9A84C',
    image: miningImg,
    overview: `Through WAHMAN Abu Minerals and Investment Group, the company is engaged in the exploration, development, and trading of precious metals and industrial minerals across West Africa. Our operations span multiple sites, employing cutting-edge technology while maintaining the highest environmental and safety standards.`,
    activities: [
      'Precious metals exploration',
      'Industrial minerals development',
      'Commodity trading',
      'Responsible mining practices',
      'Community engagement programs',
    ],
    highlights: [
      {
        title: 'Gold Exploration in Guinea',
        description: 'Active exploration across 3 concession areas in the Siguiri Basin.',
      },
      {
        title: 'Diamond Operations in Sierra Leone',
        description: 'Alluvial and kimberlite diamond mining in the Kono District.',
      },
      {
        title: 'Bauxite Trading',
        description: 'Strategic partnerships for bauxite export to Asian smelters.',
      },
    ],
    sustainability: 'Our mining operations adhere to responsible mining frameworks, including community benefit-sharing, land rehabilitation, and water management programs.',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    subtitle: 'WAHMAN Energy Division',
    tagline: 'Powering Regional Growth Through Energy Innovation.',
    icon: 'GiOilPump',
    color: '#1A3A6B',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80',
    overview: `The Group participates in upstream exploration activities and midstream infrastructure development, supporting energy growth and regional development. WAHMAN Energy partners with international operators to unlock the hydrocarbon potential of West Africa's sedimentary basins.`,
    activities: [
      'Upstream exploration',
      'Midstream infrastructure',
      'Energy project development',
      'Regional energy partnerships',
    ],
    highlights: [
      {
        title: 'Offshore Exploration',
        description: 'Participation in offshore license blocks in Sierra Leone and Liberia.',
      },
      {
        title: 'Fuel Distribution',
        description: 'Downstream fuel distribution network across West Africa.',
      },
    ],
    sustainability: 'We are committed to minimizing environmental impact through advanced drilling techniques and investing in clean energy alternatives for the future.',
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    subtitle: 'WAHMAN Agribusiness',
    tagline: 'From the Soil to the World.',
    icon: 'GiFarmer',
    color: '#2D6A4F',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=80',
    overview: `WAHMAN Group operates agricultural plantations and agribusiness ventures that connect farmers, processors, exporters, and international markets. Our integrated approach ensures quality from seed to shelf, empowering rural communities while meeting global demand.`,
    activities: [
      'Plantation operations',
      'Agribusiness ventures',
      'Export facilitation',
      'Farmer support programs',
      'International market access',
    ],
    highlights: [
      {
        title: 'Cocoa & Coffee Exports',
        description: 'Premium cocoa and coffee sourcing from smallholder cooperatives.',
      },
      {
        title: 'Palm Oil Plantations',
        description: 'Large-scale sustainable palm oil cultivation in Sierra Leone.',
      },
      {
        title: 'Cashew Processing',
        description: 'Value-added cashew processing for export to European markets.',
      },
    ],
    sustainability: 'We champion sustainable agriculture through organic farming support, fair trade certification, and reforestation initiatives alongside our plantation operations.',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    subtitle: 'WAHMAN Properties',
    tagline: 'Building Spaces. Creating Value.',
    icon: 'MdApartment',
    color: '#6B4C9A',
    image: realEstateImg,
    overview: `The company develops, acquires, and manages residential, commercial, and hospitality properties throughout strategic growth markets. WAHMAN Properties transforms urban landscapes with contemporary designs that blend functionality with luxury.`,
    activities: [
      'Residential development',
      'Commercial property management',
      'Hospitality properties',
      'Strategic acquisitions',
    ],
    highlights: [
      {
        title: 'WAHMAN Tower, Freetown',
        description: 'A landmark 12-story mixed-use development in the heart of Freetown.',
      },
      {
        title: 'Residential Estates',
        description: 'Gated residential communities with modern amenities.',
      },
    ],
    sustainability: 'Our developments incorporate green building standards, energy-efficient systems, and community spaces that enhance quality of life.',
  },
  {
    id: 'aviation',
    name: 'Aviation',
    subtitle: 'WAHMAN Aviation Services',
    tagline: 'Elevating Business Travel Across Africa and Beyond.',
    icon: 'MdFlight',
    color: '#2196F3',
    image: aviationImg,
    overview: `The aviation division provides executive and charter aviation services, facilitating business travel across Africa and international destinations. Our fleet serves corporate clients, government agencies, and VIP travelers with the highest standards of safety and luxury.`,
    activities: [
      'Executive aviation services',
      'Charter flights',
      'Pan-African routes',
      'International destinations',
    ],
    highlights: [
      {
        title: 'Charter Fleet',
        description: 'Modern fleet serving routes across 15 African countries.',
      },
      {
        title: 'VIP Terminal Services',
        description: 'Premium lounge and ground handling at Freetown International Airport.',
      },
    ],
    sustainability: 'We invest in fuel-efficient aircraft and carbon offset programs to reduce the environmental impact of our aviation operations.',
  },
  {
    id: 'trade',
    name: 'Trade',
    subtitle: 'WAHMAN Trading Corporation',
    tagline: 'Bridging Continents. Moving Markets.',
    icon: 'MdSwapHoriz',
    color: '#E65100',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    overview: `WAHMAN Group's trading operations support the movement of commodities, products, and investment capital between Africa, Europe, the Middle East, Asia, and the Americas. We leverage deep market knowledge and established networks to facilitate cross-border commerce.`,
    activities: [
      'Commodity trading',
      'Import/export operations',
      'Investment capital movement',
      'Global trade corridors',
      'Multi-continental partnerships',
    ],
    highlights: [
      {
        title: 'Commodity Desk',
        description: 'Active trading desk handling metals, minerals, and agricultural commodities.',
      },
      {
        title: 'Asia-Africa Corridor',
        description: 'Strategic trade facilitation between West Africa and East Asian markets.',
      },
      {
        title: 'European Distribution',
        description: 'Distribution partnerships with European importers and wholesalers.',
      },
    ],
    sustainability: 'We promote fair trade practices and transparent supply chains, ensuring equitable value distribution across our trading relationships.',
  },
];
