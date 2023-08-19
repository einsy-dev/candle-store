import { Container } from "react-bootstrap";
import Carousel from "../components/shopitem/Carousel";
import { useLocation, Link } from "react-router-dom";
import DescriptionItem from "../components/shopitem/DescriptionItem";
import IsLoading from '../components/shop/IsLoading';
import { useState, useEffect } from "react";
import { getOneCard } from "../http/shopAPI";


export default function ShopItem() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    getOneCard(pathname.split('/').pop()).then((data) => setData(data)).finally(() => setLoading(false)).catch(err => console.log(err));
  }, [pathname])

  return (
    <>
      {isLoading ? <IsLoading className="m-auto" /> :
        <>
          <Container className="my-4">
            <nav aria-label="breadcrumb" className="mx-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
              </ol>
            </nav>

            <Carousel images={data.images} />

            <DescriptionItem
              id={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
              specs={data.specs} />
          </Container>
        </>
      }
    </>
  )
}
