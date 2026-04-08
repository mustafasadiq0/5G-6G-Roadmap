import { Wifi, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'المسارات التعليمية', href: '#paths' },
    { name: 'للمبتدئين', href: '#beginners' },
    { name: 'للطلبة', href: '#students' },
    { name: 'للباحثين', href: '#researchers' },
    { name: 'لرواد الأعمال', href: '#business' }
  ];

  const resources = [
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'قاموس المصطلحات', href: '#glossary' },
    { name: 'تواصل معنا', href: '#contact' },
    { name: 'الاختبار التفاعلي', href: '#quiz' }
  ];

  const externalResources = [
    { name: 'مدونة د. مصطفى صادق', href: 'https://mustafasadiq0.wordpress.com' },
    { name: 'قناة د. مصطفى صادق', href: 'https://youtube.com/mustafasadiq' },
    { name: 'Coursera 5G', href: 'https://www.coursera.org/learn/5g-training-qualcomm' },
    { name: '5G Americas', href: 'https://www.5gamericas.org/' },
    { name: 'IEEE', href: 'https://www.ieee.org/' },
    { name: 'ITU', href: 'https://www.itu.int/' }
  ];

  return (
    <footer className="bg-contrast text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">5G/6G عربي</h3>
                <p className="text-sm text-muted">ابدأ من هنا</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              موقع شامل يستهدف المبتدئين، المهندسين، والباحثين في مجال شبكات الجوال الحديثة. 
              نهدف إلى تمكين المستخدم العربي من فهم واستكشاف تقنيات 5G و6G بوضوح.
            </p>
            <div className="flex items-center text-sm text-muted">
              <Mail className="w-4 h-4 ml-2" />
              info@5g6g-arabic.com
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">المصادر</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-muted hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">مصادر خارجية</h4>
            <ul className="space-y-3">
              {externalResources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 mr-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-muted/20 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted mb-4 md:mb-0">
            <p>© {currentYear} 5G/6G عربي. جميع الحقوق محفوظة.</p>
          </div>
          
          <div className="flex items-center text-sm text-muted">
            <span>صُنع بـ</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>للمجتمع العربي التقني</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-muted/20">
          <div className="text-xs text-muted leading-relaxed">
            <p className="mb-2">
              <strong>إخلاء مسؤولية:</strong> هذا الموقع مخصص للأغراض التعليمية والإعلامية فقط. 
              المعلومات المقدمة هنا مجمعة من مصادر متنوعة ويتم تحديثها بانتظام، لكننا لا نضمن دقة أو اكتمال جميع المعلومات.
            </p>
            <p>
              الروابط الخارجية المقدمة هي لمصادر تعليمية موثوقة، ولكن محتواها خارج عن سيطرتنا. 
              نوصي بالتحقق من المعلومات من مصادر متعددة قبل اتخاذ قرارات مهمة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

