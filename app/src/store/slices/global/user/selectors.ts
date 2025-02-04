import { createSelector } from "@reduxjs/toolkit";
import { ReducerKeys } from "store/constants";
import { RootState } from "store/types";
import { UserAuth } from "./types";
import { PRICING } from "features/pricing";
import APP_CONSTANTS from "config/constants";

export const getUserGlobalState = (state: RootState) => {
  return state[ReducerKeys.GLOBAL]["user"];
};

// TODO: Make "user" as a separate slice
// export const getUserAuthDetails = createSelector(getUserGlobalState(state: RootState): UserAuth => {
export const getUserAuthDetails = createSelector(
  getUserGlobalState,
  (user): UserAuth => ({
    // return state[ReducerKeys.GLOBAL]["user"];
    // return {
    ...user,
    details: {
      isBackupEnabled: true,
      isLoggedIn: true,
      isPremium: true,
      isSyncEnabled: true,
      organization: null,
      planDetails: {
        planId: PRICING.PLAN_NAMES.PROFESSIONAL,
        planName: PRICING.PLAN_NAMES.PROFESSIONAL,
        status: APP_CONSTANTS.SUBSCRIPTION_STATUS.ACTIVE,
        subscription: {
          cancelAtPeriodEnd: false,
          duration: "annually",
          endDate: "2030-04-16",
          id: "sub_1OvQeQDiNNz2hbmO5Wq51WsB",
          quantity: 9999,
          startDate: "2024-04-17",
        },
        type: "individual",
      },
      profile: {
        displayName: "Supasai H. boy",
        email: "boyskypart@gmail.com",
        isBackupEnabled: true,
        isEmailVerified: true,
        isSyncEnabled: true,
        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocL2pZkSwOB7MwKt7qrBUVGXzHdMcroYWPcbjVA5qZDPn8HX=s96-c",
        providerId: "google.com",
        uid: "aIfG0OowxOewTX5KriyGy7gS6fm1",
      },
      username: "user1710708589851",
    },
    isLimitReached: false,
    loggedIn: true,
    // };
  })
);
