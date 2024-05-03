import React from "react";

function Navbar() {
  return (
    <nav className="bg-black">
      <div className="px-20  text-white p-5 flex justify-between">
        <div className="rounded-md hover:text-green-500 py-2 px-3 font-medium">
          LOKHANDECODER
        </div>
        <div className="flex space-x-4 ">
          <a className="rounded-md hover:text-green-500 py-2 px-3 font-medium">
            SKILLS
          </a>
          <a className="rounded-md hover:text-green-500 py-2 px-3 font-medium">
            PROJECTS
          </a>
          <a className="rounded-md hover:text-green-500 py-2 px-3 font-medium">
            EXPERIENCE
          </a>
          <a className="rounded-md hover:text-green-500 py-2 px-3 font-medium">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
