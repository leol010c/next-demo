import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <header
            className="flex items-center h-14 px-4 border-b lg:h-20 xl:px-6">
            <Link className="mr-6 text-xl font-bold" href="/">
                Acme Apparel
            </Link>
            <nav className="hidden flex-1 min-w-0 mr-4 text-sm lg:flex">
                <Link className="font-medium" href="#">
                    Men
                </Link>
                <Link className="ml-4 font-medium" href="#">
                    Women
                </Link>
                <Link className="ml-4 font-medium" href="#">
                    Kids
                </Link>
                <Link className="ml-4 font-medium" href="/productsite">
                    Product
                </Link>
            </nav>
            <div className="flex-1 min-w-0"/>
            <Link href={'/shoppingcart'}>
                <Button className="ml-auto mr-2 lg:mr-4" size="sm" variant="outline">
                    <ShoppingBagIcon className="w-4 h-4"/>
                    <span className="sr-only">Open cart</span>
                </Button>
            </Link>
            <Link href={'/profile'}>
                <Button className="mr-2 lg:mr-4" size="icon" variant="ghost">
                    <UserIcon className="w-5 h-5"/>
                    <span className="sr-only">Profile</span>
                </Button>
            </Link>
        </header>
    )
}

function ShoppingBagIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
    )
}


function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    )
}