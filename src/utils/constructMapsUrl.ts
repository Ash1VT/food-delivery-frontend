const constructYandexMapsUrl = (origin: string, destination: string, travelMode: string): string => {
    const yandexMode = travelMode === 'driving' ? 'auto' : 'pedestrian'
    return `https://yandex.com/maps/?rtext=${encodeURIComponent(origin)}~${encodeURIComponent(destination)}&rtt=${yandexMode}`;
}

const constructGoogleMapsUrl = (origin: string, destination: string, travelMode: string): string => {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${travelMode}`;
}


export {
    constructYandexMapsUrl,
    constructGoogleMapsUrl
}