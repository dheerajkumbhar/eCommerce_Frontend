import React from "react";
import { Banner } from "../Components/Page/Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <Banner />
    
        <div className="btn btn-danger form-control text-center text-white h4">
          This is a demo application based on{" "}
          <span className="text-warning"> E-Commerce Website</span>
        </div>
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
