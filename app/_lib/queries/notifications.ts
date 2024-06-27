import notificationFactory from "@/app/_lib/factories/notificationFactory";
import {Notification} from "@/app/_lib/definitions";

export async function fetchNotifications(): Promise<Notification[]> {
    return [
        notificationFactory(),
        notificationFactory(),
        notificationFactory(),
        notificationFactory(),
        notificationFactory(),
    ];
}
