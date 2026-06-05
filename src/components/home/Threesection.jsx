import Image from "next/image";

export default function HomeSection2() {
  return (
    <section>
  <div className="grid grid-cols-1 xl:grid-cols-3">

    {/* Card 1 */}
    <div
      className="
        min-h-[25vh]
        px-8
        py-8
        flex
        items-start
        bg-[#00A1D4]
        xl:shadow-[8px_0_20px_rgba(0,0,0,0.6)]
        relative
        z-10
      "
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/common/location.png"
            alt="Address"
            width={70}
            height={70}
          />
        </div>

        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-3">
            Address
          </h3>

          <p className="text-sm leading-relaxed">
            29, Raja Basanta Roy Road, Behind Lake Mall,
            <br />
            Kolkata, West Bengal 700029
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="
        min-h-[25vh]
        px-8
        py-8
        flex
        items-start
        bg-[#006F92]
      "
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/common/appoint.png"
            alt="Appointment"
            width={70}
            height={70}
          />
        </div>

        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-3">
            Appointment
          </h3>

          <p className="text-sm leading-relaxed">
            Call and book your appointment.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            9330153855
          </h3>

          <h3 className="text-2xl font-semibold mt-4">
            8337098496
          </h3>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="
        min-h-[25vh]
        px-8
        py-8
        flex
        items-start
        bg-[#00A1D4]
        xl:shadow-[-8px_0_20px_rgba(0,0,0,0.6)]
        relative
        z-10
      "
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/common/time.png"
            alt="Open Hours"
            width={70}
            height={70}
          />
        </div>

        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-3">
            Open Hours
          </h3>

          <p className="text-sm leading-relaxed">
            Monday-Saturday: 11am - 8pm
            <br />
            Sunday: 11am - 2pm
            <br />
            (Appointment basis only)
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
  );
}