import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import PricingPage from "../pages/PricingPage";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import HelpCenter from "../pages/HelpCenter";
import Contact from "../pages/Contact";
import APIDocs from "../pages/APIDocs";
import DownloadPage from "../pages/Download";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/docs" element={<APIDocs />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}