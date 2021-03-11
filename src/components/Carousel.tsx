import {
  ButtonBackContainer,
  ButtonNextContainer,
  Container,
  Content,
} from "@/styles/components/Carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface CarouselProps {
  currentSlide: number;
}

const Carousel = ({ currentSlide }: CarouselProps) => {
  return (
    <Container>
      <Content>
        <CarouselProvider
          infinite={true}
          naturalSlideWidth={25}
          naturalSlideHeight={11}
          totalSlides={12}
          currentSlide={currentSlide}
        >
          <Slider>
            <Slide index={0}>
              <img src="Photos/index/2.jpg" alt="" />
            </Slide>
            <Slide index={1}>
              <img src="Photos/index/3.jpg" alt="" />
            </Slide>
            <Slide index={2}>
              <img src="Photos/index/4.jpg" alt="" />
            </Slide>
            <Slide index={3}>
              <img src="Photos/index/5.jpg" alt="" />
            </Slide>
            <Slide index={4}>
              <img src="Photos/index/8.jpg" alt="" />
            </Slide>
            <Slide index={5}>
              <img src="Photos/index/9.jpg" alt="" />
            </Slide>
            <Slide index={6}>
              <img src="Photos/index/10.jpg" alt="" />
            </Slide>
            <Slide index={7}>
              <img src="Photos/index/11.jpg" alt="" />
            </Slide>
            <Slide index={8}>
              <img src="Photos/index/12.jpg" alt="" />
            </Slide>
            <Slide index={9}>
              <img src="Photos/index/6.jpg" alt="" />
            </Slide>
            <Slide index={10}>
              <img src="Photos/index/7.jpg" alt="" />
            </Slide>
            <Slide index={11}>
              <img src="Photos/index/1.jpg" alt="" />
            </Slide>
          </Slider>

          <ButtonBackContainer>
            <ButtonBack>
              <IoIosArrowDropleftCircle />
            </ButtonBack>
          </ButtonBackContainer>
          <ButtonNextContainer>
            <ButtonNext>
              <IoIosArrowDroprightCircle />
            </ButtonNext>
          </ButtonNextContainer>
        </CarouselProvider>
      </Content>
    </Container>
  );
};

export default Carousel;
