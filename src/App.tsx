import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { AboutPage } from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import "./index.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import PaymentPage from "./components/CheckoutForm";
import FoodMenu from "./pages/FoodMenu";
import CorporateEvent from "./pages/CorporateEvent";
import SocialEvents from "./pages/SocialEvents";
import PrivateGatherings from "./pages/PrivateGatherings";
import EntertainmentEvents from "./pages/EntertainmentEvents";
import CommunityEvents from "./pages/CommunityEvents";
import OtherEvents from "./pages/OtherEvents";
import EducationalEvents from "./pages/EducationalEvents";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/social-events" element={<SocialEvents />} />
          <Route path="/private-gatherings" element={<PrivateGatherings />} />
          <Route
            path="/entertainment-events"
            element={<EntertainmentEvents />}
          />
          <Route path="/corporate-events" element={<CorporateEvent />} />
          <Route path="/community-events" element={<CommunityEvents />} />
          <Route path="/other-events" element={<OtherEvents />} />
          <Route path="/educational-events" element={<EducationalEvents />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/stripe" element={<PaymentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
