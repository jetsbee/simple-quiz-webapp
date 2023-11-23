"use client";

import { useIdParams } from "@/app/(hooks)/useIdParams";

export default function ReviewList() {
  const id = useIdParams();

  return (
    <main>
      {id === null ? <p>Hello, review list!</p> : <p>Hello, {id} reviews!</p>}
    </main>
  );
}
