import { Container, Photos, CloseButton } from "@/styles/pages";
import React from "react";
import { useCallback, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";


const Home = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleOpenAwesomeSlider = useCallback(() => {
    setIsSliderOpen(true)
  }, []);

  const handleCloseAwesomeSlider = useCallback(() => {
    setIsSliderOpen(false)
  }, []);


  return (
    <Container style={isSliderOpen ? { "width": "60%" } : { "width": "100%" }}>
      <Photos style={isSliderOpen ? { "display": "none" } : { "display": "block" }}>
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/2.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/3.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/4.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/5.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/8.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/9.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/10.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/11.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/12.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/6.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/7.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/1.jpg" alt="" />
      </Photos>


      <CloseButton
        style={isSliderOpen ? { "display": "block" } : { "display": "none" }}
        onClick={handleCloseAwesomeSlider}
      >
        <IoCloseCircleOutline />
      </CloseButton>



    </Container>
  )
}

export default Home;