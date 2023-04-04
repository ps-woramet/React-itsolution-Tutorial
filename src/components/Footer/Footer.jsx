import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background-color: black;
  width: 100%;
  margin-top: 5%;
  height: 40%;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
  text-align: center;
`;
const Description = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const MenuItems = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Description>
          <Title>About Us</Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          asperiores, atque blanditiis id voluptatum nesciunt expedita! A illo
          rerum facilis iste accusantium, qui asperiores facere consequuntur
          minima perspiciatis dolor itaque!
        </Description>
        <MenuItems>
          <Title>Our Services</Title>
          <Menu>
            <MenuItem href="#">Training Courses</MenuItem>
            <MenuItem href="#">Service Desk</MenuItem>
            <MenuItem href="#">Proactive Services</MenuItem>
            <MenuItem href="#">User Support</MenuItem>
            <MenuItem href="#">24/7 Services</MenuItem>
          </Menu>
        </MenuItems>
        <MenuItems>
          <Title>Our Policies</Title>
          <Menu>
            <MenuItem href="#">Privacy Policy</MenuItem>
            <MenuItem href="#">Data Policy</MenuItem>
          </Menu>
        </MenuItems>
      </Container>
    </>
  );
};

export default Footer;