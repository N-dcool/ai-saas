"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d8eef9b7-e1b3-486b-b9fd-892b530674a8");
  }, []);

  return null;
};
