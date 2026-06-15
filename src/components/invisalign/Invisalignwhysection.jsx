export default function InvisalignWhyChooseUsSection() {
  return (
    <section className="py-10 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start">

          {/* Left Column */}
          <div>

            <h2 className="text-2xl md:text-2xl font-semibold text-[#36384F] mb-6">
              Why Choose Us?
            </h2>

            <p className="text-[#36384F] text-[15px] leading-relaxed text-justify mb-10">
              If you are looking for a reason to select us for your{" "}
              <strong>orthodontic treatment</strong> with Invisalign,
              you have a long list. Here are the top 5 reasons.
            </p>

            <h3 className="text-2xl font-semibold text-[#36384F] mb-6">
              One-On-One Customized Consultation
            </h3>

            <p className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              Every orthodontic treatment depends on age, condition,
              and personalized problem in the patient.

              We first give the proper guidance and consultation to
              the patient before planning{" "}
              <strong>invisible removable braces</strong>.

              You shall decide on the treatment after you have a word
              about the same with the{" "}
              <strong>best cosmetic dentist in Kolkata.</strong>
            </p>

          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/qEje3fAOSUo?si=Ghp9XaydZOGZnZa8"
                title="Why Choose Invisalign"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}