/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../Components/Logo/Logo";
import "./Home.css"
import BottomMenu from "../../Components/BottomMenu/BottomMenu";

export default function Home() {

  return (

    <>
      <main>
        <div>
            <Logo className="logo" alt='logo' width={120} height={80} />
        </div>
        <div>
            <BottomMenu />
        </div>
      </main>
    </>
  );
}