import { Button } from '@/components/ui/button.jsx';
import { ArrowLeft, Zap, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-accent rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-contrast mb-6 leading-tight">
            ابدأ من هنا...
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              مسارك في عالم الجيل الخامس والسادس
            </span>
            <br />
            للاتصالات اللاسلكية
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            موقع شامل يستهدف المبتدئين، المهندسين، والباحثين في مجال شبكات الجوال الحديثة
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg backdrop-blur-sm">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">مسارات تعليمية متخصصة</h3>
              <p className="text-muted-foreground text-center">للمبتدئين والمهنيين والباحثين</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg backdrop-blur-sm">
              <Globe className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">مصادر عربية وعالمية</h3>
              <p className="text-muted-foreground text-center">روابط محدثة ومجربة لأفضل المصادر</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg backdrop-blur-sm">
              <Cpu className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">أدوات تفاعلية</h3>
              <p className="text-muted-foreground text-center">اختبارات ومشاريع تطبيقية</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4"
            >
              ابدأ الاختبار التفاعلي
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors text-lg px-8 py-4"
            >
              استكشف المسارات
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">مسارات تعليمية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">مصدر موثوق</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">أدوات محاكاة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">محتوى عربي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

