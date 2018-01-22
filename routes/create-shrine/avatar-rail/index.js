import { h, Component } from 'preact';

import { Menu, MenuItem, MenuHeader, MenuDivider } from '../../../components/menu/';

const AvatarRail = (props) => {
   return (
      <Menu class="avatar-rail-menu">
            <MenuDivider>Shrine Basics</MenuDivider>
         <MenuItem>Name</MenuItem>
         <MenuItem>Photo</MenuItem>
         <MenuItem>Information</MenuItem>

         <MenuDivider>Invite Others</MenuDivider>
         <MenuItem>Invitation Template</MenuItem>
         <MenuItem>Customize Invitation</MenuItem>
         <MenuItem>Invite Collaborators</MenuItem>
      </Menu>
   )
}

export { AvatarRail };
