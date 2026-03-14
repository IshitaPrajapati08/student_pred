import React from 'react';

const AlertsPanel = ({ alerts }) => {
    const getAlertColor = (type) => {
        switch (type) {
            case 'critical':
                return 'bg-red-100 border-red-500 text-red-700';
            case 'warning':
                return 'bg-yellow-100 border-yellow-500 text-yellow-700';
            default:
                return 'bg-blue-100 border-blue-500 text-blue-700';
        }
    }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Alerts & Notifications</h3>
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li key={alert.id} className={`p-3 rounded-md border-l-4 ${getAlertColor(alert.type)}`}>
            <p>{alert.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsPanel;