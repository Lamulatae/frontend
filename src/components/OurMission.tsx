function OurMission() {
  return (
    <section className="py-16 mb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-y-12 lg:flex-row items-center justify-center gap-x-12 text-center lg:text-left">
        <div className="flex-shrink-0">
          <img
            className="w-80 h-auto object-cover"
            src="/logo.png"
            alt="Logo"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Mission
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500">
            At La Mulata, our mission is to make event booking easy,
            transparent, and accessible for everyone. Whether you are planning a
            corporate gathering, a wedding, or a private celebration, we aim to
            provide you with the perfect space and services to create lasting
            memories. Our team is committed to offering seamless event
            management solutions that save you time and exceed your
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
