import { ReactComponent as ProfileIcon } from '../../images/person-circle.svg'
import CreateCategory from '../modal/CreateCategory'
import CreateStoreItem from '../modal/CreateStoreItem'
import { useState } from 'react';

export default function Admin() {
    const [type, setType] = useState('category');
    return (
        <>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal2"><ProfileIcon width={32} height={32} fill={"green"} /></a>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {type == 'category' && <CreateCategory changeState={setType} />}
                            {type == 'storeItem' && <CreateStoreItem changeState={setType} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
