import React from "react";

const FAQ = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-16" id="faq">
      {/* Heading */}
      <h2 className="text-4xl text-center text-neutralDGrey font-semibold mb-12">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="flex flex-col gap-8">
        
        {/* Question 1 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            What are the gym's operating hours?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            Our gym is open every day from 6 AM to 10 PM, allowing you to work out at a time that best fits your schedule.
          </p>
        </div>

        {/* Question 2 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Do I need to book a session with a trainer?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            While booking a session with a trainer is optional, we highly recommend it for personalized fitness plans and guidance.
          </p>
        </div>

        {/* Question 3 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            What type of equipment does FutureCent Gym offer?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            We offer a wide range of state-of-the-art cardio machines, strength training equipment, free weights, and more to cater to all fitness levels.
          </p>
        </div>

        {/* Question 4 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Do you offer group classes?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            Yes! We offer a variety of group classes such as Yoga, Zumba, HIIT, and Strength Training. Check our schedule for available classes.
          </p>
        </div>

        {/* Question 5 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Can I bring a friend to try out the gym?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            Absolutely! We offer a guest pass for your friends, allowing them to experience our gym facilities before signing up.
          </p>
        </div>

        {/* Question 6 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Do you provide nutrition advice?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            Yes, our trainers and nutrition experts provide personalized advice to help you achieve your fitness goals, including meal plans.
          </p>
        </div>

        {/* Question 7 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Are there any membership discounts available?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            We offer seasonal promotions, student discounts, and special membership packages. Visit our membership page for the latest deals.
          </p>
        </div>

        {/* Question 8 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Can I pause or cancel my membership?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            Yes, we offer flexible membership plans that allow you to pause or cancel your membership with prior notice, depending on the terms.
          </p>
        </div>

        {/* Question 9 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            Is there parking available at FutureCent Gym?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            Yes, we have ample parking space available for members, making it easy to visit us without worrying about parking.
          </p>
        </div>

        {/* Question 10 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-red-500 mb-4">
            What should I bring to the gym?
          </h4>
          <p className="text-sm text-neutralGrey leading-6">
            We recommend bringing a towel, water bottle, comfortable workout clothes, and proper shoes. You can also bring your personal fitness gear.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FAQ;
