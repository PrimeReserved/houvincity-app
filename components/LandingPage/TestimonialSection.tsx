import { Testimony } from "../Services/data/testimony";
import Review from "./Review";
import { ViewAllButton } from "./ViewAllButton";

interface TestimonialSectionProps {
    reviews: Testimony[];
}


export const TestimonialSection = ({ reviews }: Readonly<TestimonialSectionProps>) =>  {
    return (
        <div className="lg:wrapper mx-5">
            <h1 className="text-customSecondary text-3xl font-semibold my-[7rem] flex justify-center">
            Our Happy Homeowners
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[5rem] gap-14 mt-[5rem] m-10">
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
            </div>
        <ViewAllButton href="/customer-testimonials">Read More</ViewAllButton>
      </div>
    );
}