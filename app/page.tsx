/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CV5uONEx8CV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/app/components/navbar";
import { Provider } from 'react-redux';
import store from "@/app/features/cart/store";


export default function Component() {
    return (
        <>
        <Provider store={store}>
            <Navbar></Navbar>

            <div className="flex justify-center bg-white py-8">
                <div className="flex space-x-8">
                    <div className="flex flex-col items-center">
                        <img
                            alt="Damen"
                            className="h-[400px] w-[300px] object-cover"
                            height="400"
                            src="/owmen.png"
                            style={{
                                aspectRatio: "300/400",
                                objectFit: "cover",
                            }}
                            width="300"
                        />
                        <span className="mt-4 text-lg font-bold uppercase">Women</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            alt="Herren"
                            className="h-[400px] w-[300px] object-cover"
                            height="400"
                            src="/men.png"
                            style={{
                                aspectRatio: "300/400",
                                objectFit: "cover",
                            }}
                            width="300"
                        />
                        <span className="mt-4 text-lg font-bold uppercase">Men</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            alt="Kinder"
                            className="h-[400px] w-[300px] object-cover"
                            height="400"
                            src="/kids.png"
                            style={{
                                aspectRatio: "300/400",
                                objectFit: "cover",
                            }}
                            width="300"
                        />
                        <span className="mt-4 text-lg font-bold uppercase">Kids</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center space-x-8 mt-8">
                <div className="flex flex-col items-center p-6 border rounded-lg">
                    <ShoppingBagIcon className="text-4xl"/>
                    <h3 className="mt-4 text-xl font-semibold">HOW DO I SHOP?</h3>
                    <p className="mt-2 text-base">How do you shop on ACME</p>
                </div>
                <div className="flex flex-col items-center p-6 border rounded-lg">
                    <FileQuestionIcon className="text-4xl"/>
                    <h3 className="mt-4 text-xl font-semibold">FAQ</h3>
                    <p className="mt-2 text-base">Do you have Questions?</p>
                </div>
                <div className="flex flex-col items-center p-6 border rounded-lg">
                    <HeadphonesIcon className="text-4xl"/>
                    <h3 className="mt-4 text-xl font-semibold">NEED HELP?</h3>
                    <p className="mt-2 text-base">Our Customer Service is here for you</p>
                </div>
            </div>

            <footer className="w-full py-6 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                        <div
                            className="flex items-center space-x-2 text-center lg:col-span-2 lg:space-x-4 lg:text-left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.44144651057!2d8.454334539703842!3d47.37752842331526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2zWsO8cmljaA!5e0!3m2!1sde!2sch!4v1708270130178!5m2!1sde!2sch"
                                width="400" height="200" style={{border: 0}} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="space-y-2 lg:col-span-2">
                            <h1 className="text-lg font-bold">Visit Us</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                3401-C Hillsborough Street, Raleigh, North Carolina, 27607
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold">Subscribe to our newsletter</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Sign up to receive updates in your inbox. We’ll let you know about the latest
                                components, features, and
                                stories.
                            </p>
                            <form className="flex space-x-2">
                                <Input className="max-w-sm flex-1" placeholder="Enter your email" type="email"/>
                                <Button type="submit">Subscribe</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </Provider>
        </>
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


function FileQuestionIcon(props: any) {
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
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/>
            <path d="M12 17h.01"/>
        </svg>
    )
}


function HeadphonesIcon(props: any) {
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
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
        </svg>
    )
}
