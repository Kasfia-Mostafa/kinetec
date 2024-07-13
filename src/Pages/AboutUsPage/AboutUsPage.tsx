const AboutUsPage = () => {
  return (
    <div className="space-y-10">
      <div className="bg-amber-200">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-slate-50 bg-yellow-500 p-2 font-semibold text-2xl md:text-4xl md:leading-tight">
              About Us
            </h2>
            <p className="mt-1 text-slat-700">
              Welcome to{" "}
              <span className="text-yellow-700 font-bold">Kinetec</span>, your
              ultimate destination for top-quality fitness gear and accessories.
              We are dedicated to helping you achieve your fitness goals by
              providing durable, high-performance equipment that suits all your
              workout needs. Whether you're a beginner just starting your
              fitness journey or an experienced athlete pushing your limits, our
              products are designed to support and enhance your fitness
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full object-cover rounded-xl"
                src="https://i.ibb.co/gtWvgxf/samuel-girven-2e4lb-LTq-PIo-unsplash.jpg"
                alt="Image Description"
              />
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-yellow-700 text-xs font-medium uppercase">
                  Steps
                </h3>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 ext-yellow-700 font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-slate-700">
                    <span className="text-yellow-900 font-semibold">
                      Company Overview:{" "}
                    </span>
                    Our mission is to empower individuals to achieve their
                    fitness goals by providing durable, high-performance
                    equipment. Our vision is to be the leading provider of
                    innovative and ergonomic fitness solutions worldwide. At
                    Kinetec, we are dedicated to excellence and customer
                    satisfaction from the very beginning, continually striving
                    to improve and expand our offerings to meet the evolving
                    needs of fitness enthusiasts.{" "}
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 ext-yellow-700 font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-slate-700">
                    <span className="text-yellow-900 font-semibold">
                      Team Introduction:{" "}
                    </span>
                    <ul>
                      <li>
                        Jane Doe - CEO: Jane is the visionary behind Kinetec.
                        Her leadership and passion for fitness drive our
                        company's growth and innovation.
                      </li>
                      <li>
                        John Smith - Head of Product Development: John leads our
                        product development team, ensuring every product meets
                        our high standards of quality and innovation. His
                        expertise in engineering and design is pivotal to our
                        success.
                      </li>
                      <li>
                        Emily Johnson - Marketing Director: Emily is responsible
                        for our marketing strategies, helping us reach fitness
                        enthusiasts worldwide. Her creative approach and deep
                        understanding of market trends keep Kinetec at the
                        forefront of the industry.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 ext-yellow-700 font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-slate-700">
                    <span className="text-yellow-900 font-semibold">
                      Contact Information:{" "}
                    </span>
                    We would love to hear from you! If you have any questions,
                    feedback, or would like to learn more about our products,
                    please reach out to us:
                    <br />
                    Email: support@kinetec.com
                    <br />
                    Phone:(123) 456-7890 Address: 123 Fitness St, Workout City,
                    Gym State, 12345
                  </p>
                </div>
              </div>

              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-yellow-500 font-medium text-sm text-slate-50 rounded-full focus:outline-none"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Test */}

      <div className="overflow-hidden">
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                    " I’ve been shopping for home gym equipment for a while, and
                    this website has been a game-changer. They offer a fantastic
                    selection of high-quality gear at competitive prices. The
                    website is easy to navigate, and I love the detailed product
                    descriptions and customer reviews that helped me make
                    informed choices. Shipping was quick, and my new treadmill
                    arrived in perfect condition. Highly recommend! "
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div className="grow ms-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        Josh Tyson
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Product Manager | Capsule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                    " I found the customer service to be outstanding when I had
                    a question about a product. The website was straightforward,
                    and my order arrived promptly. However, I noticed that their
                    range of equipment for strength training is a bit limited
                    compared to other sites. If they expand their selection,
                    this would be a five-star experience. "
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div className="grow ms-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        Luisa
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Senior Director of Operations | Fitbit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                    " From browsing to purchase, the entire process was smooth.
                    The website is user-friendly, and the product filtering
                    options made it easy to find exactly what I was looking for.
                    I was particularly impressed with the detailed size guides
                    and usage tips for the equipment. My new set of dumbbells
                    and yoga mat are just as described, and I couldn’t be
                    happier with my purchase. "
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                        src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div className="grow ms-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        Alisa Williams
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Entrepreneur | Happy customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
