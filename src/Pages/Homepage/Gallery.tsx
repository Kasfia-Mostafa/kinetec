

const Gallery = () => {
  return (
    <div>
      {/* Masonry Cards */}
      <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden" href="#">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.ibb.co/K2vdS16/1.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-600 rounded-xl bg-[#fbffde] p-4 md:text-xl ">
                Stronger every day
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden" href="#">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.ibb.co/MfT0yLV/3.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-600 rounded-xl bg-[#fbffde] p-4 md:text-xl ">
                No excuses, just results
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="col-span-12 md:col-span-4">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden" href="#">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.ibb.co/zQTkkQG/2.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-600 rounded-xl bg-[#fbffde] p-4 md:text-xl ">
                Sweat now, shine later
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden" href="#">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.ibb.co/RTrYFKy/gordon-cowie-7o-Pvd-WF9gi0-unsplash.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-600 rounded-xl bg-[#fbffde] p-4 md:text-xl ">
             
                Push yourself because no one else is going to do it for you
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden" href="#">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.ibb.co/K9w1xNG/hayley-kim-studios-eot-ka5d-M7-Q-unsplash.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-600 rounded-xl bg-[#fbffde] p-4 md:text-xl ">
                Your only limit is you.
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Masonry Cards */}
    </div>
  );
}

export default Gallery;
