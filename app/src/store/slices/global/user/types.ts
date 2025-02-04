export interface UserAuth
{
  details?: {
    isBackupEnabled?: boolean;
    isLoggedIn: boolean;
    isPremium?: boolean;
    isSyncEnabled?: boolean;
    organization?: any;
    planDetails?: {
      planId: string;
      planName: string;
      status: string;
      subscription: {
        cancelAtPeriodEnd: boolean;
        duration: "annually" | "monthly";
        endDate: string;
        id: string;
        quantity: number;
        startDate: string;
      };
      type: "team" | "individual";
    };
    profile?: {
      displayName: string;
      email: string;
      isBackupEnabled?: boolean;
      isEmailVerified: boolean;
      isSyncEnabled?: boolean;
      photoURL: string;
      providerId: string;
      uid: string;
    };
    username: string;
  };
  isLimitReached?: boolean;
  loggedIn: boolean;
}
