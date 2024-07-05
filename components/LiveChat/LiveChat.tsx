import Script from 'next/script';

export default function LiveChat () {
    

    return (
        <Script
            strategy="lazyOnload"
            src={`https://embed.tawk.to/66846ebe9d7f358570d6513d/1i1ql168j`}
         />
    );
}
