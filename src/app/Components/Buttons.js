import '@/app/css/button.css'
export default function Buttons({ children }) {

    return (
        <button type="submit">
            {children}
        </button>
    )
}