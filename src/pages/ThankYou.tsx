import promiseProfile from "@/assets/promise-profile.jpg";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-[1200px] ml-0 md:ml-16 lg:ml-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 via-accent/10 to-accent/15 rounded-3xl blur-2xl opacity-60" />
            <img
              src={promiseProfile}
              alt="Caleb"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="space-y-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-left -ml-4">
              Thank <span className="inline-block px-4 py-3 text-white rounded-full" style={{ backgroundColor: '#385f3e', verticalAlign: 'middle', paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>You</span>!
            </h1>

            <p className="text-2xl md:text-3xl text-white font-semibold">
              Your call has been scheduled.
            </p>

            <p className="text-xl md:text-2xl text-white">
              I look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
