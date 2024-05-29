"use client";

import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <>
    </>
  );
};

export default ModalProvider;