import dayjs from "dayjs";

export type Notification = {
  type: string;
  user_for: User | {
    id: string;
  },
  caused_by: User | {
    id: string;
  },
  follow_id: string;
  tweet_id: string;
  viewed: boolean;
  created_at: dayjs.Dayjs;
  updated_at: dayjs.Dayjs;
}

export type User = {
  name: string;
  handle: string;
  email: string;
  password: string;
  avatar?: Image;
  created_at: dayjs.Dayjs;
  updated_at: dayjs.Dayjs;
}

export type Image = {
  type: string;
  src: string;
  alt: string;
}
