import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel";
import { useLocation } from "react-router-dom";


export default function ShopItem() {
  let { state } = useLocation();
  console.log(state)
  return (
    <Container>
      <Carousel images={state.image.high} />
    </Container>
  )
}
