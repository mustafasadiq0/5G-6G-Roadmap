import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, Play, BookOpen, Globe } from 'lucide-react';

const BeginnerSection = () => {
  const resources = [
    {
      title: 'ما هو الجيل الخامس 5G؟',
      description: 'شرح مبسط ومفصل عن تقنية الجيل الخامس وكيفية عملها',
      type: 'مقال',
      source: 'ويكيبيديا العربية',
      url: 'https://ar.wikipedia.org/wiki/جيل_خامس_(شبكات_اتصال)',
      icon: BookOpen,
      difficulty: 'سهل'
    },
    {
      title: 'شرح د. مصطفى صادق عن 5G',
      description: 'سلسلة فيديوهات شاملة باللغة العربية تشرح أساسيات 5G',
      type: 'فيديو',
      source: 'قناة د. مصطفى صادق',
      url: 'https://youtube.com/mustafasadiq',
      icon: Play,
      difficulty: 'سهل'
    },
    {
      title: 'مدونة د. مصطفى صادق',
      description: 'مقالات تقنية مفصلة باللغة العربية حول تقنيات الاتصالات',
      type: 'مدونة',
      source: 'مدونة شخصية',
      url: 'https://mustafasadiq0.wordpress.com',
      icon: Globe,
      difficulty: 'متوسط'
    },
    {
      title: 'ما هو 5G؟ - AWS',
      description: 'دليل شامل من أمازون ويب سيرفيسز يشرح 5G بطريقة مبسطة',
      type: 'دليل',
      source: 'Amazon Web Services',
      url: 'https://aws.amazon.com/ar/what-is/5g/',
      icon: BookOpen,
      difficulty: 'سهل'
    }
  ];

  const concepts = [
    {
      title: 'السرعة الفائقة',
      description: 'سرعات تصل إلى 20 جيجابت في الثانية - أسرع 100 مرة من 4G',
      icon: '⚡'
    },
    {
      title: 'زمن الاستجابة المنخفض',
      description: 'أقل من 1 ميلي ثانية - مثالي للتطبيقات الحساسة للوقت',
      icon: '⏱️'
    },
    {
      title: 'الاتصال الشامل',
      description: 'ربط مليون جهاز لكل كيلومتر مربع - عصر إنترنت الأشياء',
      icon: '🌐'
    },
    {
      title: 'كفاءة الطاقة',
      description: 'استهلاك طاقة أقل بـ 90% مقارنة بالشبكات السابقة',
      icon: '🔋'
    }
  ];

  const applications = [
    {
      title: 'السيارات ذاتية القيادة',
      description: 'تمكين التواصل الفوري بين المركبات والبنية التحتية',
      icon: '🚗'
    },
    {
      title: 'الطب عن بُعد',
      description: 'إجراء العمليات الجراحية والفحوصات الطبية عن بُعد',
      icon: '🏥'
    },
    {
      title: 'الواقع المعزز والافتراضي',
      description: 'تجارب غامرة في الألعاب والتعليم والترفيه',
      icon: '🥽'
    },
    {
      title: 'المدن الذكية',
      description: 'إدارة ذكية للمرور والطاقة والخدمات العامة',
      icon: '🏙️'
    }
  ];

  return (
    <section id="beginners" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            مسار المبتدئين
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ابدأ رحلتك في فهم تقنيات الجيل الخامس والسادس من الأساسيات
          </p>
        </div>

        {/* Key Concepts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8 text-center">
            المفاهيم الأساسية لـ 5G
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{concept.icon}</div>
                  <h4 className="font-semibold text-contrast mb-2">{concept.title}</h4>
                  <p className="text-sm text-muted-foreground">{concept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8 text-center">
            تطبيقات 5G في الحياة اليومية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h4 className="font-semibold text-contrast mb-2">{app.title}</h4>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-bold text-contrast mb-8 text-center">
            مصادر التعلم للمبتدئين
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <resource.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{resource.type}</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {resource.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{resource.source}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      زيارة المصدر
                      <ExternalLink className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center bg-white/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            هل أنت مستعد للمستوى التالي؟
          </h3>
          <p className="text-muted-foreground mb-6">
            بعد إتمام هذا المسار، يمكنك الانتقال إلى مسار الطلبة لتعلم أدوات المحاكاة والمشاريع العملية
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('students')?.scrollIntoView({ behavior: 'smooth' })}
          >
            انتقل إلى مسار الطلبة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeginnerSection;

