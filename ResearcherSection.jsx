import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, FileText, Globe, Users, Zap } from 'lucide-react';

const ResearcherSection = () => {
  const organizations = [
    {
      name: '5G Americas',
      description: 'منظمة تجارية صناعية تركز على تعزيز وتسهيل تقدم 5G وتحويل شبكات LTE',
      url: 'https://www.5gamericas.org/',
      type: 'منظمة صناعية',
      focus: 'تقارير 5G-Advanced وتطورات 6G'
    },
    {
      name: 'IEEE Communications Society',
      description: 'أكبر جمعية مهنية تقنية في العالم مكرسة للنهوض بالابتكار التكنولوجي',
      url: 'https://www.comsoc.org/',
      type: 'جمعية مهنية',
      focus: 'معايير ومنشورات وأبحاث 5G'
    },
    {
      name: 'ITU (الاتحاد الدولي للاتصالات)',
      description: 'وكالة الأمم المتحدة المتخصصة في تكنولوجيا المعلومات والاتصالات',
      url: 'https://www.itu.int/',
      type: 'منظمة دولية',
      focus: 'معايير دولية لـ 5G و6G'
    },
    {
      name: 'Next G Alliance',
      description: 'مبادرة لتعزيز ريادة أمريكا الشمالية في تكنولوجيا الاتصالات اللاسلكية',
      url: 'https://nextgalliance.org/',
      type: 'تحالف صناعي',
      focus: 'استراتيجيات 6G والبحث والتطوير'
    },
    {
      name: 'NGMN Alliance',
      description: 'منظمة عالمية يقودها المشغلون لتطوير تحسينات تكنولوجيا النطاق العريض المتنقلة',
      url: 'https://www.ngmn.org/',
      type: 'تحالف مشغلين',
      focus: 'حالات الاستخدام والمتطلبات لـ 5G و6G'
    }
  ];

  const researchTopics = [
    {
      title: 'البروتوكولات المتقدمة في 5G-Advanced و6G',
      description: 'دراسة بروتوكولات الطبقة المادية والتحكم الجديدة التي تمكن السرعات الفائقة وزمن الاستجابة المنخفض جدًا',
      icon: Zap,
      complexity: 'عالي',
      keywords: ['NR-Advanced', 'PHY Layer', 'MAC Layer', 'RRC']
    },
    {
      title: 'الذكاء الاصطناعي والتعلم الآلي في الشبكات',
      description: 'كيفية دمج AI/ML لتحسين أداء الشبكة، إدارة الموارد، والأمن في بيئات 5G و6G',
      icon: Users,
      complexity: 'عالي',
      keywords: ['AI/ML', 'Network Optimization', 'Resource Management', 'Security']
    },
    {
      title: 'الشبكات المعرفة بالبرمجيات (SDN) ووظائف الشبكة الافتراضية (NFV)',
      description: 'دور هذه التقنيات في مرونة الشبكة وقابليتها للتوسع في أجيال الاتصالات القادمة',
      icon: Globe,
      complexity: 'متوسط',
      keywords: ['SDN', 'NFV', 'Network Slicing', 'Virtualization']
    },
    {
      title: 'تقنيات الهوائيات المتقدمة',
      description: 'مثل Massive MIMO، Beamforming، والأسطح الذكية القابلة لإعادة التشكيل (RIS)',
      icon: Zap,
      complexity: 'عالي',
      keywords: ['Massive MIMO', 'Beamforming', 'RIS', 'mmWave']
    }
  ];

  const publications = [
    {
      title: 'ITU Progress on IMT-2030 for 6G Mobile Technologies',
      source: 'ITU',
      year: '2023',
      url: 'https://www.itu.int/en/mediacentre/Pages/PR-2023-12-01-IMT-2030-for-6G-mobile-technologies.aspx',
      type: 'تقرير رسمي'
    },
    {
      title: 'IEEE Standards in 5G',
      source: 'IEEE',
      year: '2024',
      url: 'https://standards.ieee.org/wp-content/uploads/import/documents/other/5G.pdf',
      type: 'معايير تقنية'
    },
    {
      title: '5G Americas White Papers',
      source: '5G Americas',
      year: '2024',
      url: 'https://www.5gamericas.org/',
      type: 'أوراق بيضاء'
    }
  ];

  return (
    <section id="researchers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            مسار الباحثين والمهنيين
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أوراق علمية محدثة، مقارنات تقنية، بروتوكولات الشبكات، والتطورات في 6G
          </p>
        </div>

        {/* Key Organizations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            المنظمات والمصادر العالمية الموثوقة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {org.type}
                    </span>
                    <Globe className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{org.name}</CardTitle>
                  <CardDescription className="text-sm">{org.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>التركيز:</strong> {org.focus}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(org.url, '_blank')}
                  >
                    زيارة الموقع
                    <ExternalLink className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Topics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            مواضيع بحثية متقدمة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <topic.icon className="w-8 h-8 text-primary" />
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      topic.complexity === 'عالي' ? 'bg-red-100 text-red-700' :
                      topic.complexity === 'متوسط' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {topic.complexity}
                    </span>
                  </div>
                  <CardTitle className="text-lg mb-2">{topic.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {topic.keywords.map((keyword, idx) => (
                      <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            أحدث المنشورات والأوراق العلمية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                  </div>
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">{pub.source}</span> • {pub.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(pub.url, '_blank')}
                  >
                    قراءة المنشور
                    <ExternalLink className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 6G Future Outlook */}
        <div className="bg-gradient-secondary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-6 text-center">
            نظرة على مستقبل 6G
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">سرعات تيرابت</h4>
              <p className="text-sm text-muted-foreground">سرعات تصل إلى 1 تيرابت في الثانية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">ذكاء اصطناعي مدمج</h4>
              <p className="text-sm text-muted-foreground">شبكات ذكية قادرة على التعلم والتحسين الذاتي</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">اتصال شامل</h4>
              <p className="text-sm text-muted-foreground">دمج الاتصالات الأرضية والجوية والفضائية</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center bg-white/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            هل تريد فهم التأثير التجاري؟
          </h3>
          <p className="text-muted-foreground mb-6">
            انتقل إلى مسار رواد الأعمال لفهم كيفية تأثير هذه التقنيات على الصناعة والأعمال
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
          >
            انتقل إلى مسار رواد الأعمال
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearcherSection;

