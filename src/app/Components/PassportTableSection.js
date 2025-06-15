'use client';
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import '@/app/css/passporttable.css';
import TableRow from "./TableRow";
import { getFirestore, addDoc } from "firebase/firestore";
import app from "./FORM_COMPONENTS/keys";
import { collection, getDocs } from 'firebase/firestore';



export default function TableSection() {
    const db = getFirestore(app)
    const [passports, setPassports] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'applicants'));
                console.log(snapshot.doc)
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        fetchData();
    }, [db]);


    return (
        <div className="tablesection">
            <span className="space-between">
                <h4>Recent Passport Applications</h4>
                <Buttons>View All</Buttons>
            </span>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>APPLICANTS</th>
                        <th>PHONE NUMBER</th>
                        <th>PACKAGE</th>
                        <th>PAYMENT</th>
                        <th>SUBMITED BY</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {passports.length === 0 ? (
                        <tr><td >Loading or no data found...</td></tr>
                    ) : (
                        passports.map((item, i) => (
                            <TableRow
                                key={i}
                                id={item.id}
                                applicant={item.applicant}
                                phone={item.phone}
                                packageType={item.package}
                                payment={item.payment}
                                submittedBy={item.submittedBy}
                                date={item.date}
                                status={item.status}
                                action={item.action}

                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
