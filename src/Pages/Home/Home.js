import { FilterList } from '@material-ui/icons';
import Links from "../../Components/Link/Link";

import React from "react";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import Logo from "../../Components/Logo/Logo";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className='escopo'>
        <Logo className="logo" alt='logo' width={120} height={80} />
        <div>
          <p className='icon'>
            <Links to='/Filtro' className="link">
              <FilterList />
            </Links>
          </p>
        </div>
      </div>
      <div>
        <BottomMenu />
      </div>
    </main>
  );
}

export default Home;