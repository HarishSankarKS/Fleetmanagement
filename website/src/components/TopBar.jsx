import { useLocation } from 'react-router-dom'
import { Search, Bell, RefreshCw } from 'lucide-react'
import { useState } from 'react'

const titles = {
    '/dashboard': { title: 'Dashboard', sub: 'Overview · Real-time monitoring' },
    '/collection-sites': { title: 'Collection Sites', sub: 'Manage waste collection points' },
    '/monitoring': { title: 'Monitoring / Map', sub: 'Live tracking · Site status' },
    '/analytics': { title: 'Analytics & Reports', sub: 'Performance insights · Data export' },
    '/vehicles': { title: 'Vehicles', sub: 'Fleet management · Vehicle registry' },
    '/drivers': { title: 'Drivers', sub: 'Driver management · Assignments' },
    '/maintenance': { title: 'Maintenance', sub: 'Schedules · Cost tracking' },
    '/subscriptions': { title: 'Subscriptions', sub: 'Plans · Billing · Access' },
    '/settings': { title: 'Settings', sub: 'System configuration · Preferences' },
}

export default function TopBar() {
    const { pathname } = useLocation()
    const meta = titles[pathname] || { title: 'Smart C&D Waste', sub: 'Monitoring System' }
    const [search, setSearch] = useState('')

    return (
        <header className="topbar">
            <div className="topbar-left">
                <span className="topbar-title">{meta.title}</span>
                <span className="topbar-breadcrumb">{meta.sub}</span>
            </div>
            <div className="topbar-right">
                <div className="search-bar">
                    <Search size={14} className="search-icon" />
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search anything..."
                    />
                </div>
                <button className="icon-btn" title="Refresh">
                    <RefreshCw size={15} />
                </button>
                <button className="icon-btn" title="Notifications">
                    <Bell size={15} />
                    <span className="badge">3</span>
                </button>
                <div className="avatar" title="Admin User">AD</div>
            </div>
        </header>
    )
}
