import { Pass, Person, PersonVcardFill } from "react-bootstrap-icons";
import Card from "./Card";
import '@/app/css/dashboard.css'
import Button from "./Logout";
import Buttons from "./Buttons";
import TableSection from "./PassportTableSection";

export default function Dashboard() {


    return (
        <div className="dashboard">
            <div className="name">
                <h2>Welcome, John Doe</h2>
                <p>Here is an overview of your passport applications</p>
            </div>

            <div className="overview">
                <Card>
                    <span>
                        <h3>Total registrations</h3>
                        <Pass fontSize={28} />
                    </span>
                    <h3 className="number">123</h3>
                    <p>Registrations done by you so far</p>
                </Card>
                <Card>
                    <span>
                        <h3>Total registrations</h3>
                        <Person fontSize={28} />
                    </span>
                    <h3 className="number">12</h3>
                    <p>Registration Approved</p>
                </Card>
                <Card>
                    <span>

                        <h3>Total registrations</h3>
                        <Person fontSize={28} />
                    </span>
                    <h3 className="number">4</h3>
                    <p>Registration Regescted</p>
                </Card>
            </div>

            <div className="quickActions">
                <h4>Quick Actions</h4>
                <div className="cardsSection">

                    <Card >
                        <span className="center">
                            <PersonVcardFill fontSize={38} />
                            <h5>Register New Passport</h5>
                            <p>Create a new passport for a client</p>
                            <Buttons>
                                Register Passports
                            </Buttons>
                        </span>
                    </Card>
                    <Card >
                        <span className="center">
                            <PersonVcardFill fontSize={38} />
                            <h5>Check application status</h5>
                            <p>View the status of your submitted applications</p>
                            <Buttons>
                                View Applications
                            </Buttons>
                        </span>
                    </Card>
                </div>
            </div>

            <TableSection />
        </div>
    )
}