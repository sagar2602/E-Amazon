import Title from "./sub-components-body/Title";
import Category1 from "./sub-components-body/Category1";
import TodaysDeal from "./sub-components-body/TodaysDeal";
import Category2 from "./sub-components-body/Category2";
import Category3 from "./sub-components-body/Category3";
import Category4 from "./sub-components-body/Category4";
import Category5 from "./sub-components-body/Category5";
import resObj from "/config/mockdata.js";

const Header = () => {
  return (
    <div className="body-wrapper">
      <div className="pick-up">
        <Category1 resData={ resObj } />
      </div>
    </div>
  )
}

export default Header;