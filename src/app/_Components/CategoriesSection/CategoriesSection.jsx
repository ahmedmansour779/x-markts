"use client";
import { fetchCategories } from "@/api/getData/getData";
import slider1 from "@images/category/slider1.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function CategoriesSection() {
	const [categories, setCategories] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadCategories = async () => {
			const data = await fetchCategories();
			setCategories(data.data);
			setLoading(false);
		};

		loadCategories();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (!categories) return <div>Failed to load categories</div>;
	console.log(categories);

	return (
		<>
			<section className="flat-spacing-15 flat-testimonial catg-slider">
				<div className="container">
					<SectionTitle text="Shop by categorise" />
					<div className="wrap-carousel style-2">
						<Swiper
							loop={true}
							modules={[Navigation, Pagination]}
							navigation={{
								prevEl: ".nav-prev",
								nextEl: ".nav-next",
							}}
							spaceBetween={30} // Space between slides
							pagination={{
								clickable: true,
								el: ".catg-dots ",
							}}
							breakpoints={{
								// Breakpoints for responsive design
								320: {
									slidesPerView: 2, // 1 slide for very small screens
								},
								768: {
									slidesPerView: 4, // 4 slides for tablets
								},
								1024: {
									slidesPerView: 6, // 6 slides for desktops
								},
							}}
							className=" swiper-horizontal tf-sw-testimonial swiper-backface-hidden pt-4"
							dir="ltr"
						>
							<div className="swiper-wrapper">
								{
									categories.map(({ name, image }, index) => {
										return (
											<SwiperSlide key={index}>
												<div className="collection-item-circle has-bg hover-img">
													<Link
														className="collection-image img-style"
														href="/all-products"
													>
														<Image
															data-src={slider1}
															alt="collection-img"
															loading="lazy"
															src={image}
															width={500}
															height={500}
															style={{ color: "transparent" }}
														/>
													</Link>
													<div className="collection-content text-center">
														<Link
															className="link title fw-6"
															href="/all-products"
														>
															{name}
														</Link>
													</div>
												</div>
											</SwiperSlide>
										)
									})
								}
							</div>
						</Swiper>

						<div className="nav-sw nav-next nav-next-slider nav-next-testimonial lg snbp186 ">
							<span className="icon icon-arrow-left" />
						</div>
						<div className="nav-sw nav-prev nav-prev-slider nav-prev-testimonial lg snbn186">
							<span className="icon icon-arrow-right" />
						</div>

						<div className="catg-dots sw-dots style-2 sw-pagination-testimonial justify-content-center spd186 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
					</div>
				</div>
			</section>
		</>
	);
}
