// import NewsletterFooter from '@/components/NewsletterFooter';

export default function CustomLayout({ children }) {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <div className="flex-grow"> */}
            {/* <main className="my-0 py-16"> */}
            {children}
            {/* </main> */}
            {/* </div> */}
            {/* <NewsletterFooter /> */}
        </div>
    );
}
