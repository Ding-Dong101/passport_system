import '@/app/css/head.css'
export default function Header() {


    return (
        <div className="header">
            <h2>Facilitators Dashboard</h2>
            <div className="user">
                <div className="profile">A</div>
                <div className="user-details">
                    <h4>John Doe</h4>
                    <p>Facilitator</p>
                </div>
            </div>
        </div>
    )
}