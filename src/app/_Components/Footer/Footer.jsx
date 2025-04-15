import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import img1 from "@images/footer/img-1.png"
import img2 from "@images/footer/img-2.png"
import img3 from "@images/footer/img-3.png"
import img4 from "@images/footer/img-4.png"
import visa from "@images/footer/visa.png"
import eg from "@images/flag-eg-svgrepo-com.svg"
import logo1 from "@images/Xmarts.png"
export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer md-pb-70">
        <div className="footer-wrap">
          <div className="footer-body">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer-infor">
                    <div className="footer-logo">
                      <Link href="/"><Image alt="image" loading="lazy" width={136} height={21} style={{ color: 'transparent' }} src={logo1} /></Link>
                    </div>
                    <ul>
                      <li>
                        <p>
                        Address: 1234 Mohamed Street,Cairo 
                        </p>
                      </li>
                      <li>
                        <p>Email: <Link href="#">info@xmrts.com</Link></p>
                      </li>
                      <li>
                        <p>Phone: <Link href="#">(+02)01125636570</Link></p>
                      </li>
                    </ul>
                    <Link className="tf-btn btn-line" href="/contact-1">Get Branches<i className="icon icon-arrow1-top-left" /></Link>
                    <ul className="tf-social-icon d-flex gap-10">
                      <li>
                        <Link href="#" className="box-icon w_34 round social-facebook social-line"><i className="icon fs-14 icon-fb" /></Link>
                      </li>
                      <li>
                        <Link href="#" className="box-icon w_34 round social-twiter social-line"><i className="icon fs-12 icon-Icon-x" /></Link>
                      </li>
                      <li>
                        <Link href="#" className="box-icon w_34 round social-instagram social-line"><i className="icon fs-14 icon-instagram" /></Link>
                      </li>
                      <li>
                        <Link href="#" className="box-icon w_34 round social-tiktok social-line"><i className="icon fs-14 icon-tiktok" /></Link>
                      </li>
                      <li>
                        <Link href="#" className="box-icon w_34 round social-pinterest social-line"><i className="icon fs-14 icon-pinterest-1" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                  <div className="footer-heading "><h6>Help</h6></div>
                  <ul className="footer-menu-list ">
                    <li><Link className="footer-menu_item" href="/">Home</Link></li>
                    <li><Link className="footer-menu_item" href="/delivery-return">Returns + Exchanges</Link></li>
                    <li><Link className="footer-menu_item" href="/shipping-delivery">Shipping</Link></li>
                    <li><Link className="footer-menu_item" href="/terms-conditions">Terms &amp; Conditions</Link></li>
                    <li><Link className="footer-menu_item" href="/faq-1">FAQ’s</Link></li>
                    <li><Link className="footer-menu_item" href="/wishlist">My Wishlist</Link></li>
                  </ul>
                </div>
                <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                  <div className="footer-heading "><h6>About us</h6></div>
                  <ul className="footer-menu-list">
                    <li><Link className="footer-menu_item" href="/about-us">Our Story</Link></li>
                    <li><Link className="footer-menu_item" href="/our-store">Visit Our Store</Link></li>
                    <li><Link className="footer-menu_item" href="/contact-1">Contact Us</Link></li>
                    <li><Link className="footer-menu_item" href="/about-us">Account</Link></li>
                  </ul>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer-newsletter footer-col-block">
                    <div className="footer-heading "><h6>Sign Up for Email</h6></div>
                    
                    <div className="">
                      <div className="footer-menu_item">Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</div>
                      <div className="tfSubscribeMsg"><p style={{ color: 'rgb(52, 168, 83)' }}>You have successfully subscribed.</p></div>
                      <form className="form-newsletter subscribe-form" acceptCharset="utf-8" data-mailchimp="true" action="#" method="post">
                        <div className="subscribe-content">
                          <fieldset className="email">
                            <input required type="email" className="subscribe-email" placeholder="Enter your email...." tabIndex={0} aria-required="true" autoComplete="abc@xyz.com" name="email-form" />
                          </fieldset>
                          <div className="button-submit">
                            <button className="subscribe-button tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn" type="submit">Subscribe<i className="icon icon-arrow1-top-left" /></button>
                          </div>
                        </div>
                        <div className="subscribe-msg" />
                      </form>
                      <div className="tf-cur">
                        <div className="tf-currencies">
                          <div className="dropdown bootstrap-select image-select center style-default type-currencies dropup">
                            <button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" title="EGP £ | Egypt">
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                   <Image alt="image" loading="lazy" width={640} height={480} style={{ color: 'transparent' }} src={eg}/>EGP £ | Egypt
                                  </div>
                                </div>
                              </div>
                            </button>
                            {/* <div className="dropdown-menu" style={{ maxHeight: '899.688px', overflow: 'hidden', minHeight: 142, position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate(0px, -20px)' }} data-popper-placement="top-start">
                              <div className="inner show" style={{ maxHeight: '869.688px', overflowY: 'auto', minHeight: 112 }}>
                                <ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}>
                                  <li>
                                    <button className="dropdown-item">
                                      <span className="text">
                                       <Image alt="image" loading="lazy" width={640} height={480} style={{ color: 'transparent' }} src="/images/country/fr.svg" />EUR € |
                                        France
                                      </span>
                                    </button>
                                  </li>
                                  <li>
                                    <button className="dropdown-item">
                                      <span className="text">
                                       <Image alt="image" loading="lazy" width={640} height={480} style={{ color: 'transparent' }} src="/images/country/de.svg" />EUR € |
                                        Germany
                                      </span>
                                    </button>
                                  </li>
                                  <li>
                                    <button className="dropdown-item active selected">
                                      <span className="text">
                                       <Image alt="image" loading="lazy" width={640} height={480} style={{ color: 'transparent' }} src="/images/country/us.svg" />USD $ |
                                        United States
                                      </span>
                                    </button>
                                  </li>
                                  <li>
                                    <button className="dropdown-item">
                                      <span className="text">
                                       <Image alt="image" loading="lazy" width={640} height={480} style={{ color: 'transparent' }} src="/images/country/vn.svg" />VND ₫ |
                                        Vietnam
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="tf-languages">
                          <div className="dropdown bootstrap-select image-select center style-default type-languages dropup">
                            <select className="image-select center style-default type-languages" tabIndex="null">
                              <option value="en">English</option>
                              <option value="ar">العربية</option>
                              <option value="zh">简体中文</option>
                              <option value="ur">اردو</option>
                            </select>
                            <button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light">
                              <div className="filter-option">
                                <div className="filter-option-inner"><div className="filter-option-inner-inner">English</div></div>
                              </div>
                            </button>
                            <div className="dropdown-menu" style={{ maxHeight: '899.688px', overflow: 'hidden', minHeight: 142, position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate(0px, -20px)' }} data-popper-placement="top-start">
                              <div className="inner show" style={{ maxHeight: '869.688px', overflowY: 'auto', minHeight: 112 }}>
                                <ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}>
                                  <li className="selected active">
                                    <span className="dropdown-item active selected"><span className="text">English</span></span>
                                  </li>
                                  <li className="selected">
                                    <span className="dropdown-item"><span className="text">العربية</span></span>
                                  </li>
                                  <li className="selected">
                                    <span className="dropdown-item"><span className="text">简体中文</span></span>
                                  </li>
                                  <li className="selected">
                                    <span className="dropdown-item"><span className="text">اردو</span></span>
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
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                    <div className="footer-menu_item">
                      ©
                      {/* */}2024{/* */}
                      Anonymous. All Rights Reserved
                    </div>
                    <div className="tf-payment">
                     <Image  loading="lazy" width={48} height={30} style={{ color: 'transparent' }} src={visa} alt='payment' />
                     <Image  loading="lazy" width={49} height={30} style={{ color: 'transparent' }} src={img1} alt='payment'/>
                     <Image  loading="lazy" width={48} height={30} style={{ color: 'transparent' }} src={img2} alt='payment' />
                     <Image  loading="lazy" width={57} height={30} style={{ color: 'transparent' }} src={img3} alt='payment'/>
                     <Image  loading="lazy" width={49} height={30} style={{ color: 'transparent' }} src={img4} alt='payment'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}
