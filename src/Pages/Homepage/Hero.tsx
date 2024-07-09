const Hero = () => {
  return (
    <div>
      <div className="max-w-9xl px-4  sm:px-6 lg:px-8 mx-auto">
        <p className="text-center font-bold text-5xl mb-10 uppercase text-yellow-600">
          Discover <span className="text-slate-700">premium</span> fitness{" "}
          <span className="text-slate-700">gear </span>
          for your <span className="text-slate-700">success</span>
        </p>
        <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('https://i.ibb.co/RzgV1sH/craig-lovelidge-y-DGsn39fb-D4-unsplash.jpg')] bg-center bg-cover bg-no-repeat relative rounded-xl">
          <div className="absolute bottom-0 start-0 end-0 max-w-4xl p text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
            <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7">
              <div>
                <h3 className="text-lg font-bold text-slate-700 sm:text-2xl">
                  Welcome to{" "}
                  <span className="bg-yellow-500 px-2 text-slate-100 rounded">
                    Kinetec
                  </span>
                </h3>
                <p className="mt-2 text-gray-800">
                  Find the perfect equipment for you fitness journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
