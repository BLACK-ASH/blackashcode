export default function RootLayout({ children }) {
    return (
        <div className="md:w-[75%] lg:w-[60%] mx-auto  w-full" >
         
            {children}
        </div>
    );
}