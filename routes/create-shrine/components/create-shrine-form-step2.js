import { h, Component } from 'preact';

import { FileInput } from '../../../components/form-inputs/';

const CreateShrineFormStep2 = () => {
   return (
      <div>
         <h1>Create a New Shrine</h1>
         <h4>Step 2</h4>
         <FileInput 
            label="Upload a Photo" 
         />
      </div>
   );
}

export { CreateShrineFormStep2 }; 
