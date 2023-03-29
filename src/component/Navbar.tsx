import React, { useEffect } from "react";
import { Collapse } from "flowbite";

const Navbar: React.FC = () => {
  useEffect(() => {
    const targetEl: HTMLElement = document.getElementById(
      "targetEl"
    ) as HTMLElement;
    const triggerEl: HTMLElement = document.getElementById(
      "triggerEl"
    ) as HTMLElement;

    if (targetEl && triggerEl) {
      const collapse = new Collapse(targetEl, triggerEl);
    }
  }, []);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container max-w-[70rem] flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
            🌳 KJW's Portfolio
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            id="triggerEl"
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:ml-[40%] md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white text-lg font-bold bg-green-500 rounded md:hover:text-green-500 md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
