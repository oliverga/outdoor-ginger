"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import useAuthStore from "@/lib/store/authStore";
import { Button } from "../ui/button";

export default function ProductCard({ product }) {
  const { user } = useAuthStore();

  console.log("productcard user", user);

  return (
    <Card
      className=" bg-ogBG-base rounded-xl overflow-hidden shadow w-full max-w-sm h-fit"
      key={product._id}
    >
      {product.images && product.images.length > 0 && (
        <Link href={`/equipment/${product.slug.current}`}>
          <Image
            src={urlFor(product.images[0]).url()}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover w-full"
          />
        </Link>
      )}
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Link href={`/equipment/${product.slug.current}`}>
            <CardTitle className="text-xl font-medium">
              {product.title}
            </CardTitle>
          </Link>
          {user ? (
            <div className="flex flex-col gap-2">
              <p className="text-lg line-through text-ogLabel-faint">
                {product.price} EUR
              </p>
              <div>
                <p className="text-sm text-ogLabel-faint">Member price</p>
                <p className="text-lg font-medium text-ogPrimary">
                  {product.memberPrice} EUR
                </p>
              </div>
            </div>
          ) : (
            <p className="text-lg">{product.price} EUR</p>
          )}
          <CardDescription className="text-sm">
            {product.description}
          </CardDescription>
        </div>
        <Button variant="primary" className="">
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
