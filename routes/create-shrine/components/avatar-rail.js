import { h, Component } from 'preact';

import { Menu, MenuItem, MenuHeader, MenuDivider } from '../../../components/menu/';

const AvatarRail = (props) => {
   return (
      <Menu>
            <MenuDivider>Shrine Basics</MenuDivider>
         <MenuItem>1. Name</MenuItem>
         <MenuItem>2. Photo</MenuItem>
         <MenuItem>3. Information</MenuItem>

         <MenuDivider>Invite Others</MenuDivider>
         <MenuItem>4. Invitation Template</MenuItem>
         <MenuItem>5. Customize Invitation</MenuItem>
         <MenuItem>6. Invite Collaborators</MenuItem>
      </Menu>
   )
}

export { AvatarRail };
