import { Container } from "react-bootstrap";
import Carousel from "../components/shopitem/Carousel";
import { useLocation, Link } from "react-router-dom";
import DescriptionItem from "../components/shopitem/DescriptionItem";


export default function ShopItem() {
  let { state } = useLocation();
  
  return (
    <Container className="my-4">
      <nav aria-label="breadcrumb" className="mx-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{state.title}</li>
        </ol>
      </nav>

      <Carousel images={state.image.high} />

      <DescriptionItem
        title={state.title}
        price={state.price}
        description={state.discription}
        specs={state.specs} />
    </Container>
  )
}
