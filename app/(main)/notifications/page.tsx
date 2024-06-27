import React from "react";
import Header from "@/app/_ui/Header";
import NotificationFeed from "@/app/(main)/notifications/NotificationFeed";

export default function Page() {
    return (
        <div>
            <Header className="min-w-full"/>
            <NotificationFeed />
        </div>
    );
}
