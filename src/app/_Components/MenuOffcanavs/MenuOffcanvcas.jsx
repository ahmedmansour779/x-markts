import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import eg from "@images/flag-eg-svgrepo-com.svg"
import { useState } from "react";

export default function MenuOffcanvcas({ toggleClasses, isClicked }) {


	const pathname = usePathname();
	const isActive = (path) => pathname === path;

	return (
		<>

			<div
				className={`offcanvas offcanvas-start canvas-mb    ${isClicked ? "show" : ""}`}
				id="mobileMenu"
				aria-modal="true"
				role="dialog"
			>
				<span
					className="icon-close icon-close-popup"
				
					onClick={toggleClasses}
				/>
				<div className="mb-canvas-content">
					<div className="mb-body">
						<ul className="nav-ul-mb" id="wrapper-menu-navigation">
							<li className="nav-mb-item">
								<Link
									href="/"
									className={`collapsed mb-menu-link ${isActive("/") ? "activeMenu" : ""}`}
									onClick={toggleClasses}
								>
									<span>HOME</span>
								</Link>
							</li>
							<li className="nav-mb-item">
								<Link
									href="/shop"
									className={`collapsed mb-menu-link ${isActive("/shop") ? "activeMenu" : ""}`}
									onClick={toggleClasses}
								>
									<span>SHOP</span>
								</Link>
							</li>
							<li className="nav-mb-item">
								<Link
									href="/all-products"
									className={`collapsed mb-menu-link ${isActive("/all-products") ? "activeMenu" : ""}`}
									onClick={toggleClasses}
								>
									<span>Products</span>
								</Link>
							</li>
							<li className="nav-mb-item">
								<Link
									href="/cart"
									className={`collapsed mb-menu-link ${isActive("/cart") ? "activeMenu" : ""}`}
									onClick={toggleClasses}
								>
									<span>CART</span>
								</Link>
							</li>
							

						</ul>
						<div className="mb-other-content mt-4">
							<div className="d-flex group-icon">
								<Link className="site-nav-icon" href="/wish-list" onClick={toggleClasses}>
									<i className="icon icon-heart" />
									Wishlist
								</Link>
								<Link className="site-nav-icon" href="/search" onClick={toggleClasses}>
									<i className="icon icon-search" />
									Search
								</Link>
							</div>
							<div className="mb-notice">
								<Link className="text-need" href="/contact" onClick={toggleClasses}>
									Need help ?
								</Link>
							</div>
							<ul className="mb-info">
								<li>
									1234 Mohamed Street,Cairo

								</li>
								<li>
									Email: <b>info@xmrts.com</b>
								</li>
								<li>
									Phone: <b>+02011 2563 6570</b>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-bottom">
						<Link className="site-nav-icon" href="/login" onClick={toggleClasses}>
							<i className="icon icon-account" />
							Login
						</Link>
						<div className="bottom-bar-language">
							<div className="tf-currencies">
								<div className="dropdown bootstrap-select image-select center style-default type-currencies  dropup">
									<button
										type="button"
										tabIndex={-1}
										className="btn dropdown-toggle btn-light   "
										title="EGP £ | United States"
									>
										<div className="filter-option">
											<div className="filter-option-inner">
												<div className="filter-option-inner-inner">
													<Image
														alt="image"
														loading="lazy"
														width={640}
														height={480}
														style={{ color: "transparent" }}
														src={eg}
													/>
													EGP £ | United States
												</div>
											</div>
										</div>
									</button>
									<div
										className="dropdown-menu  "
										style={{
											maxHeight: "899.688px",
											overflow: "hidden",
											minHeight: 142,
											position: "absolute",
											inset: "auto auto 0px 0px",
											margin: 0,
											transform: "translate(0px, -20px)",
										}}
										data-popper-placement="top-start"
									>
										<div
											className="inner show"
											style={{
												maxHeight: "869.688px",
												overflowY: "auto",
												minHeight: 112,
											}}
										>
											<ul
												className="dropdown-menu inner show"
												role="presentation"
												style={{ marginTop: 0, marginBottom: 0 }}
											>




											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="tf-languages">
								<div className="dropdown bootstrap-select image-select center style-default type-languages  dropup ">
									<select
										className="image-select center style-default type-languages"
										tabIndex="null"
									>
										<option value="en">English</option>
										<option value="ar">العربية</option>
										<option value="zh">简体中文</option>
										<option value="ur">اردو</option>
									</select>
									<button
										type="button"
										tabIndex={-1}
										className="btn dropdown-toggle btn-light   "
									>
										<div className="filter-option">
											<div className="filter-option-inner">
												<div className="filter-option-inner-inner">
													English
												</div>
											</div>
										</div>
									</button>
									<div
										className="dropdown-menu  "
										style={{
											maxHeight: "899.688px",
											overflow: "hidden",
											minHeight: 142,
											position: "absolute",
											inset: "auto auto 0px 0px",
											margin: 0,
											transform: "translate(0px, -20px)",
										}}
										data-popper-placement="top-start"
									>
										<div
											className="inner show"
											style={{
												maxHeight: "869.688px",
												overflowY: "auto",
												minHeight: 112,
											}}
										>
											<ul
												className="dropdown-menu inner show"
												role="presentation"
												style={{ marginTop: 0, marginBottom: 0 }}
											>
												<li className="selected active">
													<span className="dropdown-item active selected">
														<span className="text">English</span>
													</span>
												</li>
												<li className="selected ">
													<span className="dropdown-item ">
														<span className="text">العربية</span>
													</span>
												</li>
												<li className="selected ">
													<span className="dropdown-item ">
														<span className="text">简体中文</span>
													</span>
												</li>
												<li className="selected ">
													<span className="dropdown-item ">
														<span className="text">اردو</span>
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
