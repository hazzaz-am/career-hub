import Logo from "../shared/Logo";
import social from "../assets/icons/social.png";
import {
	compnay,
	contact,
	product,
	support,
} from "../links/footer-links/footer-links";
import FooterMenuLink from "../components/Footer/FooterMenuLink";

export default function Footer() {
	return (
		<footer className="bg-dark1 section-gap py-[130px]">
			<div className="max-w-container mx-auto grid grid-cols-5 gap-[137px]">
				<div>
					<Logo place="footer" />
					<p className="text-[16px] text-[#fff] opacity-70 font-normal my-5">
						There are many variations of passages of Lorem Ipsum , but the
						majority have suffered alteration in some form.
					</p>
					<img src={social} alt="" />
				</div>
				<FooterMenuLink title="Company" links={compnay} />
				<FooterMenuLink title="Product" links={product} />
				<FooterMenuLink title="Support" links={support} />
				<FooterMenuLink title="Contact" links={contact} />
			</div>
		</footer>
	);
}
