import React from "react";
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import WhatYouGet from "../Components/WhatYouGet/WhatYouGet";
import TheMostPop from "../Components/TheMostPop/TheMostPop";
import UiPresentation from "../Components/UiPresentation/UiPresentation";
import StorePart from "../Components/StorePart/StorePart";
import TrialPart from "../Components/TrialPart/TrialPart";
import AboutUs from "../Components/AboutUs/AboutUs";
import QuestionPart from "../Components/QuestionPart/QuestionPart";
import ArticlePart from "../Components/ArticlePart/ArticlePart";
import Footer from "../Components/Footer/Footer";


const Home = () => {
    return (
       <>
         <Banner></Banner>
         <WhatYouGet></WhatYouGet>
         <TheMostPop></TheMostPop>
         <UiPresentation></UiPresentation>
         <StorePart></StorePart>
         <AboutUs></AboutUs>
         <TrialPart></TrialPart>
         <QuestionPart></QuestionPart>
         <ArticlePart></ArticlePart>
       </>
    );
}

export default Home;