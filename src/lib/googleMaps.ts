// Google Maps API loader with callback support
declare global {
  interface Window {
    google: typeof google;
    initMap?: () => void;
  }
}

let isLoaded = false;
let isLoading = false;
const loadPromises: Array<(value: void) => void> = [];

export const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (isLoaded && window.google?.maps) {
      resolve();
      return;
    }

    // If currently loading, add to queue
    if (isLoading) {
      loadPromises.push(resolve);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      reject(new Error('Google Maps API key not found. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'));
      return;
    }

    isLoading = true;

    // Create callback function
    window.initMap = () => {
      isLoaded = true;
      isLoading = false;
      
      // Resolve current promise
      resolve();
      
      // Resolve all queued promises
      loadPromises.forEach(resolvePromise => resolvePromise());
      loadPromises.length = 0;
    };

    // Create script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    script.onerror = () => {
      isLoading = false;
      reject(new Error('Failed to load Google Maps script'));
    };

    document.head.appendChild(script);
  });
};

// Malé area bounds for restricting search and map
export const MALE_BOUNDS = {
  south: 4.150,
  west: 73.455,
  north: 4.235,
  east: 73.560,
};

export const getMaleBounds = () => {
  if (!window.google?.maps) {
    throw new Error('Google Maps not loaded');
  }
  
  return new window.google.maps.LatLngBounds(
    new window.google.maps.LatLng(MALE_BOUNDS.south, MALE_BOUNDS.west),
    new window.google.maps.LatLng(MALE_BOUNDS.north, MALE_BOUNDS.east)
  );
};

export const getMaleCenter = () => {
  if (!window.google?.maps) {
    throw new Error('Google Maps not loaded');
  }
  
  return new window.google.maps.LatLng(
    (MALE_BOUNDS.south + MALE_BOUNDS.north) / 2,
    (MALE_BOUNDS.west + MALE_BOUNDS.east) / 2
  );
};

// Check if coordinates are within Malé bounds
export const isWithinMaleBounds = (lat: number, lng: number): boolean => {
  return (
    lat >= MALE_BOUNDS.south &&
    lat <= MALE_BOUNDS.north &&
    lng >= MALE_BOUNDS.west &&
    lng <= MALE_BOUNDS.east
  );
};