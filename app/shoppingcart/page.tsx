/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2unFkqfPcXd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-1">
                    <div className="grid gap-1">
                        <CardTitle>Shopping Cart</CardTitle>
                        <CardDescription>Review your items</CardDescription>
                    </div>
                    <Button className="md:ml-auto w-8 h-8" size="icon" variant="outline">
                        <TrashIcon className="w-4 h-4" />
                        <span className="sr-only">Remove all items</span>
                    </Button>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <Button size="sm">Continue Shopping</Button>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            alt="Thumbnail"
                            className="aspect-square rounded-lg object-cover border"
                            height="120"
                            src="/placeholder.svg"
                            width="120"
                        />
                        <div className="grid gap-1.5">
                            <h3 className="font-semibold text-base leading-none md:text-xl">Classic Tote Bag</h3>
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1">
                                    <p className="font-medium text-sm leading-none md:text-base">$49.99</p>
                                    <p className="text-sm leading-none md:text-base text-gray-500 dark:text-gray-400">In Stock</p>
                                </div>
                                <Button size="icon" variant="outline">
                                    <MinusIcon className="w-4 h-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <Input className="w-12 border-0 border-b text-center" type="number" value="1" />
                                <Button size="icon" variant="outline">
                                    <PlusIcon className="w-4 h-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                                <Button className="ml-auto" size="icon" variant="outline">
                                    <TrashIcon className="w-4 h-4" />
                                    <span className="sr-only">Remove item</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            alt="Thumbnail"
                            className="aspect-square rounded-lg object-cover border"
                            height="120"
                            src="/placeholder.svg"
                            width="120"
                        />
                        <div className="grid gap-1.5">
                            <h3 className="font-semibold text-base leading-none md:text-xl">Sneaker Company T-Shirt</h3>
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1">
                                    <p className="font-medium text-sm leading-none md:text-base">$24.99</p>
                                    <p className="text-sm leading-none md:text-base text-gray-500 dark:text-gray-400">In Stock</p>
                                </div>
                                <Button size="icon" variant="outline">
                                    <MinusIcon className="w-4 h-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <Input className="w-12 border-0 border-b text-center" type="number" value="1" />
                                <Button size="icon" variant="outline">
                                    <PlusIcon className="w-4 h-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                                <Button className="ml-auto" size="icon" variant="outline">
                                    <TrashIcon className="w-4 h-4" />
                                    <span className="sr-only">Remove item</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            alt="Thumbnail"
                            className="aspect-square rounded-lg object-cover border"
                            height="120"
                            src="/placeholder.svg"
                            width="120"
                        />
                        <div className="grid gap-1.5">
                            <h3 className="font-semibold text-base leading-none md:text-xl">Wireless Earbuds</h3>
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1">
                                    <p className="font-medium text-sm leading-none md:text-base">$79.99</p>
                                    <p className="text-sm leading-none md:text-base text-gray-500 dark:text-gray-400">In Stock</p>
                                </div>
                                <Button size="icon" variant="outline">
                                    <MinusIcon className="w-4 h-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <Input className="w-12 border-0 border-b text-center" type="number" value="1" />
                                <Button size="icon" variant="outline">
                                    <PlusIcon className="w-4 h-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                                <Button className="ml-auto" size="icon" variant="outline">
                                    <TrashIcon className="w-4 h-4" />
                                    <span className="sr-only">Remove item</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm md:gap-4 md:text-base">
                    <Label className="sr-only" htmlFor="coupon">
                        Coupon code
                    </Label>
                    <Input id="coupon" placeholder="Coupon code" type="text" />
                    <Button size="sm">Apply</Button>
                </div>
                <div className="flex flex-col gap-1 text-lg md:flex-row md:gap-2 md:text-xl">
                    <Button className="w-8 h-8" size="icon" variant="ghost">
                        <CreditCardIcon className="w-4 h-4" />
                        <span className="sr-only">Select payment method</span>
                    </Button>
                    <Button className="w-8 h-8" size="icon" variant="ghost">
                        <TruckIcon className="w-4 h-4" />
                        <span className="sr-only">Select shipping method</span>
                    </Button>
                    <Button className="w-8 h-8" size="icon" variant="ghost">
                        <GiftIcon className="w-4 h-4" />
                        <span className="sr-only">Add gift card</span>
                    </Button>
                    <Button className="ml-auto w-8 h-8" size="icon" variant="outline">
                        <TrashIcon className="w-4 h-4" />
                        <span className="sr-only">Remove all items</span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

function CreditCardIcon(props: any) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function GiftIcon(props: any) {
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
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect width="20" height="5" x="2" y="7" />
            <line x1="12" x2="12" y1="22" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
    )
}


function MinusIcon(props: any) {
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
            <path d="M5 12h14" />
        </svg>
    )
}


function PlusIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function TrashIcon(props: any) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}


function TruckIcon(props: any) {
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
            <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
            <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
            <circle cx="7" cy="18" r="2" />
            <path d="M15 18H9" />
            <circle cx="17" cy="18" r="2" />
        </svg>
    )
}
