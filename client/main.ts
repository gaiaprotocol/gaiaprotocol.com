import { createGaiaProtocolDashboard } from '@gaiaprotocol/god-mode-client';
import './main.css';

const dashboardContainer = document.getElementById('dashboard-container');
if (dashboardContainer) {
  dashboardContainer.appendChild(createGaiaProtocolDashboard());
}
