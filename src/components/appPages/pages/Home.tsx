import { Helmet } from "react-helmet";
import useRootLanguage from "../../../hooks/useRootLanguage";

const Home = () => {
  const rootLang = useRootLanguage();

  return (
    <div className="home-wrapper">
      {rootLang && (
        <Helmet>
          <title>{rootLang.CompanyName}</title>
          <meta name="description"></meta>
          <meta property="og:title" content={rootLang.CompanyName} />
          <meta property="og:description" />
          <meta property="og:url" content={window.location.href} />
          <meta
            property="og:image"
            content={`${window.location.origin}/${rootLang.MetaLogo}`}
          />
          <meta property="og:site_name" content={rootLang.CompanyName} />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
      )}
      <div>hero</div>
      <div>
        <div className="">about</div>
        <div className="">services</div>
        <div className="">galary</div>
      </div>
    </div>
  );
};

export default Home;
