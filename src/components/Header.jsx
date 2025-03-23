export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          <h1 className="text-white md:text-xl lg:text-2xl font-semibold">
            Task Management
          </h1>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
}
