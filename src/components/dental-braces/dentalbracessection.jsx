import Image from "next/image";

export default function DentalBracesTreatmentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#36384F]">
            Dental Braces Treatment
          </h2>

          <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-20 items-center mb-24">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              What Are Dental Braces?
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">
              <p>
                Dental <strong>braces</strong> (also known as{" "}
                <strong>teeth braces</strong>) are attachments /
                <strong> dental pin </strong>
                used in orthodontic <strong>treatment</strong> that align and
                straighten <strong>teeth</strong> and help place them with
                respect to a person's bite, while also aiming to improve oral
                health.

                Braces also fix <strong>gaps in teeth</strong>. They are often
                used to correct underbites, overbites, open bites, deep bites,
                cross bites, <strong>crooked teeth</strong> or
                <strong> irregular teeth</strong>,
                <strong> forwardly placed teeth</strong> and various other
                malformations of the teeth and jaws.

                Dental braces are often used along other orthodontic appliances
                (<strong>Functional Appliances</strong>) to help widen the jaw,
                modify the position of jaws, otherwise assist in shaping the
                teeth and jaws and even aid in orthognathic
                <strong> jaw surgery</strong>.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="w-full max-w-[500px] aspect-video">
    <iframe
      className="w-full h-full rounded-lg"
      src="https://www.youtube.com/embed/ZuVMIJ-X_ko?si=_ByvJqnQxzg0nXwE"
      title="Dental Braces Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-20 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Why see a dental braces specialist / orthodontist?
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">
              <p>
                Crooked teeth, <strong>crossbites</strong>,
                <strong> underbites</strong>, <strong>deepbites</strong> – your
                orthodontist can fix all these dental issues.

                Now, you must be wondering what exactly is
                <strong> orthodontics</strong>. Well, it is a special branch of
                dentistry that deals with the diagnosis, prevention, guidance,
                and correction of misaligned bites and dental irregularities
                with the help of <strong>dental braces</strong> or
                <strong> aligners</strong>.

                An <strong>orthodontist</strong> specializes in aligning or
                straightening the teeth and jawline of a person. Aligned jawline
                and straight teeth not just keep your teeth healthy and get you
                a prettier smile but also make chewing food easier.
                <br />
                <br />
                <strong>Spacing in teeth</strong>, abnormal
                <strong> alignment of teeth</strong> and jawline, underbites,
                overbites, crossbites – can cause bite issues, compromise oral
                hygiene, and often trigger complications in digesting food.

                On top of it, these dental issues can cause discomfort and
                affect your confidence level. You may end up smiling less.

                Now, that's a serious concern that requires
                <strong> orthodontic treatment</strong>.
                <br />
                <br />
                If you have these dental problems, you should definitely see an
                <strong> orthodontist in Kolkata.</strong>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="w-full max-w-[500px] aspect-video">
    <iframe
      className="w-full h-full rounded-lg"
      src="https://www.youtube.com/embed/SSCI6M1eNPY?si=AV6ysPLxDB4j1o_5"
      title="Dental Braces Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
          </div>
        </div>

      </div>
    </section>
  );
}