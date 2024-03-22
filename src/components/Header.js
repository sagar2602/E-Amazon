import Logo from "./sub-components/header/Logo";
import Address from "./sub-components/header/Address";
import Search from "./sub-components/header/Search";
import Lang from "./sub-components/header/Lang";
import Details from "./sub-components/header/Details";
import Returns from "./sub-components/header/Returns";


const Header = ({objMap, setObj}) => {
  return (
    <div className="header">
      <Logo />
      <Address />
      <Search objMap={objMap} setObj={setObj} />
      <Lang />
      <Details />
      <Returns />
    </div>
  )
}

export default Header;