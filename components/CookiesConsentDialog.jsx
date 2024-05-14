"use client";

import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function CookieConsentDialog() {
	const [open, setOpen] = useState(true);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
		console.log("hasVisitedBefore", hasVisitedBefore);

		if (!hasVisitedBefore) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, []);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAgree = () => {
		console.log("User agreed to necessary cookies");
		localStorage.setItem("hasVisitedBefore", "true");
		const cookies = document.cookie.split(";");

		handleClose();
	};

	const handleDeny = () => {
		console.log("User denied cookies");

		const cookies = document.cookie.split(";");

		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i];
			const eqPos = cookie.indexOf("=");
			const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}

		handleClose();
	};

	if (!isClient) {
		return null;
	}

	return (
		<Dialog open={open}>
			<DialogContent>
				<DialogTitle>{"Use of Cookies"}</DialogTitle>
				<DialogDescription>
					{
						"We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."
					}
				</DialogDescription>
				<div className="flex justify-center gap-4">
					<Button onClick={handleDeny} variant="secondary">
						Turn off Cookies
					</Button>
					<Button onClick={handleAgree} variant="primary">
						Agree to Necessary
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
