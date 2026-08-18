interface LandingSectionProps {
    children: React.ReactNode;
}


export default function  LandingSection ({ children }: Readonly<LandingSectionProps>) {
    return (
      <div className="wrapper mt-[3rem] mb-[5rem]">{children}</div>
    );
  };