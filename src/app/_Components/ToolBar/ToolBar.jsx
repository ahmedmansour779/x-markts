import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ToolBar() {
	const pathname = usePathname(); // Get the current route path

	return (
		<div className="tf-toolbar-bottom type-1150">
			<div className={`toolbar-item ${pathname === "/" ? "active" : ""}`}>
				<Link href="/">
					<div className="toolbar-icon">
						<i className="icon-shop" />
					</div>
					<div className="toolbar-label">Shop</div>
				</Link>
			</div>
			<div className={`toolbar-item ${pathname === "/search" ? "active" : ""}`}>
				<Link href="/search">
					<div className="toolbar-icon">
						<i className="icon-search" />
					</div>
					<div className="toolbar-label">Search</div>
				</Link>
			</div>
			<div className={`toolbar-item ${pathname === "/orders" ? "active" : ""}`}>
				<Link href="/orders">
					<div className="toolbar-icon">
						<i className="icon-account" />
					</div>
					<div className="toolbar-label">Account</div>
				</Link>
			</div>
			<div className={`toolbar-item ${pathname === "/wish-list" ? "active" : ""}`}>
				<Link href="/wish-list">
					<div className="toolbar-icon">
						<i className="icon-heart" />
						<div className="toolbar-count">3</div>
					</div>
					<div className="toolbar-label">Wishlist</div>
				</Link>
			</div>
			<div className={`toolbar-item ${pathname === "/cart" ? "active" : ""}`}>
				<Link href="/cart">
					<div className="toolbar-icon">
						<i className="icon-bag" />
						<div className="toolbar-count">1</div>
					</div>
					<div className="toolbar-label">Cart</div>
				</Link>
			</div>
		</div>
	);
}
