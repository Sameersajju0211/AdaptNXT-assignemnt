import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const lineData = {
        labels: ['6/30/2024', '7/7/2024', '7/14/2024', '7/21/2024'],
        datasets: [
            {
                label: 'Orders',
                data: [1600, 800, 800, 800],
                borderColor: '#f39c12',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Sales',
                data: [1404, 1000, 800, 600],
                borderColor: '#3498db',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const lineOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        if (context.dataset.label === 'Sales') {
                            return `Sales: ${context.raw}`;
                        }
                        if (context.dataset.label === 'Orders') {
                            return `Orders: ${context.raw}`;
                        }
                    },
                },
            },
        },
    };

    const pieData = {
        labels: ['WooCommerce Store', 'Shopify Store'],
        datasets: [
            {
                label: 'Portion of Sales',
                data: [44.7, 55.3],
                backgroundColor: ['#e74c3c', '#1abc9c'],
                hoverOffset: 4,
            },
        ],
    };

    const pieOptions = {
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={12} lg={8}>
                    <h5>Sales vs Orders</h5>
                    <Line data={lineData} options={lineOptions} />
                </Col>
                <Col xs={12} lg={4}>
                    <h5>Portion of Sales</h5>
                    <Pie data={pieData} options={pieOptions} />
                    <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '10px' }}>
                        <span>Total</span>
                        <br />
                        <strong>2659</strong>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
