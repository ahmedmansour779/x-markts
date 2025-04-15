import React from "react";
import Link from "next/link";

export default function SearchBar() {
	return (
		<>
		<section className="flat-spacing-10 page-search-inner">
			<div className="container">
			<div className="tf-search-head mb-2">
				<form className="tf-mini-search-frm">
					<fieldset className="text">
						<input
							required
							placeholder="Search"
							
							tabIndex={0}
							aria-required="true"
							type="text"
							defaultValue
							name="text"
						/>
					</fieldset>
					<button  type="submit">
						<i className="icon-search" />
					</button>
				</form>
				<div className="tf-col-quicklink">
					<span className="title">Quick link:</span>
					<Link href="/shop-collection-list">Fashion</Link>,
					<Link href="/home-men">Men</Link>,<Link href="/shop-women">Women</Link>,
					<Link href="/shop-collection-sub">Accessories</Link>
				</div>
			</div>
			</div>
		</section>
		</>
	);
}
