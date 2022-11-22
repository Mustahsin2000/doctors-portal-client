import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content mr-6">
                        {/* <!-- Sidebar content here --> */}
                        <li className='btn btn-outline btn-primary rounded mb-3'><Link to='/dashboard'>My Appoinmants</Link></li>
                        {
                            isAdmin && <>
                            <li className='btn btn-outline btn-primary rounded mb-3'><Link to='/dashboard/allusers'>All Users</Link></li>
                            <li className='btn btn-outline btn-primary rounded mb-3'><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                            <li className='btn btn-outline btn-primary rounded'><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;