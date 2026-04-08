import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Search, BookOpen, Filter } from 'lucide-react';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const terms = [
    {
      term: '5G',
      english: 'Fifth Generation',
      category: 'أساسي',
      definition: 'الجيل الخامس من تقنيات الاتصالات المتنقلة، يوفر سرعات عالية وزمن استجابة منخفض وقدرة على ربط عدد كبير من الأجهزة.'
    },
    {
      term: '6G',
      english: 'Sixth Generation',
      category: 'أساسي',
      definition: 'الجيل السادس من تقنيات الاتصالات المتنقلة، لا يزال قيد التطوير ومن المتوقع أن يوفر سرعات تيرابت وذكاء اصطناعي مدمج.'
    },
    {
      term: 'Network Slicing',
      english: 'Network Slicing',
      category: 'متقدم',
      definition: 'تقنية تسمح بتقسيم الشبكة الفيزيائية الواحدة إلى عدة شبكات افتراضية مستقلة، كل منها مخصصة لتطبيق أو خدمة معينة.'
    },
    {
      term: 'Edge Computing',
      english: 'Edge Computing',
      category: 'متقدم',
      definition: 'نموذج حوسبي يقرب معالجة البيانات من مصدرها بدلاً من الاعتماد على خوادم مركزية بعيدة، مما يقلل زمن الاستجابة.'
    },
    {
      term: 'Massive MIMO',
      english: 'Massive Multiple-Input Multiple-Output',
      category: 'تقني',
      definition: 'تقنية تستخدم عدداً كبيراً من الهوائيات (عشرات أو مئات) في محطة الاتصال الواحدة لتحسين السعة وجودة الإشارة.'
    },
    {
      term: 'Beamforming',
      english: 'Beamforming',
      category: 'تقني',
      definition: 'تقنية توجه الإشارة اللاسلكية في اتجاه محدد نحو المستخدم بدلاً من بثها في جميع الاتجاهات، مما يحسن الكفاءة.'
    },
    {
      term: 'mmWave',
      english: 'Millimeter Wave',
      category: 'تقني',
      definition: 'موجات راديو عالية التردد (24-100 جيجاهرتز) تستخدم في 5G لتوفير سرعات عالية جداً ولكن بمدى محدود.'
    },
    {
      term: 'Latency',
      english: 'Latency',
      category: 'أساسي',
      definition: 'زمن الاستجابة أو التأخير بين إرسال البيانات واستقبالها، يقاس بالميلي ثانية. في 5G يكون أقل من 1 ميلي ثانية.'
    },
    {
      term: 'IoT',
      english: 'Internet of Things',
      category: 'تطبيقي',
      definition: 'إنترنت الأشياء - شبكة من الأجهزة المتصلة التي يمكنها جمع وتبادل البيانات تلقائياً دون تدخل بشري.'
    },
    {
      term: 'eMBB',
      english: 'Enhanced Mobile Broadband',
      category: 'تطبيقي',
      definition: 'النطاق العريض المتنقل المحسن - إحدى حالات الاستخدام الرئيسية لـ 5G التي تركز على توفير سرعات عالية للمستخدمين.'
    },
    {
      term: 'URLLC',
      english: 'Ultra-Reliable Low-Latency Communications',
      category: 'تطبيقي',
      definition: 'الاتصالات فائقة الموثوقية ومنخفضة زمن الاستجابة - مخصصة للتطبيقات الحرجة مثل السيارات ذاتية القيادة.'
    },
    {
      term: 'mMTC',
      english: 'Massive Machine Type Communications',
      category: 'تطبيقي',
      definition: 'اتصالات الآلات الضخمة - تدعم ربط عدد كبير جداً من الأجهزة البسيطة مثل أجهزة الاستشعار.'
    },
    {
      term: 'NFV',
      english: 'Network Functions Virtualization',
      category: 'متقدم',
      definition: 'افتراضية وظائف الشبكة - تقنية تحول وظائف الشبكة من أجهزة مخصصة إلى برمجيات تعمل على خوادم عامة.'
    },
    {
      term: 'SDN',
      english: 'Software-Defined Networking',
      category: 'متقدم',
      definition: 'الشبكات المعرفة بالبرمجيات - نهج يفصل التحكم في الشبكة عن الأجهزة الفيزيائية ويجعلها قابلة للبرمجة.'
    },
    {
      term: 'QoS',
      english: 'Quality of Service',
      category: 'تقني',
      definition: 'جودة الخدمة - مجموعة من التقنيات لضمان أداء معين للتطبيقات المختلفة على الشبكة.'
    },
    {
      term: 'Spectrum',
      english: 'Radio Spectrum',
      category: 'أساسي',
      definition: 'الطيف الراديوي - نطاق الترددات المستخدمة للاتصالات اللاسلكية، مقسم إلى نطاقات مختلفة لاستخدامات متنوعة.'
    },
    {
      term: 'Small Cells',
      english: 'Small Cells',
      category: 'تقني',
      definition: 'خلايا صغيرة - محطات اتصال صغيرة منخفضة الطاقة تستخدم لتحسين التغطية والسعة في المناطق المكتظة.'
    },
    {
      term: 'Carrier Aggregation',
      english: 'Carrier Aggregation',
      category: 'تقني',
      definition: 'تجميع الحاملات - تقنية تجمع عدة نطاقات ترددية معاً لزيادة السرعة والسعة الإجمالية.'
    },
    {
      term: 'MIMO',
      english: 'Multiple-Input Multiple-Output',
      category: 'تقني',
      definition: 'متعدد المدخلات والمخرجات - تقنية تستخدم عدة هوائيات للإرسال والاستقبال لتحسين الأداء.'
    },
    {
      term: 'RAN',
      english: 'Radio Access Network',
      category: 'تقني',
      definition: 'شبكة الوصول الراديوي - الجزء من الشبكة الخلوية الذي يربط الأجهزة المتنقلة بالشبكة الأساسية.'
    }
  ];

  const categories = ['all', 'أساسي', 'تقني', 'متقدم', 'تطبيقي'];

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="glossary" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            قاموس المصطلحات التقنية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دليل شامل للمصطلحات التقنية في عالم 5G و6G مع الترجمة والشرح المفصل
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن مصطلح..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'جميع الفئات' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            عرض {filteredTerms.length} من {terms.length} مصطلح
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    term.category === 'أساسي' ? 'bg-green-100 text-green-700' :
                    term.category === 'تقني' ? 'bg-blue-100 text-blue-700' :
                    term.category === 'متقدم' ? 'bg-red-100 text-red-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {term.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-primary mb-1">
                  {term.term}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground italic">
                  {term.english}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {term.definition}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              لم يتم العثور على نتائج
            </h3>
            <p className="text-muted-foreground mb-4">
              جرب البحث بكلمات مختلفة أو اختر فئة أخرى
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              إعادة تعيين البحث
            </Button>
          </div>
        )}

        {/* Suggestion Box */}
        <div className="mt-16 text-center bg-white/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-contrast mb-4">
            هل تريد إضافة مصطلح جديد؟
          </h3>
          <p className="text-muted-foreground mb-6">
            ساعدنا في تحسين القاموس بإرسال اقتراحاتك للمصطلحات الجديدة
          </p>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            اقترح مصطلحاً جديداً
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Glossary;

