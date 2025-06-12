'use client'
import '@/app/css/index.css'
import Header from "../Components/head"
import Sidebar from "../Components/SideBar"
import Dashboard from "../Components/Dashboard"
import { useState } from "react"
import Passports from "../Components/Passports"

export default function Facilitator() {
    const [dashboard, setDashboard] = useState(false)
    const [passportsPage, setPassportsPage] = useState(true)



    return (
        <div className="container gridBox">
            <Header />
            <Sidebar
                dashboard={dashboard}
                setDashboard={setDashboard}
                passportsPage={passportsPage}
                setPassportsPage={setPassportsPage}
            />
            {
                dashboard &&
                <Dashboard />
            }
            {
                passportsPage && <Passports />
            }
        </div>
    )
}