import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import eg from "@images/flag-eg-svgrepo-com.svg"
import Image from "next/image";
export default function TopBar() {
	return (
		<>
			<div className="tf-top-bar bg_white line">
				<div className="px_15 lg-px_40">
					<div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
						<ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
							<li>
								<Link
									href="#"
									className="box-icon w_28 round social-facebook bg_line"
								>
									<i className="icon fs-12 icon-fb" />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="box-icon w_28 round social-twiter bg_line"
								>
									<i className="icon fs-10 icon-Icon-x" />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="box-icon w_28 round social-instagram bg_line"
								>
									<i className="icon fs-12 icon-instagram" />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="box-icon w_28 round social-tiktok bg_line"
								>
									<i className="icon fs-12 icon-tiktok" />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="box-icon w_28 round social-pinterest bg_line"
								>
									<i className="icon fs-12 icon-pinterest-1" />
								</Link>
							</li>
						</ul>
						<div className="text-center overflow-hidden">
							<Swiper
								modules={[Autoplay]}
								slidesPerView={1}
								centeredSlides={true}
								loop={true}
								autoplay={{
									delay: 2500, // Delay between slides (in milliseconds)
									disableOnInteraction: false,

								}}
								speed={1500}
								className=" swiper-horizontal tf-sw-top_bar swiper-backface-hidden"
								dir="ltr"
							>
								<div
									className="swiper-wrapper"
									style={{
										transitionDuration: "1000ms",
										transform: "translate3d(-2200px, 0px, 0px)",
									}}
								>
									<SwiperSlide

										style={{ width: 1100 }}

									>
										<p className="top-bar-text fw-5">
										Summer sale discount off 70%
										<Link
												title="all collection"
												className="tf-btn btn-line"
												href="/all-products"
											>
												Shop now
												<i className="icon icon-arrow1-top-left" />
											</Link>
										</p>
									</SwiperSlide>
								
									<SwiperSlide


										style={{ width: 1100 }}
									>
										<p className="top-bar-text fw-5">
										Black Friday  discount off 70%
										</p>
									</SwiperSlide>

								</div>
							</Swiper>
						</div>
						<div className="top-bar-language tf-cur justify-content-end">
							<div className="tf-currencies">
								<div className="dropdown bootstrap-select image-select center style-default type-currencies  dropup">
									<button
										type="button"
										tabIndex={-1}
										className="btn dropdown-toggle btn-light   "
										title="EGP £ | Egypt"
									>
										<div className="filter-option">
											<div className="filter-option-inner">
												<div className="filter-option-inner-inner">
													<Image
														alt="image"
														loading="lazy"
														width={640}
														height={480}
														decoding="async"
														data-nimg={1}
														src={eg}
														style={{ color: "transparent" }}
													/>
													EGP £ | Egypt
												</div>
											</div>{" "}
										</div>
									</button>
									<div
										className="dropdown-menu  "
										data-popper-placement="bottom-start"
										style={{
											maxHeight: "899.688px",
											overflow: "hidden",
											minHeight: 142,
											position: "absolute",
											inset: "auto auto 0px 0px",
											margin: 0,
											transform: "translate(0px, 22px)",
										}}
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
												<li>
													<Link className="dropdown-item " href="#">
														<span className="text">
															<img
																alt="image"
																loading="lazy"
																width={640}
																height={480}
																decoding="async"
																data-nimg={1}
																src="/images/country/fr.svg"
																style={{ color: "transparent" }}
															/>
															EUR € | France
														</span>
													</Link>
												</li>
												<li>
													<Link className="dropdown-item " href="">
														<span className="text">
															<img
																alt="image"
																loading="lazy"
																width={640}
																height={480}
																decoding="async"
																data-nimg={1}
																src="/images/country/de.svg"
																style={{ color: "transparent" }}
															/>
															EUR € | Germany
														</span>
													</Link>
												</li>
												<li>
													<Link className="dropdown-item active selected" href="">
														<span className="text">
															<img
																alt="image"
																loading="lazy"
																width={640}
																height={480}
																decoding="async"
																data-nimg={1}
																src="/images/country/us.svg"
																style={{ color: "transparent" }}
															/>
															USD $ | United States
														</span>
													</Link>
												</li>
												<li>
													<Link className="dropdown-item " href="">
														<span className="text">
															<img
																alt="image"
																loading="lazy"
																width={640}
																height={480}
																decoding="async"
																data-nimg={1}
																src="/images/country/vn.svg"
																style={{ color: "transparent" }}
															/>
															VND ₫ | Vietnam
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="tf-languages">
								<div className="dropdown bootstrap-select image-select center style-default type-languages  dropup ">
									<select
										className="image-select center style-default type-languages show active"
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
												<div className="filter-option-inner-inner">English</div>
											</div>
										</div>
									</button>
									<div
										className="dropdown-menu  "
										data-popper-placement="bottom-start"
										style={{
											maxHeight: "899.688px",
											overflow: "hidden",
											minHeight: 142,
											position: "absolute",
											inset: "auto auto 0px 0px",
											margin: 0,
											transform: "translate(0px, 22px)",
										}}
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
													<Link className="dropdown-item active selected" href="">
														<span className="text">English</span>
													</Link>
												</li>
												<li className="selected ">
													<Link className="dropdown-item " href="">
														<span className="text">العربية</span>
													</Link>
												</li>
												<li className="selected ">
													<Link className="dropdown-item " href="">
														<span className="text">简体中文</span>
													</Link>
												</li>
												<li className="selected ">
													<Link className="dropdown-item " href="">
														<span className="text">اردو</span>
													</Link>
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
	);
}
