/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VNVHTEwUJ7I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 flex flex-col items-center">
                    <Avatar>
                        <AvatarImage alt="Felix Müller" src="/placeholder.svg?height=128&width=128" />
                        <AvatarFallback>Felix Müller</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-xl font-semibold">Felix Müller</h2>
                    <p className="text-sm text-gray-600">Fashion enthusiast exploring the world of style</p>
                    <div className="mt-4 flex gap-2">
                        <Button className="bg-gray-200 text-gray-700" variant="outline">
                            Cancel
                        </Button>
                        <Button className="bg-blue-600 text-white">Save</Button>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col mb-4 md:mb-0">
                            <label className="font-semibold text-gray-700">Name</label>
                            <Input placeholder="Felix Müller" type="text" />
                            <label className="font-semibold text-gray-700 mt-4">Phone</label>
                            <Input placeholder="+49123456789" type="tel" />
                            <label className="font-semibold text-gray-700 mt-4">Address</label>
                            <Input placeholder="123 Street, City, Country" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-gray-700">Billing Address</label>
                            <Input placeholder="Felix Müller" type="text" />
                            <label className="font-semibold text-gray-700 mt-4">Email</label>
                            <Input placeholder="felix@example.com" type="email" />
                            <label className="font-semibold text-gray-700 mt-4">Phone</label>
                            <Input placeholder="+49123456789" type="tel" />
                            <label className="font-semibold text-gray-700 mt-4">Address</label>
                            <Input placeholder="123 Street, City, Country" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Bestellungen</h3>
                <ScrollArea className="h-72 w-full rounded-md border">
                    <div className="space-y-4 p-4">
                        <div className="rounded-md border p-4">
                            <h4 className="text-lg font-semibold">Bestellung 1</h4>
                            <p className="text-gray-600">Schuhe ...</p>
                            <p className="text-gray-600">Hoodies</p>
                        </div>
                        <div className="rounded-md border p-4">
                            <h4 className="text-lg font-semibold">Bestellung 2</h4>
                            <CheckIcon className="text-green-500" />
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

function CheckIcon(props: any) {
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
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
