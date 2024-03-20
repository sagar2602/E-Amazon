import { LOC_URL } from "../../../config/constants.js";

const Address = () => {
  return (
    <div className="header-address">
      <img className="location-logo" src={LOC_URL}></img>
      <div className="add-details">
        <span className="receipent-name">Deleiever to Saurabh</span>
        <div className="locality">
          <span className="state">Varanasi</span>
          <span className="pin">221003</span>
        </div>
      </div>
    </div>
  )
}

export default Address;