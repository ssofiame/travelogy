const Images = [
    { image: require("../assets/map/kbs.jpg") },
    { image: require("../assets/map/tamanbungkul.jpg") },
    { image: require("../assets/map/monumentugupahlawan.jpg") },
    { image: require("../assets/map/tamansuroboyo.jpg") },
    { image: require("../assets/map/atlantisland.jpg") },
    { image: require("../assets/map/monumenkapalselam.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: -7.295741755299051, 
        longitude: 112.73663085480909,
      },
      title: "Kebun Binatang Surabaya",
      description: "This is the best place",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: -7.291080742690967, 
        longitude: 112.73977888179574,
      },
      title: "Taman Bungkul",
      description: "This is the second best place",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: -7.245584958933408, 
        longitude: 112.73788207015066,
      },
      title: "Monumen Tugu Pahlawan",
      description: "This is the third best place",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: -7.225117247362781, 
        longitude: 112.78809628364377,
      },
      title: "Taman Suroboyo",
      description: "This is the fourth best place",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: -7.251343857362812,
        longitude:  112.80093214611772
      },
      title: "Atlantis Land",
      description: "This is the fifth best place",
      image: Images[4].image,
      rating: 4,
      reviews: 178,
    },
    {
      coordinate: {
        latitude: -7.265430394748897, 
        longitude: 112.75028373946671,
      },
      title: "Monumen Kapal Selam",
      description: "This is the fifth best place",
      image: Images[5].image,
      rating: 4,
      reviews: 178,
    },
];