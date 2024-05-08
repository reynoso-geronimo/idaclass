"use client";
import { useSession } from "next-auth/react";
const Page = () => {
  const { data: session } = useSession();
  const entries = Object.entries(session.user);
  console.log(session.user);
  return (
    <div className="container">
      {entries.map((data,i) => (
        <p key={i}>{data}</p>
      ))}
    </div>
  );
};
export default Page;
