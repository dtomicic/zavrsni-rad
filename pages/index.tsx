import DesktopNavigation from "@/components/Navigation/DesktopNavigation";
import RegistrationPage from "@/components/RegistrationPage";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <>
      <Head>
        <title>Veleri</title>
        <meta name="description" content="Veleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <RegistrationPage
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      /> */}
      <DesktopNavigation />
    </>
  );
}
