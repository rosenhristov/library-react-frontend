import {ExploreTopBooks} from "./components/ExploreTopBooks";
import {Navbar} from "../NavbarAndFooter/Navbar";
import {Carousel} from "./components/Carousel";
import {Heroes} from "./components/Heroes";
import React from "react";
import {LibraryServices} from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heroes/>
            <LibraryServices/>
        </>
    )
}