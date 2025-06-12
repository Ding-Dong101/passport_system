import { Eye, EyeFill } from "react-bootstrap-icons";

export default function TableRow({ id,
    applicant,
    phone,
    packageType,
    payment,
    submittedBy,
    date,
    status, action }) {

    return (
        <tr>
            <td key={id}>
                <span>{id}</span>
            </td>
            <td>
                <span>{applicant} </span>
            </td>
            <td>
                <span>{phone}</span>
            </td>
            <td>
                <span>{packageType}</span>
            </td>
            <td>
                {payment === 'Pending' ? (
                    <span className="red">{payment}</span>
                ) : payment === 'Paid' ? (
                    <span className="green">{payment}</span>
                ) : null}
            </td>
            <td>
                <span>{submittedBy}</span>
            </td>
            <td>
                <span>{date}</span>
            </td>
            <td>
                {status === 'Pending' ? (
                    <span className="yellow">Pending</span>
                ) : status === 'In Review' ? (
                    <span className="blue">{status}</span>
                ) : status === 'Approved' ? (
                    <span className="verified">{status}</span>
                ) : null}
            </td>
            <td>
                <span>
                    <EyeFill />
                    {action.map(s => {
                        <span className={s}>{s}</span>
                    })}
                </span>
            </td>
        </tr>
    )
}