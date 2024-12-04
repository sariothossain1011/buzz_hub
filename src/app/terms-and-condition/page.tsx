import Jumbotron from '@/components/common/Jumbotron'
import React from 'react'

const TermsAndConditionPage = () => {
  return (
    <>
      <Jumbotron title='Terms and Condition'/>
      <div className=" max-w-7xl mx-auto flex flex-col items-center gap-4 md:gap-8 justify-center text-sm md:text-md font-normal pb-10 ">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            General
          </h2>

          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li> By using this Website, you represent that you are at least 18 years old or have reached the age of majority in your jurisdiction and that you have the legal capacity to enter into a binding contract.</li>
            <li>
              We reserve the right to modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms.
            </li>
            <li>We may terminate or suspend your access to the Website at our sole discretion, without notice or liability, for any reason, including if you violate these Terms.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To initiate a return, please contact our customer service team with
            your order number and reason for the return.
          </p>
        </div>


        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Contact Information
          </h2>

          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li> All orders placed through the Website are subject to acceptance by us. We reserve the right to refuse or cancel any order for any reason, including the unavailability of a product, errors in pricing or product information, or issues with your payment method.</li>
            <li>
              All prices listed on the Website are in [currency] and do not include taxes, shipping, or handling fees unless otherwise stated. Prices and availability of products are subject to change without notice.
            </li>
            <li>Payment must be made in full before your order is shipped. We accept payment by [list accepted payment methods]. By providing your payment information, you represent and warrant that you are authorized to use the payment method provided.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To initiate a return, please contact our customer service team with
            your order number and reason for the return.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Refund Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once your return is received and inspected, we will notify you of the
            approval or rejection of your refund. If approved, your refund will be
            processed, and a credit will be applied to your original method of
            payment within a certain number of days.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Refunds will be processed to the original payment method.</li>
            <li>Processing time may vary depending on your payment provider.</li>
            <li>Shipping costs are non-refundable.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about your return or refund, please do not
            hesitate to contact our customer service team.
          </p>
        </div>
      </div>


    </>
  )
}

export default TermsAndConditionPage