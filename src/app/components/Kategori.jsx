"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Kategori() {
  const [open, setOpen] = useState(false);
  const categories = ["Alle", "Beauty", "Fragrances", "Furniture", "Groceries"];

  return (
    <div className="relative inline-block">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-black px-4 py-2 text-sm font-semibold bg-white hover:bg-black hover:text-white transition"
      >
        <span>Kategori</span>
        <ChevronDownIcon
        className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute left-0 mt-2 w-40 rounded-xl border border-black bg-white shadow-md text-sm ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="py-1">
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white"
                // onClick={() => handleSelect(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
