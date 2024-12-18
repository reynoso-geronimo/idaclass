"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import GoogleIcon from "../../public/assets/google-icon.svg";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./_components/registerForm";
import LoginForm from "./_components/loginForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const {data: session} = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  useEffect(() => {
    //console.log(callbackUrl)
    if(session) {
      router.push('/');
    }
  }, [session]);
  return (
    <main className="min-h-[645px] bg-neutral-950 relative flex flex-1 flex-col justify-start py-12">
      <div className="container py-4 flex flex-col border-2 border-idaclass3 space-y-2 bg-gray-100 rounded-lg shadow-lg z-10 w-[28rem] max-w-[90vw]">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className={"rounded-l-3xl"}>Ingresar</TabsTrigger>
            <TabsTrigger value="registro" className={"rounded-r-3xl"}>Crear cuenta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="registro">
            <RegisterForm />
          </TabsContent>
        </Tabs>
        <Separator />
        <Button
          onClick={() =>
            signIn("google", { callbackUrl:callbackUrl })
          }
          className="w-full bg-slate-600 rounded-3xl"
        >
          <Image
            src={GoogleIcon}
            alt="google"
            style={{
              width: "auto",
              height: "100%",
              marginRight: "0.2rem",
            }}
          />
          Ingresar con Google
        </Button>
      </div>
      <BackgroundBeams />
    </main>
  );
}
