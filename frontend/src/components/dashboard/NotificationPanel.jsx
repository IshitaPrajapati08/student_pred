import React from 'react';

const NotificationPanel = ({ notifications }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'deadline':
        return <span className="text-red-500">❗</span>;
      case 'warning':
        return <span className="text-yellow-500">⚠️</span>;
      default:
        return <span className="text-blue-500">ℹ️</span>;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Notifications & Alerts</h3>
      <ul className="space-y-3">
        {notifications.map((notif) => (
          <li key={notif.id} className="flex items-start">
            <div className="mr-3 mt-1">{getIcon(notif.type)}</div>
            <p className="text-sm text-gray-600">{notif.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;