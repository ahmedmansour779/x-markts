"use client";

import sub from "@images/subscription.png";
import Image from "next/image";

import { subscribeUser } from "@/api/auth/subscription";

export default function SubscribeSection() {
	return (
		<>
			<section className="flat-spacing-24 pb_0 tf-slideshow tf-form-sneaker">
				<div className="banner-wrapper">
					<Image
						data-src={sub}
						alt="collection-img"
						loading="lazy"
						width={1920}
						height={589}
						src={sub}
						style={{ color: "transparent" }}
					/>
					<div className="container-full">
						<div className="box-content bg_white">
							<div
								className="flat-title text-center mb_1 wow fadeInUp"
								data-wow-delay="0s"
								style={{ visibility: "visible", animationDelay: "0s" }}
							>
								<span className="title text_black fw-7">
									BECOME PART <br />
									OF THE Xmart DISTRICT
								</span>
								<p className="sub-title text_black">
									Promotions, new products and sales. Directly to your inbox.
								</p>
							</div>
							<div className="flat-subscrite-wrap">

								<form
									className="form-newsletter"
									// action="#"
									// method="post"
									onSubmit={(e) => subscribeUser(e)}
									acceptCharset="utf-8"
									data-mailchimp="true"
								>
									<div id="subscribe-content" className="subscribe-content">
										<fieldset className="email">
											<input
												required
												placeholder="Enter email address"
												tabIndex={0}
												aria-required="true"
												autoComplete="abc@xyz.com"
												type="email"
												name="emailForm"
											/>
										</fieldset>
										<div className="button-submit">
											<button
												className="tf-btn mt-0 bg-yellow-9 text_black btn-sm animate-hover-btn text-uppercase letter-2 fw-6"
												type="submit"
											>
												Subscribe
											</button>
										</div>
									</div>
									<div id="subscribe-msg" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
