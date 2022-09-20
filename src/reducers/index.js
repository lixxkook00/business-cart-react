import { combineReducers } from "redux";
import { cart } from "./cart";
import { cardInfor } from "./infor";
import { inforModal } from "./inforModal";
import { loadingPage } from "./utils";

const rootReducer = combineReducers({
    loading : loadingPage,
    infor : cardInfor,
    inforModal: inforModal,
    cart: cart,
})

export default rootReducer;
