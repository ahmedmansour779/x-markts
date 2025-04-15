"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import product1 from "@images/products/product4.jpg";
import Image from "next/image";
export default function DiscountSlider() {
	return (
		<>
			<section className="bg-yellow-8 flat-spacing-18 ">
				<div className="flat-title d-flex justify-content-center flex-md-row align-items-center"> 
					<span className="title wow fadeInUp  " data-wow-delay="0s">
					See our 50% discounts</span>
					<div className="tf-countdown-v2 ">
						<div className="js-countdown  wow fadeInUp">
							<div aria-hidden="true" className="countdown__timer">
								<span className="countdown__item bg-white">
									<span className="countdown__value countdown__value--0 js-countdown__value--0">
										159
									</span>
									<span className="countdown__label">Days</span>
								</span>
								<span className="countdown__item bg-white">
									<span className="countdown__value countdown__value--1 js-countdown__value--1">
										21
									</span>
									<span className="countdown__label">Hours</span>
								</span>
								<span className="countdown__item bg-white">
									<span className="countdown__value countdown__value--2 js-countdown__value--2">
										15
									</span>
									<span className="countdown__label">Mins</span>
								</span>
								<span className="countdown__item bg-white">
									<span className="countdown__value countdown__value--3 js-countdown__value--3">
										25
									</span>
									<span className="countdown__label">Secs</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="wrap-carousel ">
						<Swiper
							modules={[Navigation, Pagination]}
							navigation={{
								nextEl: ".disc-prev-slider",
								prevEl: ".disc-next-slider",
							}}
							pagination={{
								clickable: true,
								el: ".discount-dots ",
							}}
							spaceBetween={30} // Space between slides
							breakpoints={{
								// Breakpoints for responsive design
								320: {
									slidesPerView: 1, // 1 slide for very small screens
								},
								768: {
									slidesPerView: 2, // 4 slides for tablets
								},
							}}
							className=" swiper-horizontal swiper-backface-hidden"
							dir="ltr"
						>
							<div
								className="swiper-wrapper"
								style={{
									transitionDuration: "0ms",
									transform: "translate3d(-605.5px, 0px, 0px)",
									transitionDelay: "0ms",
								}}
							>
								<SwiperSlide>
									<div className="testimonial-item style-row">
										<div className="image radius-5 o-hidden">
											<Image
												data-src={product1}
												alt="image"
												loading="lazy"
												src={product1}
												style={{ color: "transparent" }}
											/>
										</div>
										<div className="content">
											<div className="text">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="author pb_8 line-black">
												<div className="name">Name of product</div>
												<div className="metas">Prand of product</div>
											</div>
											<div className="product">
												<div className="img-thumb radius-5 o-hidden ">
													<Image
														data-src={product1}
														alt="image"
														loading="lazy"
														src={product1}
														style={{ color: "transparent" }}
													/>
												</div>
												<div className="content-wrap">
													<div className="product-title">
														<Link href="#">Offer name</Link>
													</div>
													<div className="price">$54.00</div>
												</div>
												<Link href="#">
													<i className="icon-arrow1-top-left" />
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonial-item style-row">
										<div className="image radius-5 o-hidden">
											<Image
												data-src={product1}
												alt="image"
												loading="lazy"
												src={product1}
												style={{ color: "transparent" }}
											/>
										</div>
										<div className="content">
											<div className="text">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="author pb_8 line-black">
												<div className="name">Name of product</div>
												<div className="metas">Prand of product</div>
											</div>
											<div className="product">
												<div className="img-thumb radius-5 o-hidden ">
													<Image
														data-src={product1}
														alt="image"
														loading="lazy"
														src={product1}
														style={{ color: "transparent" }}
													/>
												</div>
												<div className="content-wrap">
													<div className="product-title">
														<Link href="#">Offer name</Link>
													</div>
													<div className="price">$54.00</div>
												</div>
												<Link href="#">
													<i className="icon-arrow1-top-left" />
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonial-item style-row">
										<div className="image radius-5 o-hidden">
											<Image
												data-src={product1}
												alt="image"
												loading="lazy"
												src={product1}
												style={{ color: "transparent" }}
											/>
										</div>
										<div className="content">
											<div className="text">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="author pb_8 line-black">
												<div className="name">Name of product</div>
												<div className="metas">Prand of product</div>
											</div>
											<div className="product">
												<div className="img-thumb radius-5 o-hidden ">
													<Image
														data-src={product1}
														alt="image"
														loading="lazy"
														src={product1}
														style={{ color: "transparent" }}
													/>
												</div>
												<div className="content-wrap">
													<div className="product-title">
														<Link href="#">Offer name</Link>
													</div>
													<div className="price">$54.00</div>
												</div>
												<Link href="#">
													<i className="icon-arrow1-top-left" />
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
						<div className="nav-sw  disc-next-slider nav-next-slider  nav-next-testimonial lg ">
							<span className="icon icon-arrow-left" />
						</div>
						<div className="nav-sw disc-prev-slider nav-prev-slider nav-prev-testimonial lg  ">
							<span className="icon icon-arrow-right" />
						</div>
						<div className=" discount-dots sw-dots style-2 sw-pagination-testimonial justify-content-center spd277  swiper-pagination-bullets swiper-pagination-horizontal"></div>
					</div>
				</div>
			</section>
		</>
	);
}
