import { h, Component } from 'preact';

import { Menu, MenuItem, MenuHeader, MenuDivider } from '../../../components/menu/';
import { Avatar } from '../../../components/avatar';

const AvatarRail = (props) => {
   let initials = props.firstName.charAt(0) + props.lastName.charAt(0);
   return (
      <Menu class="avatar-rail-menu">
         { 
            props.step > 1 && 
               <Avatar class="avatar-xxl centered" data={ initials } />
         }
         {
            props.step > 1 &&
               <MenuItem>
                  <h4 class="text-center m-2">{props.firstName}</h4>
               </MenuItem>
         }
         <div class={ props.step <= 3 ? "" : "hide-sm" } >
            <MenuDivider>Shrine Basics</MenuDivider>
            <MenuItem class={ props.step === 1 && "arrow-box" }>Name</MenuItem>
            <MenuItem class={ props.step === 2 && "arrow-box" }>Photo</MenuItem>
            <MenuItem class={ props.step === 3 && "arrow-box" }>Information</MenuItem>
         </div>
         <div class={ props.step > 3 ? "" : "hide-sm" } >
            <MenuDivider>Invite Others</MenuDivider>
            <MenuItem class={ props.step === 4 && "arrow-box" }>Invitation Template</MenuItem>
            <MenuItem class={ props.step === 5 && "arrow-box" }>Customize Invitation</MenuItem>
            <MenuItem class={ props.step === 6 && "arrow-box" }>Invite Collaborators</MenuItem>
         </div>
      </Menu>
   )
}

export { AvatarRail };
