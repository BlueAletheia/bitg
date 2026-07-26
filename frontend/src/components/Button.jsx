import { Link } from 'react-router-dom'

const Button = ({ to, text }) => (
    <Link
        to={to}
        className='inline-block border-2 border-[#FFFD30] bg-black text-[#FFFD30] font-akira font-bold px-6 py-3 transition-colors hover:bg-[#FFFD30] hover:text-black'
    >
        {text}
    </Link>
)

export default Button
