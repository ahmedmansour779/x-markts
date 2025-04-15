"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import hero from "../../../assets/images/sneaker-1.jpg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
	return (
		<div className="tf-slideshow slider-effect-fade position-relative hero">
			<Swiper
				modules={[Pagination, Autoplay]}
				pagination={{
					clickable: true,
					el: ".swiper-pagination",
				}}
				
				loop={true}
				speed={1200}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				className="  swiper-horizontal tf-sw-slideshow swiper-backface-hidden"
				dir="ltr">
				<div className="swiper-wrapper">
					<SwiperSlide>
						<div className="wrap-slider">
							<Image alt="fashion-slideshow" width={1800} height={785} src={hero} style={{ color: "transparent" }} />
							<div className="box-content">
								<div className="container">
									<p className="fade-item fade-item-1 fw-8 mb_15">Facilitate shopping</p>
									<h1 className="fade-item fade-item-2 fw-8">Best Market</h1>
									<Link className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3" href="/all-products">
										<span>Shop collection </span>
										<i className="icon icon-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="wrap-slider">
							<Image alt="fashion-slideshow" width={1800} height={785} src={hero} style={{ color: "transparent" }} />
							<div className="box-content">
								<div className="container">
									<p className="fade-item fade-item-1 fw-8 mb_15">Facilitate shopping</p>
									<h1 className="fade-item fade-item-2 fw-8">Best Market</h1>
									<Link className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3" href="/all-products">
										<span>Shop collection </span>
										<i className="icon icon-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="wrap-slider">
							<Image alt="fashion-slideshow" width={1800} height={785} src={hero} style={{ color: "transparent" }} />
							<div className="box-content">
								<div className="container">
									<p className="fade-item fade-item-1 fw-8 mb_15">Facilitate shopping</p>
									<h1 className="fade-item fade-item-2 fw-8">Best Market</h1>
									<Link className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3" href="/all-products">
										<span>Shop collection </span>
										<i className="icon icon-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</div>
			</Swiper>

			<div className="wrap-pagination">
				<div className="container">
					<div className=" swiper-pagination sw-dots sw-pagination-slider rectangle-pagination    swiper-pagination-horizontal"></div>
				</div>
			</div>

			
		</div>
	);
}
