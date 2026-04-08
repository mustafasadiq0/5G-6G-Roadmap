import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: 'أساسيات 5G',
      questions: [
        {
          question: 'ما هو الفرق الرئيسي بين 4G و5G؟',
          answer: '5G يوفر سرعات أعلى بـ 100 مرة من 4G (تصل إلى 20 جيجابت/ثانية)، وزمن استجابة أقل من 1 ميلي ثانية، وقدرة على ربط مليون جهاز لكل كيلومتر مربع. كما يدعم 5G تقنيات متقدمة مثل Network Slicing و Edge Computing.'
        },
        {
          question: 'متى ستكون تقنية 5G متاحة بالكامل في المنطقة العربية؟',
          answer: 'العديد من الدول العربية بدأت بالفعل في نشر شبكات 5G، مثل الإمارات والسعودية وقطر. التغطية الكاملة متوقعة بحلول 2025-2027 في معظم المدن الرئيسية، بينما المناطق الريفية قد تحتاج وقتاً أطول.'
        },
        {
          question: 'هل أحتاج إلى هاتف جديد للاستفادة من 5G؟',
          answer: 'نعم، تحتاج إلى جهاز يدعم 5G. معظم الهواتف الذكية الحديثة (من 2020 فما بعد) تدعم 5G، لكن تأكد من المواصفات قبل الشراء. أيضاً تحتاج إلى خطة اتصال تدعم 5G من مزود الخدمة.'
        },
        {
          question: 'هل 5G آمن صحياً؟',
          answer: 'وفقاً لمنظمة الصحة العالمية والدراسات العلمية المعتمدة، لا توجد أدلة علمية على أن 5G يسبب مخاطر صحية. الترددات المستخدمة أقل من الضوء المرئي وأشعة الشمس، ومستويات الإشعاع ضمن الحدود الآمنة المعتمدة دولياً.'
        }
      ]
    },
    {
      category: 'التطبيقات والاستخدامات',
      questions: [
        {
          question: 'ما هي أهم تطبيقات 5G في المدن الذكية؟',
          answer: 'تشمل إدارة المرور الذكية، أنظمة الإضاءة التكيفية، مراقبة جودة الهواء والضوضاء، إدارة النفايات الذكية، أنظمة الأمان المتقدمة، وتحسين كفاءة الطاقة والمياه. كل هذا يؤدي إلى توفير 15-25% من تكاليف التشغيل.'
        },
        {
          question: 'كيف ستؤثر 5G على الطب والرعاية الصحية؟',
          answer: 'ستمكن 5G من الجراحة عن بُعد باستخدام الروبوتات، المراقبة المستمرة للمرضى، التشخيص بالذكاء الاصطناعي في الوقت الفعلي، الواقع المعزز للتدريب الطبي، وتحسين خدمات الطوارئ والإسعاف.'
        },
        {
          question: 'ما هو دور 5G في السيارات ذاتية القيادة؟',
          answer: '5G ضروري للتواصل الفوري بين السيارات (V2V) والبنية التحتية (V2I). زمن الاستجابة المنخفض يمكن السيارات من اتخاذ قرارات سريعة، مشاركة معلومات المرور والطقس، وتحسين السلامة والكفاءة.'
        },
        {
          question: 'كيف ستغير 5G صناعة الألعاب والترفيه؟',
          answer: 'ستمكن من الألعاب السحابية عالية الجودة، الواقع الافتراضي والمعزز بدون تأخير، البث المباشر بجودة 8K، والتفاعل الفوري في الألعاب متعددة اللاعبين. كما ستفتح مجالات جديدة للترفيه التفاعلي.'
        }
      ]
    },
    {
      category: 'التقنيات المتقدمة',
      questions: [
        {
          question: 'ما هو Network Slicing وكيف يعمل؟',
          answer: 'Network Slicing يسمح بتقسيم الشبكة الفيزيائية إلى شبكات افتراضية متعددة، كل منها مخصصة لتطبيق معين. مثلاً: شريحة للسيارات ذاتية القيادة تركز على زمن الاستجابة، وأخرى للفيديو تركز على السرعة.'
        },
        {
          question: 'ما هو Edge Computing وما علاقته بـ 5G؟',
          answer: 'Edge Computing يعني معالجة البيانات قريباً من مصدرها بدلاً من إرسالها لخوادم بعيدة. مع 5G، يمكن وضع خوادم صغيرة في محطات الاتصال لتقليل زمن الاستجابة وتحسين الأداء للتطبيقات الحساسة للوقت.'
        },
        {
          question: 'ما هو Massive MIMO وكيف يحسن الأداء؟',
          answer: 'Massive MIMO يستخدم عشرات أو مئات الهوائيات في محطة واحدة لخدمة عدة مستخدمين بنفس الوقت. هذا يزيد السعة، يحسن جودة الإشارة، ويقلل التداخل، مما يؤدي إلى سرعات أعلى وتغطية أفضل.'
        },
        {
          question: 'ما هي تقنية Beamforming؟',
          answer: 'Beamforming توجه الإشارة مباشرة نحو المستخدم بدلاً من بثها في جميع الاتجاهات. هذا يحسن قوة الإشارة، يقلل التداخل، ويوفر الطاقة. إنها مثل استخدام كشاف ضوء بدلاً من مصباح عادي.'
        }
      ]
    },
    {
      category: 'مستقبل 6G',
      questions: [
        {
          question: 'متى ستكون تقنية 6G متاحة؟',
          answer: 'التطوير الأولي لـ 6G بدأ بالفعل، والمعايير الأولية متوقعة حوالي 2028-2030، مع النشر التجاري المبكر حوالي 2030-2035. ستكون التغطية الواسعة في أواخر الثلاثينيات.'
        },
        {
          question: 'ما هي أهم مميزات 6G المتوقعة؟',
          answer: 'سرعات تصل إلى 1 تيرابت/ثانية، زمن استجابة أقل من 0.1 ميلي ثانية، دمج الذكاء الاصطناعي في الشبكة، دعم الواقع الممتد (XR)، والاتصال ثلاثي الأبعاد (أرضي، جوي، فضائي).'
        },
        {
          question: 'كيف ستختلف 6G عن 5G؟',
          answer: '6G ستكون أسرع بـ 100 مرة من 5G، مع ذكاء اصطناعي مدمج، دعم للحوسبة الكمية، اتصال بالأقمار الصناعية، وقدرات جديدة مثل الاستشعار والتصوير عبر الشبكة. ستكون شبكة ذكية تتعلم وتتكيف تلقائياً.'
        },
        {
          question: 'ما هي التحديات الرئيسية لتطوير 6G؟',
          answer: 'تشمل التحديات: استهلاك الطاقة العالي، التعقيد التقني، الحاجة لمواد جديدة، التكاليف الضخمة، الأمن السيبراني، والحاجة لمعايير دولية موحدة. أيضاً تحديات الخصوصية والأخلاقيات مع الذكاء الاصطناعي المدمج.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            إجابات شاملة على أكثر الأسئلة شيوعاً حول تقنيات 5G و6G
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-contrast mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[globalIndex];
                  
                  return (
                    <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-right flex-1 ml-4">
                            {item.question}
                          </CardTitle>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      {isOpen && (
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gradient-secondary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-muted-foreground mb-6">
            تواصل معنا وسنكون سعداء لمساعدتك في العثور على الإجابة المناسبة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@5g6g-arabic.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              أرسل سؤالك عبر البريد الإلكتروني
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              نموذج الاستفسار
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

