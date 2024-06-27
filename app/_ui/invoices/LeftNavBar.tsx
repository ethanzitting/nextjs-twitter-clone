import {HashtagIcon} from "@heroicons/react/20/solid";
import {BellIcon, HomeIcon} from "@heroicons/react/24/outline";
import PersonIcon from "@/app/_ui/icons/PersonIcon";
import GearIcon from "@/app/_ui/icons/GearIcon";
import NavLink from "@/app/_ui/NavLink";

interface LeftNavBarProps {
    className?: string;
}

export default function LeftNavBar({ className }: LeftNavBarProps = {}) {
    return (
        <div className={`${className} border border-black`}>
            <NavLink href='/'>
                <HomeIcon className='h-6 w-6'/>
                <p>Home</p>
            </NavLink>
            <NavLink href='/notifications'>
                <BellIcon className='h-6 w-6'/>
                <p>Notifications</p>
            </NavLink>
            <NavLink href='/profile'>
                <PersonIcon className='h-6 w-6'/>
                <p>Profile</p>
            </NavLink>
            <NavLink href='/directory'>
                <HashtagIcon className='h-6 w-6'/>
                <p>Directory</p>
            </NavLink>
            <NavLink href='/settings'>
                <GearIcon className='h-6 w-6'/>
                <p>Settings</p>
            </NavLink>
        </div>
    )
}
