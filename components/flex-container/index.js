const FlexContainer = (props) => {
   return (
      <div class="flex-container">
         <div class="left-rail hide-xs" />
         <div class="left-gutter" />
         <div class="avatar-rail hide-lg">
            {props.avatarRail}
         </div>
         <div class="form-rail">
            {props.formRail}
         </div>
         <div class="dialog-rail hide-sm">
            {props.dialogRail}
         </div>
         <div class="right-gutter" />
      </div>
   );
};

export { FlexContainer };
