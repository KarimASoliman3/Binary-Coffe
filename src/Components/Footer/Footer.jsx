import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapLocation,
  FaTelegram,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import CreditCards from "../../assets/website/credit-cards.webp";
import { footerText } from "./../../../text";
import { motion } from "framer-motion";
import { tr } from "framer-motion/client";

export default function Footer() {
  return (
    <>
      <section className=" bg-linear-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
        <footer className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company details  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold uppercase">
                {footerText.firstColumn.logoName}
              </h3>
              <p className="text-sm max-w-75">
                {footerText.firstColumn.heroDescription2}
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaPhone /> {footerText.firstColumn.phone}
                </p>
                <p className="flex items-center gap-2">
                  <FaMapLocation /> {footerText.firstColumn.location}
                </p>
              </div>
            </motion.div>
            {/* company links  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              className="space-y-6 flex flex-col"
            >
              <h3 className="text-3xl font-bold">
                {footerText.secondColumn.QuickLinks}
              </h3>
              <ul className="space-y-2 ">
                <li>
                  <a href="#" className="">
                    {footerText.secondColumn.links.home}
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    {footerText.secondColumn.links.aboutUs}
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    {footerText.secondColumn.links.contact}
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    {footerText.secondColumn.links.PrivacyPolicy}
                  </a>
                </li>
              </ul>
            </motion.div>
            {/* company social  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="space-y-6 flex flex-col"
            >
              <h3 className="text-3xl font-bold">
                {footerText.thirdColumn.followUs}
              </h3>
              <div className="flex items-center gap-4">
                <a href="#">
                  <FaFacebook className="text-3xl hover:scale-110 duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:scale-110 duration-300" />
                </a>
                <a href="#">
                  <FaTelegram className="text-3xl hover:scale-110 duration-300" />
                </a>
                <a href="#">
                  <FaGoogle className="text-3xl hover:scale-110 duration-300" />
                </a>
              </div>
              <div className="mt-2 w-full">
                <h4 className="text-xl font-semibold mb-3">
                  {footerText.thirdColumn.PaymentMethods}
                </h4>
                <img src={CreditCards} alt="Credit Cards" className="w-[80%]" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.7,
            }}
            className="border-t-2 border-gray-300 mt-8 pt-8 text-[15px] text-center text-white"
          >
            Copyright &copy; {new Date().getFullYear()} KarimASoliman3. All
            rights reserved.
          </motion.div>
        </footer>
      </section>
    </>
  );
}
