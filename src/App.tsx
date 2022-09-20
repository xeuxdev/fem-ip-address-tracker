import { useState } from "react"
import IpInfo from "./IpInfo"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

type Data = {
  location: {
    city: string
    country: string
    timezone: string
  }
  isp: string
}

function App() {
  const [ipAddess, setIpAddess] = useState<string | number>()
  const [location, setLocation] = useState<number[]>([])
  const [timeZone, setTimeZone] = useState()

  const handleSubmit = () => {
    console.log("first")
  }

  return (
    <main className="w-full h-full relative before:absolute before:top-0 before:left-0 before:h-[18.75rem] lg:h-[17.5rem] before:w-screen before:bg-[url('/images/pattern-bg.png')] before:bg-no-repeat before:bg-cover before:bg-center before:z-[999]">
      <div className="container md:pt-8 px-6 md:px-10 lg:px-12 xl:px-0 relative">
        <header className="py-7 text-center relative z-[999]">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
            IP Address Tracker
          </h1>
        </header>

        <section className="input relative z-[999]">
          <h2 className="sr-only">Search for any IP address or domain </h2>
          <div className="w-full h-14 rounded-2xl relative overflow-hidden mb-6 md:mb-10 max-w-[34.6875rem] mx-auto border-none">
            <input
              type="text"
              name="ip"
              className=" w-full h-full outline none px-5 font-medium placeholder:text-darkGray text-veryDarkGray text-lg placeholder:text-sm md:placeholder:text-base placeholder:font-normal"
              placeholder="Search for any IP address or domain "
              aria-label="Search for any IP address or domain "
              value={ipAddess}
              onChange={(e) => setIpAddess(e.target.value)}
            />
            <button
              className="absolute top-0 right-0 w-[3.625rem] h-full bg-veryDarkGray grid place-items-center hover:bg-veryDarkGray/[0.85] cursor-pointer border-none outline-none"
              aria-label="click to track ip provided"
              onClick={() => handleSubmit()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="ip-info absolute left-1/2 -translate-x-1/2 z-[999]">
          <h3 className="sr-only">
            information about the IP Address you provided
          </h3>
          <IpInfo />
        </section>
      </div>

      <MapContainer
        center={[37.40599, -122.078514]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.40599, -122.078514]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  )
}

export default App
