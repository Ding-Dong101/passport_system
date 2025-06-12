'use client';
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import '@/app/css/passporttable.css';
import TableRow from "./TableRow";

export default function TableSection() {
    const [passports, setPassports] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/user")
            .then(res => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then(data => setPassports(data))
            .catch(err => {
                console.error(err);
                // alert("Error loading data: " + err.message);
            });
    });

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
