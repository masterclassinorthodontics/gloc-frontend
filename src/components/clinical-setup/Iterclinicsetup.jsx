import Image from "next/image";

export default function ITeroClinicalSetupSection() {
  return (
    <section className="py-10 bg-white">
      <div className="w-[70vw] mx-auto">
        <h3 className="text-2xl md:text-2xl font-semibold text-[#36384F] mb-4">
                iTero Clinical Setup
              </h3>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-40 items-center">

            

          {/* Left Column */}
          <div className="flex justify-center">
            {/* <div className="max-w-[700px]"> */}

              {/* <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
                iTero Clinical Setup
              </h3> */}

              <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">

                <p>
                  Designed to deliver reliability, speed, outstanding
                  visualization capabilities, and intuitive operations,
                  iTero scanners propel the dental practice in today's world.
                  Not just that scanners enhance the experience of the patients
                  but also elevate the clinical precision.
                  With the help of these scanners, the orthodontists can take
                  digital images and plan <strong>Invisalign treatment</strong>{" "}
                  of the patients in real-time. The scanners take highly
                  accurate images of the patient's mouth and help the doctors
                  to diagnose orthodontic issues.
                  Simply put, these scanners help in developing a customized
                  treatment plan for the patients. They help in providing a
                  precise image of the patient's teeth, face and smile before
                  and after the treatment.
                  <br/><br/>
                  The parallel confocal imaging technology of the{" "}
                  <strong>intra-oral scanners</strong> utilizes laser and
                  optical scanning to produce colored scans accurately.
                  With its cutting-edge technology, iTero scanners empower
                  practices in both orthodontics and restorative dentistry.
                  Engineered to work perfectly with the Invisalign system,
                  iTero scanners have a proven record of success.
                  Wondering what's more? With iTero scanners, full-arch scans
                  can be done in less than a minute or so.
                </p>

              {/* </div> */}

            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-imgs/Itero-invisalign-kolkata.png"
              alt="iTero Clinical Setup"
              width={600}
              height={600}
              className="w-[350px] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}