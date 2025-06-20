export type PenaltyProps = {
  ordinance_code: string;
  description: string;
  creator: string;
  date_issues: string;
  timestamp: string;
  status: boolean;
};

export type UserManagementProps = {
  account_no: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  contact_no: string;
  address: string;
  role: string;
  status: boolean;
};

export type ServiceLogsProps = {
  account_no: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  date: string;
  time_in: string;
  time_out: string;
  role: string;
  post: string;
};
