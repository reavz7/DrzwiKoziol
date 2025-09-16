import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Phone, Mail, Clock, MapPin, Building } from "lucide-react"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

const Kontakt = () => {
  const cities = [
    {
      name: "Zakład produkcyjny",
      position: [51.406358, 19.569085],
      info: "To tutaj tworzy się magia",
    },
    {
      name: "Metalbud",
      position: [51.367500, 19.364500],
      info: "Sklep chyba nie wiem trzeba ogarnac",
    },
    {
      name: "Gazomska 1",
      position: [51.49849064574744, 19.71078042749291],
      info: "cos nowego co mialo byc",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
  

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Masz pytania odnośnie naszych produktów?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Znamy najnowsze trendy, doskonale rozumiemy potrzeby naszych klientów. Nasi eksperci czekają na Twój
                telefon, gotowi pomóc w dokonaniu najlepszego wyboru.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                  <p className="text-gray-600">gomulinska sigmoza 21B 97-371</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Zadzwoń do nas</h3>
                  <p className="text-gray-600">+48 123 456 789</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Napisz do nas</h3>
                  <p className="text-gray-600">kontakt@drzwikoziol.pl</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Godziny pracy</h3>
                  <p className="text-gray-600">
                    Poniedziałek - piątek: 6:00 - 15:00
                    <br />
                    Sobota: 8:00 - 12:00
                  </p>
                </div>
              </div>

              {/* Company Info */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dane firmowe</h3>
                  <p className="text-gray-600">
                    NIP 799-191-20-29
                    <br />
                    Regon 140460368
                  </p>
                </div>
              </div>
            </div>

          
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nasze lokalizacje</h2>
              <p className="text-lg text-gray-600">
                Obsługujemy klientów w całej Polsce. Sprawdź nasze główne lokalizacje.
              </p>
            </div>

            {/* Map Container */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden ">
              <div className="h-96 w-full">
                <MapContainer
                  center={[52.0, 19.0]}
                  zoom={6}
                  style={{ height: "100%", width: "100%" }}
                  className="rounded-xl"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {cities.map((city, index) => (
                    <Marker key={index} position={city.position}>
                      <Popup>
                        <div className="text-center">
                          <h3 className="font-semibold text-gray-900">{city.name}</h3>
                          <p className="text-gray-600 text-sm">{city.info}</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>

            {/* Cities List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-sm text-gray-600">{city.info}</p>
                </div>
              ))}
            </div>
              {/* CTA Section */}
            <div className="bg-gray-900 rounded-2xl p-4 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">Chcesz złożyć zamówienie?</h3>
              <p className="text-gray-300 mb-6 text-center">Skontaktuj się z nami już dziś i otrzymaj bezpłatną wycenę</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+48123456789"
                  className="inline-flex items-center justify-center px-6 py-3 text-[14px] bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 " />
                  Zadzwoń: 787 652 240
                </a>
                <a
                  href="kontakt@drzwikoziol.pl"
                  className="inline-flex items-center text-[14px] justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-mail: kontakt@drzwikoziol.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt
