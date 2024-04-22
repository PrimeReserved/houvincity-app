import { BsChatRightTextFill } from "react-icons/bs";
import { MdHouse } from "react-icons/md";

export default function ServiceBox() {

    return (
        <section className="flex justify-center items-center gap-10 pb-20 bg-[#FAFAFA">
            <div className="text-center border p-10">
                <div className="flex items-center justify-center mb-4">
                    <BsChatRightTextFill className="text-primary w-8 h-8" />
                </div>
                <h2 className="mb-2 font-bold">Contact Us</h2>
                <p>Would you like to know more about our <br />
                    <span>services? let&lsquo;s talk</span>
                </p>
            </div>

            <div className="text-center border p-10">
                <div className="flex items-center justify-center mb-4">
                    <MdHouse className="text-primary w-10 h-10" />
                </div>
                
                <h2 className="mb-2 font-bold">Buy Properties</h2>
                <p>Would you like to search our beautiful <br />
                    <span>properties? let&lsquo;s explore</span>
                </p>
            </div>
        </section>
    );
}