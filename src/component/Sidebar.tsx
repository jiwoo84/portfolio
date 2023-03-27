import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faUser,
  faScrewdriverWrench,
  faListCheck,
  faSchoolFlag,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

const Container = tw.div`
  sticky flex-col place-content-evenly h-[100vh] top-0 bg-blue-500 px-3
`;

const IconBox = tw.div`
    h-[60%]
`;

const AngelsRightIcon = tw.div`
    h-[40%]
    pt-10
    
`;

const AngelsLeftIcon = tw.div`
    h-[40%]
    pt-10
    
`;

const Icon = tw.div`
    my-10
`;

const SideBar: React.FC = () => {
  let [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  let [menu1, setMenu1] = useState<string>("");
  let [menu2, setMenu2] = useState<string>("");
  let [menu3, setMenu3] = useState<string>("");
  let [menu4, setMenu4] = useState<string>("");

  const onSideBarOpen = () => {
    setSideBarIsOpen(!sideBarIsOpen);
    setMenu1("About");
    setMenu2("Project");
    setMenu3("Skill");
    setMenu4("Education");
  };

  const onSideBarClose = () => {
    setSideBarIsOpen(!sideBarIsOpen);
    setMenu1("");
    setMenu2("");
    setMenu3("");
    setMenu4("");
  };

  // 사이트바 토글시 사용
  const sideBarVarianats = {
    true: {
      width: "50rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  return (
    <Container>
      {sideBarIsOpen ? (
        <AngelsLeftIcon onClick={() => onSideBarClose()}>
          <FontAwesomeIcon icon={faAnglesLeft} size="lg" color="white" />
        </AngelsLeftIcon>
      ) : (
        <AngelsRightIcon onClick={() => onSideBarOpen()}>
          <FontAwesomeIcon icon={faAnglesRight} size="lg" color="white" />
        </AngelsRightIcon>
      )}
      <IconBox>
        <Icon>
          <FontAwesomeIcon icon={faUser} size="lg" color="white" />
          {menu1}
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faListCheck} size="lg" color="white" />
          {menu2}
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" color="white" />
          {menu3}
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faSchoolFlag} size="lg" color="white" />
          {menu4}
        </Icon>
      </IconBox>
    </Container>
  );
};

export default SideBar;
