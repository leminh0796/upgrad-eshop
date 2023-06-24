import AppBar from "@mui/material/AppBar";
import Search from "common/components/search/Search";
import Logo from "common/components/logo/Logo";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          paddingY: "10px",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Search />
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </Box>
      </Container>
    </AppBar>
  );
}
