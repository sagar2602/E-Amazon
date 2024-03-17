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

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hi React!"
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);