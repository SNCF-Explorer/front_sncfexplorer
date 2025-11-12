// src/app/agent/map/page.tsx
"use client"; 

import dynamic from "next/dynamic";

// Import dynamique pour éviter erreur SSR (Leaflet utilise `window`)
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
    ssr: false,
});

export default function AgentMapPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Carte</h1>
            <MapComponent />
        </div>
    );
}
