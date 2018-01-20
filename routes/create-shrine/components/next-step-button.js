const NextStepButton = (props) => {
   return (
      <button
         class="btn btn-primary float-right mt-2"
         onClick={ props.onClick }
      >
         Next Step
      </button>
   );
}

export { NextStepButton };
