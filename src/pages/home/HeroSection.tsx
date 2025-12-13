import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../../components/ui/Button';
export function HeroSection() {
  return (
    <section className="bg-linear-to-r from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between gap-12">
          {/* Left: Text content */}
          <div className="flex-2 ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI辅助高效学习
              <br />
              冲刺AEAS
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              根据真题分析，逐个攻破词汇、听力、阅读、 写作、口语五个题型
            </p>
            <Button>开始测评</Button>
          </div>

          {/* Right: Illustration */}
          <div className="flex-4 flex justify-center">
            <DotLottieReact
              src="../../../public/welcome.lottie"
              aria-hidden="true"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
