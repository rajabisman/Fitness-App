import React, { useState } from "react";

function Dashboard() {
  const [sidebarOpen, isSidebarOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Projects", icon: "📁" },
    { name: "Calendar", icon: "📅" },
    { name: "Documents", icon: "📄" },
    { name: "Reports", icon: "📈" },
  ];

  const transitionClasses = "transition-colors duration-500 ease-in-out";

  return (
    <div
      className={`flex bg-gray-100 h-screen ${
        darkMode ? "dark" : ""
      } dark:bg-gray-900 ${transitionClasses}`}
    >
      {/* SideBar */}
      <div
        className={`fixed bg-white w-64 h-screen shadow ${
          sidebarOpen ? "translate-x-0" : "-translate-x-70"
        } lg:translate-x-0 lg:static dark:bg-gray-900 ${transitionClasses}`}
      >
        <div
          className={`flex justify-between p-4 border-b-2 border-gray-900 dark:border-b-4 dark:border-gray-100 ${transitionClasses}`}
        >
          <div className="text-xl font-bold dark:text-gray-100">Logo</div>
          <button
            className={`text-xl font-bold ${
              sidebarOpen ? "translate-x-0" : "-translate-x-70"
            } dark:text-gray-100`}
            onClick={() => isSidebarOpen(false)}
          >
            X
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={`flex hover:bg-gray-100 p-2 rounded ${transitionClasses}`}
            >
              <div className="text-xl">{item.icon}</div>
              <div className="text-xl dark:text-gray-100 dark:hover:text-gray-900">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-center">
          <button
            className={`p-2 text-xl font-bold border-2 rounded dark:text-gray-100 dark:hover:text-gray-900 dark:hover:bg-gray-100 ${transitionClasses}`}
            onClick={() => setdarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* main content */}
      <main className="flex-1">
        <header
          className={`bg-white flex justify-between p-4 dark:bg-gray-900 ${transitionClasses}`}
        >
          <button
            className="p-2 text-xl font-bold lg:hidden dark:text-gray-100"
            onClick={() => isSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold dark:text-gray-100">Dashboard</h1>
          <div className="bg-red-300 w-10 h-10 rounded-full"></div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`bg-white shadow-lg p-6 rounded-lg dark:bg-gray-800 ${transitionClasses}`}
            >
              <h2 className="text-xl font-bold dark:text-gray-100">Heading</h2>
              <p className="text-lg p-1 text-gray-700 dark:text-gray-200">
                These are Cards which will represent stats etc of our user also
                we can manipulate them
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
