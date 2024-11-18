/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4gV6l3IMnQJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {SelectValue, SelectTrigger, SelectItem, SelectContent, Select} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import Navbar from "@/app/components/navbar";
import { useDispatch } from 'react-redux';
import {addItem} from "@/app/features/cart/shoppingCartSlice";

export default function ProductSite() {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const productToAdd = { id: 1, name: 'Product Name', price: 9.99 }; // Beispielprodukt
        dispatch(addItem(productToAdd));
    };

    return (
        <>
            <Navbar></Navbar>

            <div className="flex justify-center py-8">
                <div className="flex max-w-6xl">
                    <img
                        alt="Green Pullover"
                        className="w-1/2 h-auto bg-gray-200"
                        height="600"
                        src="/pullover.png"
                        style={{
                            aspectRatio: "600/600",
                            objectFit: "cover",
                        }}
                        width="600"
                    />
                    <div className="w-1/2 pl-8">
                        <h2 className="text-xl font-semibold">Neue Saison</h2>
                        <h1 className="text-3xl font-bold my-2">Jacquemus</h1>
                        <h3 className="text-2xl font-normal">La Maille Belo Pullover</h3>
                        <p className="text-2xl font-bold my-4">560 CHF</p>
                        <p className="text-sm mb-4">Inklusive Importzoll</p>
                        <div className="flex items-center mb-4">
                            <Link className="text-sm underline mr-4" href="#">
                                Größentabelle
                            </Link>
                        </div>
                        <Select>
                            <SelectTrigger id="size">
                                <SelectValue placeholder="Größe auswählen (Kleidung Standardgröße)"/>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="small">Small</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="large">Large</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex space-x-4 my-4">
                            <Button className="bg-black text-white" onClick={handleAddToCart}>In den Warenkorb</Button>
                            <Button variant="ghost">
                                <HeartIcon className="text-black"/>
                            </Button>
                        </div>
                        <p className="text-sm">VORAUSSICHTLICHE LIEFERUNG</p>
                        <p className="text-sm font-bold">28. Feb. – 1. März</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function HeartIcon(props: any) {
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
            <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
    )
}


