import AdminDashboard from "@/components/AdminDashboard";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import React from "react";
import { MainContentStyled } from "./style";

export default function Home() {
  return (
    <>
      <Head>
        <title>Veleri</title>
        <meta name="description" content="Veleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContentStyled>
        <Navigation />
        <AdminDashboard />
      </MainContentStyled>
    </>
  );
}
