import React from "react";


function App() {
  return (
    <div className="bg-daycareBlue min-h-screen flex flex-col items-center">
      <header className="bg-daycareYellow w-full p-4 shadow-md text-center">
        <h1 className="text-3xl font-playful text-daycarePink">
          Welcome to Happy Kids Daycare
        </h1>
      </header>
      <main className="flex flex-col items-center mt-10 space-y-6">
        <div className="bg-daycareGreen p-6 rounded-xl shadow-lg max-w-lg">
          <h2 className="text-xl font-bold text-daycareBlue">Our Services</h2>
          <p className="mt-2 text-daycarePink">
            We provide a safe, nurturing environment for children to learn,
            grow, and play.
          </p>
        </div>
        <div className="bg-daycarePink p-6 rounded-xl shadow-lg max-w-lg">
          <h2 className="text-xl font-bold text-daycareYellow">Activities</h2>
          <ul className="mt-2 list-disc list-inside text-daycareBlue">
            <li>Storytime</li>
            <li>Outdoor Play</li>
            <li>Arts & Crafts</li>
            <li>Music & Dance</li>
          </ul>
        </div>
      </main>
      <footer className="bg-daycareGreen w-full py-4 text-center mt-auto">
        <p className="text-daycareBlue font-playful">
          Contact us: 555-555-5555
        </p>
      </footer>
    </div>
  );
}

export default App;
