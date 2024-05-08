"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const Page = () => {
  const { data: session } = useSession();

  const [user, setUser] = useState([]);
  useEffect(() => {
    session && session.user & setUser((session.user));
    console.log(user);
  }, [session]);
  
   return(
    <div>
        {session && session.user ? ( user.name) : ("no user")}
    </div>
   )
};
export default Page;
