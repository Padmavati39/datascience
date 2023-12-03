import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="text-center p-5 bg-gray-50">
				<ul className="flex flex-col sm:flex-row sm:gap-4 justify-center">
					<p className="text-gray-800 pb-2 text-xl">
						Get connected with us on <span className="text-blue-600">social networks</span>
					</p>
					<div className="flex gap-6 justify-center">
						<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
						<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
						<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
						<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
					</div>
				</ul>
			</div>
			<div className="bg-gray-50 h-1/2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4  text-center">
				<div className="p-5 sm:border-r-2 sm:border-b-2 md:border-hidden">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
						INDEED INSPIRING <span className="text-blue-600">INFOTECH</span>
						</p>
						<div className="flex gap-6 pb-5">
						We resource Corporate Trainers on demand. We Impart professsional Trainings in the domains that best fit for the corporates.
						</div>
					</ul>
				</div>
				<hr className=" sm:hidden" />
				<div className="p-5 sm:border-b-2 md:border-hidden">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Products</p>
						<li className="hover:text-blue-600 cursor-pointer">
							All Courses
						</li>
						<li className="hover:text-blue-600 cursor-pointer">
							Data Science program
						</li>
						<li className="hover:text-blue-600 cursor-pointer">
							Machine learning
						</li>
						<li className="hover:text-blue-600 cursor-pointer">
							Business Analytics
						</li>
					</ul>
				</div>
				<hr className=" sm:hidden" />
				<div className="p-5 sm:border-r-2 md:border-hidden">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Address</p>
						<p>
							Indeed Inspiring Infotech
							Sr.No.48/2 Plot no.4, First floor,
							Near FED bank
							( Nearest landmark - Vijay Sales)
							Chandannagar Kharadi Pune - 411014
						</p>
					</ul>
				</div>
				<hr className=" sm:hidden" />
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
						<li className="pb-2 hover:text-blue-600 cursor-pointer">
							info@indeedinspiring.com
						</li>
						<li className="pb-2 hover:text-blue-600 cursor-pointer">
							(+91) 9850113269
						</li>
						<li className="pb-2 hover:text-blue-600 cursor-pointer">
							(+91) 9850603269
						</li>
						<li className="pb-2 hover:text-blue-600 cursor-pointer">
							(+91) 9850803269
						</li>
						<li className="pb-2 hover:text-blue-600 cursor-pointer">
							(+91) 9762203269
						</li>
					</ul>
				</div>
			</div>
			<hr className=" sm:hidden" />
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800">
					© 2023 Copyright:{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Prushal Technology Pvt. Ltd.{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;