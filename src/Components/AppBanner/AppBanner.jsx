import AppBannerBg from "../../assets/coffee-cover.jpg";
import AppStore from "../../assets/website/app_store.png";
import GooglePlay from "../../assets/website/play_store.png";
import { motion } from "framer-motion";

const bannerStyle = {
  backgroundImage: `url(${AppBannerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
export default function AppBanner() {
  return (
    <>
      <section className="container my-14">
        <div
          style={bannerStyle}
          className="sm:min-h-100 sm:flex sm:justify-end sm:items-center rounded-xl overflow-hidden"
        >
          <div className="">
            <div className="space-y-6 max-w-xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="text-2xl text-center sm:text-4xl font-bold"
              >
                Download Our App
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
                className="sm:px-20 text-center text-lightGray"
              >
                Experience the best coffee at your fingertips. Download our app
                to order your favorite brews, find nearby stores, and enjoy
                exclusive deals.
              </motion.p>
              {/* imgs link */}
              <div className="flex justify-center items-center gap-4">
                <a
                  href="#"
                  className="max-w-37.5 sm:max-w-30 md:max-w-50 cursor-pointer"
                >
                  <motion.img
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.4,
                    }}
                    src={AppStore}
                    alt="App Store"
                    className=""
                  />
                </a>
                <a
                  href="#"
                  className="max-w-37.5 sm:max-w-30 md:max-w-50 cursor-pointer"
                >
                  <motion.img
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.5,
                    }}
                    src={GooglePlay}
                    alt="Google Play"
                    className=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" text-center  space-y-6">
          <h2 className="text-4xl font-bold">Download Our App</h2>
          <p className="max-w-2xl mx-auto">
            Experience the best coffee at your fingertips. Download our app to
            order your favorite brews, find nearby stores, and enjoy exclusive
            deals.
          </p>
          <div className="flex justify-center items-center gap-5 mt-6">
            <img
              src={AppStore}
              alt="App Store"
              className="h-16 cursor-pointer"
            />
            <img
              src={GooglePlay}
              alt="Google Play"
              className="h-16 cursor-pointer"
            />
          </div>
        </div> */}
      </section>
    </>
  );
}
