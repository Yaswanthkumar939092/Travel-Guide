import './index.css'

const DestinationItem = props => {
  const {item} = props
  console.log(item)
  const {imageUrl, name, description} = item
  return (
    <li className="item">
      <div>
        <img src={imageUrl} alt={name} className="img" />
        <div className="cont">
          <h1 className="name">{name}</h1>
          <p className="desc">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default DestinationItem
