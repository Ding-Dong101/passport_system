'use client'
import { Table, Passport, BoxArrowLeft } from "react-bootstrap-icons"
import Image from "next/image"
import Clickable from "./clickable"
import '@/app/css/clickable.css'
import Button from "./Logout"
import { useState } from "react"


export default function Sidebar({ dashboard, setDashboard, passportsPage,
    setPassportsPage }) {

    // const [is, setIs] = useState(true)

    return (
        <>
            <div className="sidebar">
                <Image src={"/elc_logo.png"} alt="LOGO" width={140} height={80} />
            </div>
            <div className="buttons">

                <Clickable
                    page="dashboard"
                    setDashboard={setDashboard}
                    dashboardPage={dashboard}
                    setPassportsPage={setPassportsPage}
                    passportsPage={passportsPage} >
                    <Table fontSize={22} className="b" />
                    Dashboard
                </Clickable>

                <Clickable page="passports"
                    setDashboard={setDashboard}
                    dashboardPage={dashboard}
                    setPassportsPage={setPassportsPage}
                    passportsPage={passportsPage} >
                    <Passport fontSize={22} className="b" />
                    Passports
                </Clickable>
                <Button>
                    <BoxArrowLeft fontSize={22} />
                    Logout
                </Button>
            </div >
        </>
    )
}