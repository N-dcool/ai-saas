"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b22366e7-63ba-4596-9d90-b62e13a7ab8f");
  }, []);

  return null;
};
