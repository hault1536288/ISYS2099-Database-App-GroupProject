"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";

export default function Home() {
  const [staff, setStaff] = useState([]);
  // const [filters, setFilters] = useState({
  //   department: "",
  //   name: "",
  //   sortOrder: "ASC",
  // });
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [newStaff, setNewStaff] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    jobTitle: "",
    salary: "",
  });

  const staffs = [
    {
      id: 1,
      depId: 1,
      name: "John Smith",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      jobTitle: "doctor",
      salary: "10000$",
    },
    {
      id: 2,
      depId: 2,
      name: "Franklin Wong",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      jobTitle: "doctor",
      salary: "10000$",
    },
    {
      id: 3,
      depId: 3,
      name: "Alicia Zelaya",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      jobTitle: "doctor",
      salary: "10000$",
    },
    {
      id: 4,
      depId: 1,
      name: "Jennifer Wallace",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      jobTitle: "doctor",
      salary: "10000$",
    },
    {
      id: 5,
      depId: 3,
      name: "Ramesh Narayan",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      jobTitle: "doctor",
      salary: "10000$",
    },
    {
      id: 6,
      depId: 1,
      name: "Joyce English",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      jobTitle: "doctor",
      salary: "10000$",
    },
  ];
    // const registerStaff = async () => {
  //   try {
  //     const res = await fetch("/api/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newStaff),
  //     });

  //     if (res.ok) {
  //       setShowRegisterForm(false);
  //       setNewStaff({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         address: "",
  //         birthDate: "",
  //         jobTitle: "",
  //         salary: "",
  //       });
  //       fetchStaffs();
  //     }
  //   } catch (error) {
  //     console.error("Failed to register Staff:", error);
  //   }
  // };

  // useEffect(() => {
  //   async function fetchStaff() {
  //     const res = await fetch(
  //       `/api/staff?department=${filters.department}&name=${filters.name}&sortOrder=${filters.sortOrder}`
  //     );
  //     const data = await res.json();
  //     setStaff(data.staff);
  //   }
  //   fetchStaff();
  // }, [filters]);





  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Staff Management</h1>

      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Name"
          className="border p-2 rounded"
          // value={filters.name}
          // onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <select
          // value={filters.department}
          // onChange={(e) =>
          //   setFilters({ ...filters, department: e.target.value })
          // }
          className="border p-2 rounded"
        >
          <option value="">All Departments</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select
          // value={filters.sortOrder}
          // onChange={(e) =>
          //   setFilters({ ...filters, sortOrder: e.target.value })
          // }
          className="border p-2 rounded"
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <button
        onClick={() => setShowRegisterForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Register New Staff
      </button>

      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">DepID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">DOB</th>
            <th className="px-4 py-2">Job Title</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {staffs.length > 0 ? (
            staffs.map((staff) => (
              <tr key={staff.id}>
                <td className="border px-4 py-2">{staff.id}</td>
                <td className="border px-4 py-2">{staff.depId}</td>
                <td className="border px-4 py-2">{staff.name}</td>
                <td className="border px-4 py-2">{staff.email}</td>
                <td className="border px-4 py-2">{staff.phone}</td>
                <td className="border px-4 py-2">{staff.address}</td>
                <td className="border px-4 py-2">{staff.birthDate}</td>
                <td className="border px-4 py-2">{staff.jobTitle}</td>
                <td className="border px-4 py-2">{staff.salary}</td>
                <td className="flex border px-4 py-2">
                  <button
                    className="bg-green-500 text-white p-2 rounded mb-4 mr-2"
                    onClick={() => setShowUpdateForm(true)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-orange-500 text-white p-2 rounded mb-4"
                    onClick={() => setShowSchedule(true)}
                  >
                    Schedule
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No staffs found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal Form for Registering a New Staff */}
      {showRegisterForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Register New Staff</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 mb-2 w-full"
                value={newStaff.name}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-full"
                value={newStaff.email}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 mb-2 w-full"
                value={newStaff.phone}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 mb-2 w-full"
                value={newStaff.address}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, address: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="border p-2 mb-2 w-full"
                value={newStaff.birthDate}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, birthDate: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Job Title"
                className="border p-2 mb-2 w-full"
                value={newStaff.jobTitle}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, jobTitle: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Salary"
                className="border p-2 mb-2 w-full"
                value={newStaff.salary}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, salary: e.target.value })
                }
              />

              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  // onClick={registerStaff}
                >
                  Register
                </button>
                <button
                  type="reset"
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => setShowRegisterForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showUpdateForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Update Staff Information</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 mb-2 w-full"
                // value={newStaff.name}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, name: e.target.value })
                // }
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-full"
                // value={newStaff.email}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, email: e.target.value })
                // }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 mb-2 w-full"
                // value={newStaff.phone}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, phone: e.target.value })
                // }
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 mb-2 w-full"
                // value={newStaff.address}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, address: e.target.value })
                // }
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="border p-2 mb-2 w-full"
                // value={newStaff.birthDate}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, birthDate: e.target.value })
                // }
              />
              <input
                type="text"
                placeholder="Job Title"
                className="border p-2 mb-2 w-full"
                // value={newStaff.jobTitle}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, allergy: e.target.value })
                // }
              />
              <input
                type="text"
                placeholder="Salary"
                className="border p-2 mb-2 w-full"
                // value={newStaff.salary}
                // onChange={(e) =>
                //   setNewStaff({ ...newStaff, allergy: e.target.value })
                // }
              />

              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Update
                </button>
                <button
                  type="reset"
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => setShowUpdateForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
