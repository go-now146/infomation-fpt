import { useEffect, useReducer, useState } from "react";
import { Row, Col, Container } from "react-materialize";
import { postItem, putItem } from "../../services/fetchAPI";
import { actions } from "../../store/Reducer";
import reducer, { initState } from "../../store/Reducer/reducer";
import Validator from "../../utils/Validator";

const TITLE = 'title'
const DESCRIPTION = 'descrition'
const CONTENT = 'content'
const IMG = 'img'
const CREATED = 'created'
const STATUS = 'status'
const VIEWS = 'views'
const ACTRACTIVE = 'actractive'

function Modal({ _new, handleForm }) {

    const [item, setItem] = useState(_new)
    const [newState, dispatch] = useReducer(reducer, initState)

    const handleOnChange = e => {
        switch (e.target.name) {
            case TITLE:
                setItem({ ..._new, [TITLE]: e.target.value })
                break
            case DESCRIPTION:
                setItem({ ..._new, [DESCRIPTION]: e.target.value })
                break
            case CONTENT:
                setItem({ ..._new, [CONTENT]: e.target.value })
                break
            case IMG:
                setItem({ ..._new, [IMG]: e.target.value })
                break
            case CREATED:
                setItem({ ..._new, [CREATED]: e.target.value })
                break
            case STATUS:
                setItem({ ..._new, [STATUS]: e.target.value })
                break
            case VIEWS:
                setItem({ ..._new, [VIEWS]: e.target.value })
                break
            case ACTRACTIVE:
                setItem({ ..._new, [ACTRACTIVE]: e.target.value })
                break
            default:
                throw new Error('Invalid input name')
        }
    }

    const handleUpdate = e => {
        
        if(newState.id) {
            putItem(`news/${newState.id}`, newState)
        } else {
            postItem(`news`, newState)
        }
        
    }

    useEffect(() => {
        dispatch(actions.updateState(item))
    }, [item])

    return (
        <div className="overlay d-flex-center">
            <div className="popup">
                <Container>
                    {/* field input */}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Title</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <input
                                    name={TITLE}
                                    className={`input`}
                                    value={newState.title}
                                    onChange={handleOnChange}
                                >
                                </input>
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    {/* field textarea */}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Description</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <textarea
                                    name={DESCRIPTION}
                                    className={`textarea`}
                                    value={newState.descrition}
                                    onChange={handleOnChange}
                                    rows={4}
                                />
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    {/* field textarea*/}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Content</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <textarea
                                    name={CONTENT}
                                    className={`textarea`}
                                    value={newState.content}
                                    onChange={handleOnChange}
                                    rows={4}
                                />
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    {/* field input */}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Image</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <input
                                    name={IMG}
                                    className={`input`}
                                    value={newState.img}
                                    onChange={handleOnChange}
                                >
                                </input>
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    {/* field date */}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Created</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <input
                                    name={CREATED}
                                    type='date'
                                    className={`input`}
                                    value={newState.created}
                                    onChange={handleOnChange}
                                >
                                </input>
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    {/* field checkbox */}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Status</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <input
                                    name={STATUS}
                                    type='checkbox'
                                    className={`input`}
                                    checked={newState.status}
                                >
                                </input>

                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>

                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>Actractive</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <input
                                    name={ACTRACTIVE}
                                    type='checkbox'
                                    className={`input`}
                                    checked={newState.actractive}
                                >
                                </input>
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    {/* field number */}
                    <Row className='d-flex m-y-2'>
                        <Col m={2}>
                            <div className={`d-flex d-flex-vertical-center title`}>
                                <span>View</span>
                            </div>
                        </Col>

                        <Col m={10}>
                            <div className={`d-flex-col input_group`}>
                                <input
                                    name={VIEWS}
                                    type='number'
                                    className={`input`}
                                    value={newState.views}
                                    readOnly={_new}
                                    disabled={_new}
                                >
                                </input>
                                <span className={`form_message form_message`}></span>
                            </div>
                        </Col>
                    </Row>

                    <div className='d-flex-end d-flex'>
                        <button onClick={handleForm} className={`close-btn m-x-1`}>Close</button>
                        <button onClick={handleUpdate} className={`submit-btn`}>{item ? "Update" : "Create"}</button>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Modal;