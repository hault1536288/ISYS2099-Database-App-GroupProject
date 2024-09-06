import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="" className="text-2xl font-bold">Hospital Management</a>
                <div>
                    <Link href="/" className="mx-2">
                        Home
                    </Link>
                    <Link href="/appointment" className="mx-4">
                        Appointment
                    </Link>
                    <Link href="/schedule" className="mx-4">
                        Schedule
                    </Link>
                    <Link href="/patient" className="mx-4">
                        Patient
                    </Link>
                    <Link href="/staff" className="mx-4">
                        Staff
                    </Link>
                    <Link href="/department" className="mx-4">
                        Department
                    </Link>
                    <Link href="/treatment" className="mx-4">
                        Treatment
                    </Link>
                    <Link href="/staff-history" className="mx-4">
                        Staff History
                    </Link>
                </div>
            </div>
        </nav>    
    );
}
export default Navbar;
