import React from "react";
import HeroSection from "./HeroSection"
import ProductiveSection from "./ProductiveSection";
import NewsLetterSection from "./NewsLetterSection";
const LandingPage =()=>{
    return(
     <div style={{maxWith: "100vw"}}>
   <HeroSection />
   <ProductiveSection />
   <NewsLetterSection/>
     </div>
    )
};

export default LandingPage;