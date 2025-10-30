import React from "react";

function NotificationPanel({ items }) {
  return (
    <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm border border-gray-200 w-full max-w-md md:max-w-full">
      <h4 className="text-xs md:text-sm font-semibold text-gray-500 tracking-wide mb-3">
        NOTIFICATION
      </h4>
      <hr className="border-gray-200 mb-4" />

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-gray-100 pb-2 last:border-none"
          >
            <div className="sm:mr-4">
              <p className="text-[13px] md:text-sm font-semibold text-gray-800 leading-tight">
                {item.title}
              </p>
              <p className="text-[12px] md:text-[13px] text-gray-500 mt-1">
                {item.subtitle}
              </p>
            </div>

            <div className="mt-2 sm:mt-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-gray-100 text-[11px] md:text-xs text-gray-600 font-medium">
              {item.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationPanel;
