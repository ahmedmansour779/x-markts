import React from "react";
import Link from "next/link";

export default function AccountDetails() {
	return (
		<>
			<div className="my-account-content account-edit">
				<div >
					<form  id="form-password-change" action="#">
						<div className="tf-field style-1 mb_15">
							<input
								className="tf-field-input tf-input"
								placeholder=" "
								id="property1"
								required
								type="text"
								name="first name"
							/>
							<label
								className="tf-field-label fw-4 text_black-2"
								htmlFor="property1"
							>
								First name
							</label>
						</div>
						<div className="tf-field style-1 mb_15">
							<input
								className="tf-field-input tf-input"
								placeholder=" "
								required
								id="property2"
								type="text"
								name="last name"
							/>
							<label
								className="tf-field-label fw-4 text_black-2"
								htmlFor="property2"
							>
								Last name
							</label>
						</div>
						<div className="tf-field style-1 mb_15">
							<input
								className="tf-field-input tf-input"
								placeholder=" "
								autoComplete="abc@xyz.com"
								required
								id="property3"
								type="email"
								name="email"
							/>
							<label
								className="tf-field-label fw-4 text_black-2"
								htmlFor="property3"
							>
								Email
							</label>
						</div>
						<h6 className="mb_20">Password Change</h6>
						<div className="tf-field style-1 mb_30">
							<input
								className="tf-field-input tf-input"
								placeholder=" "
								required
								autoComplete="current-password"
								id="property4"
								type="password"
								name="password"
							/>
							<label
								className="tf-field-label fw-4 text_black-2"
								htmlFor="property4"
							>
								Current password
							</label>
						</div>
						<div className="tf-field style-1 mb_30">
							<input
								className="tf-field-input tf-input"
								placeholder=" "
								id="property5"
								required
								autoComplete="current-password"
								type="password"
								name="password"
							/>
							<label
								className="tf-field-label fw-4 text_black-2"
								htmlFor="property5"
							>
								New password
							</label>
						</div>
						<div className="tf-field style-1 mb_30">
							<input
								className="tf-field-input tf-input"
								placeholder=" "
								id="property6"
								required
								autoComplete="current-password"
								type="password"
								name="password"
							/>
							<label
								className="tf-field-label fw-4 text_black-2"
								htmlFor="property6"
							>
								Confirm password
							</label>
						</div>
						<div className="mb_20">
							<button
								type="submit"
								className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
							>
								Save Changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
