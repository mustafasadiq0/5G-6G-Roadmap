import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, TrendingUp, Building, Lightbulb, Shield, DollarSign, Factory } from 'lucide-react';

const BusinessSection = () => {
  const industryImpacts = [
    {
      industry: 'التصنيع والصناعة',
      icon: Factory,
      description: 'المصانع الذكية والأتمتة الشاملة مع الذكاء الاصطناعي',
      benefits: [
        'تحسين كفاءة الإنتاج بنسبة تصل إلى 30%',
        'الصيانة التنبؤية وتقليل وقت التوقف',
        'الواقع المعزز للتدريب والصيانة',
        'شبكات خاصة صناعية آمنة'
      ],
      roi: 'عائد استثمار 200-400% خلال 3 سنوات'
    },
    {
      industry: 'المدن الذكية',
      icon: Building,
      description: 'إدارة ذكية للموارد والخدمات العامة',
      benefits: [
        'تحسين إدارة المرور وتقليل الازدحام بـ 25%',
        'توفير الطاقة بنسبة 20% والمياه بـ 30%',
        'أنظمة مراقبة بيئية متقدمة',
        'خدمات عامة أكثر كفاءة'
      ],
      roi: 'توفير 15-25% من تكاليف التشغيل'
    },
    {
      industry: 'إنترنت الأشياء (IoT)',
      icon: Lightbulb,
      description: 'ربط مليارات الأجهزة وتحليل البيانات في الوقت الفعلي',
      benefits: [
        'ربط مليون جهاز لكل كيلومتر مربع',
        'تحليل البيانات في الوقت الفعلي',
        'تطبيقات جديدة في الزراعة الذكية',
        'أجهزة قابلة للارتداء متقدمة'
      ],
      roi: 'نمو السوق بمعدل 35% سنوياً'
    }
  ];

  const businessOpportunities = [
    {
      title: 'أسواق جديدة',
      description: 'خلق أسواق جديدة في الواقع الممتد (XR)، السيارات ذاتية القيادة، والرعاية الصحية عن بعد',
      icon: TrendingUp,
      examples: [
        'الواقع الافتراضي والمعزز للتجارة الإلكترونية',
        'خدمات الطب عن بُعد والجراحة الروبوتية',
        'منصات التعليم التفاعلي',
        'حلول النقل الذكي'
      ]
    },
    {
      title: 'تحسين الكفاءة',
      description: 'تحسين العمليات التشغيلية وتقليل التكاليف وزيادة الإنتاجية',
      icon: DollarSign,
      examples: [
        'أتمتة العمليات الصناعية',
        'تحسين سلاسل التوريد',
        'إدارة الطاقة الذكية',
        'تحليل البيانات المتقدم'
      ]
    },
    {
      title: 'الابتكار في المنتجات',
      description: 'تطوير منتجات وخدمات جديدة تلبي احتياجات العملاء المتغيرة',
      icon: Lightbulb,
      examples: [
        'أجهزة ذكية متصلة',
        'خدمات قائمة على الموقع',
        'تطبيقات الذكاء الاصطناعي',
        'حلول الأمن السيبراني'
      ]
    }
  ];

  const challenges = [
    {
      title: 'الاستثمار في البنية التحتية',
      description: 'يتطلب نشر 5G و6G استثمارات ضخمة في البنية التحتية',
      solution: 'التخطيط المرحلي والشراكات الاستراتيجية',
      icon: Building
    },
    {
      title: 'الأمن والخصوصية',
      description: 'زيادة مخاطر الأمن السيبراني مع ترابط الأجهزة والأنظمة',
      solution: 'استراتيجيات أمنية متقدمة وتشفير قوي',
      icon: Shield
    },
    {
      title: 'التعقيد التقني',
      description: 'تعقيد التقنيات يتطلب خبرات متخصصة',
      solution: 'الاستثمار في التدريب والتطوير المهني',
      icon: Lightbulb
    }
  ];

  const marketData = [
    {
      metric: 'حجم سوق 5G IoT',
      value: '$136.23 مليار',
      timeframe: 'بحلول 2030',
      growth: 'نمو سنوي 35.1%'
    },
    {
      metric: 'توفير التكاليف',
      value: '15-25%',
      timeframe: 'في المدن الذكية',
      growth: 'سنوياً'
    },
    {
      metric: 'تحسين الإنتاجية',
      value: '30%',
      timeframe: 'في التصنيع',
      growth: 'خلال 3 سنوات'
    },
    {
      metric: 'عدد الأجهزة المتصلة',
      value: '1 مليون',
      timeframe: 'لكل كم²',
      growth: 'مع 5G'
    }
  ];

  return (
    <section id="business" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            مسار رواد الأعمال وصناع القرار
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تأثير 5G و6G على الصناعة، المدن الذكية، وإنترنت الأشياء
          </p>
        </div>

        {/* Market Data */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8 text-center">
            أرقام السوق الرئيسية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{data.value}</div>
                  <div className="font-semibold text-contrast mb-1">{data.metric}</div>
                  <div className="text-sm text-muted-foreground">{data.timeframe}</div>
                  <div className="text-xs text-accent font-medium mt-2">{data.growth}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            التأثير على القطاعات الصناعية
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industryImpacts.map((impact, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ml-4">
                      <impact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{impact.industry}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">{impact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-contrast">الفوائد الرئيسية:</h4>
                    <ul className="space-y-2">
                      {impact.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <div className="text-sm font-medium text-primary">{impact.roi}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            الفرص التجارية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessOpportunities.map((opportunity, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <opportunity.icon className="w-8 h-8 text-primary ml-3" />
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {opportunity.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full ml-2 flex-shrink-0"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenges and Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            التحديات والحلول
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <challenge.icon className="w-8 h-8 text-destructive ml-3" />
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <div className="text-sm font-medium text-primary">
                      <strong>الحل:</strong> {challenge.solution}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-6 text-center">
            التوصيات الاستراتيجية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-contrast mb-4">للشركات الناشئة:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">ركز على تطبيقات محددة بدلاً من حلول شاملة</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">استثمر في الشراكات مع مزودي البنية التحتية</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">طور خبرات في الأمن السيبراني والخصوصية</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-contrast mb-4">للشركات الكبيرة:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">خطط لتحديث البنية التحتية على مراحل</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">استثمر في تدريب الموظفين على التقنيات الجديدة</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">طور استراتيجية شاملة للتحول الرقمي</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center bg-white/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            هل تريد اختبار معرفتك؟
          </h3>
          <p className="text-muted-foreground mb-6">
            خذ اختبارنا التفاعلي لتحديد المسار الأنسب لك ولشركتك في عالم 5G و6G
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            ابدأ الاختبار التفاعلي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

