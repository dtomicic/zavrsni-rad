import FormInput from "@/components/FormInput";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LoginStyled } from "./style";

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
      <LoginStyled>
        <Image
          src="/images/logo.png"
          alt="Veleri Logo"
          width={292}
          height={74}
        />
        <form>
          <div className="input-container">
            <FormInput
              label={"Email"}
              value={email}
              placeholder={"Unesite email adresu"}
              type={"email"}
              onChange={handleEmailChange}
              errorMessage={""}
            />
            <FormInput
              label={"Lozinka"}
              value={password}
              placeholder={"Unesite lozinku"}
              type={"password"}
              onChange={handlePasswordChange}
              errorMessage={""}
            />
          </div>
          <p>
            Nemate račun?{" "}
            <Link href="/">
              <b>Registrirajte se</b>
            </Link>
          </p>
          <button type="submit">Prijava</button>
        </form>
      </LoginStyled>
    </>
  );
}
