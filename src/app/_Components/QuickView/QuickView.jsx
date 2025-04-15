'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import Link from "next/link";
import Image from "next/image";
import paypal from "@images/footer/paypal.png";
import det1 from "@images/det1.jpeg";
import det2 from "@images/det2.jpeg";
import det3 from "@images/det3.jpeg";
import det4 from "@images/det4.jpeg";


export default function QuickView() {
	return (
		<>
			<div
				className="modal fade modalDemo product-details "
				id="quick_view"
				aria-modal="true"
				role="dialog"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="header">
							<span
								className="icon-close icon-close-popup"
								data-bs-dismiss="modal"
							/>
						</div>
						<div className="wrap">
						<div className="tf-product-media-wrap thumbs-bottom ">
									<div className="thumbs-slider">
										<Swiper
											modules={[Navigation]}
											navigation={{
												prevEl: ".product-prev",
												nextEl: ".product-next",
											}}
									
											className=" swiper-initialized swiper-horizontal tf-product-media-main"
											dir="ltr"
											id="gallery-swiper-started"
										>
											<div
												className="swiper-wrapper"

											>
												<SwiperSlide
													className="swiper-slide swiper-slide-active"

												>
													<Link
														href="#"
														className="item"

													>
														<Image
															data-zoom={det1}
															data-src={det1}
															alt="image"
															loading="lazy"
															width={770}
															height={1075}
															className="tf-image-zoom lazyload"
															src={det1}
															style={{ color: "transparent" }}
														/>
													</Link>
												</SwiperSlide>

												<SwiperSlide
													className="swiper-slide swiper-slide-active"

												>
													<Link
														href="#"
														className="item"
														data-pswp-width={770}
														data-pswp-height={1075}
													>
														<Image
															data-zoom={det2}
															data-src={det2}
															alt="image"
															loading="lazy"
															className="tf-image-zoom lazyload"
															src={det2}
															style={{ color: "transparent" }}
														/>
													</Link>
												</SwiperSlide>

												<SwiperSlide
													className="swiper-slide swiper-slide-active"
													style={{ width: 532, marginRight: 10 }}
												>
													<Link
														href="#"
														className="item"
														data-pswp-width={770}
														data-pswp-height={1075}
													>
														<Image
															data-zoom={det3}
															data-src={det3}
															alt="image"
															loading="lazy"

															className="tf-image-zoom lazyload"
															src={det3}
															style={{ color: "transparent" }}
														/>
													</Link>
												</SwiperSlide>

												<SwiperSlide
													className="swiper-slide swiper-slide-active"
													style={{ width: 532, marginRight: 10 }}
												>
													<Link
														href="#"
														className="item"
														data-pswp-width={770}
														data-pswp-height={1075}
													>
														<Image
															data-zoom={det4}
															data-src={det4}
															alt="image"
															loading="lazy"

															className="tf-image-zoom lazyload"
															src={det4}
															style={{ color: "transparent" }}
														/>
													</Link>
												</SwiperSlide>


											</div>
											<div className="product-next swiper-button-next button-style-arrow thumbs-next" />
											<div className="product-prev swiper-button-prev button-style-arrow thumbs-prev " />
										</Swiper>
									
									</div>
								</div>
                            <div className="tf-product-info-wrap position-relative">
									<div className="tf-zoom-main" />
									<div className="tf-product-info-list other-image-zoom">
										<div className="tf-product-info-title">
											<h5>Canned beans</h5>
										</div>
										<div className="tf-product-info-badges">
											<div className="badges">Best seller</div>
											<div className="product-status-content">
												<i className="icon-lightning" />
												<p className="fw-6">
													Selling fast! 56 people have this in their carts.
												</p>
											</div>
										</div>
										<div className="tf-product-info-price">
											<div className="price-on-sale">$10.00</div>
											<div className="compare-at-price">$10.00</div>
											<div className="badges-on-sale">
												<span>20</span>% OFF
											</div>
										</div>
										<div className="tf-product-info-liveview">
											<div className="liveview-count">20</div>
											<p className="fw-6">People are viewing this right now</p>
										</div>
										<div className="tf-product-info-countdown">
											<div className="countdown-wrap">
												<div className="countdown-title">
													<i className="icon-time tf-ani-tada" />
													<p>HURRY UP! SALE ENDS IN:</p>
												</div>
												<div className="tf-countdown style-1">
													<div className="js-countdown">
														<div
															aria-hidden="true"
															className="countdown__timer"
														>
															<span className="countdown__item">
																<span className="countdown__value countdown__value--0 js-countdown__value--0">
																	162
																</span>
																<span className="countdown__label">Days :</span>
															</span>
															<span className="countdown__item">
																<span className="countdown__value countdown__value--1 js-countdown__value--1">
																	8
																</span>
																<span className="countdown__label">
																	Hours :
																</span>
															</span>
															<span className="countdown__item">
																<span className="countdown__value countdown__value--2 js-countdown__value--2">
																	4
																</span>
																<span className="countdown__label">Mins :</span>
															</span>
															<span className="countdown__item">
																<span className="countdown__value countdown__value--3 js-countdown__value--3">
																	27
																</span>
																<span className="countdown__label">Secs</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="tf-product-info-variant-picker">
											<div className="variant-picker-item">
												<div className="variant-picker-label">
													Size:
													<span className="fw-6 variant-picker-label-value">
														450 Gm
													</span>
												</div>
											</div>
										</div>
										<div className="tf-product-info-quantity">
											<div className="quantity-title fw-6">Quantity</div>
											<div className="wg-quantity">
												<span className="btn-quantity minus-btn">-</span>
												<input
													min={1}
													type="text"
													defaultValue={1}
													name="number"
												/>
												<span className="btn-quantity plus-btn">+</span>
											</div>
										</div>
										<div className="tf-product-info-buy-button">
											<form>
												<Link
													href="#"
													className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn "
												>
													<span> Add to cart - </span>
													<span className="tf-qty-price">$10.00</span>
												</Link>
												<Link
													href="#"
													className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
												>
													<span className="icon icon-heart " />
													<span className="tooltip"> Add to Wishlist</span>
													<span className="icon icon-delete" />
												</Link>
												<Link
													href="#compare"
													data-bs-toggle="offcanvas"
													aria-controls="offcanvasLeft"
													className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
												>
													<span className="icon icon-share " />
													<span className="tooltip">Share</span>
													<span className="icon icon-check" />
												</Link>
												<div className="w-100">
													<Link href="#" className="btns-full">
														Buy with
														<Image
															alt="PayPal"
															loading="lazy"
															width={64}
															height={18}
															src={paypal}

														/>
													</Link>
													<Link href="#" className="payment-more-option">
														More payment options
													</Link>
												</div>
											</form>
										</div>
										<div className="tf-product-info-extra-link">
											<Link
												href="#compare_color"
												data-bs-toggle="modal"
												className="tf-product-extra-icon"
											>
												<div className="icon">
													<i className="icon-compare" />
												</div>
												<div className="text fw-6">Compare product</div>
											</Link>
											<Link
												href="#ask_question"
												data-bs-toggle="modal"
												className="tf-product-extra-icon"
											>
												<div className="icon">
													<i className="icon-question" />
												</div>
												<div className="text fw-6">Ask a question</div>
											</Link>
											<Link
												href="#delivery_return"
												data-bs-toggle="modal"
												className="tf-product-extra-icon"
											>
												<div className="icon">
													<svg
														className="d-inline-block"
														xmlns="http://www.w3.org/2000/svg"
														width={22}
														height={18}
														viewBox="0 0 22 18"
														fill="currentColor"
													>
														<path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z" />
													</svg>
												</div>
												<div className="text fw-6">Delivery &amp; Return</div>
											</Link>
											<Link
												href="#share_social"
												data-bs-toggle="modal"
												className="tf-product-extra-icon"
											>
												<div className="icon">
													<i className="icon-share" />
												</div>
												<div className="text fw-6">Share</div>
											</Link>
										</div>
<div><a className="tf-btn fw-6 btn-line" href="/product-details">View full details<i className="icon icon-arrow1-top-left" /></a></div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
