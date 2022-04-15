/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Images
import diri1 from "/assets/images/pessoas/177.jpg";
import diri2 from "/assets/images/pessoas/682.jpg";
import diri3 from "/assets/images/pessoas/759.jpg";
import diri4 from "/assets/images/pessoas/795.jpg";
import diri5 from "/assets/images/pessoas/983.jpg";

// @mui icons
import InstagramIcon from "@mui/icons-material/Instagram";

const profilesListData = [
  {
    image: diri1,
    name: "Brunner Santos",
    description: "Doação / Fichas",
    action: {
      type: "external",
      route: "https://www.instagram.com/bruner_sl/",
      color: "info",
      label: <InstagramIcon />,
    },
  },
  {
    image: diri2,
    name: "Louise Pinho",
    description: "Oração / Finanças",
    action: {
      type: "external",
      route: "https://www.instagram.com/louisepinho/",
      color: "info",
      label: <InstagramIcon />,
    },
  },
  {
    image: diri3,
    name: "Manuella Mendonça",
    description: "Alegria / Pós-encontro",
    action: {
      type: "external",
      route: "https://www.instagram.com/manuellaalvares/",
      color: "info",
      label: <InstagramIcon />,
    },
  },
  {
    image: diri4,
    name: "Marcos Paulo",
    description: "Simplicidade / Palestras",
    action: {
      type: "external",
      route: "https://www.instagram.com/piteco5/",
      color: "info",
      label: <InstagramIcon />,
    },
  },
  {
    image: diri5,
    name: "Pedro Prallon",
    description: "Pobreza / Montagem",
    action: {
      type: "external",
      route: "https://www.instagram.com/prallones/",
      color: "info",
      label: <InstagramIcon />,
    },
  },
];

export default profilesListData;
