import {fetchNotifications} from "@/app/_lib/queries/notifications";
import NotificationCard from "@/app/(main)/notifications/NotificationCard";

export default async function NotificationFeed() {
    // TODO: enable infinite scroll
    const notifications = await fetchNotifications();

    return (
        <div className='flex flex-col'>
            {notifications.map(notification => <NotificationCard notification={notification} />)}
        </div>
    )
}
