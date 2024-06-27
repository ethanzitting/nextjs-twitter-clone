import dayjs from "dayjs";
import {Notification} from "@/app/_lib/definitions";

export default function notificationFactory(): Notification {
    return {
        type: 'follow',
        user_for: {
            id: '1',
        },
        caused_by: {
            id: '2',
        },
        follow_id: '3',
        tweet_id: '4',
        viewed: false,
        created_at: dayjs(),
        updated_at: dayjs(),
    }
}
