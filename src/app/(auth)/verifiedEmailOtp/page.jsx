"use client";

import { handelVerifiedEmail } from "@/api/auth/verifiedEmail";
import login from "@images/login.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function page() {
    const [massage, setMassage] = useState("")
    return (
        <>
            <section className="flat-spacing-21">
                <div className="container">
                    <div className="tf-grid-layout gap30 lg-col-2">
                        <div className="tf-content-left">
                            <Image src={login} alt="image" className="img-fluid rounded-4" />
                        </div>
                        <div className="tf-content-right">
                            <h5 className=" mb-3 fw-7 fs-1">Verified Email</h5>
                            <p className="mb-4">
                                Don't have an account?
                                <span>
                                    <Link href="signup" className="text-success ms-2">
                                        Create here
                                    </Link>
                                </span>
                            </p>
                            <div>
                                <form
                                    className="form-contact"
                                    // id="contactform"
                                    // action="./contact/contact-process.php"
                                    // method="post"
                                    onSubmit={(e) => { handelVerifiedEmail(e, setMassage) }}
                                >
                                    <div className=" mb_15">
                                        <fieldset className="w-100">
                                            <input
                                                autoComplete="abc@xyz.com"
                                                id="email"
                                                required
                                                placeholder="Your Email *"
                                                type="text"
                                                name="email"
                                            />
                                        </fieldset>
                                    </div>

                                    <div className="d-flex gap-15 mb_15">
                                        <fieldset className="w-100">
                                            <input
                                                id="otp"
                                                required
                                                placeholder="Your otp *"
                                                type="number"
                                                name="otp"
                                                maxLength={4}
                                            />
                                        </fieldset>
                                    </div>
                                    {
                                        massage && <p>{massage}</p>
                                    }

                                    <div className="send-wrap">
                                        <button
                                            type="submit"
                                            className="tf-btn  radius-3 btn-fill animate-hover-btn justify-content-center"
                                        >
                                            Verified
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
