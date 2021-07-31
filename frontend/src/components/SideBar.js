import React from "react";
import styled from "styled-components";
const SideBar = ({ setSideBar, sideBar }) => {
  return (
    <SideBarWrapper sideBar={sideBar}>
      <div className='row'>
        <h1>Shopping Categories</h1>
        <button onClick={() => setSideBar()}>x</button>
      </div>
      <div className='row'>
        <a href=''>Pants</a>
        <i class='fa fa-arrow-right'></i>
      </div>
      <div className='row'>
        <a href=''>Shirts</a>
        <i class='fa fa-arrow-right'></i>
      </div>
      <div className='row'>
        <a href=''>Sample</a>
        <i class='fa fa-arrow-right'></i>
      </div>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.aside`
  position: fixed;
  transition: all 0.5s;
  transform: ${props =>
    props.sideBar ? "translateX(0)" : "translateX(-30rem)"};
  width: 30rem;
  background-color: #f0f0f0;
  height: 100%;

  .row {
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
  }
  button {
    padding: 0.5rem 1rem;
  }
`;
export default SideBar;
