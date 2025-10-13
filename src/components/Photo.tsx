export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center items-center">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/30 via-[#00d4ff]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>

        {/* Main photo container */}
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative">
          {/* Outer ring */}
          <div className="w-full h-full bg-gradient-to-br from-[#00d4ff]/20 via-[#00d4ff]/10 to-transparent rounded-full border border-[#00d4ff]/30 flex items-center justify-center">
            {/* Inner content */}
            <div className="w-[90%] h-[90%] bg-gradient-to-br from-[#1a1a2e]/80 to-[#0a0a0f]/60 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-6xl xl:text-8xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                AZ
              </div>
            </div>
          </div>

          {/* Floating accent dots */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-[#00d4ff] rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-[#00d4ff]/60 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-2 w-1 h-1 bg-[#00d4ff]/80 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
