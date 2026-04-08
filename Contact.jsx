import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { value: '', label: 'اختر فئة الاستفسار' },
    { value: 'general', label: 'استفسار عام' },
    { value: 'technical', label: 'سؤال تقني' },
    { value: 'academic', label: 'مساعدة أكاديمية' },
    { value: 'business', label: 'استشارة تجارية' },
    { value: 'suggestion', label: 'اقتراح تحسين' },
    { value: 'error', label: 'الإبلاغ عن خطأ' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // محاكاة إرسال النموذج
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.category && formData.message;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            لديك سؤال أو اقتراح؟ نحن هنا لمساعدتك في رحلتك التعليمية في عالم 5G و6G
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">نموذج الاستفسار</CardTitle>
              <CardDescription>
                املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  <span className="text-green-700">تم إرسال رسالتك بنجاح! سنرد عليك قريباً.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 ml-3" />
                  <span className="text-red-700">حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-contrast mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-contrast mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-contrast mb-2">
                    فئة الاستفسار *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-contrast mb-2">
                    موضوع الرسالة *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="موضوع مختصر لرسالتك"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-contrast mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send className="mr-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">طرق التواصل السريع</CardTitle>
                <CardDescription>
                  للاستفسارات العاجلة أو المساعدة الفورية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center p-4 bg-muted/50 rounded-lg">
                  <Mail className="w-6 h-6 text-primary ml-4" />
                  <div>
                    <div className="font-medium">البريد الإلكتروني</div>
                    <div className="text-sm text-muted-foreground">info@5g6g-arabic.com</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-muted/50 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary ml-4" />
                  <div>
                    <div className="font-medium">الدعم التقني</div>
                    <div className="text-sm text-muted-foreground">support@5g6g-arabic.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Reference */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">قبل التواصل</CardTitle>
                <CardDescription>
                  تحقق من هذه المصادر أولاً
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm">الأسئلة الشائعة</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      زيارة
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm">قاموس المصطلحات</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => document.getElementById('glossary')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      زيارة
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm">الاختبار التفاعلي</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      ابدأ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">أوقات الاستجابة</CardTitle>
                <CardDescription>
                  متوسط أوقات الرد على الاستفسارات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الاستفسارات العامة</span>
                    <span className="text-sm font-medium text-primary">24-48 ساعة</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الأسئلة التقنية</span>
                    <span className="text-sm font-medium text-primary">2-3 أيام</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">المساعدة الأكاديمية</span>
                    <span className="text-sm font-medium text-primary">3-5 أيام</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الاستشارات التجارية</span>
                    <span className="text-sm font-medium text-primary">5-7 أيام</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

