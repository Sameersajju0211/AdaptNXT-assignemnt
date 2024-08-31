import React from 'react';
import { Nav } from 'react-bootstrap';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="/dashboard" className="side-panel-link">Dashboard</Nav.Link>
        <Nav.Link href="/inventory" className="side-panel-link">Inventory</Nav.Link>
        <Nav.Link href="/order" className="side-panel-link">Order</Nav.Link>
        <Nav.Link href="/returns" className="side-panel-link">Returns</Nav.Link>
        <Nav.Link href="/customers" className="side-panel-link">Customers</Nav.Link>
        <Nav.Link href="/shipping" className="side-panel-link">Shipping</Nav.Link>
        <Nav.Link href="/channel" className="side-panel-link">Channel</Nav.Link>
        <Nav.Link href="/integrations" className="side-panel-link">Integrations</Nav.Link>
        <Nav.Link href="/calculators" className="side-panel-link">Calculators</Nav.Link>
        <Nav.Link href="/reports" className="side-panel-link">Reports</Nav.Link>
        <Nav.Link href="/account" className="side-panel-link">Account</Nav.Link>
      </Nav>
    </div>
  );
};

export default SidePanel;
