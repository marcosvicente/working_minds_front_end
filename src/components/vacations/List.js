import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import moment from 'moment'
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/vacations`)
      .then((response) => {
          console.log(response.data)
          setAPIData(response.data);
      })
  }, []);

    const setData = (data) => {
      let { id, date_init, date_end } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('date_init', date_init);
      localStorage.setItem('date_end', date_end);
    }

    const getData = () => {
      axios.get(`http://127.0.0.1:3000/vacations`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    
    return (
      <>
        <Card style={{ margin: '50px 0'}}>
          <ListGroup variant="flush">
            {APIData.map((vacation) => {
              return (
                <ListGroup.Item  key={vacation.id}>
                  <p>Data de Início: <Moment format='L' locale='pt-br'>{vacation.date_init}</Moment> </p>
                  <p>Data Fim: <Moment format='L' locale='pt-br'>{vacation.date_end}</Moment> </p>
                </ListGroup.Item>
              )
            })}
            </ListGroup>
        </Card>
      </>
    )
}

