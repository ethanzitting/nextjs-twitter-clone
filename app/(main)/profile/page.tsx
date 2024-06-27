import React from "react";
import Header from "@/app/_ui/Header";
import TweetCallToAction from "@/app/_ui/TweetCallToAction";
import TweetFeed from "@/app/_ui/TweetFeed";

export default function Page() {
    return (
        <div>
            <Header className="min-w-full"/>
            <TweetCallToAction />
            <TweetFeed />
        </div>
    );
}
