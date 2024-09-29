"use client";

import { FaShoppingBag, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/app/(auth)/components/login-button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <FaShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
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
