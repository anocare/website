"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Info, 
  AlertCircle, 
  Shield, 
  Stethoscope, 
  Phone,
  Calendar,
  User
} from "lucide-react";

// This would typically come from your database or CMS
const diseaseData = {
  diabetes: {
    title: "Diabetes Mellitus",
    overview: "Diabetes is a chronic metabolic disorder characterized by elevated blood glucose levels due to problems with insulin production, insulin action, or both. It affects how your body processes blood sugar (glucose), which is vital for your health as it's an important source of energy for cells.",
    types: [
      {
        name: "Type 1 Diabetes",
        description: "An autoimmune condition where the body attacks insulin-producing cells in the pancreas."
      },
      {
        name: "Type 2 Diabetes",
        description: "The most common form, where the body becomes resistant to insulin or doesn't produce enough."
      },
      {
        name: "Gestational Diabetes",
        description: "Develops during pregnancy and usually resolves after delivery."
      }
    ],
    symptoms: [
      "Increased thirst and frequent urination",
      "Extreme hunger and unexplained weight loss",
      "Fatigue and irritability",
      "Blurred vision",
      "Slow-healing sores or frequent infections",
      "Tingling or numbness in hands or feet"
    ],
    causes: [
      "Genetic predisposition and family history",
      "Obesity and physical inactivity",
      "Poor diet high in processed foods and sugar",
      "Age (risk increases after 45)",
      "Hormonal conditions affecting insulin production"
    ],
    prevention: [
      "Maintain a healthy weight through balanced diet",
      "Exercise regularly - at least 30 minutes daily",
      "Eat plenty of fruits, vegetables, and whole grains",
      "Limit sugar and refined carbohydrates",
      "Regular health screenings and blood sugar monitoring",
      "Avoid smoking and limit alcohol consumption"
    ],
    treatment: [
      "Blood sugar monitoring and regular check-ups",
      "Insulin therapy or oral medications as prescribed",
      "Carbohydrate counting and meal planning",
      "Regular physical activity and exercise routine",
      "Stress management techniques",
      "Education about diabetes self-management"
    ],
    complications: [
      "Cardiovascular disease and stroke",
      "Nerve damage (neuropathy)",
      "Kidney damage (nephropathy)",
      "Eye damage and vision problems",
      "Foot damage and poor wound healing",
      "Skin and mouth conditions"
    ],
    whenToSeeDoctor: [
      "If you experience any symptoms of diabetes",
      "Family history of diabetes",
      "Blood sugar levels consistently above normal",
      "Difficulty managing current diabetes treatment",
      "Development of new complications",
      "Pregnancy planning if you have diabetes"
    ]
  },
  hypertension: {
    title: "Hypertension (High Blood Pressure)",
    overview: "Hypertension is a common condition where the long-term force of blood against artery walls is high enough to eventually cause health problems, such as heart disease. Blood pressure is determined by the amount of blood your heart pumps and the resistance to blood flow in your arteries.",
    types: [
      {
        name: "Primary (Essential) Hypertension",
        description: "The most common type, develops gradually over many years with no identifiable cause."
      },
      {
        name: "Secondary Hypertension",
        description: "Caused by an underlying condition such as kidney problems, hormonal disorders, or certain medications."
      }
    ],
    symptoms: [
      "Severe headaches",
      "Fatigue or confusion",
      "Vision problems",
      "Chest pain",
      "Difficulty breathing",
      "Irregular heartbeat",
      "Blood in urine",
      "Pounding in chest, neck, or ears"
    ],
    causes: [
      "Genetics and family history",
      "Age (risk increases with age)",
      "Obesity and lack of physical activity",
      "High salt intake in diet",
      "Excessive alcohol consumption",
      "Chronic stress",
      "Certain chronic conditions like kidney disease"
    ],
    prevention: [
      "Maintain a healthy weight",
      "Eat a heart-healthy diet rich in fruits and vegetables",
      "Reduce sodium intake in your diet",
      "Exercise regularly for at least 150 minutes per week",
      "Limit alcohol consumption",
      "Quit smoking and avoid tobacco products",
      "Manage stress through relaxation techniques",
      "Get adequate sleep (7-9 hours per night)"
    ],
    treatment: [
      "Lifestyle modifications (diet, exercise, weight loss)",
      "Antihypertensive medications as prescribed",
      "Regular blood pressure monitoring at home",
      "Reduce sodium and increase potassium intake",
      "Stress management and relaxation techniques",
      "Regular follow-ups with healthcare provider",
      "Treatment of underlying conditions if present"
    ],
    complications: [
      "Heart attack or stroke",
      "Heart failure",
      "Kidney damage or failure",
      "Vision loss",
      "Sexual dysfunction",
      "Peripheral artery disease",
      "Aneurysm"
    ],
    whenToSeeDoctor: [
      "Blood pressure consistently above 140/90 mmHg",
      "Sudden severe headache",
      "Chest pain or shortness of breath",
      "Vision problems",
      "Blood in urine",
      "Irregular heartbeat",
      "For routine blood pressure screening"
    ]
  },
  asthma: {
    title: "Asthma",
    overview: "Asthma is a chronic respiratory condition that inflames and narrows the airways in the lungs, causing difficulty breathing. During an asthma attack, the airways become swollen and the muscles around them tighten, making it harder to breathe.",
    types: [
      {
        name: "Allergic Asthma",
        description: "Triggered by allergens like pollen, dust mites, pet dander, or mold."
      },
      {
        name: "Non-Allergic Asthma",
        description: "Triggered by factors like stress, exercise, cold air, or infections."
      },
      {
        name: "Exercise-Induced Asthma",
        description: "Symptoms occur during or after physical activity."
      },
      {
        name: "Occupational Asthma",
        description: "Caused by inhaling fumes, gases, dust, or other substances at work."
      }
    ],
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing when exhaling",
      "Coughing, especially at night",
      "Trouble sleeping due to breathing problems",
      "Increased breathing difficulty during physical activity"
    ],
    causes: [
      "Genetic predisposition",
      "Exposure to allergens (pollen, dust, pet dander)",
      "Respiratory infections",
      "Air pollutants and irritants",
      "Cold air or weather changes",
      "Strong emotions and stress",
      "Certain medications",
      "Gastroesophageal reflux disease (GERD)"
    ],
    prevention: [
      "Identify and avoid asthma triggers",
      "Get vaccinated for influenza and pneumonia",
      "Monitor your breathing and peak flow",
      "Follow your asthma action plan",
      "Keep indoor air clean with air filters",
      "Control humidity levels in your home",
      "Take prescribed preventive medications regularly",
      "Avoid exposure to tobacco smoke"
    ],
    treatment: [
      "Quick-relief inhalers (bronchodilators) for immediate symptoms",
      "Long-term control medications (inhaled corticosteroids)",
      "Allergy medications if allergen-triggered",
      "Biologic therapies for severe asthma",
      "Peak flow monitoring",
      "Breathing exercises and techniques",
      "Regular check-ups with healthcare provider"
    ],
    complications: [
      "Permanent narrowing of airways",
      "Frequent emergency room visits or hospitalizations",
      "Side effects from long-term medication use",
      "Reduced ability to exercise or be physically active",
      "Sleep disruption and fatigue",
      "Depression and anxiety",
      "Decreased quality of life"
    ],
    whenToSeeDoctor: [
      "Symptoms occurring more than twice a week",
      "Need for quick-relief inhaler more than twice a week",
      "Waking up at night due to asthma symptoms",
      "Frequent asthma attacks",
      "Peak flow readings in the red zone",
      "Symptoms not improving with current treatment",
      "Severe asthma attack requiring emergency care"
    ]
  }
};

export default function DiseaseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Get disease data based on slug
  const disease = diseaseData[slug as keyof typeof diseaseData];

  // If disease not found, show error
  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disease Not Found</h1>
          <p className="text-gray-600 mb-6">The disease you're looking for doesn't exist.</p>
          <Link
            href="/diseases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Diseases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <Link
            href="/diseases"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Diseases
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {disease.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive information about symptoms, causes, prevention, and treatment
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {disease.overview}
              </p>
            </section>

            {/* Types */}
            {disease.types && disease.types.length > 0 && (
              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Types</h2>
                <div className="space-y-4">
                  {disease.types.map((type, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Symptoms */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Symptoms</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Causes */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Causes & Risk Factors</h2>
              <ul className="space-y-3">
                {disease.causes.map((cause, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Prevention */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Prevention</h2>
              </div>
              <ul className="space-y-3">
                {disease.prevention.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-0.5">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Treatment */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Treatment Options</h2>
              </div>
              <ul className="space-y-3">
                {disease.treatment.map((option, index) => (
                  <li key={index} className="flex items-start gap-3 bg-purple-50 rounded-lg p-4">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Complications */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Possible Complications</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {disease.complications.map((complication, index) => (
                  <li key={index} className="flex items-start gap-3 bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{complication}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* When to See a Doctor */}
            <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg p-6 md:p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">When to See a Doctor</h2>
              </div>
              <ul className="space-y-3">
                {disease.whenToSeeDoctor.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Emergency Helpline</h3>
                </div>
                <p className="text-red-100 mb-4">
                  Need immediate medical assistance?
                </p>
                <a
                  href="tel:+911234567890"
                  className="block w-full bg-white text-red-600 text-center font-bold py-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Call +91 123 456 7890
                </a>
              </div>

              {/* Consultation CTA */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Need Consultation?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Book an appointment with our healthcare experts for personalized advice.
                </p>
                <Link
                  href="/request-a-call"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Request a Call
                </Link>
              </div>

              {/* Related Resources */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/diseases" className="text-blue-600 hover:text-blue-700 hover:underline">
                      View All Diseases
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-blue-600 hover:text-blue-700 hover:underline">
                      About Anocare helpline
                    </Link>
                  </li>
                  <li>
                    <Link href="/subscriptions" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Health Plans
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Medical Disclaimer</h4>
                <p className="text-sm text-gray-600">
                  This information is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}