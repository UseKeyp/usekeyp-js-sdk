export interface Errors {
  [k: string]: {
    status: number;
    message: string;
  };
}

// TODO: double check info return object
export interface Info {
  [k: string]: {
    [k: string]: string;
  };
}

export interface TransferData {
  error: string;
  hash: string;
  status: "FAILED" | "SUCCESS";
}
