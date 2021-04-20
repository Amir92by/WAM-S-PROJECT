import { GET_CONTACT, GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, TOGGLE_FALSE, TOGGLE_TRUE
} from "../actionTypes/user"
const initState = {
   users: [],
   loadContacts: false,
   errors: [],
   isEdit: false,
   user: {}, //save get onecontact
}
const usersReducer = (state = initState, { type, payload }) => {
   switch (type) { 
       case GET_CONTACTS_LOAD: 
                return {  ...state, loadContacts: true}
       case GET_CONTACTS_SUCCESS: 
               return {...state, users: payload,  loadContacts: false }
       case GET_CONTACTS_FAIL:
                return {...state,errors: payload, loadContacts: false }
       case GET_CONTACT: 
                return {...state,user: payload }





                
       case TOGGLE_TRUE: return {
           ...state,
           isEdit: true
       }
       case TOGGLE_FALSE: return {
           ...state,
           isEdit: false
       }
       default: return state
   }
}
export default usersReducer
