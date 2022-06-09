import Logo from "../../molecule/Logo";
import Typography from "../../atom/Typography";
import { Box, Menu, MenuItem, Container, Tooltip } from "@mui/material";
import {
  Search,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../atom/Button";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "../../molecule/Search";
// import { useAuth0 } from "@auth0/auth0-react";
const HeaderComponent = (props: any) => {
  // const { logout } = useAuth0();
  const settings = ["Logout"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [searchState, setSearchState] = useState(false);
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{ color: "black", backgroundColor: "white", boxShadow: "none" }}
      data-testid="box"
    >
      <Container data-testid="box-a">
        <Toolbar
          sx={{
            height: "86px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo {...props} />
          </NavLink>
          {searchState ? (
            <SearchBox
              data-testid="search-box"
              books={props.books}
              searchStateHandler={() => {
                setSearchState(false);
                props.setBlankStatus(false);
              }}
            />
          ) : (
            <Box sx={{ flexGrow: 1 }} data-testid="nav">
              <Button
                data-testid="search-state-button"
                onClick={() => {
                  // <SearchBox
                  //   data-testid="search-box"
                  //   books={props.books}
                  // searchStateHandler={() => {
                  //   setSearchState(false);
                  //   props.setBlankStatus(false);
                  // }}
                  ///>
                  setSearchState(true);
                  props.setBlankStatus(true);
                }}
                size="large"
                label="search"
                key={0}
                startIcon={
                  <Search
                    fontSize="large"
                    style={{ textDecoration: "none", fontSize: "30px" }}
                  />
                }
                sx={{
                  color: "black",
                  margin: "0px 5px 0px 40px",
                  display: { md: "none" },
                }}
              />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={() => {
                    setSearchState(true);
                    props.setBlankStatus(true);
                  }}
                  size="large"
                  key={0}
                  startIcon={
                    <Search
                      fontSize="large"
                      style={{ textDecoration: "none", fontSize: "30px" }}
                    />
                  }
                  sx={{ color: "black", margin: "0px 5px 0px 40px" }}
                />

                <Button //Explore section in the header tab
                  data-testid="handle-explore"
                  onClick={props.handleExploreMenu}
                  size="medium"
                  key={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    margin: "5px 10px",
                  }}
                  label="Explore"
                  endIcon={
                    (!props.exploreOption && <KeyboardArrowUp />) ||
                    (props.exploreOption && <KeyboardArrowDown />)
                  }
                />

                <NavLink to="/library" style={{ textDecoration: "none" }}>
                  {/*my library section*/}
                  <Button
                    size="medium"
                    key={2}
                    label="My Library"
                    sx={{ color: "black", margin: "5px 10px" }}
                  />
                </NavLink>
              </Box>
            </Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                onClick={handleOpenUserMenu}
                size="medium"
                key={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  margin: "5px 10px",
                }}
                label="Account"
                endIcon={
                  anchorElUser ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                }
              />
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={5} sx={{ display: { md: "none" } }}>
                <NavLink
                  to="/library"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textAlign="center">My Library</Typography>
                </NavLink>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  {/* <Typography textAlign="center" onClick={() => logout({ returnTo: window.location.origin })}>{setting}</Typography> */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderComponent;
