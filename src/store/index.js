import { createStore } from 'redux';

export default function configureStore() {
   const store = createStore(()=> {
      return {
         message : 'Hello world',
         detail  : 'store data test'
      }
   });
   return store ;
}
