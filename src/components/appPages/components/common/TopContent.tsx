import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
//import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import { Chip, Stack } from "@mui/material";
import { useEffect } from "react";
/* import { axiosPublic } from "../../../../axiosConf/axiosConf";
import { getWeather } from "../../../../endpoint";
import { TblWeather } from "../../../../geneExport"; */
import { Cert } from "./Footer";
// this file offers multiple outline contents: temprature, weather, Languages, Q&A, event, hiring, etc.
const TopContent = () => {
  //const [weather, setWeather] = useState<TblWeather>();

  useEffect(() => {
    // console.log("TopContent Init");
    //getWeatherFunc();
  }, []);

  /* const getWeatherFunc = async () => {
    await axiosPublic
      .get<TblWeather>(getWeather)
      .then(({ data }) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log("Cant get weather data!: " + err.response.data);
      });
  }; */

  return (
    <Stack
      className="top-content"
      direction="row"
      alignItems="center"
      justifyContent="end"
      width="100%"
      height="var(--top-bar-content-height)"
      maxHeight="var(--top-bar-content-height)"
      // bgcolor= "linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%);"
      paddingX="2rem"
      gap={2}
      sx={{
        display: { xs: "none", md: "flex" },
        // background:
        //   "radial-gradient(621px at 25.3% 13.8%, rgb(255, 255, 255) 0%, rgb(234, 236, 255) 90%);",
      }}
    >
      <Cert
        style={{
          padding: "2px 7px",
          gap: 0.7,
          display: {
            lg: "none",
          },
        }}
      />
      {/* <Chip
        icon={
          <ThermostatOutlinedIcon fontSize="small" style={{ color: "#fff" }} />
        }
        label={`${weather?.locationName} ${weather?.cTemp}℃ / ${
          weather?.fTemp
        }°F - ${weather?.weatherNow.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )}`}
        variant="outlined"
        sx={{ border: "none", outline: "none", color: "#fff" }}
      /> */}
      <Chip
        icon={<PublicOutlinedIcon fontSize="small" style={{ color: "#fff" }} />}
        label={
          <div className="d-flex">
            <span className="me-2">Language</span>
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
  );
};

export default TopContent;
