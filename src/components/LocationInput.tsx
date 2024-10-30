import React, { useState, useCallback } from 'react';
// import Search from '../../icons/Search';

interface LocationInputProps {
    value: string;
    onChange: (value: string) => void;
}

interface SearchResult {
    display_name: string;
    lat: string;
    lon: string;
    address: {
        city?: string;
        street?: string;
        country?: string;
        postcode?: string;
    };
}

interface LocationData {
    address: {
        city: string;
        street: string;
        country: string;
        postcode: string;
    };
    coordinates: {
        lat: number;
        lon: number;
    };
}

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<SearchResult | null>(null);

    const searchLocation = useCallback(async (query: string) => {
        if (query.length < 3) {
            setSearchResults([]);
            return;
        }

        setIsSearching(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1`
            );
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching location:', error);
        } finally {
            setIsSearching(false);
        }
    }, []);

    // In LocationInput.tsx
    const handleSelectLocation = useCallback((location: SearchResult) => {
        setSelectedLocation(location);
        setSearchResults([]);
        setSearchQuery(location.display_name);

        // Format the location data according to your interface
        const locationData = {
            display_name: location.display_name, // Add this
            address: {
                city: location.address?.city || '',
                street: location.address?.street || '',
                country: location.address?.country || '',
                postcode: location.address?.postcode || ''
            },
            coordinates: {
                lat: parseFloat(location.lat),
                lon: parseFloat(location.lon)
            }
        };

        onChange(JSON.stringify(locationData));
    }, [onChange]);

    // Initialize searchQuery from value prop if it exists
    React.useEffect(() => {
        if (value) {
            try {
                const locationData = JSON.parse(value);
                if (locationData.address) {
                    const displayAddress = [
                        locationData.display_name
                    ].filter(Boolean).join(', ');
                    setSearchQuery(displayAddress);
                }
            } catch (e) {
                console.error('Error parsing location value:', e);
            }
        }
    }, [value]);

    return (
        <div className="relative w-full">
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        searchLocation(e.target.value);
                    }}
                    placeholder="Search location..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 pr-10"
                />
                {/* <Search className="absolute right-3 top-2.5 text-gray-400" size={20} /> */}
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {searchResults.map((result, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectLocation(result)}
                            className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                            {result.display_name}
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Location Display */}
            {selectedLocation && (
                <div className="mt-2 p-5 bg-white shadow-md rounded-lg text-sm">
                    <p className="font-medium">Selected Location:</p>
                    <p>{selectedLocation.display_name}</p>
                    {/* <p className="text-gray-600">
                        Coordinates: {selectedLocation.lat}, {selectedLocation.lon}
                    </p> */}
                    {selectedLocation.address && (
                        <div className="mt-1 text-gray-600">
                            <p>City: {selectedLocation.address.city || 'N/A'}</p>
                            <p>Street: {selectedLocation.address.street || 'N/A'}</p>
                            <p>Country: {selectedLocation.address.country || 'N/A'}</p>
                            {/* <p>Postcode: {selectedLocation.address.postcode || 'N/A'}</p> */}
                        </div>
                    )}
                </div>
            )}

            {isSearching && (
                <div className="text-sm text-gray-500 mt-2">Searching...</div>
            )}
        </div>
    );
};

export default LocationInput;