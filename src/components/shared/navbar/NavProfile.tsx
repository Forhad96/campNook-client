
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavProfile() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <a className="relative inline-flex size-7 items-center justify-center rounded-full border-2 border-highlight text-white">
            <UserIcon/>
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>WishList</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}


import { UserIcon } from "../Icons/Icons";

export  function AvatarRoundedFullSmBadgeBottomIcon() {
  return (
    <>
      {/*<!-- Component: Rounded full sm sized icon avatar with bottom right badge --> */}
      <a
        href="#"
        className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white"
      >
       
        <span className="absolute -bottom-2 -right-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-xs text-white">
          7<span className="sr-only"> new emails </span>
        </span>
      </a>
      {/*<!-- End Rounded sm sized icon avatar with bottom right badge --> */}
    </>
  );
}
