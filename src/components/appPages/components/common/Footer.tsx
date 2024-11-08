import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { CSSProperties, useEffect } from "react";
import { useLocation } from "react-router-dom";
import cloud from "../../../../assets/clouds_3.png";
import iata from "../../../../assets/iata-2.png";
import isago from "../../../../assets/isago.png";
import iso from "../../../../assets/iso.jpg";
import logo_avi from "../../../../assets/logo_avi.png";
import plane from "../../../../assets/plain_plane.png";
import { useAppSelector } from "../../../../hooks";
import useRootLanguage from "../../../../hooks/useRootLanguage";
import { rootLangIdSelector } from "../../pages/rootSlice";

const Footer = () => {
  const location = useLocation();
  const rootLang = useRootLanguage();
  const theme = useTheme();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [location]);
  return (
    <footer>
      {/* removing contain box*/}
      <Box
        sx={{
          display: "flex",
          // height: {
          //   xs: "auto",
          //   sm: "100%",
          // },
          height: "100%",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* replace with ::after  */}
        <Box className=" footer-overlay " sx={{ height: "100%" }}></Box>
        <Stack
          className="footer-inner"
          direction="column"
          sx={{
            // border: "1px solid red",
            zIndex: 3,
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            // maxWidth: "100vw",
            // paddingTop: {
            //   xs: 0,
            //   md: "1.5rem",
            // },
          }}
        >
          {/* <Stack className="footer-content"> */}
          <Stack
            className="footer-highlight"
            direction="row"
            sx={{
              justifyContent: "space-between",
              [theme.breakpoints.down(400)]: {
                justifyContent: "center",
              },
              alignItems: "center",
              marginTop: "1.5rem",
              // border: "1px solid green",
              padding: {
                xs: ".5rem 2rem 0",
                sm: ".5rem 2.5rem 0",
              },
              height: "80px",
              // height: "60px",
            }}
          >
            <img
              className=""
              src={logo_avi}
              alt="ags-logo"
              color="#000"
              // height="100%"
              // width="auto"
              height="auto"
              style={{
                maxHeight: "80px",
                maxWidth: "100%",

                objectFit: "contain",
              }}
            />
            <Cert
              style={{
                height: {
                  xs: "50%",
                  sm: "70%",
                  md: "80%",
                },
                maxWidth: {
                  xs: "160px",
                  sm: "260px",
                  md: "unset",
                },
                [theme.breakpoints.down(400)]: {
                  display: "none",
                },
              }}
            />
            {/*  <Stack
              className="footer-highlight-left"
              direction="row"
              gap={2}
              sx={{
                alignItems: "end",
                color: "white",
                textTransform: "uppercase",
              }}
            >
             
              <Box
                sx={{
                  borderBottom: "1px solid rgba(25, 118, 210, 0.7)",
                }}
              >
                <Chip
                  icon={
                    <a href="https://asg.net.vn/">
                      <img
                        src="./logo_asg.png"
                        width="50px"
                        height="auto"
                        alt=""
                      />
                    </a>
                  }
                  variant="outlined"
                  color="primary"
                  // size={{ xs: "small", md: "medium" }}
                  label="an asg.,corp member"
                  sx={{
                    flexDirection: "row-reverse",
                    height: { xs: "24px", md: "32px" },
                    // alignItems: "end",
                    paddingRight: "15px",
                    // borderBottom: "1px solid rgba(25, 118, 210, 0.7) !important",
                    border: "none",
                    borderRadius: 0,
                    span: { padding: "0px 5px 0 10px" },
                  }}
                />
              </Box> 
            </Stack>*/}
          </Stack>

          <Stack
            className="footer-content-detail"
            direction={{ xs: "column-reverse", sm: "row" }}
            sx={{
              justifyContent: "space-around",
              // border: "1px solid black",
              height: "100% !important",
              alignItems: "center",
              padding: ".5rem",

              position: "relative",
            }}
          >
            <div
              className=""
              data-aos="zoom-in-down"
              data-aos-duration="2200"
              data-aos-easing="ease-in"
              data-aos-once="false"
              data-aos-offset="200"
              style={{
                position: "absolute",
                top: 0,
                filter: "brightness(0) invert(1) opacity(0.3)",
              }}
            >
              <figure className="footer-fly-img">
                <img
                  src={cloud}
                  alt="plain_clouds"
                  // className="img-fade fade-in-right"
                  loading="lazy"
                  // width="647"
                  // min-height="187"
                  width="80%"
                  height="auto"
                  // sizes="(max-width: 900px) 100vw, 900px"
                />
              </figure>
            </div>

            <Stack
              direction="column"
              className="footer-content-detail-left"
              spacing={2}
              sx={{
                width: { xs: "100%", sm: "45%" },
                paddingX: { xs: "1rem", md: "2rem" },
                paddingBottom: { xs: "1rem", md: 0 },
                textAlign: "left",
                color: "#fff",
                // paddingX: "1rem",
                // border: "1px solid green",

                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={{
                  xs: 500,
                  md: 600,
                }}
                sx={{
                  maxWidth: "100%",
                  whiteSpace: { xs: "unset", sm: "nowrap !important" },
                  // fontSize: {
                  //   xs: "var(--text-size-125)",
                  //   sm: "var(--text-size-150)",
                  // md: "var(--text-size-175)",
                  //   md: "clamp(1.5rem, 3vw, 1.75rem)",
                  // },

                  fontSize: "clamp(1.25rem, calc(1.25rem + 0.5vw) ,1.75rem)",
                }}
              >
                {rootLang?.FooterProfile.companyName}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "var(--text-size-1)",
                    md: "var(--text-size-125)",
                  },
                }}
              >
                <span className="footer-icon">
                  <LocationOnOutlinedIcon />
                </span>
                {rootLang?.FooterProfile.address}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "var(--text-size-1)",
                    md: "var(--text-size-125)",
                  },
                }}
              >
                <span className="footer-icon">
                  <MailOutlineOutlinedIcon className="footer-icon" />
                </span>
                business@ags.com.vn
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "var(--text-size-1)",
                    md: "var(--text-size-125)",
                  },
                }}
              >
                <span className="footer-icon">
                  <LocalPhoneOutlinedIcon className="footer-icon" />
                </span>
                +84 258 3971 888
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "var(--text-size-1)",
                    md: "var(--text-size-125)",
                  },
                }}
              >
                <span className="footer-icon">
                  <LocalPrintshopOutlinedIcon className="footer-icon" />
                </span>
                +84 258 3971 889
              </Typography>
            </Stack>
            <Stack
              className="footer-content-detail-right"
              sx={{
                width: { xs: "100%", sm: "55%" },
                overflow: "hidden",
                // border: "1px solid red",
                justifyContent: "center",
              }}
            >
              <div
                className=""
                data-aos="fade-up-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
                data-aos-once="false"
                data-aos-offset="150"
              >
                <figure className="footer-fly-img">
                  <img
                    // src="./vna4-min.png"
                    src={plane}
                    alt="plain_plane"
                    // className="img-fade fade-in-right"
                    loading="lazy"
                    // width="647"
                    // min-height="187"
                    width="90%"
                    height="auto"
                    // sizes="(max-width: 900px) 100vw, 900px"
                  />
                </figure>
              </div>
            </Stack>
          </Stack>
          {/* </Stack> */}
          <FooterHighLightClient />
        </Stack>
      </Box>
    </footer>
  );
};

export const Cert = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <Stack
      className={`footer-highlight-right ${className}`}
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "end",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "5px 10px",
        // padding: {
        //   xs: "5px 10px 5px 0",
        //   sm: "5px 10px",
        // },

        width: "fit-contain",
        gap: { xs: ".1rem", sm: ".8rem", md: "1rem" },
        height: "100%",
        ...style,
      }}
    >
      <img
        className="cert-img cert-isago"
        loading="lazy"
        src={isago}
        alt="isago"
        // height="100%"
        // width="auto"
        style={{ objectFit: "contain" }}
      />
      <img
        className="cert-img cert-iata"
        loading="lazy"
        src={iata}
        alt="iata"
        // height="100%"
        // width="auto"
        style={{ objectFit: "contain" }}
      />
      <img
        className="cert-img cert-iso"
        loading="lazy"
        src={iso}
        alt="iata"
        // height="100%"
        // width="auto"
        style={{ objectFit: "contain" }}
      />
    </Stack>
  );
};

const FooterHighLightClient = () => {
  const langId = useAppSelector(rootLangIdSelector);

  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "progressive",
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1, // Apply isMobile check here as well
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1, // Apply isMobile check here as well
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6, // Apply isMobile check here as well
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7, // Apply isMobile check here as well
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getPartnerFunc();
  }, [langId]);

  const getPartnerFunc = async () => {};

  return (
    <Stack
      className="slider slider-footer"
      // sx={{ maxWidth: "100vw !important" }}
    >
      {/* <div className="slider-container slider-container-services "> */}
      {/* <Slider {...settings}>
        {partners.length > 0 &&
          partners.map((client, idx) => (
            <Box
              key={`partnerIdx-${idx}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // height: "50px !important",
                height: {
                  xs: "var(--slider-footer-height-4) !important",
                  sm: "var(--slider-footer-height-45) !important",
                  md: "var(--slider-footer-height-5) !important",
                },
              }}
              // sx={{ margin: "0rem",  height: "50px" }}
            >
              <Link
                to={client.Link || "#"}
                target="_blank"
                style={{
                  padding: "0",
                }}
              >
               
                <Box
                  className="img-wrapper"
                  sx={{
                    height: {
                      xs: "var(--slider-footer-height-4)",
                      sm: "var(--slider-footer-height-45)",
                      md: "var(--slider-footer-height-5)",
                    },
                    paddingTop: "11px",
                    paddingBottom: "6px",
                  }}
                >
                  <img
                    src={client.Logo}
                    alt={client.Ten}
                    height="100%"
                    width="100%"
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
               
              </Link>
            </Box>
          ))}
      </Slider> */}
      {/* </div> */}
    </Stack>
  );
};

export default Footer;
