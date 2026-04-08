import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { CheckCircle, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

const InteractiveQuiz = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: "ما هو مستوى خبرتك الحالي في تقنيات الاتصالات؟",
      options: [
        { id: 'a', text: 'مبتدئ تماماً - لا أعرف شيئاً عن 5G', value: 'beginner' },
        { id: 'b', text: 'لدي معرفة أساسية بالتقنيات', value: 'basic' },
        { id: 'c', text: 'طالب هندسة أو تقنية معلومات', value: 'student' },
        { id: 'd', text: 'مهني أو باحث في المجال', value: 'professional' }
      ]
    },
    {
      id: 2,
      question: "ما هو هدفك الرئيسي من تعلم 5G/6G؟",
      options: [
        { id: 'a', text: 'فهم عام وثقافة شخصية', value: 'general' },
        { id: 'b', text: 'مشروع تخرج أو دراسة أكاديمية', value: 'academic' },
        { id: 'c', text: 'بحث علمي أو تطوير مهني', value: 'research' },
        { id: 'd', text: 'قرارات استثمارية أو تجارية', value: 'business' }
      ]
    },
    {
      id: 3,
      question: "كم من الوقت يمكنك تخصيصه للتعلم أسبوعياً؟",
      options: [
        { id: 'a', text: 'أقل من ساعتين', value: 'minimal' },
        { id: 'b', text: '2-5 ساعات', value: 'moderate' },
        { id: 'c', text: '5-10 ساعات', value: 'substantial' },
        { id: 'd', text: 'أكثر من 10 ساعات', value: 'intensive' }
      ]
    },
    {
      id: 4,
      question: "ما هو مستوى خبرتك في البرمجة والأدوات التقنية؟",
      options: [
        { id: 'a', text: 'لا أعرف البرمجة', value: 'none' },
        { id: 'b', text: 'معرفة أساسية ببعض اللغات', value: 'basic' },
        { id: 'c', text: 'خبرة جيدة في البرمجة والأدوات', value: 'good' },
        { id: 'd', text: 'خبير في البرمجة والمحاكاة', value: 'expert' }
      ]
    },
    {
      id: 5,
      question: "أي من هذه المواضيع يثير اهتمامك أكثر؟",
      options: [
        { id: 'a', text: 'كيف تؤثر 5G على حياتي اليومية', value: 'daily_life' },
        { id: 'b', text: 'التقنيات والبروتوكولات المتقدمة', value: 'technical' },
        { id: 'c', text: 'الفرص التجارية والاستثمارية', value: 'business' },
        { id: 'd', text: 'البحث العلمي والتطوير', value: 'research' }
      ]
    },
    {
      id: 6,
      question: "ما هو دورك المهني الحالي أو المستهدف؟",
      options: [
        { id: 'a', text: 'طالب أو متعلم', value: 'student' },
        { id: 'b', text: 'مهندس أو تقني', value: 'engineer' },
        { id: 'c', text: 'باحث أو أكاديمي', value: 'researcher' },
        { id: 'd', text: 'رائد أعمال أو مدير', value: 'business' }
      ]
    },
    {
      id: 7,
      question: "ما هو مستوى التفاصيل التقنية التي تفضلها؟",
      options: [
        { id: 'a', text: 'شرح مبسط بدون تعقيدات', value: 'simple' },
        { id: 'b', text: 'تفاصيل متوسطة مع أمثلة', value: 'moderate' },
        { id: 'c', text: 'تفاصيل تقنية عميقة', value: 'detailed' },
        { id: 'd', text: 'أحدث الأبحاث والتطورات', value: 'cutting_edge' }
      ]
    }
  ];

  const calculateResult = () => {
    const scores = {
      beginner: 0,
      student: 0,
      researcher: 0,
      business: 0
    };

    // تحليل الإجابات وحساب النقاط
    Object.values(answers).forEach(answer => {
      switch (answer) {
        case 'beginner':
        case 'general':
        case 'minimal':
        case 'none':
        case 'daily_life':
        case 'simple':
          scores.beginner += 2;
          break;
        case 'basic':
        case 'academic':
        case 'moderate':
        case 'student':
        case 'engineer':
          scores.student += 2;
          break;
        case 'professional':
        case 'research':
        case 'substantial':
        case 'intensive':
        case 'good':
        case 'expert':
        case 'technical':
        case 'researcher':
        case 'detailed':
        case 'cutting_edge':
          scores.researcher += 2;
          break;
        case 'business':
          scores.business += 2;
          break;
      }
    });

    // تحديد المسار الأنسب
    const maxScore = Math.max(...Object.values(scores));
    const recommendedPath = Object.keys(scores).find(key => scores[key] === maxScore);

    const pathInfo = {
      beginner: {
        title: 'مسار المبتدئين',
        description: 'ابدأ بالمفاهيم الأساسية وتطبيقات 5G في الحياة اليومية',
        duration: '2-4 ساعات',
        features: ['شرح مبسط', 'أمثلة عملية', 'مصادر عربية', 'بدون تعقيدات تقنية'],
        nextSteps: 'بعد إتمام هذا المسار، يمكنك الانتقال إلى مسار الطلبة',
        sectionId: 'beginners'
      },
      student: {
        title: 'مسار الطلبة',
        description: 'دورات أكاديمية وأدوات محاكاة ومشاريع تخرج',
        duration: '10-20 ساعة',
        features: ['دورات Coursera', 'أدوات ns-3 و MATLAB', 'مشاريع عملية', 'مصادر أكاديمية'],
        nextSteps: 'يمكنك التخصص أكثر في مسار الباحثين أو رواد الأعمال',
        sectionId: 'students'
      },
      researcher: {
        title: 'مسار الباحثين والمهنيين',
        description: 'أوراق علمية محدثة وبروتوكولات متقدمة وتطورات 6G',
        duration: '20+ ساعة',
        features: ['أحدث الأبحاث', 'مصادر IEEE و ITU', 'تقنيات متقدمة', 'تطورات 6G'],
        nextSteps: 'استمر في متابعة أحدث الأبحاث والمنشورات العلمية',
        sectionId: 'researchers'
      },
      business: {
        title: 'مسار رواد الأعمال وصناع القرار',
        description: 'تأثير 5G/6G على الصناعة والفرص الاستثمارية',
        duration: '5-8 ساعات',
        features: ['تحليل السوق', 'الفرص الاستثمارية', 'التحديات والحلول', 'استراتيجيات الأعمال'],
        nextSteps: 'طبق المعرفة في استراتيجيات شركتك أو مشاريعك',
        sectionId: 'business'
      }
    };

    return pathInfo[recommendedPath];
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const calculatedResult = calculateResult();
      setResult(calculatedResult);
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const goToRecommendedSection = () => {
    if (result && result.sectionId) {
      document.getElementById(result.sectionId)?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">الاختبار التفاعلي</CardTitle>
              <CardDescription>
                {showResult ? 'نتيجة الاختبار' : `السؤال ${currentQuestion + 1} من ${questions.length}`}
              </CardDescription>
            </div>
            <Button variant="ghost" onClick={onClose}>×</Button>
          </div>
          {!showResult && (
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mt-4" />
          )}
        </CardHeader>

        <CardContent>
          {!showResult ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                      className={`w-full p-4 text-right rounded-lg border transition-colors ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[questions[currentQuestion].id] === option.value
                            ? 'border-primary bg-primary'
                            : 'border-muted-foreground'
                        }`}>
                          {answers[questions[currentQuestion].id] === option.value && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                  السابق
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  {currentQuestion === questions.length - 1 ? 'عرض النتيجة' : 'التالي'}
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  المسار الموصى به لك:
                </h3>
                <h4 className="text-xl font-semibold mb-4">{result.title}</h4>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">{result.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-semibold">المدة المقترحة:</span>
                    <span className="text-muted-foreground mr-2">{result.duration}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold mb-2">المميزات الرئيسية:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {result.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full ml-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <span className="font-semibold text-primary">الخطوة التالية: </span>
                  <span className="text-sm">{result.nextSteps}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={goToRecommendedSection}
                  className="bg-gradient-primary hover:opacity-90 flex-1"
                >
                  ابدأ المسار الموصى به
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  <RotateCcw className="ml-2 h-4 w-4" />
                  إعادة الاختبار
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveQuiz;

