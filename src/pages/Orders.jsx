import IsLoading from '../components/shop/IsLoading';
import { ReactComponent as StatusIcon } from '../images/circle-fill.svg';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { orders } from '../http/userAPI';
import { Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { changeStatus } from '../http/userAPI';

const Orders = observer(() => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        setLoading(true);
        orders()
            .then(({ data }) => setData(data))
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, [])

    function handleClick(id, statusId) {
        changeStatus(id, statusId)
            .catch(err => console.log(err));
    }

    return (
        <>
            <nav aria-label="breadcrumb" className="w-100 mt-4" style={{ height: "fit-content" }}>
                <ol className="breadcrumb m-auto">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Orders</li>
                </ol>
            </nav>

            {isLoading ? <IsLoading className="m-auto" /> :
                <Container className='p-0 h-100'>
                    <div className=" m-auto">

                        <div className="row m-0 bg-light border rounded text-center">
                            <div className="col-1">
                                №
                            </div>
                            <div className="col-5">
                                Order
                            </div>
                            <div className="col-5">
                                Info
                            </div>
                            <div className="col-1">
                                Status
                            </div>
                        </div>

                        {
                            data?.map((el, id) => <>
                                <div className="row m-0 my-4 bg-light border rounded align-items-center">
                                    <div className="col-1 text-center">
                                        {id}
                                    </div>
                                    <div className="col-5">
                                        {el.items?.map((el, index) => <NavLink to={`/store/${el}`} key={index} className='me-4 p-1  border rounded link-underline link-underline-opacity-0'>{index + 1}</NavLink>)}
                                    </div>
                                    <div className="col-5">
                                        <div className="">
                                            name: {el.name} phone: <a href={`tel:${el.phone}`}>{el.phone}</a>
                                        </div>
                                        <div>
                                            {el.info}
                                        </div>
                                    </div>
                                    <div className="col-1 p-0 d-flex align-items-center justify-content-center" onClick={() => handleClick(el._id, 1)}>
                                        <StatusIcon fill={el.status === '1' && "#00C853" || el.status === '2' && "#F44336" || el.status === '3' && "#FF9800"} width={10} height={10} />
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </Container>
            }
        </>
    );
}
)

export default Orders;
