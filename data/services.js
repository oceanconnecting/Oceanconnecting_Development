export const services = [
  {
    id: 1,
    imageSrc: "/assets/img/icon/serviceIcon1_1.png",
    title: "Online Marketing",
    description: "Promoting products through digital channels.",
  },
  {
    id: 2,
    imageSrc: "/assets/img/icon/serviceIcon1_2.png",
    title: "Web Development",
    description: "Providing expert tech solutions.",
  },
    {
    id: 3,
    imageSrc: "/assets/img/icon/serviceIcon1_4.png",
    title: "App Development",
    description: "Building mobile and desktop apps.",
  },
  {
    id: 9,
    imageSrc: "/assets/img/icon/serviceIcon1_5.png",
    title: "Social Media",
    description: "Managing social media and ad campaigns.",
  },
  {
    id: 10,
    imageSrc: "/assets/img/icon/serviceIcon1_2.png",
    title: "UI/UX Design",
    description: "UI/UX design focuses on creating user-friendly and visually appealing interfaces.",
  },
];


export const services2 = [
  {
    id: 10,
    icon: "/assets/img/icon/serviceIcon1_2.png",
    title: "UI/UX Design",
    description: "UI/UX design focuses on creating user-friendly and visually appealing interfaces for digital products.",
    bgImage: "/assets/img/bg/serviceCardThumbBg1_1.png",
    delay: ".4s",
  },
  {
    id: 12,
    icon: "/assets/img/icon/serviceIcon1_4.png",
    title: "App development",
    description: "App development is the process of designing, building, and deploying applications for various platforms.",
    bgImage: "/assets/img/bg/serviceCardThumbBg1_1.png",
    delay: ".8s",
  },
];

export const servicesStyle2 = [
  {
    id: 14,
    thumb: "/assets/img/service/serviceThumb2_1.png",
    title: "Online Marketing",
    description: "Software services encompass a wide range of solutions for developing and maintaining software systems.",
    icon: "/assets/img/icon/serviceIcon2_1.png",
    iconTwo: "/assets/img/icon/serviceIcon2_5.png",
    delay: ".3s",
  },
  {
    id: 15,
    thumb: "/assets/img/service/serviceThumb2_2.png",
    title: "Web Development",
    description: "We provide new and emerging technologies to help businesses optimize their IT infrastructure.",
    icon: "/assets/img/icon/serviceIcon2_2.png",
    iconTwo: "/assets/img/icon/serviceIcon2_6.png",
    delay: ".6s",
  },
];


export const serviceItems = [
  {
    id: 22,
    imgSrc: "/assets/img/icon/serviceIcon1_2.png",
    title: "Web Development",
    text: "Web Development involves providing expert advice and solutions for technology-related challenges.",
    delay: ".6s",
  },
  {
    id: 23,
    imgSrc: "/assets/img/icon/serviceIcon1_4.png",
    title: "App Development",
    text: "App Development involves creating applications for mobile devices, desktops, or other platforms.",
    delay: "1s",
  },
  {
    id: 24,
    imgSrc: "/assets/img/icon/serviceIcon1_6.png",
    title: "UI/UX Design",
    text: "UI/UX Design focuses on creating user-friendly and visually appealing interfaces for digital products.",
    delay: "1.3s",
  },
  {
    id: 25,
    imgSrc: "/assets/img/icon/serviceIcon1_7.png",
    title: "IT Management",
    text: "IT Management involves overseeing and optimizing IT systems and infrastructure for businesses.",
    delay: "1.7s",
  },
  {
    id: 26,
    imgSrc: "/assets/img/icon/serviceIcon1_8.png",
    title: "Digital Marketing",
    text: "Digital Marketing promotes products or services through digital channels to reach target audiences.",
    delay: "1.8s",
  },
  {
    id: 27,
    imageSrc: "/assets/img/icon/serviceIcon1_1.png",
    title: "Online Marketing",
    text: "Promoting products through digital channels.",
    delay: "1.8s",
  },
];

export const serviceCards = [
  {
    id: 29,
    thumbSrc: "/assets/img/service/freepik__the-style-is-candid-image-photography.jpeg",
    iconSrc: "/assets/img/icon/serviceIcon2_1.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_5.png",
    title: "Online Marketing",
    text: "Online marketing promotes products or services through digital channels like social media, email, and search engines.",
    delay: ".3s",
    hasRipple: true,
  },
  {
    id: 30,
    thumbSrc: "/assets/img/service/programming-background-with-person-working-with-codes-computer.jpg",
    iconSrc: "/assets/img/icon/serviceIcon2_2.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_6.png",
    title: "Web Development",
    text: "Web development is the work involved in building and maintaining websites and web applications.",
    delay: ".6s",
  },
  {
    id: 31,
    thumbSrc: "/assets/img/service/serviceThumb2_5.png",
    iconSrc: "/assets/img/icon/serviceIcon2_9.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_13.png",
    title: "Digital Marketing",
    text: "Digital Marketing promotes products or services through digital channels to reach target audiences.",
    delay: "1.3s",
  },
  {
    id: 32,
    thumbSrc: "/assets/img/service/5757453.jpg",
    iconSrc: "/assets/img/icon/serviceIcon2_11.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_15.png",
    title: "UI/UX Design",
    text: "UI/UX Design focuses on creating user-friendly and visually appealing interfaces for digital products.",
    delay: "1.7s",
  },
  {
    id: 33,
    thumbSrc: "/assets/img/service/people-office-analyzing-checking-finance-graphs.jpg",
    iconSrc: "/assets/img/icon/serviceIcon2_12.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_16.png",
    title: "IT Management",
    text: "IT Consultancy involves providing expert advice and solutions for technology-related challenges.",
    delay: "1.9s",
  },
  {
    id: 34,
    thumbSrc: "/assets/img/service/5679656.jpg",
    iconSrc: "/assets/img/icon/serviceIcon2_12.png",
    title: "Social Media/Ads Management",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_16.png",
    text: "Managing social media and ad campaigns to enhance brand visibility,engage audiences,and drive business.",
    delay: "1.7s",
}
];

export const allService = [
  ...services,
  ...services2,
  ...servicesStyle2,
  ...serviceItems,
  ...serviceCards,
];

export const sericeCategories = [
  { label: "Web Development", active: false },
  { label: "App Development", active: true },
  { label: "UI/UX Design", active: false },
];

export const hours = [
  { iconClass: "fa-regular fa-clock", text: "Mon - Sat: 10.00 AM - 4.00 PM" },
  { iconClass: "fa-regular fa-clock", text: "Sun: 09.00 AM - 4.00 PM" },
  { iconClass: "fa-regular fa-clock", text: "Friday: Closed" },
  { iconClass: "fa-regular fa-clock", text: "Emergency: 24 hours" },
];