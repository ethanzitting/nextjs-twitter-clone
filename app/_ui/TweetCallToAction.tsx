interface TweetCallToActionProps {
    className?: string;
}

export default function TweetCallToAction({
    className
}: TweetCallToActionProps = {}) {
    return (
        <div className={`${className} border border-black`}>
            What's Happening?
        </div>
    )
}
