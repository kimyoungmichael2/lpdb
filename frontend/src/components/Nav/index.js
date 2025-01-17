import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="nav">
      <Menu color='blue'>
       <Link to= '/'>
          <Menu.Item
            name='recentscans'
            active={activeItem === 'recentscans'}
            onClick={this.handleItemClick}
          >
            <Icon name='search' />
            Recent Scans
          </Menu.Item>
        </Link>
        {/* <Link to= '/dashboard'> */}
        <Link to= '/'>
          <Menu.Item
            name='dashboard'
            // active={activeItem === 'dashboard'}
            // onClick={this.handleItemClick}
          >
            <Icon name='dashboard' />
            Dashboard
          </Menu.Item>
        </Link>
        {/* <Link to= '/page2'>
          <Menu.Item
            name='page 2'
            active={activeItem === 'page 2'}
            onClick={this.handleItemClick}
          >
            <Icon name='database' />
            Database
          </Menu.Item>
        </Link>
        <Link to= '/page3'>
          <Menu.Item
            name='page 3'
            active={activeItem === 'page 3'}
            onClick={this.handleItemClick}
          >
            <Icon name='arrow alternate circle down' />
            Input
          </Menu.Item>
        </Link> */}
        {/* <Link to= '/visits'> */}
        <Link to= '/'>
          <Menu.Item
            name='visits'
            // active={activeItem === 'visits'}
            // onClick={this.handleItemClick}
          >
            <Icon name='car' />
            Visits
          </Menu.Item>
        </Link>
      </Menu>
      </div>
    )
  }
}
