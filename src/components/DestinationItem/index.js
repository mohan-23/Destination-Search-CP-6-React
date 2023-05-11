import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails
  console.log(userDetails)

  return (
    <li className="list_item_container">
      <div>
        <img src={imgUrl} alt={name} className="image" />
        <p className="img-name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
