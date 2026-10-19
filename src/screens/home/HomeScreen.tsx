import {
  CateringService,
  Heroes,
  HomePageMetaTags,
  Portfolio,
} from "@src/components/home";
import { Navbar, VerticalMenuIcon } from "@src/uikits";

const HomeScreen = () => {
  return (
    <div>
      <HomePageMetaTags />
      <Navbar />
      <Heroes />
      <CateringService />
      <Portfolio />
      <footer className="bg-[#312729] text-rose-100 px-6 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <h2 className="text-xl font-bold">Contact Majestic Meal</h2>
          <p>184 Garden Street, Chicago, IL 60611</p>
          <p>
            <a href="tel:+13125550142">(312) 555-0142</a>
          </p>
          <p>
            <a href="mailto:bookings@majesticmeal.com">
              bookings@majesticmeal.com
            </a>
          </p>
        </div>
      </footer>
      <div className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-10">
        <VerticalMenuIcon />
      </div>
    </div>
  );
};

export { HomeScreen };
