"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Item from "@/components/Cart/Item";
import useCartStore from "@/lib/store/cartStore";
import useAuthStore from "@/lib/store/authStore";
import { use, useEffect, useState } from "react";
import {
	IconShoppingCart,
	IconCreditCard,
	IconUsers,
	IconMail,
} from "@tabler/icons-react";
import { toast } from "sonner";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function Page() {
	const {
		cart,
		addToCart,
		removeFromCart,
		removeAllFromCart,
		loadCart,
		removeAllItems,
	} = useCartStore();
	const { user } = useAuthStore();
	const [flow, setFlow] = useState(1);

	const [card, setCard] = useState({
		number: "",
		expiry: "",
		cvc: "",
		name: "",
		focus: "",
	});

	const [order, setOrder] = useState({
		email: "",
		country: "",
		firstName: "",
		lastName: "",
		address: "",
		zip: "",
		city: "",
		card,
		cart,
		orderId: "",
	});

	useEffect(() => {
		console.log(order);
	});

	useEffect(() => {
		loadCart();
	}, [loadCart]);

	const handleAddToCart = (product) => {
		addToCart(product);
		toast.success(`1 ${product.title} added to cart`);
	};

	const handleRemoveFromCart = (product) => {
		removeFromCart(product._id);
		toast.success(`1 ${product.title} removed from cart`);
	};

	const handleRemoveAllFromCart = (product) => {
		removeAllFromCart(product._id);
		toast.success(`All ${product.title} removed from cart`);
	};

	const handleRemoveAllItems = () => {
		setOrder((prevState) => ({
			...prevState,
			email: "",
			country: "",
			firstName: "",
			lastName: "",
			address: "",
			zip: "",
			city: "",
			card,
			cart,
		}));
		removeAllItems();
	};

	const handleNextFlow = (event) => {
		event.preventDefault();
		if (flow === 2) {
			const orderId = Math.floor(Math.random() * 1000000);
			setOrder((prevState) => ({ ...prevState, orderId }));
			setFlow(flow + 1);
			handleRemoveAllItems();
		} else {
			setFlow(flow + 1);
		}
	};

	const handlePreviousFlow = (event) => {
		event.preventDefault();
		setFlow(flow - 1);
	};

	const handleInputChange = (evt) => {
		const { name, value } = evt.target;

		let newValue = value;

		// Prevent non-numeric input for card number
		if (name === "number" || name === "cvc" || name === "expiry") {
			newValue = value.replace(/\D/g, "");
		}

		// Prevent non-alphabetic input for name
		if (name === "name") {
			newValue = value.replace(/[^a-zA-Z ]/g, "");
		}

		setCard((prev) => ({ ...prev, [name]: newValue }));
	};

	const handleInputFocus = (evt) => {
		setCard((prev) => ({ ...prev, focus: evt.target.name }));
	};

	return (
		<main className="pt-40 md:pt-48 mb-16">
			<section className="md:hidden fixed w-full px-2 top-16 z-10">
				<div className="bg-ogPrimary text-ogBG-base w-full px-4 pt-8 pb-4 flex justify-between rounded-xl font-display drop-shadow-lg">
					<p>Total Price</p>
					<p>
						<span className="font-sans text-sm">
							{cart
								.reduce((total, product) => {
									return (
										total +
										(user ? product.memberPrice : product.price) *
											product.quantity
									);
								}, 0)
								.toFixed(2)}
						</span>
						€
					</p>
				</div>
			</section>
			<div className="bg-ogPrimary w-full flex justify-between py-4 h-20 items-center overflow-hidden mb-8 max-w-7xl md:mx-auto">
				<Image
					src="/icons/flameWhite.svg"
					alt="Flame icon"
					width={200}
					height={200}
					className="rotate-90 h-24 -ml-10 md:-ml-20"
				/>
				<h1 className="font-display text-3xl text-ogBG-base uppercase font-bold bg-ogPrimary">
					Checkout
				</h1>
				<Image
					src="/icons/flameWhite.svg"
					alt="Flame icon"
					width={200}
					height={200}
					className="-rotate-90 h-24 -mr-10 md:-mr-20"
				/>
			</div>
			<section
				id="checkout"
				className="px-2 max-w-5xl md:mx-auto md:shadow-xl md:pl-12 md:pr-0 md:rounded-2xl overflow-hidden"
			>
				{flow < 3 && (
					<div className="md:grid grid-cols-checkoutLayout gap-16">
						<form className="md:py-12 md:h-144 md:flex md:flex-col justify-between">
							{flow === 1 && (
								<div>
									<div className="flex flex-col">
										<div className="flex">
											<IconMail size={32} />
											<label
												htmlFor="mail"
												className="font-display text-xl text-ogLabel-base mb-2"
											>
												Contact
											</label>
										</div>
										<input
											type="email"
											id="mail"
											placeholder="Email"
											value={order.email}
											onChange={(e) =>
												setOrder((prevState) => ({
													...prevState,
													email: e.target.value,
												}))
											}
										/>
									</div>
									<div className="flex items-center gap-2 font-normal text-ogLabel-muted text-xs">
										<Checkbox />
										<p>Subscribe to our newsletter</p>
									</div>
									<div className="flex flex-col mt-4">
										<div className="flex">
											<IconUsers size={32} />
											<label
												htmlFor="shipping"
												className="font-display text-xl text-ogLabel-base mb-2"
											>
												Shipping Address
											</label>
										</div>
										<select
											id="shipping"
											value={order.country}
											onChange={(e) =>
												setOrder((prevState) => ({
													...prevState,
													country: e.target.value,
												}))
											}
										>
											<option value="">Select a country</option>
											<option value="ar">Argentina</option>
											<option value="au">Australia</option>
											<option value="at">Austria</option>
											<option value="bd">Bangladesh</option>
											<option value="be">Belgium</option>
											<option value="br">Brazil</option>
											<option value="bg">Bulgaria</option>
											<option value="ca">Canada</option>
											<option value="cl">Chile</option>
											<option value="cn">China</option>
											<option value="co">Colombia</option>
											<option value="cz">Czech Republic</option>
											<option value="dk">Denmark</option>
											<option value="eg">Egypt</option>
											<option value="fi">Finland</option>
											<option value="fr">France</option>
											<option value="de">Germany</option>
											<option value="gr">Greece</option>
											<option value="hu">Hungary</option>
											<option value="in">India</option>
											<option value="id">Indonesia</option>
											<option value="ir">Iran</option>
											<option value="il">Israel</option>
											<option value="it">Italy</option>
											<option value="jp">Japan</option>
											<option value="kr">South Korea</option>
											<option value="my">Malaysia</option>
											<option value="mx">Mexico</option>
											<option value="nl">Netherlands</option>
											<option value="nz">New Zealand</option>
											<option value="no">Norway</option>
											<option value="pk">Pakistan</option>
											<option value="pe">Peru</option>
											<option value="ph">Philippines</option>
											<option value="pl">Poland</option>
											<option value="pt">Portugal</option>
											<option value="ro">Romania</option>
											<option value="ru">Russia</option>
											<option value="sa">Saudi Arabia</option>
											<option value="sg">Singapore</option>
											<option value="za">South Africa</option>
											<option value="es">Spain</option>
											<option value="se">Sweden</option>
											<option value="ch">Switzerland</option>
											<option value="th">Thailand</option>
											<option value="tr">Turkey</option>
											<option value="ua">Ukraine</option>
											<option value="ae">United Arab Emirates</option>
											<option value="uk">United Kingdom</option>
											<option value="us">United States</option>
											<option value="vn">Vietnam</option>
										</select>
										<input
											type="text"
											name="firstName"
											id="firstName"
											placeholder="First name"
											value={order.firstName}
											onChange={(e) =>
												setOrder((prevState) => ({
													...prevState,
													firstName: e.target.value,
												}))
											}
										/>
										<input
											type="text"
											name="lastName"
											id="lastName"
											placeholder="Last name"
											value={order.lastName}
											onChange={(e) =>
												setOrder((prevState) => ({
													...prevState,
													lastName: e.target.value,
												}))
											}
										/>
										<input
											type="text"
											name="address"
											id="address"
											placeholder="Street and house number"
											value={order.address}
											onChange={(e) =>
												setOrder((prevState) => ({
													...prevState,
													address: e.target.value,
												}))
											}
										/>
										<div className="md:flex justify-between gap-6">
											<input
												type="text"
												name="zip"
												id="zip"
												placeholder="ZIP code"
												className="w-full"
												value={order.zip}
												onChange={(e) =>
													setOrder((prevState) => ({
														...prevState,
														zip: e.target.value,
													}))
												}
											/>
											<input
												type="text"
												name="city"
												id="city"
												placeholder="City"
												className="w-full"
												value={order.city}
												onChange={(e) =>
													setOrder((prevState) => ({
														...prevState,
														city: e.target.value,
													}))
												}
											/>
										</div>
									</div>
								</div>
							)}
							{flow === 2 && (
								<div>
									<div className="flex">
										<IconCreditCard size={32} />
										<label
											htmlFor="mail"
											className="font-display text-xl text-ogLabel-base mb-2"
										>
											Payment
										</label>
									</div>
									<Cards
										number={card.number}
										expiry={card.expiry}
										cvc={card.cvc}
										name={card.name}
										focused={card.focus}
									/>
									<input
										type="text"
										name="name"
										placeholder="Name"
										className="input input-bordered input-sm bg-gray-800 w-full mt-4"
										value={card.name}
										onChange={handleInputChange}
										onFocus={handleInputFocus}
										required
									/>
									<input
										type="tel"
										pattern="\d{4} \d{4} \d{4} \d{4}"
										name="number"
										placeholder="Card Number"
										className="input input-bordered input-sm bg-gray-800 w-full"
										value={card.number}
										onChange={handleInputChange}
										onFocus={handleInputFocus}
										maxLength="16"
										required
									/>
									<div className="grid grid-cols-3 gap-3">
										<input
											type="tel"
											pattern="\d{2}\/\d{2}"
											name="expiry"
											placeholder="MM/YY"
											className="input input-bordered input-sm bg-gray-800 w-full col-span-2"
											value={card.expiry}
											onChange={handleInputChange}
											onFocus={handleInputFocus}
											maxLength="4"
											required
										/>

										<input
											type="tel"
											pattern="\d{3}"
											name="cvc"
											placeholder="CVC"
											className="input input-bordered input-sm bg-gray-800 w-full"
											value={card.cvc}
											onChange={handleInputChange}
											onFocus={handleInputFocus}
											maxLength="3"
											required
										/>
									</div>
									<div className="flex items-center gap-2 font-normal text-ogLabel-muted text-xs mb-2">
										<Checkbox />
										<p>
											Accept{" "}
											<Link
												target="_blank"
												href="https://www.google.com/search?client=firefox-b-d&q=terms+and+conditions"
												className="underline decoration-neutral-400"
											>
												Terms
											</Link>
											{" & "}
											<Link
												target="_blank"
												href="https://www.google.com/search?client=firefox-b-d&q=terms+and+conditions"
												className="underline decoration-neutral-400"
											>
												Conditions
											</Link>
										</p>
									</div>
								</div>
							)}
							<div className="mt-4 flex justify-end gap-4">
								{flow > 1 && (
									<Button
										variant="secondary"
										size="lg"
										onClick={handlePreviousFlow}
									>
										Back
									</Button>
								)}
								<Button variant="primary" size="lg" onClick={handleNextFlow}>
									{flow === 2 ? "Complete Order" : "Continue to Payment"}
								</Button>
							</div>
						</form>
						<section className="hidden md:flex flex-col justify-between p-12">
							<div>
								<div className="flex gap-2 items-center mb-2">
									<IconShoppingCart />
									<h2 className="font-display text-xl whitespace-nowrap">
										Order Summary
									</h2>
								</div>
								<div className="flex flex-col gap-4 h-[390px] overflow-y-scroll">
									{cart.length === 0 ? (
										<p className="text-center text-ogLabel-muted">
											Your cart is empty
										</p>
									) : (
										cart.map((product) => (
											<Item
												key={product._id}
												imgSrc={product.images[0]}
												name={product.title}
												price={user ? product.memberPrice : product.price}
												quantity={product.quantity}
												onAdd={() => handleAddToCart(product)}
												onRemove={() => handleRemoveFromCart(product)}
												onRemoveAll={() => handleRemoveAllFromCart(product)}
											/>
										))
									)}
								</div>
							</div>
							<div>
								<hr className="bg-neutral-300 h-[2px] w-full mx-auto rounded-full mt-3 mb-2" />
								<div className="flex justify-between text-xl font-display">
									<div>
										<p>Total Price</p>
										<p className="text-xs text-ogLabel-faint">
											Including{" "}
											<span className="font-sans text-[0.65rem]">
												{(
													cart.reduce((total, product) => {
														return (
															total +
															(user ? product.memberPrice : product.price) *
																product.quantity
														);
													}, 0) * 0.25
												).toFixed(2)}
											</span>
											€ in taxes
										</p>
									</div>
									<p>
										<span className="font-sans text-lg">
											{cart
												.reduce((total, product) => {
													return (
														total +
														(user ? product.memberPrice : product.price) *
															product.quantity
													);
												}, 0)
												.toFixed(2)}
										</span>
										€
									</p>
								</div>
							</div>
						</section>
					</div>
				)}
				{flow === 3 && (
					<div className="md:flex flex-col md:h-144 items-center justify-center md:p-12">
						<dotlottie-player
							src="/lottie/iconText.lottie"
							background="transparent"
							speed="1.5"
							style={{ width: "250px" }}
							direction="1"
							playMode="bounce"
							loop
							autoplay
						/>
						<div className="flex gap-2 md:-mt-24">
							<h1 className="font-display uppercase font-bold text-4xl">
								Order Complete
							</h1>
							<dotlottie-player
								src="/lottie/completed.lottie"
								background="transparent"
								speed="2"
								style={{ width: "80px" }}
								direction="1"
								playMode="bounce"
								loop
								autoplay
							/>
						</div>
						<h2 className="-mt-6 text-ogLabel-muted">
							Order Id: {order.orderId}
						</h2>
						<p className="md:text-center my-8 text-ogLabel-muted italic">
							Thank you for choosing OutDoor Ginger for your recent purchase! We
							appreciate your trust in our products and are delighted to have
							you as a valued customer. Your order is being processed with the
							utmost care, and we aim to provide you with a seamless and
							enjoyable shopping experience.
						</p>
						<p className="text-lg">
							Thank you for shopping with OutDoor Ginger!
						</p>
						<div className="flex justify-end">
							<Link href="/equipment" className="mt-6">
								<Button variant="primary">Continue Shopping</Button>
							</Link>
						</div>
					</div>
				)}
			</section>
		</main>
	);
}
