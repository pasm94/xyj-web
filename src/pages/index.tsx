import { Container, Photos, CloseButton } from "../styles/pages";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useCallback, useState } from "react";



const Home = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleOpenAwesomeSlider = useCallback(() => {
    setIsSliderOpen(true)
    
  }, []);

  const handleCloseAwesomeSlider = useCallback(() => {
    setIsSliderOpen(false)
  }, []);

  return (
    <Container>
      <Photos style={isSliderOpen ? { "display": "none" } : { "display": "block" }}>
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/1.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/2.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/3.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/6.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/9.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/8.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/4.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/5.jpg" alt="" />
        <img onClick={handleOpenAwesomeSlider} src="Photos/index/7.jpg" alt="" />
      </Photos>


      <CloseButton
        style={isSliderOpen ? { "display": "block" } : { "display": "none" }}
        onClick={handleCloseAwesomeSlider}
      >
        &times;
      </CloseButton>

      <AwesomeSlider
        style={isSliderOpen ? { "display": "block", "width": "70%", "height": "70%" } : { "display": "none" }}
        buttons={true}
        media={[
          {
            source: 'Photos/index/1.jpg',
          },
          {
            source: 'Photos/index/2.jpg',
          },
          {
            source: 'Photos/index/3.jpg',
          },
          {
            source: 'Photos/index/4.jpg',
          },
          {
            source: 'Photos/index/5.jpg',
          },
          {
            source: 'Photos/index/6.jpg',
          },
          {
            source: 'Photos/index/7.jpg',
          },
          {
            source: 'Photos/index/8.jpg',
          },
          {
            source: 'Photos/index/9.jpg',
          },
        ]}
      />
    </Container>
  )
}

export default Home;