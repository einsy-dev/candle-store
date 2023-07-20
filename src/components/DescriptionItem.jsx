import { Container } from 'react-bootstrap';
export default function DescriptionItem({ title, price, description, specs }) {
  return (


    <Container className='mt-4'>
      <div className="d-flex mx-5">
        {title}
      </div>

      <div id="accordion">
        <div className="card my-4">
          <button className="btn bg-light" data-bs-toggle="collapse" href="#collapseOne">
            Описание
          </button>
          <div id="collapseOne" className="collapse show" data-parent="#accordion">
            <div className="card-body">
              {description}
            </div>
          </div>
        </div>
        <div className="card">
          <button className="btn bg-light" data-bs-toggle="collapse" href="#collapseO">
            Характеристики
          </button>
          <div id="collapseO" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <ul className='list-group list-group-flush'>
                {Object.keys(specs).map((el, id) => (
                  <li className='list-group-item' key={id}>
                    {el}  :  {specs[el]}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
