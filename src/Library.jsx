import React from "react";
import { useDataContext } from "./DataContext";
import Li from "./components/Li";
import { Link } from "react-router-dom";
const Library = () => {
  const { authors, books } = useDataContext();
  return (
    <div className="mt-20 flex justify-around">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Books Registered
        </h5>

        <ul class="my-4 space-y-3">
          {books.map((ele) => (
            <Li ele={ele} />
          ))}
        </ul>
        <div>
          <Link
            to="/books"
            class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              class="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Navigate to books page to Edit or view more info.
          </Link>
        </div>
      </div>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Authors Registered
        </h5>

        <ul class="my-4 space-y-3">
          {authors.map((ele) => (
            <Li ele={ele} />
          ))}
        </ul>
        <div>
          <Link
            to="/authors"
            class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              class="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Navigate to Authors page to Edit or view more info.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Library;
