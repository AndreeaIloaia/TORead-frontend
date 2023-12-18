import MainSectionBook from '../components/MainSectionBook';
import Navbar from '../components/Navbar';
import  '../styles/Book.css'

export default function Book() {
    return (
        <div className="Book">
            <Navbar />
            <MainSectionBook />
        </div>
    )
}