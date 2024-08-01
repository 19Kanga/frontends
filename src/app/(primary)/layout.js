import Footer from "@/components/shared/Footer";  // Adjusted path
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
