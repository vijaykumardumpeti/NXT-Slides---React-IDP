import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// This is the list used in the application. You can move them to any component needed.

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

export default class App extends Component {
  state = {
    activeSlideTabName: initialSlidesList[0].heading,
    isHeadingCliked: false,
    isParaClicked: false,
    head: '',
    desc: '',
  }

  changeActiveItem = heading => {
    this.setState({
      activeSlideTabName: heading,
    })
  }

  onAddNewSlide = () => {
    const {activeSlideTabName} = this.state

    const newSlideObject = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    console.log(newSlideObject)

    const indexOfActiveSlideTab = initialSlidesList.findIndex(
      object => object.heading === activeSlideTabName,
    )
    console.log(indexOfActiveSlideTab)
    initialSlidesList[indexOfActiveSlideTab] = newSlideObject
  }

  changeHeadingState = () => {
    this.setState({
      isHeadingCliked: true,
    })
  }

  changeParaState = () => {
    this.setState({
      isParaClicked: true,
    })
  }

  changeHeading = event => {
    this.setState({
      head: event.target.value,
    })
  }

  changePara = event => {
    this.setState({
      desc: event.target.value,
    })
  }

  render() {
    const {
      activeSlideTabName,
      isHeadingCliked,
      isParaClicked,
      head,
      desc,
    } = this.state
    console.log(isHeadingCliked)
    console.log(isParaClicked)

    const activeObject = initialSlidesList.find(
      object => object.heading === activeSlideTabName,
    )

    return (
      <div>
        <nav className="nav-container">
          <img
            className="nav-logo"
            alt="nxt slides logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
          />
          <h1 className="nav-heading">Nxt Slides</h1>
        </nav>
        <div className="sliders-and-view-container">
          <div className="new-button-and-sliders-container">
            <button
              onClick={this.onAddNewSlide}
              className="new-button"
              type="button"
            >
              <img
                className="plus-image"
                alt="new plus icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              />

              <p className="button-para">New</p>
            </button>
            <ol className="sliders-list">
              {initialSlidesList.map(item => {
                const {id, heading, description} = item

                const index = initialSlidesList.findIndex(
                  object => object.id === id,
                )

                const className =
                  activeSlideTabName === heading ? 'add-style-to-button' : ''

                return (
                  <button
                    onClick={() => {
                      this.changeActiveItem(heading)
                    }}
                    className={`button-for-list-item ${className}`}
                    type="button"
                  >
                    <li
                      testid={`slideTab${index + 1}`}
                      key={id}
                      className="list-item-container"
                    >
                      <p>{index + 1}</p>
                      <h1 className="item-heading">{heading}</h1>
                      <p className="item-para">{description}</p>
                    </li>
                  </button>
                )
              })}
            </ol>
          </div>
          <div className="view-container">
            {isHeadingCliked ? (
              <input
                value={head}
                onChange={this.changeHeading}
                className="input-i"
                type="text"
              />
            ) : (
              <button
                onClick={this.changeHeadingState}
                className="buttonsss"
                type="button"
              >
                <h1 className="view-heading">{activeObject.heading}</h1>
              </button>
            )}
            {isParaClicked ? (
              <input
                value={desc}
                onChange={this.changePara}
                className="input-i"
                type="text"
              />
            ) : (
              <button
                onClick={this.changeParaState}
                className="buttonsss"
                type="button"
              >
                <p className="view-para">{activeObject.description}</p>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
