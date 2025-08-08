"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

export default function AdminPage() {
  const router = useRouter();
  const supabase = createClient();

  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<{
    id: string;
    name: string;
    phone: string;
    bike_model: string;
    service_type: string;
    notes?: string;
    status: string;
    tracking_code: string;
    created_at: string;
    updated_at?: string;
    pickup_datetime?: string;
  }[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const fetchBookings = useCallback(async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching:", error.message);
    } else {
      setBookings(data || []);
    }
  }, [supabase]);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
        fetchBookings();
      }
      setCheckingSession(false);
    };
    checkSession();
  }, [router, supabase, fetchBookings]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);
    if (!error) fetchBookings();
  };

  const deleteBooking = async (id: string) => {
    const { error } = await supabase.from("bookings").delete().eq("id", id);
    if (!error) setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (checkingSession)
    return <div className="p-6 text-center">🔒 Checking login...</div>;
  if (!isAuthenticated) return null;

  const filtered = bookings.filter((b) =>
    b.tracking_code.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / perPage);
  const currentData = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-red-600 mb-2 sm:mb-0">
          🛠️ Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black text-sm"
        >
          🔓 Logout
        </button>
      </header>

      <input
        type="text"
        placeholder="Search by Tracking Code"
        className="w-full px-4 py-2 mb-6 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {currentData.map((b) => {
        const createdAt = dayjs(b.updated_at || b.created_at);
        const canDelete =
          b.status === "work_completed" && dayjs().diff(createdAt, "day") >= 7;

        return (
          <div
            key={b.id}
            className="mb-4 p-4 border rounded-lg shadow bg-white hover:shadow-md transition"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p>
                <strong>👤 Name:</strong> {b.name}
              </p>
              <p>
                <strong>🏍️ Bike:</strong> {b.bike_model}
              </p>
              <p>
                <strong>📞 Phone:</strong> {b.phone}
              </p>
              <p>
                <strong>🛠️ Service:</strong> {b.service_type}
              </p>
              <p>
                <strong>📦 Tracking:</strong>{" "}
                <span className="text-red-600 font-semibold">
                  {b.tracking_code}
                </span>
              </p>
              <p>
                <strong>📅 Updated:</strong> {createdAt.format("DD MMM YYYY")}
              </p>
              {b.pickup_datetime && (
                <p>
                  <strong>🕒 Pickup:</strong> {dayjs(b.pickup_datetime).format("DD MMM YYYY, HH:mm")}
                </p>
              )}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
              <select
                value={b.status}
                onChange={(e) => updateStatus(b.id, e.target.value)}
                className="border px-3 py-2 rounded bg-gray-50 text-sm"
              >
                <option value="pending">🕐 Pending</option>
                <option value="work_started">🔧 Work Started</option>
                <option value="work_completed">✅ Completed</option>
              </select>

              {canDelete && (
                <button
                  onClick={() => deleteBooking(b.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700"
                >
                  🗑️ Delete
                </button>
              )}
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            ← Previous
          </button>
          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
