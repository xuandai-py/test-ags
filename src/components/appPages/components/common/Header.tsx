// Down: nav-item-bold-17

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Chip, Divider, styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect } from "react";
import { Cert } from "./Footer";
import TopContent from "./TopContent";

import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../hooks";
import useRootLanguage from "../../../../hooks/useRootLanguage";
import {
  isHeaderVisibleAtServiceSelector,
  isHeaderVisibleSelector,
  isHeaderVisibleSetted,
} from "../../pages/rootSlice";

const StyledAppBar = styled(AppBar)({
  boxShadow: "none",
});

const Header = () => {
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    // navbar-tall-height-6rem-by-default
    if (window.scrollY > 96) {
      dispatch(isHeaderVisibleSetted(true));
      document
        .querySelector(".desktop-down-header")
        ?.classList.remove("is-index-nav-style");
      // document.querySelector(".scrolled")?.classList.add("scrolled-active");
    } else {
      dispatch(isHeaderVisibleSetted(false));
      // document
      //   .querySelector(".scrolled")
      //   ?.classList.remove("scrolled-active");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledAppBar className="header-wrapper">
      <Toolbar
        disableGutters
        id="back-to-top-anchor"
        // className={isHeaderVisible && "toolbar-wrapper"}
      >
        <MobileNavbarBT
        // isIndexPage={isIndexPage}
        // navBarContent={rootPageLang?.HeaderNavBar}
        />
        <DesktopScrolledNavbar />

        <DesktopStaticNavbar
        // isIndexPage={isIndexPage}
        // navBarContent={rootPageLang?.HeaderNavBar}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

const DesktopStaticNavbar = () => {
  const isHeaderVisible = useAppSelector(isHeaderVisibleSelector);
  const isHeaderVisibleAtService = useAppSelector(
    isHeaderVisibleAtServiceSelector
  );
  // const [isIndexPage, setIsIndexPage] = useState(true);
  const location = useLocation();
  // const isIndexPage =  location.pathname === "/vn" || location.pathname === "/en"
  // useEffect(() => {
  //   console.log("locationPathName: ", location.pathname)
  //  if( location.pathname === "/vn" || location.pathname === "/en") {
  //   setIsIndexPage(true);
  //  } else {
  //   setIsIndexPage(false);
  //  }

  // }, [location.pathname])

  const { HeaderNavBar: navBarContent } = useRootLanguage();

  return (
    <Box
      className={` desktop-down-header scroll-active
        ${isHeaderVisible && "scrolled-transition"}
        ${
          location.pathname === "/vn" || location.pathname === "/en"
            ? "is-index-nav-style"
            : ""
        }
      ${!isHeaderVisibleAtService && "scrolled-service"}

      `}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },

        // backgroundColor: "var(--color-blue-base-blur)",
        transition: "transform 0.2s ease-in-out !important",
      }}
    >
      <Stack
        direction="row"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        className="app-menu"
      >
        <Stack
          width="100%"
          height="100%"
          direction="row"
          display="-webkit-box"
          alignItems="end"
          sx={{
            paddingBottom: "10px",
          }}
        >
          <Link to={`${location.pathname}`}>aaa</Link>

          <Cert
            className="cert-large"
            style={{
              height: {
                md: "55%",
                xl: "60%",
              },
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          />
        </Stack>
        <Stack
          sx={{
            // border: "1px solid yellow",
            gap: "10px",
          }}
        >
          <TopContent />
          <nav>
            <Stack
              className="button-nav-static"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                gap: {
                  md: "0.8rem",
                  // lg: "1rem",
                  xl: "1.2rem",
                },
                paddingX: 1,
                justifyContent: "flex-end",
              }}
            >
              {navBarContent &&
                navBarContent.map((page, index) => (
                  <div className="category">
                    <NavLink key={index} to={page.url}>
                      <Button
                        key={index}
                        // href={page.url}
                        className={`nav btn-nav-marker ${
                          location.pathname === "/vn" ||
                          location.pathname === "/en"
                            ? "active-color"
                            : ""
                        }`}
                        id="basic-button"
                        aria-haspopup="true"
                        size="medium"
                        sx={{
                          // my: 2,
                          // mx: 1,
                          color: "white",
                          display: "block",
                          position: "relative",
                          fontWeight: "700",
                          whiteSpace: "nowrap",
                          fontSize: {
                            xs: "",
                            sm: "",
                            md: "1.1rem ",
                            xl: "1.3rem !important",
                          },
                          // textTransform: "none",
                          // "&:after": {
                          //   content: '""',
                          //   position: "absolute",
                          //   bottom: 0,
                          //   left: 0,
                          //   width: "0%",
                          //   height: "3px",
                          //   // backgroundColor: "var(--color-blue-base)",
                          //   backgroundColor: "#fff",
                          //   transition: "width 0.3s ease-in-out",
                          // },
                          // "&:hover:after": {
                          //   width: "100%",
                          // },
                        }}
                      >
                        {page.title}
                      </Button>
                    </NavLink>

                    <ul>
                      {page.submenu &&
                        page.submenu.map((item) => (
                          <li>
                            <NavLink
                              className="submenu-item-link"
                              to={item.url}
                            >
                              {item.title}
                            </NavLink>

                            {/* <a href={item.url}>{item.title}</a> */}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </Stack>
          </nav>
        </Stack>
      </Stack>
    </Box>
  );
};

const DesktopScrolledNavbar = () => {
  const isHeaderVisibleAtService = useAppSelector(
    isHeaderVisibleAtServiceSelector
  );
  const rootPageLang = useRootLanguage();

  const navBarContent = rootPageLang?.HeaderNavBar;

  const isHeaderVisible = useAppSelector(isHeaderVisibleSelector);
  const location = useLocation();
  return (
    <Box
      className={` scrolled  scrolled-transition
        ${isHeaderVisible && "scrolled-active"}
         ${!isHeaderVisibleAtService && "scrolled-service"}
      `}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        // padding: "0.6rem 2rem",
        // flexDirection: "column",
        // transition: "all 1s ease-out",
        // transition: "opacity 2.5s ease-out, visibility 2.5s ease-out",
      }}
    >
      <Stack
        direction="row"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        display="-webkit-box"
        className="app-menu app-menu-scrolled"
      >
        <Link to={`${location.pathname}`}>
          {/* <Image
            src={logo_ags}
            alt="ags_logo"
            width="80px"
            height="auto"
            duration={0}
          ></Image> */}
          logo
        </Link>

        <nav>
          <Box
            className=""
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              gap: {
                md: 1,
                lg: 3,
              },
              paddingX: 1,
              justifyContent: "flex-end",
            }}
          >
            {navBarContent &&
              navBarContent.map((page, index) => (
                <div className="category">
                  <NavLink key={index} to={page.url}>
                    <Button
                      key={index}
                      // href={page.url}
                      className={`nav btn-nav-marker`}
                      id="basic-button"
                      aria-haspopup="true"
                      // aria-controls={open ? "basic-menu" : undefined}
                      // aria-expanded={open ? "true" : undefined}

                      // onMouseEnter={handleClick}
                      // onMouseMoveCapture={handleClose}
                      size="medium"
                      sx={{
                        // my: 2,
                        // mx: 1,
                        color: "white",
                        display: "block",
                        position: "relative",
                        fontWeight: "700",
                        fontSize: "2rem",
                        // textTransform: "none",
                      }}
                    >
                      {page.title}
                    </Button>
                  </NavLink>
                  <ul>
                    {page.submenu &&
                      page.submenu.map((item, index) => (
                        <li key={index}>
                          <NavLink to={item.url}>{item.title}</NavLink>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </Box>
        </nav>
      </Stack>
    </Box>
  );
};

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <CloseOutlinedIcon sx={{ color: "white" }} />
      </div>
      <div className="collapsIconWrapper">
        <MenuOutlinedIcon sx={{ color: "white" }} />
      </div>
    </Box>
  );
};
const MobileNavbarBT = () => {
  const isHeaderVisibleAtService = useAppSelector(
    isHeaderVisibleAtServiceSelector
  );
  const isIndexPage =
    location.pathname === "/vn" || location.pathname === "/en";
  const { HeaderNavBar: navBarContent } = useRootLanguage();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleExpanded = (event: React.SyntheticEvent, expanded: boolean) => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setExpanded(false);
    }
  };
  const panelOffset = document.getElementById(
    "panel-header-wrapper"
  )?.offsetHeight;
  const headerOffset = panelOffset ? panelOffset + "px" : "10vh";

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const onLogoEditClick = (e) => {
    e.stopPropagation();
  };
  const mobileDisplay = isIndexPage ? "flex" : "none";
  return (
    <Box
      className={`mobile-nav-wrapper  ${
        isHeaderVisibleAtService && "scrolled-service"
      }`}
      sx={{
        width: "100%",
        minHeight: "inherit",
        height: "auto",
        maxHeight: "100vh",
        // maxHeight: "calc(100vh + var(--top-bar-content-height))",
        // overflowY: "auto",
        display: {
          xs: "block",
          md: "none",
        },
        // display: down970px ? "block" : "none",
        backgroundColor: "var(--color-blue-base)",

        position: "fixed",
        top: 0,
      }}
    >
      <Stack
        className="top-content"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        height="var(--top-bar-content-height)"
        maxHeight="var(--top-bar-content-height)"
        paddingX=".5rem"
        marginY=".5rem"
        sx={
          {
            // display: { xs: mobileDisplay, sm: "none" },
          }
        }
      >
        <Cert
          style={{
            padding: "2px 7px",
            gap: 0.7,
            display: {
              xs: "flex",
              md: "none",
            },
            maxWidth: {
              xs: "130px",
              sm: "150px",
              md: "unset",
            },
          }}
        />

        <Chip
          icon={
            <PublicOutlinedIcon fontSize="small" style={{ color: "#fff" }} />
          }
          label={
            <div className="d-flex">
              <a href="/vn" style={{ textDecoration: "none", color: "white" }}>
                VN
              </a>
              <span className="mx-2">|</span>
              <a href="/en" style={{ textDecoration: "none", color: "white" }}>
                EN
              </a>
            </div>
          }
          variant="outlined"
          sx={{ border: "none", outline: "none", color: "#fff" }}
        />
      </Stack>

      <Divider
        sx={{
          backgroundColor: "#fff",
          display: {
            xs: mobileDisplay,
            sm: "none",
          },
        }}
      />
      <Accordion
        sx={{
          height: "100%",
          maxHeight: "100vh",
          minHeight: "inherit",
          backgroundColor: "var(--color-blue-base)",
          transition: "width 0.3s ease-in-out",
        }}
        square={"false"}
        onChange={(event, expanded) => handleExpanded(event, expanded)}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel-content-wrapper"
          id="panel-header-wrapper"
          sx={{
            transition: "width 0.3s ease-in-out",
            paddingX: "1.5rem",
          }}
        >
          <a href="/" onClick={onLogoEditClick}>
            logo
          </a>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            height: `calc(100vh - ${headerOffset} - var(--top-bar-content-height))`,
            maxHeight: "60vh",
            overflowY: "scroll",
            textAlign: "left",
          }}
          className="mobile-inner-expanded"
        >
          {navBarContent &&
            navBarContent.map((page, index) => {
              if (page.submenu) {
                return (
                  <div className="mobile-inner-expanded-child">
                    <Accordion
                      className="mobile-inner-expanded-accordion"
                      expanded={expanded === `panel${index}`}
                      onChange={handleChange(`panel${index}`)}
                      sx={{
                        backgroundColor: "unset",
                        boxShadow: "unset",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ArrowDownwardIcon sx={{ color: "white" }} />
                        }
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        sx={{
                          padding: 0,
                          ">div": { padding: 0, margin: 0 },
                        }}
                      >
                        <MobileNavButton page={page} key={index} />
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          padding: 0,
                        }}
                      >
                        <ul>
                          {page.submenu &&
                            page.submenu.map((item) => (
                              <li onClick={() => setExpanded(false)}>
                                {/* <Link to={item.url}>{item.title}</Link> */}
                                <a href={item.url}>{item.title}</a>
                              </li>
                            ))}
                        </ul>
                      </AccordionDetails>
                      <div className="border-left-style"> </div>
                    </Accordion>
                  </div>
                );
              } else {
                return <MobileNavButton page={page} key={index} />;
              }
            })}
        </AccordionDetails>
        <div className="" style={{ visibility: "hidden", height: "40vh" }}>
          invisible
        </div>
      </Accordion>
    </Box>
  );
};

const MobileNavButton = ({ page }) => {
  return (
    // <Link to={page.url}>
    <Button
      href={page.url}
      className={`nav btn-nav-marker mobile-nav-button`}
      id="basic-button"
      aria-haspopup="true"
      size="medium"
      sx={{
        color: "white",
        display: "block",
        position: "relative",
        fontWeight: "700",
        whiteSpace: "nowrap",
        width: "fit-content",
        my: "1rem",
        fontSize: {
          xs: "",
          sm: "",
          md: "1rem !important",
          lg: "1.1rem !important",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "0%",
          height: "3px",
          backgroundColor: "#fff",
          transition: "width 0.3s ease-in-out",
        },
        "&:hover:after": {
          width: "100%",
        },
      }}
    >
      {/* <NavLink to={page.url}>
        </NavLink> */}
      {page.title}
    </Button>
    // {/* </Link> */}
  );
};
// const MobileNavbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   return (
//     <Box sx={{ display: { xs: "flex", md: "none" } }}>
//       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenNavMenu}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorElNav}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//           open={Boolean(anchorElNav)}
//           onClose={handleCloseNavMenu}
//           sx={{
//             display: { xs: "block", md: "none" },
//           }}
//         >
//           {pages.map((page) => (
//             <MenuItem key={page} onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">{page}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>

//       {/* logo at center */}
//     </Box>
//   );
// };

// function Menu() {
//   return (
//     <div className="app-menu">
//       <div className="container-fluid">
//         <nav>
//           <div className="d-flex justify-content-center align-items-center">
//             <div className="category">
//               <button>
//                 <span>Hệ Thống</span>
//               </button>
//               <ul>
//                 <li>
//                   <a href="#">Đăng Nhập</a>
//                 </li>
//                 <li>
//                   <a href="#">Đăng Xuất</a>
//                 </li>
//                 <li>
//                   <a href="#">Thay Đổi Mật Khẩu</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="category">
//               <span>Thống Kê Sản Lượng</span>
//               <ul>
//                 <li>
//                   <a href="#">Sản Lượng Vietnam Airlines</a>
//                 </li>
//                 <li>
//                   <a href="#">Sản Lượng Các Hãng Khác</a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     Tổng Hợp Sản Lượng Vận Chuyển {"(VN và các hãng khác)"}
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="category">
//               <span>Doanh Thu</span>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

export default Header;
