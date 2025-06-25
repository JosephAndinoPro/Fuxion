
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ClientInfo } from '../types';

const getApiKey = (): string => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY environment variable is not set.");
    // In a real app, you might throw an error or handle this more gracefully.
    // For this example, we'll proceed, and the calling function should handle missing API key.
    return ""; 
  }
  return apiKey;
};


export const generateLifestyleTips = async (clientInfo: ClientInfo): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "La generación de consejos de estilo de vida no está disponible en este momento (clave API no configurada). Por favor, consulta a tu asesor de bienestar.";
  }

  const ai = new GoogleGenAI({ apiKey });

  const dietDetails = clientInfo.dietType === 'Otra' ? clientInfo.customDietType : clientInfo.dietType;
  const symptomsString = clientInfo.commonSymptoms.length > 0 ? clientInfo.commonSymptoms.join(', ') : 'Ninguno reportado';

  const prompt = `
Eres un asesor de bienestar experto y empático. Basándote en la siguiente información de un cliente, proporciona entre 3 y 5 consejos de estilo de vida personalizados, breves, accionables y motivadores. 
Estos consejos deben ayudarle a alcanzar su objetivo principal de salud. 
No menciones ni recomiendes ningún producto comercial o suplemento específico (ni de Fuxion ni de otras marcas). Enfócate únicamente en cambios de hábitos y estilo de vida.
Evita frases como "Considera tomar..." o "Un suplemento de...". En su lugar, sugiere acciones como "Intenta incorporar...", "Asegúrate de...", "Prioriza...".
Formatea cada consejo como un punto separado, idealmente iniciando con un verbo de acción.

Información del Cliente:
- Nombre: ${clientInfo.name}
- Edad: ${clientInfo.age}
- Género: ${clientInfo.gender}
- Ocupación: ${clientInfo.occupation}
- Nivel de Actividad Física General: ${clientInfo.activityLevel}
- Objetivo Principal de Salud: ${clientInfo.mainGoal}
- Detalles del Objetivo: ${clientInfo.priorityGoalDetails || 'No especificado'}
- Tipo de Dieta: ${dietDetails}
- Regularidad de Comidas: ${clientInfo.mealRegularity}
- Consumo de Agua: ${clientInfo.waterIntake}
- Frecuencia de Ejercicio: ${clientInfo.exerciseFrequency}
- Tipo de Ejercicio: ${clientInfo.exerciseType || 'No especificado'}
- Horas de Sueño: ${clientInfo.sleepHours} horas
- Calidad del Sueño: ${clientInfo.sleepQuality}
- Síntomas Comunes: ${symptomsString}
- Condiciones Médicas: ${clientInfo.medicalConditions || 'Ninguna reportada'}
- Medicamentos/Suplementos Actuales: ${clientInfo.currentMedications || 'Ninguno reportado'}

Considera cómo sus hábitos actuales (dieta, ejercicio, sueño, estrés implícito por ocupación o síntomas) pueden estar impactando su objetivo de "${clientInfo.mainGoal}".
Los consejos deben ser prácticos y fáciles de implementar. Finaliza con una frase motivadora corta.
`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17", // Using the recommended model
      contents: prompt,
      config: {
        temperature: 0.7, // For creative yet relevant advice
        topP: 0.95,
        topK: 40,
        // No systemInstruction needed here as the role is well defined in the prompt.
      }
    });

    const text = response.text;
    if (text) {
      return text.trim();
    } else {
      return "No se pudieron generar consejos de estilo de vida en este momento. Intenta ser más específico en tu información o consulta a tu asesor.";
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Check for specific error types if needed, e.g., API key issues, quota limits
    let errorMessage = "Hubo un problema al generar los consejos de estilo de vida. ";
    if (error instanceof Error) {
        if (error.message.includes("API key not valid")) {
            errorMessage += "La clave API no es válida. Por favor, verifica la configuración.";
        } else if (error.message.includes("quota")) {
            errorMessage += "Se ha alcanzado la cuota de uso. Inténtalo más tarde.";
        } else {
            errorMessage += "Por favor, inténtalo de nuevo más tarde.";
        }
    } else {
        errorMessage += "Error desconocido. Por favor, inténtalo de nuevo más tarde.";
    }
    return errorMessage;
  }
};
