import React from "react";
import useAuthentication from "./hooks/useAuthentication";

const AccountMenu = () => {
  const { logout } = useAuthentication();

  return (
    <div className="absolute bg-white text-black p-2 rounded-xl top-12 right-20 px-5 flex flex-col gap-3 justify-center items-center">
      <div className="text-sm">My Account</div>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-5 py-1 rounded-md text-xs"
      >
        Log Out
      </button>
    </div>
  );
};

export default AccountMenu;
