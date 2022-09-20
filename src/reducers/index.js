import { combineReducers } from "redux";
import { cardInfor } from "./infor";
import { inforModal } from "./inforModal";
import { loadingPage } from "./utils";

const rootReducer = combineReducers({
    loading : loadingPage,
    infor : cardInfor,
    inforModal: inforModal,
})

export default rootReducer;
