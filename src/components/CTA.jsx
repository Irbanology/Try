export default function CTA() {
  return (
    <section className="w-full bg-[#061822] flex items-center justify-center">
      <div
        className="
          w-full
          max-w-[1922px]
          min-h-[376px]
          px-6
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Heading */}
        <h2
          className="
            text-white
            font-bold
            text-[24px]
            sm:text-[28px]
            md:text-[32px]
            lg:text-[36px]
            leading-tight
          "
        >
          Ready To Elevate Your <br className="hidden sm:block" />
          Crypto Trading?
        </h2>

        {/* Button */}
        <button
          className="
            mt-12
            w-[160px]
            h-[30px]
            sm:w-[180px]
            sm:h-[50px]
            rounded-md
            text-[#010b11]
            text-[18px]
            sm:text-[20px]
            font-medium
            transition
            hover:opacity-90
          "
          style={{ backgroundColor: "#03f8c5" }}
        >
          Join Now
        </button>
      </div>
    </section>
  );
}
