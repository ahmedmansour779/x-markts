"use client";

import { handelLogin } from "@/api/auth/login";
import login from "@images/login.jpeg";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <>
      <section className="flat-spacing-21">
        <div className="container">
          <div className="tf-grid-layout gap30 lg-col-2">
            <div className="tf-content-left">
              <Image src={login} alt="image" className="img-fluid rounded-4" />
            </div>

            <div className="tf-content-right">
              <h5 className=" mb-3 fw-7 fs-1">Login</h5>
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
                  onSubmit={(e) => { handelLogin(e) }}
                >
                  <div className=" mb_15">
                    <fieldset className="w-100">
                      <input
                        autoComplete="abc@xyz.com"
                        id="email"
                        required
                        placeholder="Username or Email *"
                        type="text"
                        name="email"
                      />
                    </fieldset>
                  </div>

                  <div className="d-flex gap-15 mb_15">
                    <fieldset className="w-100">
                      <input
                        id="password"
                        required
                        placeholder="Your password *"
                        type="password"
                        name="password"
                      />
                    </fieldset>
                  </div>
                  <div className="d-flex gap-15 mb_15">
                    <fieldset className="w-100">
                      <input
                        id="code"
                        required
                        placeholder="Security code *"
                        type="text"
                        name="code"
                      />
                    </fieldset>
                    <fieldset className="w-100">
                      <div className=" h-100 rounded-1 d-flex align-items-center justify-content-center fw-7 fs-4 bg-color-light-green" >
                        <span className="text-success me-1">8</span>
                        <span className="text-danger me-1">6</span>
                        <span className="text-info me-1">7</span>
                        <span className="text-warning me-1">5</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className=" mb_15">
                    <fieldset className="w-100 ">
                      <div className="fieldset-radio mb_20 d-flex align-items-center">
                        <input
                          required
                          id="bank"
                          className="tf-check rounded-1"
                          type="checkbox"
                          name="payment"
                        />
                        <label htmlFor="bank" className="ms-2 text_black-3">Remember me</label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="send-wrap">
                    <button
                      type="submit"
                      className="tf-btn  radius-3 btn-fill animate-hover-btn justify-content-center"
                    >
                      Login
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
