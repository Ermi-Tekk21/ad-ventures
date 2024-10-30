import { DriversData } from "@/utils/Data/DriversData";
import { create } from "zustand";
const initialUserInfo = DriversData[0]

interface userInfo {
    email: string;
    status: string;
}

interface userStatusState {
    userStatus: userInfo;
    changeStatus: (email: string) => void;
}

const useManageUserStatus = create<userStatusState>((set) => ({
    userStatus: initialUserInfo, // initial status from imported data

    // function to manage status
    changeStatus: (email: string) =>
        set((state) => ({
            userStatus: state.userStatus.email === email
                ? { ...state.userStatus, status: "active" } // update status if email matches
                : state.userStatus // return current state if email does not match
        }))
}));

export default useManageUserStatus;
