"use client";

import { FaShoppingBag, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <FaShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
      <LoginButton asChild>
        <Button className="flex items-center gap-x-2 rounded-full bg-black px-4 py-2">
          <FaUser
            size={20}
            color="white"
          />
          Zaloguj się
        </Button>
      </LoginButton>
    </div>
  );
};

export default NavbarActions;
