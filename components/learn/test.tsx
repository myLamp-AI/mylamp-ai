"use client"

import React from "react";
import { Button } from "@nextui-org/react";
import { useModalStore } from "./store02";

const OpenModalButton: React.FC = () => {
  const { openModal } = useModalStore();

  return (
    <Button onPress={openModal}>Open Modal</Button>
  );
};

export default OpenModalButton;
