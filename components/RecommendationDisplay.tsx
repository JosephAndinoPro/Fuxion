
import React from 'react';
import { jsPDF } from 'jspdf';
import { Recommendation, Product, ClientInfo } from '../types';
import ProductCard from './ProductCard';
import { GiftIcon, LightBulbIcon, RefreshIcon, UserCircleIcon, PhoneIcon, DownloadIcon } from './IconComponents';
import { ADMIN_CONTACT_INFO, HEALTH_GOALS, ACTIVITY_LEVELS, GENDERS, DIET_TYPES, MEAL_REGULARITIES, WATER_INTAKES, EXERCISE_FREQUENCIES, SLEEP_QUALITIES, SYMPTOM_OPTIONS } from '../constants';

interface RecommendationDisplayProps {
  recommendation: Recommendation;
  clientInfo: ClientInfo;
  onStartOver: () => void;
}

const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({ recommendation, clientInfo, onStartOver }) => {
  const { clientName, mainGoal, mainProduct, complementaryProducts, lifestyleTips } = recommendation;

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let y = 20; // Initial Y position
    const lineHeight = 7;
    const margin = 15;
    const maxWidth = doc.internal.pageSize.width - margin * 2;

    const addText = (text: string | string[], x: number, currentY: number, options?: any) => {
      let allLines: string[] = [];
      if (typeof text === 'string') {
        allLines = doc.splitTextToSize(text, maxWidth);
      } else { // text is string[]
        text.forEach(singleLine => {
          const splitSingleLine = doc.splitTextToSize(singleLine, maxWidth);
          allLines.push(...splitSingleLine);
        });
      }
      doc.text(allLines, x, currentY, options);
      return currentY + (allLines.length * lineHeight);
    };
    
    const checkNewPage = (currentY: number, neededHeight = 40) => {
        if (currentY + neededHeight > pageHeight - margin) {
            doc.addPage();
            return margin; // Reset Y to top margin
        }
        return currentY;
    };

    doc.setFontSize(18);
    y = addText(`Plan Fuxion Personalizado para: ${clientName}`, margin, y);
    y += lineHeight / 2;

    doc.setFontSize(12);
    doc.setProperties({
        title: `Recomendación Fuxion - ${clientName}`,
        subject: 'Plan de Bienestar Personalizado Fuxion',
        author: 'Fuxion Wellness Planner',
    });
    
    // Client Info Section
    y = checkNewPage(y);
    doc.setFontSize(14);
    y = addText('Información del Cliente:', margin, y, { style: 'bold' });
    doc.setFontSize(10);
    y = addText(`Nombre: ${clientInfo.name}`, margin, y);
    y = addText(`Edad: ${clientInfo.age}`, margin, y);
    y = addText(`Género: ${clientInfo.gender}`, margin, y);
    y = addText(`Ocupación: ${clientInfo.occupation}`, margin, y);
    y = addText(`Nivel de Actividad: ${clientInfo.activityLevel}`, margin, y);
    y = addText(`Objetivo Principal: ${clientInfo.mainGoal}`, margin, y);
    if(clientInfo.priorityGoalDetails) y = addText(`Detalles del Objetivo: ${clientInfo.priorityGoalDetails}`, margin, y);
    y = addText(`Tipo de Dieta: ${clientInfo.dietType === 'Otra' ? clientInfo.customDietType : clientInfo.dietType}`, margin, y);
    y = addText(`Regularidad Comidas: ${clientInfo.mealRegularity}`, margin, y);
    y = addText(`Consumo Agua: ${clientInfo.waterIntake}`, margin, y);
    y = addText(`Ejercicio Frecuencia: ${clientInfo.exerciseFrequency}`, margin, y);
    if(clientInfo.exerciseType) y = addText(`Tipo Ejercicio: ${clientInfo.exerciseType}`, margin, y);
    y = addText(`Horas Sueño: ${clientInfo.sleepHours}`, margin, y);
    y = addText(`Calidad Sueño: ${clientInfo.sleepQuality}`, margin, y);
    if(clientInfo.commonSymptoms.length > 0) y = addText(`Síntomas Comunes: ${clientInfo.commonSymptoms.join(', ')}`, margin, y);
    if(clientInfo.medicalConditions) y = addText(`Condiciones Médicas: ${clientInfo.medicalConditions}`, margin, y);
    if(clientInfo.currentMedications) y = addText(`Medicamentos Actuales: ${clientInfo.currentMedications}`, margin, y);
    if(clientInfo.additionalInfo) y = addText(`Info Adicional: ${clientInfo.additionalInfo}`, margin, y);
    y += lineHeight;


    // Product Recommendation Section
    y = checkNewPage(y);
    doc.setFontSize(14);
    y = addText('Recomendación de Productos Fuxion:', margin, y, { style: 'bold' });
    
    doc.setFontSize(12);
    y = addText(`Producto Principal: ${mainProduct.name}`, margin, y, { style: 'italic' });
    doc.setFontSize(10);
    y = addText(`Beneficios: ${mainProduct.benefits.join(', ')}`, margin + 5, y);
    y = addText(`Uso Sugerido: ${mainProduct.suggestedUsage}`, margin + 5, y);
    y += lineHeight / 2;

    if (complementaryProducts.length > 0) {
      y = checkNewPage(y);
      doc.setFontSize(12);
      y = addText('Productos Complementarios:', margin, y, { style: 'italic' });
      doc.setFontSize(10);
      complementaryProducts.forEach(p => {
        y = checkNewPage(y, 3 * lineHeight);
        y = addText(`- ${p.name}: ${p.benefits.slice(0,2).join(', ')}...`, margin + 5, y);
         y = addText(`  Uso: ${p.suggestedUsage}`, margin + 7, y);
      });
    }
    y += lineHeight;

    // Lifestyle Tips Section
    y = checkNewPage(y);
    doc.setFontSize(14);
    y = addText('Consejos de Estilo de Vida:', margin, y, { style: 'bold' });
    doc.setFontSize(10);
    const tipsArray = lifestyleTips.split('\n').map(tip => tip.replace(/^- /, '• '));
    y = addText(tipsArray, margin, y);
    y += lineHeight;

    // Advisor Contact
    y = checkNewPage(y);
    doc.setFontSize(12);
    y = addText('Contacta a tu Asesora de Bienestar:', margin, y, {style: 'bold'});
    doc.setFontSize(10);
    y = addText(`${ADMIN_CONTACT_INFO.name}`, margin, y);
    y = addText(`Teléfono: ${ADMIN_CONTACT_INFO.phone}`, margin, y);
    y += lineHeight;

    doc.setFontSize(8);
    addText("Este plan es una sugerencia y no sustituye el consejo médico profesional. La constancia es clave para ver resultados. ¡Fuxion mejora tu vida!", margin, pageHeight - margin - lineHeight, {align: 'center'});


    doc.save(`Recomendacion_Fuxion_${clientName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  return (
    <div className="space-y-8 animate-fadeIn p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-xl">
      <div className="text-center pb-6 border-b-2 border-pink-300">
        <UserCircleIcon className="h-16 w-16 text-pink-500 mx-auto mb-3" />
        <h2 className="text-3xl font-bold text-gray-800">
          Tu Plan Fuxion Personalizado, <span className="text-pink-500">{clientName}</span>!
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Diseñado para ayudarte a alcanzar tu objetivo de: <strong className="text-gray-700">{mainGoal}</strong>
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <div className="flex items-center mb-4">
            <GiftIcon className="h-8 w-8 text-green-500 mr-3 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-green-600">Producto Principal Recomendado</h3>
          </div>
          <ProductCard product={mainProduct} isMainProduct={true} />
        </section>

        {complementaryProducts.length > 0 && (
          <section>
            <div className="flex items-center mb-4">
                <GiftIcon className="h-7 w-7 text-blue-500 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-blue-600">Productos Complementarios Sugeridos</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complementaryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
             <p className="text-sm text-gray-500 mt-3 italic">
                Estos productos pueden potenciar tus resultados y abordar necesidades secundarias.
            </p>
          </section>
        )}

        <section>
          <div className="flex items-center mb-4">
            <LightBulbIcon className="h-8 w-8 text-yellow-500 mr-3 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-yellow-600">Consejos de Estilo de Vida Personalizados</h3>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow">
            {lifestyleTips.split('\n').map((tip, index) => (
              <p key={index} className="text-gray-700 mb-2 leading-relaxed">
                <span className="text-yellow-600 font-semibold mr-2">&#8226;</span> {tip.replace(/^- /, '')}
              </p>
            ))}
             {lifestyleTips.includes("API key missing") && (
                <p className="text-sm text-red-600 mt-2">
                    Nota: La generación automática de consejos está limitada. Por favor, consulta directamente con tu asesor de bienestar para un plan de estilo de vida más detallado.
                </p>
            )}
             {lifestyleTips.includes("clave API no configurada") && (
                <p className="text-sm text-red-600 mt-2">
                    Nota: La generación automática de consejos está limitada. Por favor, consulta directamente con tu asesor de bienestar para un plan de estilo de vida más detallado.
                </p>
            )}
          </div>
        </section>
      </div>
      
      <div className="mt-10 text-center border-t pt-6 space-y-6">
         <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Contacta a tu Asesora de Bienestar Fuxion</h4>
            <div className="flex flex-col items-center justify-center space-y-1">
                <p className="text-md text-gray-600 flex items-center">
                <UserCircleIcon className="h-5 w-5 mr-2 text-pink-500" /> {ADMIN_CONTACT_INFO.name}
                </p>
                <p className="text-md text-gray-600 flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-pink-500" /> {ADMIN_CONTACT_INFO.phone}
                </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Para adquirir tus productos, resolver dudas o para un seguimiento personalizado.
            </p>
         </div>

         <p className="text-md text-gray-700">
            Recuerda que la constancia es clave. ¡Estamos aquí para apoyarte en tu camino hacia el bienestar!
          </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onStartOver}
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transition duration-150"
            >
              <RefreshIcon className="h-5 w-5 mr-2" />
              Crear Nueva Recomendación
            </button>
            <button
              onClick={handleDownloadPdf}
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150"
              title="Descargar datos del cliente y resumen de recomendación en PDF"
            >
              <DownloadIcon className="h-5 w-5 mr-2" />
              Descargar PDF
            </button>
        </div>
         <p className="text-xs text-gray-500 mt-4">
            La funcionalidad "Descargar PDF" guarda la información del cliente y un resumen de la recomendación en un archivo PDF en tu dispositivo.
          </p>
      </div>
    </div>
  );
};

export default RecommendationDisplay;
