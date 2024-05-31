
import BtnArrowIcon from "./BtnArrowIcon";

interface ButtonProps {
    scrollToContact: () => void; // Define the type of scrollToContact function
  }


const Button: React.FC<ButtonProps> = ({ scrollToContact }) => {
    return (
      <button
        onClick={scrollToContact}
        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Find Property
        {/* <span className="ml-2 h-4 w-4">
          <BtnArrowIcon />
        </span> */}
      </button>
    ); 
};

export default Button;