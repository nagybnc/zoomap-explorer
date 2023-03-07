export default function Home() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <div className="mb-8 space-y-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0">
          <div className="col-span-2">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 ">
              ZooMap Explorer - Discover the World Around You
            </h2>
            <p className="text-gray-500 sm:text-xl ">
              ZooMap Explorer is the ultimate app for exploring your
              surroundings and discovering new zoos. With our easy-to-use map
              interface, you can search for locations anywhere in the world and
              add your own favorite spots to the map. Whether {"you're"} a
              seasoned traveler or a local looking to discover hidden gems in
              your own backyard, ZooMap Explorer has something for everyone.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-9xl">🌎</p>
            <p className="text-3xl tracking-widest">🦩🐅🦍🦒🐘🐊</p>
          </div>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <div>
            <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12 ">
              <svg
                className="text-primary-600 h-5 w-5 lg:h-6 lg:w-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold ">Explore the World</h3>
            <p className="text-gray-500 ">
              Our interactive map lets you explore any location in the world
              with ease. Use the search bar to find a specific address or browse
              the map to discover new places.
            </p>
          </div>
          <div>
            <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <svg
                className="text-primary-600 h-5 w-5 lg:h-6 lg:w-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold ">Add Your Own Places</h3>
            <p className="text-gray-500 ">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <svg
                className="text-primary-600 h-5 w-5 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold ">Secure Authentication</h3>
            <p className="text-gray-500 ">
              We take your privacy and security seriously. {"That's"} why we
              offer two-factor authentication and store user credentials
              securely in our MongoDB database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
