import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Search from "common/components/search/Search";
import Logo from "common/components/logo/Logo";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AuthCtx } from "common/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./NavigationBar.css";

export default function NavigationBar() {
  const { user, logOut } = useContext(AuthCtx);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    logOut();
    toast.success("Logout successfully");
    navigate("/login");
  };

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
        {user ? (
          <>
            <Search />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogOut}
              >
                LOGOUT
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
