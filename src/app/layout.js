"use client";

import "../assets/css/font-icons.css"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "animate.css/animate.min.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../assets/css/bootstrap-select.min.css"; 
import "./globals.css";
import "./page.module.css";
import AddBootstrap from "./AddBootstrap";
import AddWow from "./AddWow";
import TopBar from "./_Components/TopBar/TopBar";
import Navbar from "./_Components/Navbar/Navbar";
import ToolBar from "./_Components/ToolBar/ToolBar";
import Footer from "./_Components/Footer/Footer";
import BackTop from "./_Components/BackTop/BackTop";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AddWow />
				<AddBootstrap />
				<TopBar />
				<Navbar />
				<main>{children}</main>
				<ToolBar />
				<BackTop/>
				<Footer />
			</body>
		</html>
	);
}
