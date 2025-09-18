"use server";

import { cookies } from "next/headers";

export async function login(email: string, password: string) {
  const res = await fetch(`${process.env.NEST_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();

  (await cookies()).set("token", data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // يوم
    path: "/",
  });

  return data.user;
}

export async function logout() {
  (await cookies()).delete("token");
}
