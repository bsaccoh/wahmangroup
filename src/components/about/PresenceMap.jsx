import { useEffect, useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const locations = [
  { name: 'Freetown, Sierra Leone', lat: 8.484, lng: -13.2299, type: 'HQ' },
  { name: 'Conakry, Guinea', lat: 9.6412, lng: -13.5784, type: 'Office' },
  { name: 'Accra, Ghana', lat: 5.6037, lng: -0.187, type: 'Office' },
  { name: 'Lagos, Nigeria', lat: 6.5244, lng: 3.3792, type: 'Office' },
  { name: 'Dakar, Senegal', lat: 14.7167, lng: -17.4677, type: 'Office' },
  { name: 'Abidjan, Ivory Coast', lat: 5.3600, lng: -4.0083, type: 'Office' },
  { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, type: 'Office' },
  { name: 'London, UK', lat: 51.5074, lng: -0.1278, type: 'Office' },
];

const PresenceMap = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const loadMap = async () => {
      const L = await import('leaflet');
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
      await import('leaflet/dist/leaflet.css');

      // Fix default marker icon issue
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      const MapContent = () => (
        <MapContainer
          center={[10, 5]}
          zoom={3}
          scrollWheelZoom={false}
          className="h-[400px] md:h-[500px] rounded-2xl z-0"
          style={{ background: '#0A1F44' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {locations.map((loc) => (
            <Marker key={loc.name} position={[loc.lat, loc.lng]}>
              <Popup>
                <div className="text-center">
                  <strong className="text-navy">{loc.name}</strong>
                  <br />
                  <span className="text-gold text-xs font-semibold">{loc.type}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      );

      setMapComponent(() => MapContent);
    };

    loadMap();
  }, []);

  return (
    <section className="section-padding bg-grey-light">
      <div className="container-custom">
        <SectionTitle
          subtitle="Global Reach"
          title="Our Presence"
          description="With offices and operations across Africa, Europe, and the Middle East, WAHMAN Group connects continents."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          {MapComponent ? (
            <MapComponent />
          ) : (
            <div className="h-[400px] md:h-[500px] bg-navy/10 rounded-2xl flex items-center justify-center">
              <span className="text-grey-medium">Loading map...</span>
            </div>
          )}
        </motion.div>

        {/* Location list */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="flex items-center gap-2 text-sm text-grey-medium"
            >
              <div className={`w-2 h-2 rounded-full ${loc.type === 'HQ' ? 'bg-gold' : 'bg-navy-light'}`} />
              <span>{loc.name}</span>
              {loc.type === 'HQ' && (
                <span className="text-[10px] text-gold font-bold uppercase">HQ</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresenceMap;
