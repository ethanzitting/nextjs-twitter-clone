interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps = {}) {
    return (
        <div className={`${className} border border-black`}>
            <h1>Home</h1>
        </div>
    )
}
