import classNames from 'classnames';

const Dialog = (props) => {
   let btnClasses = classNames(
      'btn', 'btn-action', 'btn-sm', 'btn-primary', 'circle',
      'text-bold',
      'float-right',
      'm-1'
   );
   let diaClasses = classNames(
      'dialog',
      {
         'd-none': !props.active
      }
   );
   return (
      <div class="relative mt-1">
         <div class={diaClasses}>
            {props.children}
         </div>
         <button 
            class={btnClasses}
         >
            i
         </button>
      </div>
   );
}

export { Dialog };

