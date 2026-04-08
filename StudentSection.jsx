import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, Code, BookOpen, Video, FileText } from 'lucide-react';

const StudentSection = () => {
  const courses = [
    {
      title: '5G for Everyone',
      provider: 'Qualcomm Academy على Coursera',
      description: 'دورة تمهيدية ممتازة لفهم أساسيات 5G وكيفية عملها وتأثيرها على العالم',
      duration: '13 ساعة',
      level: 'مبتدئ',
      url: 'https://www.coursera.org/learn/5g-training-qualcomm',
      rating: '4.8/5'
    },
    {
      title: '5G Network Fundamentals',
      provider: 'Coursera',
      description: 'تقدم خدمات وهندسة شبكات 5G، والمبادئ الأساسية لواجهة الراديو الجديدة (NR)',
      duration: '15 ساعة',
      level: 'متوسط',
      url: 'https://www.coursera.org/learn/5g-network-fundamentals',
      rating: '4.6/5'
    },
    {
      title: '5G Mobile Networks Specialization',
      provider: 'Coursera',
      description: 'تخصص شامل يتكون من 3 دورات، يغطي مبادئ وتقنيات وهندسة وبروتوكولات شبكات 5G',
      duration: '3 أشهر',
      level: 'متقدم',
      url: 'https://www.coursera.org/specializations/5g-mobile-networks-technology-architecture-and-protocols',
      rating: '4.7/5'
    }
  ];

  const simulationTools = [
    {
      name: 'ns-3 Network Simulator',
      description: 'محاكي أحداث منفصلة مفتوح المصدر يستخدم على نطاق واسع في الأبحاث والتعليم',
      features: [
        'وحدة 5G-LENA NR لمحاكاة تقنية 5G',
        'دعم mmWave والتقنيات المتقدمة',
        'مجتمع نشط ووثائق شاملة',
        'مفتوح المصدر ومجاني'
      ],
      resources: [
        {
          title: 'نظرة عامة على وحدة 5G-LENA NR',
          url: 'https://www.nsnam.org/tutorials/consortium24/NR-Tutorial-2024.pdf',
          type: 'PDF'
        },
        {
          title: 'خطوات تطبيق شبكة 5G في ns-3',
          url: 'https://ns3simulation.com/how-to-implement-5g-network-in-ns3/',
          type: 'دليل'
        },
        {
          title: 'دروس تعليمية حول ns-3',
          url: 'https://www.nsnam.org/docs/tutorial/singlehtml/index.html',
          type: 'دليل'
        }
      ]
    },
    {
      name: 'MATLAB 5G Toolbox',
      description: 'بيئة برمجة ومنصة حوسبة رقمية لتكوين ومحاكاة وقياس وتحليل روابط وأنظمة اتصالات 5G',
      features: [
        '5G Toolbox للمحاكاة المتقدمة',
        'نمذجة PHY Layer و MAC Layer',
        'دعم Massive MIMO و Beamforming',
        'أدوات تحليل الأداء'
      ],
      resources: [
        {
          title: 'البدء باستخدام 5G Toolbox',
          url: 'https://www.mathworks.com/help/5g/getting-started-with-5g-toolbox.html',
          type: 'دليل'
        },
        {
          title: 'دروس تعليمية حول 5G باستخدام MATLAB',
          url: 'https://www.mathworks.com/videos/series/understanding-the-5g-nr-standard.html',
          type: 'فيديو'
        },
        {
          title: 'توثيق 5G Toolbox',
          url: 'https://www.mathworks.com/help/5g/index.html',
          type: 'وثائق'
        }
      ]
    }
  ];

  const projectIdeas = [
    {
      title: 'محاكاة شبكة 5G أساسية',
      description: 'إنشاء محاكاة بسيطة لشبكة 5G باستخدام ns-3 مع عدة مستخدمين ومحطة أساسية واحدة',
      difficulty: 'مبتدئ',
      tools: ['ns-3', 'C++'],
      duration: '2-3 أسابيع'
    },
    {
      title: 'تحليل أداء Massive MIMO',
      description: 'دراسة تأثير عدد الهوائيات على أداء النظام باستخدام MATLAB',
      difficulty: 'متوسط',
      tools: ['MATLAB', '5G Toolbox'],
      duration: '3-4 أسابيع'
    },
    {
      title: 'Network Slicing في 5G',
      description: 'تصميم وتنفيذ نظام تقسيم الشبكة لخدمات مختلفة (eMBB, URLLC, mMTC)',
      difficulty: 'متقدم',
      tools: ['ns-3', 'Python'],
      duration: '6-8 أسابيع'
    },
    {
      title: 'Edge Computing في شبكات 5G',
      description: 'محاكاة نظام حوسبة طرفية مع تحليل زمن الاستجابة والأداء',
      difficulty: 'متقدم',
      tools: ['ns-3', 'OMNeT++'],
      duration: '8-10 أسابيع'
    }
  ];

  return (
    <section id="students" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            مسار الطلبة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مصادر أكاديمية، مشاريع تخرج، وأدوات محاكاة متقدمة لطلبة الهندسة
          </p>
        </div>

        {/* Academic Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            الدورات الأكاديمية الموصى بها
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-xs text-muted-foreground">{course.rating}</span>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {course.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{course.duration}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(course.url, '_blank')}
                    >
                      ابدأ الدورة
                      <ExternalLink className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Simulation Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-contrast mb-8">
            أدوات المحاكاة والتطوير
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {simulationTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 text-primary ml-2" />
                    {tool.name}
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">المميزات الرئيسية:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full ml-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">مصادر التعلم:</h4>
                    <div className="space-y-2">
                      {tool.resources.map((resource, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <div className="flex items-center">
                            {resource.type === 'PDF' && <FileText className="w-4 h-4 text-primary ml-2" />}
                            {resource.type === 'فيديو' && <Video className="w-4 h-4 text-primary ml-2" />}
                            {(resource.type === 'دليل' || resource.type === 'وثائق') && <BookOpen className="w-4 h-4 text-primary ml-2" />}
                            <span className="text-sm">{resource.title}</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => window.open(resource.url, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Ideas */}
        <div>
          <h3 className="text-2xl font-bold text-contrast mb-8">
            أفكار مشاريع التخرج
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectIdeas.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.difficulty === 'مبتدئ' ? 'bg-green-100 text-green-700' :
                      project.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center bg-gradient-secondary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            هل تريد التعمق أكثر في البحث؟
          </h3>
          <p className="text-muted-foreground mb-6">
            انتقل إلى مسار الباحثين والمهنيين للوصول إلى أحدث الأوراق العلمية والتطورات في 6G
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('researchers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            انتقل إلى مسار الباحثين
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;

