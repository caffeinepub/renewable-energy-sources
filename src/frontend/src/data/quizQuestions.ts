export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: QuizQuestion[] = [
  // Solar Energy Questions
  {
    id: 1,
    topic: 'Solar Energy',
    question: 'What is passive solar heating?',
    options: [
      'A system that uses pumps and fans to distribute heat',
      'A simple way to warm buildings using only the sun without machines',
      'A method that requires solar panels to generate electricity',
      'A heating system that burns fossil fuels'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    topic: 'Solar Energy',
    question: 'What do photovoltaic cells convert sunlight into?',
    options: [
      'Heat energy',
      'Mechanical energy',
      'Electricity',
      'Chemical energy'
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    topic: 'Solar Energy',
    question: 'What is the most common semiconductor material used in solar cells?',
    options: [
      'Copper',
      'Aluminum',
      'Silicon',
      'Iron'
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    topic: 'Solar Energy',
    question: 'How many cells do most solar panels typically have?',
    options: [
      '10 to 20 cells',
      '30 to 40 cells',
      '60 to 72 cells',
      '100 to 120 cells'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    topic: 'Solar Energy',
    question: 'What happens when photons hit a semiconductor material in a solar cell?',
    options: [
      'They create heat',
      'They knock electrons loose',
      'They reflect back into space',
      'They turn into water vapor'
    ],
    correctAnswer: 1
  },

  // Hydropower & Tidal Questions
  {
    id: 6,
    topic: 'Hydropower',
    question: 'What is a penstock in a hydropower plant?',
    options: [
      'A large artificial lake',
      'A large pipe that carries water down to turbines',
      'A device that generates electricity',
      'A filter for cleaning water'
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    topic: 'Hydropower',
    question: 'What causes tides in the ocean?',
    options: [
      'Wind patterns',
      'Ocean currents',
      'The pull of the moon\'s gravity',
      'Underwater earthquakes'
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    topic: 'Hydropower',
    question: 'How do turbines in a hydropower plant work?',
    options: [
      'They burn fuel to create heat',
      'Water rushes past blades making them spin',
      'They use solar energy to rotate',
      'They convert wind into electricity'
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    topic: 'Hydropower',
    question: 'Where are tidal turbines typically placed?',
    options: [
      'On top of dams',
      'In rivers',
      'On the ocean floor in areas with strong tidal currents',
      'On floating platforms'
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    topic: 'Hydropower',
    question: 'What makes tidal energy very predictable?',
    options: [
      'Weather patterns',
      'Tides follow a regular schedule',
      'Ocean temperature',
      'Wind speed'
    ],
    correctAnswer: 1
  },

  // Wind Energy Questions
  {
    id: 11,
    topic: 'Wind Energy',
    question: 'What creates wind?',
    options: [
      'Ocean waves',
      'The sun heating different parts of Earth unevenly',
      'Earthquakes',
      'Volcanic eruptions'
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    topic: 'Wind Energy',
    question: 'Why are wind turbine blades shaped like airplane wings?',
    options: [
      'To make them look attractive',
      'To reduce weight',
      'To create lift that makes them spin',
      'To withstand strong storms'
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    topic: 'Wind Energy',
    question: 'What does a gearbox do in a wind turbine?',
    options: [
      'Slows down the rotation',
      'Speeds up the rotation from about 15-20 RPM to 1,500 RPM',
      'Converts electricity to mechanical energy',
      'Stores energy for later use'
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    topic: 'Wind Energy',
    question: 'How many blades do most wind turbines have?',
    options: [
      'Two blades',
      'Three blades',
      'Four blades',
      'Five blades'
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    topic: 'Wind Energy',
    question: 'Where are wind farms typically located?',
    options: [
      'In dense forests',
      'In underground caves',
      'In areas with steady, strong winds like open plains, hilltops, or offshore',
      'In urban city centers'
    ],
    correctAnswer: 2
  },

  // Geothermal Energy Questions
  {
    id: 16,
    topic: 'Geothermal Energy',
    question: 'What does the word "geothermal" mean?',
    options: [
      'Water heat',
      'Earth heat',
      'Sun heat',
      'Wind heat'
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    topic: 'Geothermal Energy',
    question: 'How hot can water in geothermal reservoirs be?',
    options: [
      'Over 100°F (38°C)',
      'Over 200°F (93°C)',
      'Over 300°F (150°C)',
      'Over 500°F (260°C)'
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    topic: 'Geothermal Energy',
    question: 'What happens to water after it spins the turbine in a geothermal plant?',
    options: [
      'It evaporates into the air',
      'It is discarded as waste',
      'It is pumped back underground through an injection well',
      'It is used for drinking water'
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    topic: 'Geothermal Energy',
    question: 'What is a major advantage of geothermal energy over solar and wind?',
    options: [
      'It is cheaper to build',
      'It can run 24 hours a day regardless of weather',
      'It produces more electricity',
      'It requires no maintenance'
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    topic: 'Geothermal Energy',
    question: 'Which country uses geothermal energy to heat most of its buildings?',
    options: [
      'United States',
      'Canada',
      'Iceland',
      'Australia'
    ],
    correctAnswer: 2
  },

  // Biomass Energy Questions
  {
    id: 21,
    topic: 'Biomass Energy',
    question: 'What is biomass?',
    options: [
      'Fossil fuels like coal and oil',
      'Organic material that comes from plants and animals',
      'Nuclear waste',
      'Synthetic materials'
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    topic: 'Biomass Energy',
    question: 'How do plants store energy from the sun?',
    options: [
      'In their roots only',
      'Through photosynthesis as chemical energy',
      'In water molecules',
      'They do not store energy'
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    topic: 'Biomass Energy',
    question: 'What is the most common way to get energy from biomass?',
    options: [
      'Freezing it',
      'Compressing it',
      'Burning it',
      'Dissolving it in water'
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    topic: 'Biomass Energy',
    question: 'What is biogas made from?',
    options: [
      'Coal',
      'Animal waste from farms',
      'Petroleum',
      'Natural gas wells'
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    topic: 'Biomass Energy',
    question: 'Why is biomass considered renewable?',
    options: [
      'It never runs out',
      'We can grow more of it',
      'It does not release carbon dioxide',
      'It is found underground'
    ],
    correctAnswer: 1
  },

  // Biofuels Questions
  {
    id: 26,
    topic: 'Biofuels',
    question: 'What are the two main types of biofuels?',
    options: [
      'Gasoline and diesel',
      'Ethanol and biodiesel',
      'Coal and oil',
      'Propane and butane'
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    topic: 'Biofuels',
    question: 'What crop is most commonly used to make ethanol in the United States?',
    options: [
      'Wheat',
      'Sugarcane',
      'Corn',
      'Soybeans'
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    topic: 'Biofuels',
    question: 'What is fermentation in ethanol production?',
    options: [
      'Heating the liquid to remove water',
      'A process where yeast eats sugar and produces ethanol',
      'Grinding corn into powder',
      'Filtering out impurities'
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    topic: 'Biofuels',
    question: 'What is biodiesel made from?',
    options: [
      'Petroleum',
      'Natural gas',
      'Vegetable oils and animal fats',
      'Coal'
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    topic: 'Biofuels',
    question: 'What is transesterification?',
    options: [
      'The process of filtering oil',
      'A chemical reaction that converts oil into biodiesel',
      'The fermentation of sugar',
      'The distillation of ethanol'
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    topic: 'Biofuels',
    question: 'What does E10 fuel contain?',
    options: [
      '10% gasoline and 90% ethanol',
      '10% ethanol and 90% gasoline',
      '10% biodiesel and 90% diesel',
      '100% ethanol'
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    topic: 'Biofuels',
    question: 'What is a byproduct of biodiesel production?',
    options: [
      'Carbon dioxide',
      'Glycerin',
      'Water vapor',
      'Methane'
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    topic: 'Biofuels',
    question: 'How long does fermentation typically take in ethanol production?',
    options: [
      'About 12 hours',
      'About 24 hours',
      'About 48 hours',
      'About 72 hours'
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    topic: 'Biofuels',
    question: 'What is B20 fuel?',
    options: [
      '20% gasoline and 80% ethanol',
      '20% biodiesel and 80% petroleum diesel',
      '20% ethanol and 80% gasoline',
      '100% biodiesel'
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    topic: 'Biofuels',
    question: 'Can most diesel engines run on biodiesel blends without modifications?',
    options: [
      'No, they require complete engine replacement',
      'No, they need major modifications',
      'Yes, most can run on biodiesel blends without modifications',
      'Only electric engines can use biodiesel'
    ],
    correctAnswer: 2
  }
];
