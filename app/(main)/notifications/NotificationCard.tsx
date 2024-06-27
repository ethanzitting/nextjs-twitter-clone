import PersonIcon from "@/app/_ui/icons/PersonIcon";
import {Notification} from "@/app/_lib/definitions";

interface NotificationCardProps {
    notification: Notification;
    className?: string;
}

export default function NotificationCard({notification, className}: NotificationCardProps) {
    return (
        <div className={`${className} flex flex-row`}>
            <PersonIcon className='h-8 w-8'/>
            <div className="flex flex-col">
                <img src={notification.caused_by?.avatar?.src} alt={notification.caused_by?.avatar?.alt} />
                <div>{notification.caused_by?.name}</div>
            </div>
        </div>
    )
}
