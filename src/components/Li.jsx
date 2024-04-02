import React from "react";

const Li = ({ ele }) => {
  return (
    <li>
      <div class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <span class="flex-1 ms-3 whitespace-nowrap">
          {ele.name ? ele.name : ele.title}
        </span>
      </div>
    </li>
  );
};

export default Li;
