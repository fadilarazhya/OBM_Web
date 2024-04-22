function Footer() {
  return (
    <footer className="bg-pr00">
      <div className="container px-6 py-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img className="w-full h-12" src="/logo_obm.png" alt="" />
          </a>

          <div className="flex flex-wrap text-xs sm:text-sm font-montserrat font-semibold text-ne02 justify-center mt-6">
            JL. Tenggiri No 103 D,Tanjung Priok Jakarta Utara, 14320 Indonesia
          </div>
        </div>

        <hr className="my-6 border-ne02 md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-xs sm:text-sm font-montserrat text-ne02">
            Orela Bahari Mandiri © 2024, All rights reserved.
          </p>

          <div className="flex -mx-2"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
