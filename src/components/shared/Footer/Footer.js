import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {

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

  return (
    <Box className="bg-black px-2 py-10">
      <Container className="text-white" >
        <Box
          className="w-full text-center"
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
            <GoogleIcon />
          </IconButton>
        </Box>

        <Box className="w-full text-center ">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
          @2024 The News. Design by Z.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
