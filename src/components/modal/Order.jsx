import { useRef } from 'react';
import { order } from '../../http/userAPI';

export default function Order() {
    const formRef = useRef()
    function handleClick(e) {
        e.preventDefault()
        const info = {
            phone: formRef.current.elements[0].value,
            name: formRef.current.elements[1].value,
            info: formRef.current.elements[2].value
        }
        order(info)
            .then(() => location.reload())
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="modal fade" id="order" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form ref={formRef}>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Номер телефона</label>
                                    <input type="tel" maxLength={15} name="phone" required={true} className="form-control" id="exampleInputEmail55" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="formName" className="form-label">Как к вам обращаться</label>
                                    <input type="text" className="form-control" id="formName" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="additinalInfo" className="form-label">Дополнительная информация</label>
                                    <textarea type="text" className="form-control" id="additinalInfo" />
                                </div>

                                <div className="modal-footer pb-0 pe-0">
                                    <button onClick={handleClick} className="btn btn-primary border m-0">Оформить заказ</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
