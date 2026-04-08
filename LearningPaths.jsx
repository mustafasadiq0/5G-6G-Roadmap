import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { GraduationCap, Users, Briefcase, BookOpen, ArrowLeft, Clock, Target } from 'lucide-react';

const LearningPaths = () => {
  const paths = [
    {
      id: 'beginners',
      title: 'للمبتدئين',
      description: 'مفاهيم أساسية، الفرق بين 4G و5G، تطبيقات 5G في الحياة اليومية',
      icon: GraduationCap,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      duration: '2-4 ساعات',
      level: 'مبتدئ',
      topics: [
        'ما هو الجيل الخامس 5G؟',
        'الفرق بين 4G و5G',
        'تطبيقات 5G في الحياة اليومية',
        'مستقبل تقنية 6G'
      ]
    },
    {
      id: 'students',
      title: 'للطلبة',
      description: 'مصادر أكاديمية، مشاريع تخرج، أدوات محاكاة مثل ns-3 وMatlab',
      icon: BookOpen,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      duration: '10-20 ساعة',
      level: 'متوسط',
      topics: [
        'دورات Coursera المتخصصة',
        'أدوات المحاكاة ns-3 و MATLAB',
        'مشاريع التخرج والأبحاث',
        'المصادر الأكاديمية المعتمدة'
      ]
    },
    {
      id: 'researchers',
      title: 'للباحثين والمهنيين',
      description: 'أوراق علمية محدثة، مقارنات تقنية، بروتوكولات الشبكات، التطورات في 6G',
      icon: Users,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      duration: '20+ ساعة',
      level: 'متقدم',
      topics: [
        'أحدث الأوراق العلمية',
        'بروتوكولات الشبكات المتقدمة',
        'تطورات تقنية 6G',
        'مصادر IEEE و ITU'
      ]
    },
    {
      id: 'business',
      title: 'لرواد الأعمال وصناع القرار',
      description: 'تأثير 5G/6G على الصناعة، المدن الذكية، وإنترنت الأشياء',
      icon: Briefcase,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      duration: '5-8 ساعات',
      level: 'تنفيذي',
      topics: [
        'تأثير 5G على الصناعة',
        'المدن الذكية وإنترنت الأشياء',
        'الفرص الاستثمارية',
        'التحديات والحلول'
      ]
    }
  ];

  return (
    <section id="paths" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            المسارات التعليمية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر المسار الذي يناسب مستواك وأهدافك في تعلم تقنيات 5G و6G
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paths.map((path) => (
            <Card key={path.id} className={`${path.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${path.iconColor} bg-white flex items-center justify-center`}>
                    <path.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Clock className="w-4 h-4 ml-1" />
                      {path.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Target className="w-4 h-4 ml-1" />
                      {path.level}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {path.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-contrast">المواضيع الرئيسية:</h4>
                  <ul className="space-y-2">
                    {path.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full ml-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById(path.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ابدأ هذا المسار
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Quiz CTA */}
        <div className="text-center bg-gradient-secondary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            لست متأكداً من المسار المناسب لك؟
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            خذ اختبارنا التفاعلي المكون من 7 أسئلة بسيطة لنساعدك في اختيار المسار الأنسب لمستواك وأهدافك
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4"
          >
            ابدأ الاختبار التفاعلي
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;

