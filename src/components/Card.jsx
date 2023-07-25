
import { NavLink } from 'react-router-dom';
const Card = ({data}) => {
    return (
        data.map((el, id) => (
            <div className="card m-3" key={id} style={{ width: "18rem", height: "fit-content"}}>
                <img src={el.image.medium[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card {el.title} Title</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <NavLink to={`/item/${el.id}`} state={el} className="btn btn-outline-primary">
                        Go somewhere
                    </NavLink>
                </div>
            </div>
        ))
    )
}
export default Card