"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <button onClick={() => router.push(`/quiz`)}>퀴즈 풀기</button>
      <button onClick={() => router.push(`/reviews`)}>오답 노트</button>
    </main>
  );
}
