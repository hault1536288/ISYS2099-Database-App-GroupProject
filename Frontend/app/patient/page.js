"use client";

import React, { useState, useEffect } from "react";
import "@/app/globals.css";
import fetchData from "../hooks/fetchData";

export default function PatientList() {
  const { data, error, loading } = fetchData(
    // replace with apiUrl
    "http://localhost:3030/api/patient/getPatients"
  );
  const [patient, setPatient] = useState([]);
  const [load, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showTreatment, setShowTreatment] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    allergy: "",
  });

  useEffect(() => {
    if (data) {
      setPatient(data);
    }
  }, [data]);

  useEffect(() => {
    // Fetch patient data based on search input
    if (search.trim()) {
      handleSearch(search);
    } else {
      // If search is empty, set patient to initial data
      if (data) {
        setPatient(data);
      }
    }
  }, [search]);

  const addPatient = async () => {
    try {
      const res = await fetch("http://localhost:3030/api/patient/addPatient", {
        // replace the apiUrl
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (res.ok) {
        setShowRegister(false);
        setNewPatient({
          name: "",
          email: "",
          phone: "",
          address: "",
          birthDate: "",
          allergy: "",
        });
      }
    } catch (error) {
      console.error("Failed to register patient:", error);
    }
  };

  const handleSearch = async (search = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3030/api/patient/getPatient/${search}`
      );
      const data = await res.json();
      console.log(data);
      setPatient(data || []);
      setLoading(false);
      setSearchResult(true);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Patient Management</h1>

      {/* Search Section */}
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-3 w-full"
          placeholder="Search by name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="ml-2 bg-yellow-500 text-white p-2 rounded"
          onClick={() => handleSearch(search)}
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
          {patient.length > 0 ? ( // replace 'patient' with 'data' when there is apiUrl
            patient.map((patient) => (
              <tr key={patient.patientID}>
                <td className="border px-4 py-2">{patient.patientID}</td>
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
                value={newPatient.name}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-full"
                value={newPatient.email}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 mb-2 w-full"
                value={newPatient.phone}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 mb-2 w-full"
                value={newPatient.address}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, address: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="border p-2 mb-2 w-full"
                value={newPatient.birthDate}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, birthDate: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Allergy"
                className="border p-2 mb-2 w-full"
                value={newPatient.allergy}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, allergy: e.target.value })
                }
              />

              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={addPatient}
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
                <button className="bg-blue-500 text-white p-2 rounded">
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
}
