import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
    return (
        <>
            <header className="flex items-center h-14 px-4 border-b lg:h-20 xl:px-6">
                <Link href="#" className="mr-6 text-xl font-bold">
                    Acme Apparel
                </Link>
                <nav className="hidden flex-1 min-w-0 mr-4 text-sm lg:flex">
                    <Link href="#" className="font-medium">
                        Men
                    </Link>
                    <Link href="#" className="ml-4 font-medium">
                        Women
                    </Link>
                    <Link href="#" className="ml-4 font-medium">
                        Kids
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

            <div className="flex justify-center bg-white py-8">
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8">
                    <CategoryCard image="/owmen.png" alt="Damen" title="Women"/>
                    <CategoryCard image="/men.png" alt="Herren" title="Men"/>
                    <CategoryCard image="/kids.png" alt="Kinder" title="Kids"/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-100 py-8 md:flex-row md:justify-around">
                <FeatureCard icon={<ShoppingBagIcon className="text-4xl"/>} title="HOW DO I SHOP?" description="How do you shop on ACME"/>
                <FeatureCard icon={<FileQuestionIcon className="text-4xl"/>} title="FAQ" description="Do you have Questions?"/>
                <FeatureCard icon={<HeadphonesIcon className="text-4xl"/>} title="NEED HELP?" description="Our Customer Service is here for you"/>
            </div>

            <footer className="w-full py-6 md:py-12 bg-gray-200">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                        <div className="space-y-2 text-center lg:text-left">
                            <h1 className="text-lg font-bold">Visit Us</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                3401-C Hillsborough Street, Raleigh, North Carolina, 27607
                            </p>
                        </div>
                        <div className="space-y-2 text-center lg:text-left">
                            <h2 className="text-lg font-bold">Subscribe to our newsletter</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Sign up to receive updates in your inbox. We’ll let you know about the latest components, features, and stories.
                            </p>
                            <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                <Input className="max-w-sm md:flex-1" placeholder="Enter your email" type="email"/>
                                <Button type="submit">Subscribe</Button>
                            </form>
                        </div>
                        <div className="flex items-center justify-center lg:col-span-2 lg:justify-end">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.44144651057!2d8.454334539703842!3d47.37752842331526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2zWsO8cmljaA!5e0!3m2!1sde!2sch!4v1708270130178!5m2!1sde!2sch"
                                width="400" height="200" style={{border: 0}} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

interface CategoryCardProps {
    image: string;
    alt: string;
    title: string;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function CategoryCard({ image, alt, title }: CategoryCardProps) {
    return (
        <div className="flex flex-col items-center">
            <img
                alt={alt}
                src={image}
                className="h-[400px] w-[300px] object-cover"
                width="300"
                height="400"
                style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                }}
            />
            <span className="mt-4 text-lg font-bold uppercase">{title}</span>
        </div>
    );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center p-6 border rounded-lg bg-white">
            {icon}
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-base">{description}</p>
        </div>
    );
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
    );
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
    );
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
    );
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
    );
}
