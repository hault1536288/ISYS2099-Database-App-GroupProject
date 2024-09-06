'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();
    return ( 
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="" className="text-2xl font-bold">Hospital Management</a>
                <div>
                    <Link href="/" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link href="/appointment" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/appointment' ? 'active' : ''}`} >
                        Appointment
                    </Link>
                    <Link href="/schedule" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/schedule' ? 'active' : ''}`}>
                        Schedule
                    </Link>
                    <Link href="/patient" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/patient' ? 'active' : ''}`}>
                        Patient
                    </Link>
                    <Link href="/staff" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/staff' ? 'active' : ''}`}>
                        Staff
                    </Link>
                    <Link href="/department" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/department' ? 'active' : ''}`}>
                        Department
                    </Link>
                    <Link href="/treatment" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/treatment' ? 'active' : ''}`}>
                        Treatment
                    </Link>
                    <Link href="/staff-history" className={`mx-4 hover:text-gray-500 [&.active]:text-indigo-600 [&.active]:font-semibold ${pathname === '/staff-history' ? 'active' : ''}`}>
                        Staff History
                    </Link>
                </div>
            </div>
        </nav>    
    );
}
export default Navbar;
