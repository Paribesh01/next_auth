"use client";

import { signIn, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "unauthenticated") {
  //   signIn();
  // }

  return (
    <div>
      <h1>This is the dashboard</h1>
      <div>
        {session ? `Signed in as ${session.user?.email}` : "Not signed in"}
      </div>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
