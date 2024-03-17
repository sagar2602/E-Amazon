import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

/**
* Header
* - Logo
* - Address
* - Search Bar
    - All Categories Dropdown
    - Search Text
    - Search Icon
* - Language Dropdown
* - Accounts & Lists
* - Returns & Orders
* - Cart Icon and counter
* Navigation Bar
* - All
* - Different Categories
* Slider of Images
* Body
* - Upto % off layouts
* - Today’s Deal
* - Offers section - upto 50%off and upto 60% off
* - One more section require different component
* - Best seller in clothing and accessories
* - 3 more sections
* Sign in button
* Footer
* - Back to top
* - General Links
* - Logo & Language Switcher
* - Different Languages Amazon Links
* - Copyright
* - Contact Info
*/

const AppLayout = () => {
  return <div className="amazon-wrapper">
    <Header />
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);