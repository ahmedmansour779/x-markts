'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import Link from 'next/link';

export default function Features() {
	return (
		<>

			<section className="flat-spacing-9 flat-iconbox-v2 featured-section">
				<div className="container">
					<div
						className="wrap-carousel wrap-mobile wow fadeInUp"
						data-wow-delay="0s"
						style={{ visibility: "visible", animationDelay: "0s" }}
					>
						<div
							className="swiper swiper-initialized swiper-horizontal tf-sw-mobile swiper-backface-hidden"
							dir="ltr"
						>
							<Swiper
							   slidesPerView={3}
							   breakpoints={{
								// Define breakpoints for different screen sizes
								100: {
								  slidesPerView: 1, // 2 slides per view on screens >= 640px
								
								},
								768: {
								  slidesPerView: 2, // 3 slides per view on screens >= 768px
								  
								},
								1024:{
									slidesPerView: 3, // 3 slides per view on screens >= 768px
								}
	
							  }}
								className="swiper-wrapper"
								style={{
									transitionDuration: "0ms",
									transitionDelay: "0ms",
									transform: "translate3d(0px, 0px, 0px)",
								}}
							>
								<SwiperSlide
									className="swiper-slide swiper-slide-active"
									style={{ width: "469.333px", marginRight: 15 }}
								>
									<div className="tf-icon-box text-center">
										<div className="icon">
											<i className="icon-shipping-1" />
										</div>
										<div className="content">
											<div className="title">Free Shipping</div>
											<p>Free shipping over order $120</p>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide
									className="swiper-slide swiper-slide-next"
									style={{ width: "469.333px", marginRight: 15 }}
								>
									<div className="tf-icon-box text-center">
										<div className="icon">
											<i className="icon-payment-1" />
										</div>
										<div className="content">
											<div className="title">Flexible Payment</div>
											<p>Pay with Multiple Credit Cards</p>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide
							
									style={{ width: "469.333px", marginRight: 15 }}
								>
									<div className="tf-icon-box text-center">
										<div className="icon">
											<i className="icon-return-1" />
										</div>
										<div className="content">
											<div className="title">14 Day Returns</div>
											<p>Within 30 days for an exchange</p>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="sw-dots style-2 sw-pagination-mb justify-content-center spd124 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
							<span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
