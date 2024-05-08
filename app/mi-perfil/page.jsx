"use client";
import { useSession } from "next-auth/react";
const Page = () => {
  const { data: session } = useSession();
  const entries = Object.entries(session?.user) || [];
  
{session && session.user?  (
    <div className="container">
      {entries.map((data,i) => (
        <p key={i}>{data}</p>
      ))}
    </div>
  ):"no user"}
};
export default Page;
