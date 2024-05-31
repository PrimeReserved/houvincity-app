export default function LiveOpen(){

    return (
        <div
        style={{
            backgroundImage: 'url(`https://res.cloudinary.com/dzd51q99i/image/upload/v1717116138/houvincity/landing-page/Rectangle_23893_1_dgd7ig.png`)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          >
            <div>
                <h1 className="text-customSecondary text-3xl font-semibold my-[7rem] flex justify-center">View Live Open Houses</h1>
            </div>
            <div className="h-96 w-96">
                <div className="m-3">
                    <h1>Join our live video tours and<br /> check upcoming events</h1>
                </div>
                <div className="m-5">
                    <button className="btn bg-primary">View</button>
                </div>
            </div>
        </div>
    );
}

// https://res.cloudinary.com/dzd51q99i/image/upload/v1717116138/houvincity/landing-page/Rectangle_23893_1_dgd7ig.png