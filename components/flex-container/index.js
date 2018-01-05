const FlexContainer = (props) => {
   return (
      <div class="flex-container">
         <div class="left-rail hide-xs" />
         <div class="left-gutter" />
         <div class="avatar-rail hide-lg">
            Avatar Rail
         </div>
         <div class="form-rail">
            {props.formRail}
         </div>
         <div class="dialogue-rail hide-sm">
            Dialogue Rail
         </div>
         <div class="right-gutter" />
      </div>
   );
};

export { FlexContainer };
