import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const defaultMenu = () => (
  <Menu defaultIndex='0' onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem index = '0'>
      cool link
    </MenuItem>
    <MenuItem disabled index = '1'>
      disabled
    </MenuItem> 
    <MenuItem index = '2'>
      cool link 2
    </MenuItem> 
  </Menu>
)

const verticalMenu = () => (
    <Menu defaultIndex={'0'} onSelect = {(index) => (index)} mode = "vertical" defaultOpenSubMenus={['2']}>
        <MenuItem >cool link</MenuItem>
        <MenuItem >cool link 2</MenuItem>

        <SubMenu title = "dropdown">
        <MenuItem>dropdown 1 </MenuItem>
        <MenuItem>dropdown 2 </MenuItem>
        </SubMenu>

        <MenuItem >cool link 3</MenuItem>
    </Menu>
)

storiesOf('Menu Component', module)
.add('Menu', defaultMenu )
.add('Vertical Menu', verticalMenu)