import Script from 'next/script';

export default function LiveChat () {
    

    return (
        <Script
            strategy="lazyOnload"
            src={`${process.env.NEXT_PUBLIC_LIVE_CHAT_API}`}
         />
    );
}
