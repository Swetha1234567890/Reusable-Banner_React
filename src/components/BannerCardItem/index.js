// Write your code here.
import './index.css'

const BannerCards = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`sub-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="about">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCards
