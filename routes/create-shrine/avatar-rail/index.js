import { h, Component } from 'preact';

import { Menu, MenuItem, MenuHeader, MenuDivider } from '../../../components/menu/';

const AvatarRail = (props) => {
   return (
      <Menu class="avatar-rail-menu">
         <MenuItem class="text-center">
            <h3>{props.name}</h3>
         </MenuItem>
         <MenuDivider>Shrine Basics</MenuDivider>
         <MenuItem class={ props.step === 1 && "arrow-box" }>Name</MenuItem>
         <MenuItem class={ props.step === 2 && "arrow-box" }>Photo</MenuItem>
         <MenuItem class={ props.step === 3 && "arrow-box" }>Information</MenuItem>

         <MenuDivider>Invite Others</MenuDivider>
         <MenuItem class={ props.step === 4 && "arrow-box" }>Invitation Template</MenuItem>
         <MenuItem class={ props.step === 5 && "arrow-box" }>Customize Invitation</MenuItem>
         <MenuItem class={ props.step === 6 && "arrow-box" }>Invite Collaborators</MenuItem>
      </Menu>
   )
}

export { AvatarRail };
