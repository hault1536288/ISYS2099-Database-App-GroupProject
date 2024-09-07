"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import fetchData from "../hooks/fetchData";

export default function StaffList() {
  // const { data, error, loading } = fetchData('apiUrl'); // replace with apiUrl
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);


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

  const staffSchedule = [
    {
      id: 1,
      day: "Mon",
      startTime: "08:30:00",
      endTime: "10:00:00",
    },
    {
      id: 2,
      day: "Mon",
      startTime: "08:30:00",
      endTime: "10:00:00",
    },
    {
      id: 3,
      day: "Mon",
      startTime: "08:30:00",
      endTime: "10:00:00",
    },
    {
      id: 4,
      day: "Mon",
      startTime: "08:30:00",
      endTime: "10:00:00",
    },
  ];

  // if (loading) return <div>Loading...</div>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Staff Management</h1>

      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Name"
          className="border p-2 rounded"
        />
        <select
          className="border p-2 rounded"
        >
          <option value="">All Departments</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select
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
          {staffs.length > 0 ? (         // replace 'staffs' with 'data' when there is apiUrl
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
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Job Title"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Salary"
                className="border p-2 mb-2 w-full"
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
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Job Title"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Salary"
                className="border p-2 mb-2 w-full"
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
      {showSchedule && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Staff Schedule</h2>

            <table className="min-w-full table-auto mb-4">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Day</th>
                  <th className="px-4 py-2 text-left">Start Time</th>
                  <th className="px-4 py-2 text-left">End Time</th>
                </tr>
              </thead>
              <tbody>
                {staffSchedule.map((schedule) => (
                  <tr key={schedule.id}>
                    <td className="border px-4 py-2">{schedule.day}</td>
                    <td className="border px-4 py-2">{schedule.startTime}</td>
                    <td className="border px-4 py-2">{schedule.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded w-full"
              onClick={() => setShowSchedule(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
