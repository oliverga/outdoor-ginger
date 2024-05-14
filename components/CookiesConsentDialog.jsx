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

	const handleClose = () => {
		setOpen(false);
	};

	const handleAgree = () => {
		// Handle the logic when the user agrees to necessary cookies
		console.log("User agreed to necessary cookies");
		handleClose();
	};

	const handleDeny = () => {
		// Handle the logic when the user denies cookies
		console.log("User denied cookies");
		handleClose();
	};

	if (!isClient) {
		return null;
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogClose className="close-button" onClick={handleClose} />
				<DialogTitle>{"Use of Cookies"}</DialogTitle>
				<DialogDescription>
					{
						"We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."
					}
				</DialogDescription>
				<div className="flex justify-center gap-4">
					<Button onClick={handleDeny} variant="secondary">
						Deny
					</Button>
					<Button onClick={handleAgree} variant="primary">
						Agree to Necessary
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
