import { useEffect, useState } from "react";
import { Card, CardTitle, Row, Col, CardPanel } from "react-materialize";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/fetchAPI";

function Detail() {
    const param = useParams()
    const [_new, setNew] = useState({});

    useEffect(() => {
        getItem(`news/${param.id}`, item => {
            setNew(item)
        })
    }, [_new])
    
    return (
        <div className="d-flex d-flex-center full-w">
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <Card
                        header={<CardTitle image={_new.img}></CardTitle>}
                    >
                        <div className="">
                            <span>{_new.title}</span>
                            
                            <div style={{marginTop: '16px'}} className="d-flex d-flex-between txt-sm bold">
                                <span style={{color: '#0095f6'}}>Actractive: {_new.actractive && 'True'}</span>
                                <span style={{color: 'rgb(246 0 97)'}}>View: {_new.views}</span>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col
                    m={5}
                    s={12}
                >
                    <CardPanel className="teal">
                        <span className="white-text">
                            {_new.description}
                        </span>
                    </CardPanel>
                    <CardPanel className="teal">
                        <span className="white-text">
                            {_new.content}
                        </span>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    );
}

export default Detail;