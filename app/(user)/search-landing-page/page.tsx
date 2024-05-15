import SearchLandingPage from "@/components/LandingPage/SearchLandingPage";
import PropertyProvider from "@/context/PropertyProvider";

export default function Page(){

    return (
        <PropertyProvider>
            <SearchLandingPage />
        </PropertyProvider>
    );
}