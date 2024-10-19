export interface SuccessResponseUserSignUp {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  access: string;
  refresh: string;
}
export interface SuccessResponseUserLogin {
  message: string;
  access: string;
  refresh: string;
}

export interface FailedResponseUserSignUp {
  email: Array<string>;
}
export interface FailedResponseUserSignUp {
  error: Array<string>;
}

export interface ForbiddenError {
  detail: string;
}
