"use client";

import React, { useState } from "react";
import MicroMotoNavbar from "@/MicroMotoNavbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/superbase";

const TrackBookingPage = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [result, setResult] = useState<{
    id: string;
    name: string;
    phone: string;
    bike_model: string;
    service_type: string;
    notes?: string;
    status: string;
    tracking_code: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("tracking_code", trackingCode.trim().toUpperCase());

    if (error || !data || data.length === 0) {
      setError("❌ No booking found with that tracking code.");
    } else {
      setResult(data[0]);
    }

    setLoading(false);
  };

  return (
    <>
      <MicroMotoNavbar />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4">
          Track Your Bike Service
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your tracking code to check service progress. Booking through
          the website? Enjoy a{" "}
          <span className="font-semibold text-green-600">10% Discount!</span>
        </p>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Tracking Code (e.g. MMG1234)"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="flex-1 px-4 py-2 border rounded shadow"
          />
          <button
            onClick={handleSearch}
            disabled={loading || !trackingCode}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            style={{backgroundColor: '#dc2626 !important', color: '#ffffff !important'}}
          >
            {loading ? "Checking..." : "Track"}
          </button>
        </div>

        {error && (
          <p className="text-red-600 text-center font-medium mb-4">{error}</p>
        )}

        {result && (
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Booking Info
            </h2>
            <ul className="space-y-1 text-gray-700">
              <li>
                <strong>Name:</strong> {result.name}
              </li>
              <li>
                <strong>Phone:</strong> {result.phone}
              </li>
              <li>
                <strong>Bike:</strong> {result.bike_model}
              </li>
              <li>
                <strong>Service:</strong> {result.service_type}
              </li>
              <li>
                <strong>Status:</strong>{" "}
                <span className="text-blue-600 font-medium">
                  {result.status}
                </span>
              </li>
              {result.notes && (
                <li>
                  <strong>Notes:</strong> {result.notes}
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="tel:+9609996210"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 text-lg"
            style={{backgroundColor: '#dc2626 !important', color: '#ffffff !important'}}
          >
            📞 Urgent Help? Call 9996210
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrackBookingPage;
