
import '@/app/css/clickable.css'

export default function Clickable(
    { children, page, setPassportsPage, setDashboard, passportsPage, dashboardPage }) {
    function changepage(page) {
        if (page === 'dashboard') {
            setDashboard(true)
            setPassportsPage(false)
        }
        else if (page === 'passports') {
            setDashboard(false)
            setPassportsPage(true)
        }
    }
    return (
        <div className="clickable" onClick={() => changepage(page)}>
            {children}
        </div>
    )
}