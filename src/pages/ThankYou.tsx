import promiseProfile from "@/assets/promise-profile.png";

const ThankYou = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-background to-background/95 flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Image on the left */}
          <div className="relative animate-fade-in flex justify-center">
            <img
              src={promiseProfile}
              alt="Caleb"
              className="w-1/2 md:w-full object-contain"
            />
          </div>

          {/* Text on the right */}
          <div className="space-y-4 md:space-y-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
              Thank <span className="inline-block px-2 md:px-4 py-2 md:py-3 text-white rounded-full text-3xl md:text-6xl" style={{ backgroundColor: '#385f3e', verticalAlign: 'middle', paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>You</span>!
            </h1>

            <p className="text-xl md:text-3xl text-white font-semibold text-center">
              Your call has been scheduled.
            </p>

            <p className="text-lg md:text-2xl text-white text-center">
              I look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
