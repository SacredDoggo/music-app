"use client";

import { useState, useEffect } from "react";

import { UserProfileModal } from "@/components/modals/user-profile-modal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <>
      <UserProfileModal />
    </>
  );
};

export default ModalProvider;