import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Button, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MouseEvent, ReactNode, useState } from "react";
import { Link } from "react-router-dom";

const Fabs = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event?.target as HTMLDivElement)?.ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  const [isFabWrapperActive, setIsFabWrapperActive] = useState(false);

  const handleClickMobileFab = () => {
    setIsFabWrapperActive(!isFabWrapperActive);
  };
  return (
    <div className="fab">
      <Button
        className="mobile-functions-button"
        aria-label="mobile-functions"
        sx={{
          position: "fixed",
          zIndex: 5,
          right: 2,
          bottom: 60,

          // alignItems: "end",
          display: {
            md: "none",
          },
        }}
        onClick={handleClickMobileFab}
      >
        {isFabWrapperActive ? (
          <CloseOutlinedIcon fontSize="large" />
        ) : (
          <InfoOutlinedIcon fontSize="large" />
        )}
      </Button>
      <Stack
        className={`fab-wrapper ${
          isFabWrapperActive ? "fab-wrapper-click" : ""
        }`}
        sx={{
          position: "fixed",
          zIndex: 5,
          right: 0,
          bottom: 115,
          // alignItems: "end",
          bgcolor: "var(--color-blue-base)",
          // display: {
          //   xs: "none",
          //   md: "flex",
          // },
        }}
      >
        <Stack
          className="fab-box"
          sx={{
            color: "#fff",
          }}
          spacing={0.7}
        >
          <FabItem
            icon={<KeyboardArrowUpOutlinedIcon fontSize="medium" />}
            handleEvent={handleClick}
          >
            Go to top
          </FabItem>
          <Divider variant="middle" color="#fff" />
          <FabItem icon={<FacebookOutlinedIcon fontSize="medium" />}>
            {/* <a
              href={fabs.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {fabs.facebook.title}
            </a> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
              to=""
            >
              fc
            </Link>
          </FabItem>
          <Divider variant="middle" color="#fff" />
          <FabItem icon={<MailOutlineOutlinedIcon fontSize="medium" />}>
            {/* <a
              href={fabs.email.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {fabs.email.title}
            </a> */}
            <Link
              to=""
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              email
            </Link>
          </FabItem>
          <Divider variant="middle" color="#fff" />
          <FabItem icon={<PhoneOutlinedIcon fontSize="medium" />}>
            <a
              href="tel:+842583971888"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              phone
            </a>
          </FabItem>
        </Stack>
      </Stack>
    </div>
  );
};

interface FabItemProps {
  children: string | ReactNode;
  icon: ReactNode;
  handleEvent?: (event: MouseEvent<HTMLDivElement>) => void;
}
const FabItem = ({ children, icon, handleEvent }: FabItemProps) => {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      onClick={(e) => handleEvent && handleEvent(e)}
      sx={{
        "&:hover": {
          "& > svg": {
            transform: "scale(1.2)",
            transition: "transform 0.5s ease-in-out",
          },
        },
      }}
    >
      {icon}
      <Typography
        variant="subtitle2"
        sx={{
          whiteSpace: "nowrap !important",
          fontWeight: "400",
          textTransform: "capitalize",
          cursor: "pointer",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default Fabs;
