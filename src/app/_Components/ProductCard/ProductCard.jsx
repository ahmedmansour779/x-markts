'use client'
import React, { useEffect } from "react";
import product1 from "@images/products/product1.jpg";
import product2 from "@images/products/product2.jpg";
import product3 from "@images/products/product3.jpg";
import product4 from "@images/products/product4.jpg";
import Image from "next/image";
import Link from "next/link";
import QuickView from "../QuickView/QuickView";
export default function ProductCard() {

	useEffect(() => {
		// Function to handle the click event
		const handleClick = (event) => {
		  const target = event.target;
		  if (target.classList.contains('icon-heart') || target.classList.contains('icon-share')) {
			target.classList.toggle('added');
		  }
		};
	
		// Attach the event listener to the document
		document.addEventListener('click', handleClick);
	
		// Clean up the event listener on unmount
		return () => {
		  document.removeEventListener('click', handleClick);
		};
	  }, []);



	return (
		<>
		<div className="py-4">
   
				<div className="wrapper-control-shop">
					<div className="grid-layout wrapper-shop" data-grid="grid-4">
						<div className="card-product fl-item">
							<div className="card-product-wrapper">
								<Link className="product-img" href="/product-details">
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-product"
										src={product1}
										style={{ color: "transparent" }}
									/>
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-hover"
										src={product1}
										style={{ color: "transparent" }}
									/>
								</Link>
								<div className="list-product-btn">
									<Link
										href="#quick_add"
										data-bs-toggle="modal"
										className="box-icon bg_white quick-add tf-btn-loading"
									>
										<span className="icon icon-bag" />
										<span className="tooltip">Quick Add</span>
									</Link>
									<span
									
										className="box-icon bg_white wishlist btn-icon-action"
									>
										<span className="icon icon-heart  " />
										<span className="tooltip"> Add To Wishlisted</span>
										<span className="icon icon-delete" />
									</span>
									<span
							
										className="box-icon bg_white compare btn-icon-action"
									>
										<span className="icon icon-share  " />
										<span className="tooltip"> Share </span>
										<span className="icon icon-check" />
									</span>
									<Link
										href="#quick_view"
										data-bs-toggle="modal"
										className="box-icon bg_white quickview tf-btn-loading"
									>
										<span className="icon icon-view" />
										<span className="tooltip">Quick View</span>
									</Link>
								</div>
							</div>
							<div className="card-product-info">
								<Link className="title link" href="/product-details">
									PLATE OF EGGS
								</Link>
								<span className="price">$16.95</span>
							</div>
						</div>
						<div className="card-product fl-item">
							<div className="card-product-wrapper">
								<Link className="product-img" href="/product-details">
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-product"
										src={product2}
										style={{ color: "transparent" }}
									/>
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-hover"
										src={product2}
										style={{ color: "transparent" }}
									/>
								</Link>
								<div className="list-product-btn">
									<Link
										href="#quick_add"
										data-bs-toggle="modal"
										className="box-icon bg_white quick-add tf-btn-loading"
									>
										<span className="icon icon-bag" />
										<span className="tooltip">Quick Add</span>
									</Link>
									<span
										className="box-icon bg_white wishlist btn-icon-action"
									>
										<span className="icon icon-heart " />
										<span className="tooltip"> Add To Wishlisted</span>
										<span className="icon icon-delete" />
									</span>
									<span
								
										className="box-icon bg_white compare btn-icon-action"
									>
										<span className="icon icon-share  " />
										<span className="tooltip"> Share </span>
										<span className="icon icon-check" />
									</span>
									<Link
										href="#quick_view"
										data-bs-toggle="modal"
										className="box-icon bg_white quickview tf-btn-loading"
									>
										<span className="icon icon-view" />
										<span className="tooltip">Quick View</span>
									</Link>
								</div>
							</div>
							<div className="card-product-info">
								<Link className="title link" href="/product-details">
									PLATE OF EGGS
								</Link>
								<span className="price">$16.95</span>
							</div>
						</div>
						<div className="card-product fl-item">
							<div className="card-product-wrapper">
								<Link className="product-img" href="/product-details">
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-product"
										src={product3}
										style={{ color: "transparent" }}
									/>
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-hover"
										src={product3}
										style={{ color: "transparent" }}
									/>
								</Link>
								<div className="list-product-btn">
									<Link
										href="#quick_add"
										data-bs-toggle="modal"
										className="box-icon bg_white quick-add tf-btn-loading"
									>
										<span className="icon icon-bag" />
										<span className="tooltip">Quick Add</span>
									</Link>
									<span
										
										className="box-icon bg_white wishlist btn-icon-action"
									>
										<span className="icon icon-heart " />
										<span className="tooltip"> Add To Wishlisted</span>
										<span className="icon icon-delete" />
									</span>
									<span
									
										className="box-icon bg_white compare btn-icon-action"
									>
										<span className="icon icon-share  " />
										<span className="tooltip"> Share </span>
										<span className="icon icon-check" />
									</span>
									<Link
										href="#quick_view"
										data-bs-toggle="modal"
										className="box-icon bg_white quickview tf-btn-loading"
									>
										<span className="icon icon-view" />
										<span className="tooltip">Quick View</span>
									</Link>
								</div>
							</div>
							<div className="card-product-info">
								<Link className="title link" href="/product-details">
									PLATE OF EGGS
								</Link>
								<span className="price">$16.95</span>
							</div>
						</div>
						<div className="card-product fl-item">
							<div className="card-product-wrapper">
								<Link className="product-img" href="/product-details">
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-product"
										src={product4}
										style={{ color: "transparent" }}
									/>
									<Image
										data-src="/images/products/orange-1.jpg"
										alt="image-product"
										loading="lazy"
										width={720}
										height={1005}
										placeholder="blur"
										className="lazyload img-hover"
										src={product4}
										style={{ color: "transparent" }}
									/>
								</Link>
								<div className="list-product-btn">
									<Link
										href="#quick_add"
										data-bs-toggle="modal"
										className="box-icon bg_white quick-add tf-btn-loading"
									>
										<span className="icon icon-bag" />
										<span className="tooltip">Quick Add</span>
									</Link>
									<span
										className="box-icon bg_white wishlist btn-icon-action"
									
									>
										<span className="icon icon-heart " />
										<span className="tooltip"> Add To Wishlisted</span>
										<span className="icon icon-delete" />
									</span>
									<span
										
										className="box-icon bg_white compare btn-icon-action"
									>
										<span className="icon icon-share  " />
										<span className="tooltip"> Share </span>
										<span className="icon icon-check" />
									</span>
									<Link
										href="#quick_view"
										data-bs-toggle="modal"
										className="box-icon bg_white quickview tf-btn-loading"
									>
										<span className="icon icon-view" />
										<span className="tooltip">Quick View</span>
									</Link>
								</div>
							</div>
							<div className="card-product-info">
								<Link className="title link" href="/product-details">
									PLATE OF EGGS
								</Link>
								<span className="price">$16.95</span>
							</div>
						</div>
					</div>
				</div>
			</div>
        
			<QuickView />
		</>
	);
}
