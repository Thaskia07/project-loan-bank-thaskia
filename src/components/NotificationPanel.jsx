import React from "react";

function NotificationPanel({ items }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full">
      <h4 className="text-xs font-semibold text-gray-500 tracking-wide mb-3">
        NOTIFICATION
      </h4>
      <hr className="border-gray-200 mb-4" />

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start justify-between border-b border-gray-100 pb-2 last:border-none"
          >
            <div>
              <p className="text-[13px] font-semibold text-gray-800 leading-tight">
                {item.title}
              </p>
              <p className="text-[12px] text-gray-500">
                {item.subtitle}
              </p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-gray-100 text-[11px] text-gray-600 font-medium">
              {item.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationPanel;
