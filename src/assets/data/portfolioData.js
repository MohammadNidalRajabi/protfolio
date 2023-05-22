import portfolioImg01 from "../images/p1.PNG";
import portfolioImg02 from "../images/p2.PNG";
import portfolioImg03 from "../images/p3.png";
import portfolioImg04 from "../images/p4.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web ReactJS",
    title: "Matloop Website",
    description:
      `Matloop is a specialized platform for car parts, enabling traders to add advertisements for available parts and review customer
      requests, as well as create auctions. The website also allows customers to browse trader advertisements, make electronic
      purchases, and add requests for specific car parts. For frontend development, React.js was used in conjunction with various
      libraries and hooks. React Router Dom facilitated navigation and routing. The useState, useEffect, and useRef hooks were utilized
      for effective state management, handling side effects, and managing references, respectively. Additionally, the website
      incorporates responsive design to ensure optimal display and usability across different devices and screen sizes.`,
    technologies: ["React", "css", "Node.js", "Html","Ant Design","JavaScript","Git","Pusher"],
    siteUrl: "https://matloop.shop",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web ReactJS",
    title: "Car Rent Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "css", "Html","Bootstrap","JavaScript","Git"],
    siteUrl: "https://github.com/MohammadNidalRajabi/CarRentReactJs",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web ReactJS",
    title: "Epic Game Clone",
    description:
      "Epic Game Clone Use React JS and Ant Design",
      technologies: ["React", "css", "Html","Ant Design","JavaScript","Git"],
    siteUrl: "https://github.com/MohammadNidalRajabi/EpicGameClone",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web",
    title: "white-Noise",
    description:
      "white-Noise is a group of noises or sounds that help foucs.",
    technologies: ["Html", "css"],
    siteUrl: "https://github.com/MohammadNidalRajabi/white-Noise",
  },
];

export default portfolios;
