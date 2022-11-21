import { Table } from 'react-materialize';
import { getItem, deleteItem} from '../../services/fetchAPI';
import { useEffect, useState } from 'react';
import Modal from './Modal';

function Dashboard() {
    const [curNews, setCurNews] = useState([])
    const [_new, setNew] = useState({})
    const [onView, setOnView] = useState(false)

    useEffect(() => {
        getItem('news', list => {
            setCurNews(list)
        })
    }, [onView])

    const handleDelete = e => {
        e.preventDefault()

        if(!window.confirm("Xóa thật á nhaaa !!!")) return

        setCurNews(curNews.filter( item => item.id !== e.target.value))

        deleteItem(`news/${e.target.value}`)
    }

    const handleCreate = e => {
        e.preventDefault()

        setOnView(!onView)
    }

    const handleForm = e => {
        e.preventDefault()

        setNew(curNews.find( item => item.id === e.target.value))

        setOnView(!onView)
    }

    return (
        <div className={`d-flex-center`}>
            <div style={{ width: '70%' }}>
                <div className={`d-flex d-flex-end m-y-2`}>
                    <button onClick={handleCreate} className={`btn-lg`}>Create</button>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">
                                Image
                            </th>
                            <th data-field="name">
                                Title
                            </th>
                            <th data-field="price">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {curNews.map( item =>
                            <tr>
                                <td>
                                    <img src={item.img} alt={`img-${item.id}`}/>
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    <button value={item.id} onClick={handleDelete} className={`m-y-0 submit-btn bg_primary`}>Delete</button>
                                    <button value={item.id} onClick={handleForm} className={`submit-btn`}>Update</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                {onView && <Modal _new={_new} handleForm={handleForm}/>}
            </div>
        </div>
    );
}

export default Dashboard;