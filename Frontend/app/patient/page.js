"use client";

import React, { useState, useEffect } from "react";
import "@/app/globals.css";
import fetchData from "../hooks/fetchData";

export default function PatientList() {
  // const { data, error, loading } = fetchData('apiUrl'); // replace with apiUrl
  const [showRegister, setShowRegister] = useState(false);
  const [showTreatment, setShowTreatment] = useState(false);
  

  const patient = [
    {
      id: 1,
      name: "John Smith",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
    {
      id: 2,
      name: "Franklin Wong",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
    {
      id: 3,
      name: "Alicia Zelaya",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
    {
      id: 4,
      name: "Jennifer Wallace",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
    {
      id: 5,
      name: "Ramesh Narayan",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
    {
      id: 6,
      name: "Joyce English",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
    {
      id: 7,
      name: "Ahmad Jabbar",
      email: "12345@example.com",
      phone: "0123456789",
      address: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000",
      birthDate: "2024-09-06",
      allergy: "shrimp",
    },
  ];


  // if (loading) return <div>Loading...</div>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Patient Management</h1>

      {/* Search Section */}
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-3 w-full"
          placeholder="Search by name or ID"
        />
        <button
          className="ml-2 bg-yellow-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Register Patient Button */}
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={() => setShowRegister(true)}
      >
        Register New Patient
      </button>

      {/* Patient Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">DOB</th>
            <th className="px-4 py-2">Allergy</th>
            <th className="px-4 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {patient.length > 0 ? (       // replace 'patient' with 'data' when there is apiUrl
            patient.map((patient) => (
              <tr key={patient.id}>
                <td className="border px-4 py-2">{patient.id}</td>
                <td className="border px-4 py-2">{patient.name}</td>
                <td className="border px-4 py-2">{patient.email}</td>
                <td className="border px-4 py-2">{patient.phone}</td>
                <td className="border px-4 py-2">{patient.address}</td>
                <td className="border px-4 py-2">{patient.birthDate}</td>
                <td className="border px-4 py-2">{patient.allergy}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-green-500 text-white p-2 rounded mb-4"
                    onClick={() => setShowTreatment(true)}
                  >
                    Add treatment
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No patients found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal Form for Registering a New Patient */}
      {showRegister && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Register New Patient</h2>
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
                placeholder="Allergy"
                className="border p-2 mb-2 w-full"
              />

              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  // onClick={registerPatient}
                >
                  Register
                </button>
                <button
                  type="reset"
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => setShowRegister(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showTreatment && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Add Treatment</h2>
            <form>
              <input
                type="text"
                placeholder="Treatment"
                className="h-20 pl-2 text-left placeholder-top-left border rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Add
                </button>
                <button
                  type="reset"
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => setShowTreatment(false)}
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
};
