"use client";

import React, { useState, useEffect, useRef } from 'react';
import { createClient } from '@/lib/supabaseClient';
import { loadGoogleMapsScript, getMaleBounds, getMaleCenter, isWithinMaleBounds } from '@/lib/googleMaps';
import { BookingFormData, FormErrors, PlaceDetails } from '@/types/booking';
import { FaMapMarkerAlt, FaClock, FaSpinner } from 'react-icons/fa';

const generateTrackingCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'MMG';
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    bike_model: '',
    service_type: '',
    notes: '',
    pickup_datetime: '',
    pickup_address: '',
    pickup_lat: null,
    pickup_lng: null,
    pickup_place_id: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [mapsLoaded, setMapsLoaded] = useState(false);

  // Refs for Google Maps
  const mapRef = useRef<HTMLDivElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set minimum datetime to now
  useEffect(() => {
    const now = new Date();
    const minDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
    
    if (inputRef.current) {
      const datetimeInput = document.querySelector('input[type="datetime-local"]') as HTMLInputElement;
      if (datetimeInput) {
        datetimeInput.min = minDateTime;
      }
    }
  }, []);

  // Load Google Maps
  useEffect(() => {
    const initMaps = async () => {
      try {
        await loadGoogleMapsScript();
        setMapsLoaded(true);
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
        setErrors(prev => ({
          ...prev,
          general: 'Failed to load maps. Please refresh the page.',
        }));
      }
    };

    initMaps();
  }, []);

  // Initialize map and autocomplete after Maps API loads
  useEffect(() => {
    if (!mapsLoaded || !mapRef.current || !inputRef.current) return;

    try {
      const bounds = getMaleBounds();
      const center = getMaleCenter();

      // Initialize map
      const map = new google.maps.Map(mapRef.current, {
        zoom: 13,
        center: center,
        restriction: {
          latLngBounds: bounds,
          strictBounds: true,
        },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      mapInstanceRef.current = map;

      // Initialize autocomplete
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        bounds: bounds,
        strictBounds: true,
        componentRestrictions: { country: 'mv' },
        fields: ['formatted_address', 'place_id', 'geometry'],
      });

      autocompleteRef.current = autocomplete;

      // Handle place selection
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace() as PlaceDetails;

        if (!place.geometry?.location) {
          setErrors(prev => ({
            ...prev,
            pickup_address: 'Please select a valid location from the suggestions.',
          }));
          return;
        }

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        // Validate location is within bounds
        if (!isWithinMaleBounds(lat, lng)) {
          setErrors(prev => ({
            ...prev,
            pickup_address: 'Please select a location within Malé, Hulhumalé, or Vilimalé area.',
          }));
          return;
        }

        // Clear address error
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.pickup_address;
          return newErrors;
        });

        // Update form data
        setFormData(prev => ({
          ...prev,
          pickup_address: place.formatted_address,
          pickup_lat: lat,
          pickup_lng: lng,
          pickup_place_id: place.place_id,
        }));

        // Update map marker
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: place.formatted_address,
        });

        markerRef.current = marker;
        map.panTo({ lat, lng });
      });

    } catch (error) {
      console.error('Error initializing maps:', error);
      setErrors(prev => ({
        ...prev,
        general: 'Failed to initialize maps. Please refresh the page.',
      }));
    }
  }, [mapsLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Phone validation - only allow digits
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only digits';
    }

    if (!formData.bike_model.trim()) {
      newErrors.bike_model = 'Bike model is required';
    }

    if (!formData.service_type) {
      newErrors.service_type = 'Service type is required';
    }

    if (!formData.pickup_datetime) {
      newErrors.pickup_datetime = 'Pickup date and time is required';
    } else {
      // Validate pickup datetime is in the future
      const now = new Date();
      const pickupDate = new Date(formData.pickup_datetime);
      
      if (pickupDate <= now) {
        newErrors.pickup_datetime = 'Pickup date and time must be in the future';
      }
    }

    if (!formData.pickup_address.trim()) {
      newErrors.pickup_address = 'Pickup location is required';
    } else if (formData.pickup_lat === null || formData.pickup_lng === null) {
      newErrors.pickup_address = 'Please select a location from the map suggestions';
    } else if (!isWithinMaleBounds(formData.pickup_lat, formData.pickup_lng)) {
      newErrors.pickup_address = 'Location must be within Malé, Hulhumalé, or Vilimalé area';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const supabase = createClient();
      const trackingCode = generateTrackingCode();

      // Convert local datetime to UTC
      const pickupDateUTC = new Date(formData.pickup_datetime).toISOString();

      const bookingData = {
        name: formData.name,
        phone: formData.phone,
        bike_model: formData.bike_model,
        service_type: formData.service_type,
        notes: formData.notes,
        tracking_code: trackingCode,
        status: 'pending',
        pickup_datetime: pickupDateUTC,
        pickup_address: formData.pickup_address,
        pickup_lat: formData.pickup_lat!,
        pickup_lng: formData.pickup_lng!,
        pickup_place_id: formData.pickup_place_id,
      };

      const { error } = await supabase
        .from('bookings')
        .insert([bookingData]);

      if (error) {
        console.error('Supabase error:', error);
        setErrors({ general: 'Failed to submit booking. Please try again.' });
        return;
      }

      // Success
      setTrackingCode(trackingCode);
      setIsSubmitted(true);

    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="text-green-600 text-6xl mb-4">✅</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Booking Confirmed!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your service has been scheduled successfully.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <p className="text-gray-700 mb-2">Your tracking code:</p>
          <p className="text-3xl font-bold text-green-600">{trackingCode}</p>
          <p className="text-sm text-gray-600 mt-2">
            Save this code to track your service status
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              bike_model: '',
              service_type: '',
              notes: '',
              pickup_datetime: '',
              pickup_address: '',
              pickup_lat: null,
              pickup_lng: null,
              pickup_place_id: '',
            });
            setTrackingCode('');
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Book Another Service
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Book Your Service
        </h2>
        <p className="text-gray-600">
          Schedule a pickup for your motorcycle service
        </p>
      </div>

      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {errors.general}
        </div>
      )}

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your contact number (digits only)"
            pattern="[0-9]*"
            inputMode="numeric"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Bike Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Bike Model & Number *
          </label>
          <input
            type="text"
            name="bike_model"
            value={formData.bike_model}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              errors.bike_model ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Honda CBR 150R - A12345"
          />
          {errors.bike_model && <p className="text-red-500 text-sm mt-1">{errors.bike_model}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Service Type *
          </label>
          <select
            name="service_type"
            value={formData.service_type}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              errors.service_type ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Service Type</option>
            <option value="Full Service">Full Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Brake Repair">Brake Repair</option>
            <option value="Chain & Bearing">Chain & Bearing</option>
            <option value="Complete Overhaul">Complete Overhaul</option>
            <option value="Custom Work">Custom Work</option>
          </select>
          {errors.service_type && <p className="text-red-500 text-sm mt-1">{errors.service_type}</p>}
        </div>
      </div>

      {/* Pickup Date/Time */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          <FaClock className="inline mr-2" />
          Pickup Date & Time *
        </label>
        <input
          type="datetime-local"
          name="pickup_datetime"
          value={formData.pickup_datetime}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
            errors.pickup_datetime ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.pickup_datetime && <p className="text-red-500 text-sm mt-1">{errors.pickup_datetime}</p>}
      </div>

      {/* Pickup Location */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          <FaMapMarkerAlt className="inline mr-2" />
          Pickup Location *
        </label>
        <input
          ref={inputRef}
          type="text"
          name="pickup_address"
          value={formData.pickup_address}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
            errors.pickup_address ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Search for your location in Malé, Hulhumalé, or Vilimalé"
        />
        {errors.pickup_address && <p className="text-red-500 text-sm mt-1">{errors.pickup_address}</p>}
        
        {/* Map */}
        <div 
          ref={mapRef} 
          className="w-full h-64 mt-4 border rounded-lg"
          style={{ minHeight: '256px' }}
        >
          {!mapsLoaded && (
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <FaSpinner className="animate-spin text-2xl text-gray-400 mb-2" />
                <p className="text-gray-500">Loading map...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Additional Notes
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          placeholder="Any specific requirements or issues..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <FaSpinner className="animate-spin" />
            Submitting...
          </>
        ) : (
          'Book Service'
        )}
      </button>
    </form>
  );
};

export default BookingForm;