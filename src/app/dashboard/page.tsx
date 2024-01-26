"use client";

import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`api/user/${userEmail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, [userEmail]);

  if (!user) {
    return <p>Loading...</p>;
  }

  console.log(user);

  return (
    <div>
      <h1>Dashboard {user.name}</h1>
    </div>
  );
}
