import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { CampusPage } from './pages/CampusPage.jsx'
import { CircleCalendarPage } from './pages/CircleCalendarPage.jsx'
import { HomePage } from './pages/HomePage.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/campus', label: '楽単はこちら' },
  { to: '/circle-calendar', label: 'サークルカレンダー' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="header">
          <div>
            <h1 className="site-title">メニュー</h1>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/circle-calendar" element={<CircleCalendarPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
