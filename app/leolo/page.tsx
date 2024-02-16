"use client";

import { create } from "@/actions/user";

export default function Wurster() {
  return (
    <>
      <h1>Leolo</h1>
      <button
        onClick={() => {
          create();
        }}
      >
        Wurster Ass
      </button>
    </>
  );
}
