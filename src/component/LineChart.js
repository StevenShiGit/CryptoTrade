
import React from 'react';
import { Line} from 'react-chartjs-2';
import { useState } from 'react';

import { Col, Row, Typography,Select } from 'antd';
import {Chart, registerables} from 'chart.js';




const { Title } = Typography;



const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    Chart.register(...registerables);

  const coinPrice = [];
  const coinTimestamp = [];
  const [timePeriod, setTimePeriod] = useState('7d');

  for (let i = coinHistory?.data?.history?.length-1; i >=0; i --) {

    coinPrice.push(coinHistory.data.history[i].price);

    const unixTime=coinHistory.data.history[i].timestamp*1000;
    
    coinTimestamp.push(new Date(unixTime).toLocaleDateString());
   
  }
 

  
  const data = {
    
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
      
          <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        
         
        
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;