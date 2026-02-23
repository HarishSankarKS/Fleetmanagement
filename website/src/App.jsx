import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './pages/Dashboard'
import CollectionSites from './pages/CollectionSites'
import Monitoring from './pages/Monitoring'
import Analytics from './pages/Analytics'
import Vehicles from './pages/Vehicles'
import Drivers from './pages/Drivers'
import Maintenance from './pages/Maintenance'
import Subscriptions from './pages/Subscriptions'
import Settings from './pages/Settings'
import './index.css'

export default function App() {
  return (
    <BrowserRouter basename="/Fleetmanagement">
      <div className="app-layout">
        <Sidebar />
        <div className="main-area">
          <TopBar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/collection-sites" element={<CollectionSites />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
