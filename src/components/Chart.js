
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const Chart = ({ coinHistory, currentPrice, coinName }) => {
  // const coinPrice = [];
  const coinTimestamp = [];
  const coinData = [];
 
  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinPrice.push(coinHistory?.data?.history[i].price);
  // }

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  // }

  if (coinHistory && coinHistory.data && coinHistory.data.history) {
    coinHistory.data.history.forEach((historyItem) => {
      const coinPrice = historyItem.price;
      const coinTimestamp = new Date(historyItem.timestamp).toLocaleDateString();
      coinData.push({ date: coinTimestamp, value: coinPrice });
    });
  }
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>


      <LineChart width={600} height={300} data={coinData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='date'/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </>
  );
};

export default Chart;

