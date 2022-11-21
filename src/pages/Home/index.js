import { Fragment, useEffect, useState } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";
import { getItem } from "../../services/fetchAPI";

function Home() {
    const [news, setNews] = useState([])

    useEffect(() => {
        getItem('news', list => {
            setNews(list)
        })
    }, [])

    return (
        <Fragment>
            <Row>
                {news.map((item, index) => {
                    if (!item.actractive) return
                    
                    return (
                        <Col
                            m={3}
                            s={6}
                        >

                            <Card
                                closeIcon={<i class="fa-solid fa-xmark"></i>}
                                header={<CardTitle image={item.img} reveal waves="light" />}
                                reveal={<p>{item.description}</p>}
                                revealIcon={<i class="fa-regular fa-grip-dots-vertical"></i>}
                                title={item.title}
                            >
                                <p>
                                    <Link to={`/detail/${item.id}`}>
                                        View Detail
                                    </Link>
                                </p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Fragment>
    );
}

export default Home;