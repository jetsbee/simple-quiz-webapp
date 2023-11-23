"use client";

import { useIdParams } from "@/app/(hooks)/useIdParams";

export default function QuizResult() {
  const id = useIdParams();

  return (
    <main>
      <p>Hello, {id} quiz result!</p>
    </main>
  );
}
