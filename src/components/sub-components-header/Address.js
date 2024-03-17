import { LOC_URL } from "../../config/constants.js";

const Address = () => {
  return (
    <div className="header-address">
      <img className="location-logo" src={ LOC_URL }></img>
      <span className="receipent-name">Deleiever to Saurabh</span>
      <span className="state">Varanasi</span>
      <span className="pin">221003</span>
    </div>
  )
}

export default Address;