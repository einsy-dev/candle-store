import { Container } from 'react-bootstrap';
export default function Admin() {
  function handleClick(e) {
    e.preventDefault();
    console.log('form')
  }
  return (
    <Container>
      <form className="row g-3">
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">Title</label>
          <input required={true} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">Description</label>
          <textarea required={true} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">Categories</label>

          <div id='basic-url' className="form-control mb-4">egwgwgnjg;kjewgjk</div>

          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>



        <button className='btn btn-primary w-25' onClick={handleClick}>Создать</button>
      </form>
    </Container>
  )
}
