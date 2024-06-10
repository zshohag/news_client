"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";
import Header from "../Header/Header";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Category",
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <Header />
      <AppBar position="static" >
        <Container maxWidth="xl" className="bg-black text-white">
          <Toolbar disableGutters>
            <Image src={logo} alt="logo" width={100} height={100} />
            <Box className="w-full text-center ">
              {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction="row"
                sx={{
                  " & svg": {
                    color: "white",
                  },
                }}
              >
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
                  <GoogleIcon/>
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
