import { FilterList } from "@material-ui/icons";
import React from "react";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import Logo from "../../Components/Logo/Logo";
import "./Home.css";

export default function Home() {

  return (
    <main>
      <div>
        <Logo className="logo" alt='logo' width={120} height={80} />
        <FilterList to='/Filter' />
      </div>
      <div>
        <BottomMenu />
      </div>
    </main>
  );
}