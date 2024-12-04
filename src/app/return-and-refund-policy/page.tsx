import Jumbotron from "@/components/common/Jumbotron";
import React from "react";

const ReturnAndRefundPolicyPage = () => {
    return (


        <>
            <Jumbotron title="Return and Refund Policy" />
            <div className=" max-w-7xl mx-auto flex flex-col items-center gap-4 md:gap-8 justify-center text-sm md:text-md font-normal pb-10 ">

                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        Return Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We want you to be completely satisfied with your purchase. If for any
                        reason you are not happy with your order, you may return it within 30
                        days of receipt. Please ensure that the item is in its original
                        packaging and condition.
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li>Items must be returned within 30 days of receipt.</li>
                        <li>
                            Items must be unused and in the same condition as when received.
                        </li>
                        <li>Original packaging should be included.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        To initiate a return, please contact our customer service team with
                        your order number and reason for the return.
                    </p>
                </div>

                <section>
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
                </section>
            </div>
        </>
    );
};

export default ReturnAndRefundPolicyPage;
