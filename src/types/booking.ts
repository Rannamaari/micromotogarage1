export interface BookingFormData {
  name: string;
  phone: string;
  bike_model: string;
  service_type: string;
  notes: string;
  pickup_datetime: string; // ISO string for datetime-local input
  pickup_address: string;
  pickup_lat: number | null;
  pickup_lng: number | null;
  pickup_place_id: string;
}

export interface BookingSubmissionData {
  name: string;
  phone: string;
  bike_model: string;
  service_type: string;
  notes: string;
  tracking_code: string;
  status: string;
  pickup_datetime: string; // UTC ISO string
  pickup_address: string;
  pickup_lat: number;
  pickup_lng: number;
  pickup_place_id: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  bike_model?: string;
  service_type?: string;
  pickup_datetime?: string;
  pickup_address?: string;
  general?: string;
}

export interface PlaceDetails {
  formatted_address: string;
  place_id: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}