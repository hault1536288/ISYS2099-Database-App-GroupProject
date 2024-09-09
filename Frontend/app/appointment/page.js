"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Appointment() {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [doctors, setDoctors] = useState([]); // Mocked data will go here
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentID, setAppointmentID] = useState(null);

  // Mock function to simulate fetching data (no actual API call)
  const handleCheckSchedule = async () => {
    if (!appointmentDate || !startTime || !endTime) {
      alert("Please select date, start time, and end time");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/appointment/addAppointment", {
        startDate: createdAt,
        endDate: updatedAt,
        endTime: endTime,
      });
    } catch (error) {
      console.log(error);
    }

    // Simulate doctor data being fetched
    const mockDoctors = [
      {
        id: 1,
        name: "Dr. Smith",
        specialty: "Cardiology",
        scheduleStart: "09:00",
        scheduleEnd: "17:00",
      },
      {
        id: 2,
        name: "Dr. Johnson",
        specialty: "Dermatology",
        scheduleStart: "10:00",
        scheduleEnd: "16:00",
      },
      {
        id: 3,
        name: "Dr. Williams",
        specialty: "Pediatrics",
        scheduleStart: "08:00",
        scheduleEnd: "15:00",
      },
    ];

    // Filtering doctors based on their schedule and chosen time
    const availableDoctors = mockDoctors.filter(
      (doctor) =>
        startTime >= doctor.scheduleStart && endTime <= doctor.scheduleEnd
    );

    setDoctors(availableDoctors); // Update state with the filtered doctors
  };

  // Simulate booking an appointment
  const handleBookAppointment = (doctorId) => {
    const selectedDoctor = doctors.find((doctor) => doctor.id === doctorId);
    setSelectedDoctor(selectedDoctor);
    setAppointmentID(Math.floor(Math.random() * 1000)); // Simulate appointment ID
    alert(`Appointment booked with Dr. ${selectedDoctor.name}`);
  };

  // Simulate canceling an appointment
  const handleCancelAppointment = () => {
    alert(`Appointment with Dr. ${selectedDoctor.name} canceled.`);
    setSelectedDoctor(null);
    setAppointmentID(null);
    setDoctors([]); // Reset doctors list
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Appointment Management</h1>

      {!selectedDoctor ? (
        <>
          {/* Step 1: Select Date and Time */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Choose Date & Time Range
            </h2>

            {/* Appointment Date */}
            <label className="block font-medium text-gray-700 mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />

            {/* Start Time */}
            <label className="block font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />

            {/* End Time */}
            <label className="block font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />

            <button
              className="block w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
              onClick={handleCheckSchedule}
            >
              Check Doctor's Schedule
            </button>
          </div>

          {/* Step 2: Display Available Doctors */}
          {doctors.length > 0 ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Available Doctors</h2>
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white shadow-md p-4 mb-4 rounded-lg"
                >
                  <p>
                    <strong>Name:</strong> Dr. {doctor.name}
                  </p>
                  <p>
                    <strong>Specialty:</strong> {doctor.specialty}
                  </p>
                  <p>
                    <strong>Schedule:</strong> {doctor.scheduleStart} -{" "}
                    {doctor.scheduleEnd}
                  </p>
                  <button
                    className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md"
                    onClick={() => handleBookAppointment(doctor.id)}
                  >
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No available doctors for this time range.</p>
          )}
        </>
      ) : (
        /* Step 3: Show Appointment Details */
        <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
          <h2 className="text-xl font-semibold">Appointment Details</h2>
          <p>
            <strong>Doctor:</strong> Dr. {selectedDoctor.name}
          </p>
          <p>
            <strong>Specialty:</strong> {selectedDoctor.specialty}
          </p>
          <p>
            <strong>Appointment Date:</strong> {appointmentDate}
          </p>
          <p>
            <strong>Start Time:</strong> {startTime}
          </p>
          <p>
            <strong>End Time:</strong> {endTime}
          </p>

          {/* Cancel Appointment */}
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md"
            onClick={handleCancelAppointment}
          >
            Cancel Appointment
          </button>
        </div>
      )}
    </div>
  );
}
