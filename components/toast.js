import { Component } from 'preact';
import classNames from 'classnames';

const Toast = (props) => {
   let classes = classNames(
      'toast',
      {
         'toast-primary': props.primary,
         'toast-success': props.success,
         'toast-warning': props.warning,
         'toast-error': props.error,
         'd-none': !props.active
      }
   );
   return (
      <div class={classes}>
         {props.children}
      </div>
   );
}

export { Toast };

