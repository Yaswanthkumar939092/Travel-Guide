import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import DestinationItem from './components/DestinationItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {destinationList: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const packagesList = data.packages
    const formattedData = packagesList.map(each => ({
      id: each.id,
      name: each.name,
      description: each.description,
      imageUrl: each.image_url,
    }))

    this.setState({destinationList: formattedData, isLoading: false})
  }

  render() {
    const {destinationList, isLoading} = this.state
    return (
      <div className="bg-cont">
        <h1 className="title">Travel Guide</h1>
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-cont">
              {destinationList.map(each => (
                <li className="item" key={each.id}>
                  <div>
                    <img src={each.imageUrl} alt={each.name} className="img" />
                    <div className="cont">
                      <h1 className="name">{each.name}</h1>
                      <p className="desc">{each.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
