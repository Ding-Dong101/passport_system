import '@/app/css/button.css'
import Buttons from "./Buttons"
import '@/app/css/passports.css'
import { useState } from "react"
import { Search } from "react-bootstrap-icons"
import TableSection from "./PassportTableSection"


export default function Passports() {
    const [search, setSearch] = useState('')
    const [submit, setSubmit] = useState('')

    function submitText(e) {
        e.preventDefault()
        console.log(search)
        setSearch('')
    }
    return (
        <div className="Passports">
            <span className="space-between">
                <h2>Recent Passport Applicationsh</h2>
                <Buttons>Register new passports</Buttons>
            </span>

            <form onSubmit={submitText} className="searchBox">
                <Search />
                <input type="search"
                    placeholder="Search by Name, ID, or Email"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    maxLength={50} />
            </form>
            <TableSection />
        </div>
    )
}