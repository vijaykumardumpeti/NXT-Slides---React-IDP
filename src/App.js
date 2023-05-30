import {Component} from 'react'

import './App.css'

// This is the list used in the application. You can move them to any component needed.

const initialSlidesList = [
  {
    id: 1,
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 2,
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 3,
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 4,
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 5,
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 6,
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 7,
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

export default class App extends Component {
  state = {
    activeSlideTabName: initialSlidesList[0].id,
    isHeadingCliked: false,
    isParaClicked: false,
    head: '',
    desc: '',
    slidesList: initialSlidesList,
  }

  changeActiveItem = id => {
    this.setState({
      activeSlideTabName: id,
    })
  }

  onAddNewSlide = () => {
    const {activeSlideTabName, slidesList} = this.state

    const indexOfActiveSlideTab = slidesList.findIndex(
      object => object.heading === activeSlideTabName,
    )

    const newSlideObject = {
      id: indexOfActiveSlideTab + 1,
      heading: 'Heading',
      description: 'Description',
    }

    slidesList.splice(indexOfActiveSlideTab + 2, 0, newSlideObject)
    this.setState({
      slidesList,
      activeSlideTabName: indexOfActiveSlideTab + 1,
    })
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
      slidesList,
    } = this.state
    console.log(isHeadingCliked)
    console.log(isParaClicked)

    const activeObject = slidesList.find(
      object => object.id === activeSlideTabName,
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
              {slidesList.map(item => {
                const {id, heading, description} = item

                const index = slidesList.findIndex(object => object.id === id)

                const className =
                  activeSlideTabName === id ? 'add-style-to-button' : ''

                return (
                  <button
                    onClick={() => {
                      this.changeActiveItem(id)
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
