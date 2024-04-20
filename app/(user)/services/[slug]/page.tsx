import ErrorBoundary from "@/components/ErrorBoundary";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import Hero from "@/components/Hero/Hero";
import ServiceBox from "@/components/Services/ServiceBox";
import { services, Services } from "@/components/Services/data/service"

function addSpaceAfterFourLines(content: string) {
  // Split the content into an array of lines
  const lines = content.split('\n');
  
  // Initialize an empty array to store modified lines
  const modifiedLines = [];

  // Loop through the lines array
  for (let i = 0; i < lines.length; i++) {
      // Add the current line to the modified lines array
      modifiedLines.push(lines[i]);

      // Check if the current line is a multiple of four (i.e., every fourth line)
      if ((i + 1) % 4 === 0 && i !== lines.length - 1) {
          // If so, add an empty line after the current line
          modifiedLines.push('');
      }
  }

  // Join the modified lines array back into a single string and return it
  return modifiedLines.join('\n');
}


const Page = ({ params }: { params: Services })  => {

    const { slug } = params;

    const service = services.find(service => service.slug === slug);
    if (!service) {
        return <div className="mx-auto">Service not found</div>;
    }

    const { title, hero, description } = service;
    console.log(hero)

    const modifiedContent = addSpaceAfterFourLines(description)

    return (
      <>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
  
        <ErrorBoundary>
          <Hero
            image={`${hero}`}
            title={title}
          />
        </ErrorBoundary>
        <div className="bg-[#FAFAFA] mb-10 h-20">
          <h3 className="pl-20 font-bold pt-5">Service: <span className="font-normal">{title}</span></h3>
        </div>

        <section className="px-20 pb-20 whitespace-normal text-justify subpixel-antialiased tracking-wide">
          { modifiedContent }
        </section>

        <ServiceBox />
        <FooterHome />
      </>
    );
  }

export default Page;