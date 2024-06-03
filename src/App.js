import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ConsultantList from './ConsultantList';
import ConsultantDetails from './ConsultantDetails';
import AddConsultant from './AddConsultant';
import ClientList from './ClientList';
import ClientDetails from './ClientDetails';
import UserManagement from './UserManagement';
import Billing from './Billing';
import Reporting from './Reporting';
import PlatformManagement from './PlatformManagement';
import Notifications from './Notifications'; 
import HelpSupport from './HelpSupport';
const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/consultant-list" element={<ConsultantList />} />
            <Route path="/consultant-details" element={<ConsultantDetails />} />
            <Route path="/add-consultant" element={<AddConsultant />} />
            <Route path="/client-list" element={<ClientList />} />
            <Route path="/client-details" element={<ClientDetails />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/platform-management" element={<PlatformManagement />} />
            <Route path="/notifications" element={<Notifications />} /> 
            <Route path="/help-support" element={<HelpSupport />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
