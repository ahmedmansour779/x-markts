"use client";
import React from "react";
import Link from "next/link";
import you1 from "@images/you might like 1.jpg"
import you2 from "@images/you might like 2.jpg"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay } from 'swiper/modules';
import SectionTitle from "../SectionTitle/SectionTitle";
export default function YouMightLike() {
	return (
		<>
			<section className="flat-spacing-29">
				<div className="container">
					<SectionTitle text="you might like" />
					
					<Swiper

					    spaceBetween={30} // Space between slides
						breakpoints={{
							// Breakpoints for responsive design
							320: {
								slidesPerView: 1, // 1 slide for very small screens
							},
							768: {
								slidesPerView: 2, // 4 slides for tablets
							},
							1024: {
								slidesPerView: 2, // 6 slides for desktops
							},
						}}
						className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
						dir="ltr"
					>
						<div className="swiper-wrapper">
							<SwiperSlide
								className="swiper-slide swiper-slide-active"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="image"
												loading="lazy"
												src={you1}
												width={800}
												height={792}
											
												style={{ objectFit: "cover" }} // Optional styling
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											{/* <p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Beachwear on Sale</h5> */}
											<Link
												className="tf-btn btn-color-1 style-3 text-uppercase rounded-0 fw-6 animate-hover-btn letter-2"
												href="/all-products"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide
								className="swiper-slide swiper-slide-next"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="collection-img"
												loading="lazy"
										        width={200}
										        height={792}
									         	src={you2}
												 style={{ objectFit: "cover" }} // Optional styling
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											{/* <p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Athleisure Wear</h5> */}
											<Link
												className="tf-btn btn-color-1 text-uppercase style-3 rounded-0 fw-6 animate-hover-btn letter-2"
												href="/all-products"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide
								className="swiper-slide swiper-slide-active"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="image"
												loading="lazy"
												src={you1}
												width={800}
												height={792}
											
												style={{ objectFit: "cover" }} // Optional styling
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											{/* <p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Beachwear on Sale</h5> */}
											<Link
												className="tf-btn btn-color-1 style-3 text-uppercase rounded-0 fw-6 animate-hover-btn letter-2"
												href="/all-products"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide
								className="swiper-slide swiper-slide-next"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="collection-img"
												loading="lazy"
										        width={200}
										        height={792}
									         	src={you2}
												 style={{ objectFit: "cover" }} // Optional styling
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											{/* <p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Athleisure Wear</h5> */}
											<Link
												className="tf-btn btn-color-1 text-uppercase style-3 rounded-0 fw-6 animate-hover-btn letter-2"
												href="/all-products"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
				
						
						</div>
					</Swiper>
				</div>
			</section>
		</>
	);
}
