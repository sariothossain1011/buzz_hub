
import Jumbotron from "@/components/common/Jumbotron";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Jumbotron title="About Us" />
      <div className=" max-w-7xl mx-auto flex flex-col items-center gap-4 md:gap-8 justify-center text-sm font-normal pb-10 ">

        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">SERVICES</p>
          <p className="text-sm">
            Flowspark offers a comprehensive range of design
            services, including but not limited to graphic design,
            web design, branding, illustration, and user interface
            design. The Company will provide the agreed-upon
            services with professionalism, creativity, and technical
            expertise, while adhering to industry standards, design
            principles, and best practices. The specific details,
            deliverables, timelines, and pricing for each project
            will be outlined in a separate agreement or proposal,
            mutually agreed upon by the Company and the Client.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">
            CLIENT RESPONSIBILITIES
          </p>
          <p className="text-sm">
            The Client agrees to provide accurate and timely
            information, materials, and feedback necessary for the
            successful completion of the project. The Client is
            responsible for obtaining any necessary permissions,
            licenses, or copyrights for materials provided to the
            Company for use in the project, including but not
            limited to logos, images, text, and any other
            intellectual property. The Client acknowledges that
            delays or failures in providing required materials or
            feedback may impact project timelines, deliverables, and
            the overall success of the project.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">INTELLECTUAL PROPERTY</p>
          <p className="text-sm">
            Any intellectual property rights, including but not
            limited to copyrights and trademarks, in the final
            deliverables created by the Company shall be transferred
            to the Client upon receipt of full payment unless
            otherwise agreed upon in writing. The Client warrants
            that any materials provided to the Company for use in
            the project do not infringe upon the intellectual
            property rights of any third party.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">PAYMENT</p>
          <p className="text-sm">
            The Client agrees to pay the Company the agreed-upon
            fees for the services rendered. Payment terms, including
            the amount, method, and schedule, will be specified in
            the separate agreement or proposal. The Company reserves
            the right to suspend or terminate services in the event
            of non-payment or late payment.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">CONFIDENTIALITY</p>
          <p className="text-sm">
            The Company and the Client agree to keep confidential
            any proprietary or sensitive information disclosed
            during the course of the project. Both parties shall
            take reasonable measures to protect such information
            from unauthorized access or disclosure.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">
            LIMITATION OF LIABILITY
          </p>
          <p className="text-sm">
            The Company shall not be liable for any direct,
            indirect, incidental, or consequential damages arising
            out of the use or inability to use the services
            provided. The Client acknowledges that the Company
            liability is limited to the amount paid for the services
            rendered.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">TERMINATION</p>
          <p className="text-sm">
            Either party may terminate this Agreement with written
            notice if the other party breaches any material
            provision and fails to remedy the breach within a
            reasonable time. In the event of termination, the Client
            shall pay the Company for the services provided up to
            the termination date.
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-sm font-bold">GOVERNING LAW</p>
          <p className="text-sm">
            This Agreement shall be governed by and construed in
            accordance with the laws of [Your Jurisdiction]. Any
            disputes arising out of this Agreement shall be subject
            to the exclusive jurisdiction of the courts of [Your
            Jurisdiction].
          </p>
        </div>
      </div>


    </div>


  );
};

export default AboutUsPage;

