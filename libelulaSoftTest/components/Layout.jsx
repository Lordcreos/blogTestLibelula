import React from "react";
import Header from "./Header";
import { getPosts, getPostDetails } from "../services";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;

