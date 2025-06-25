
import { ClientInfo, Product, FormStep, ActivityLevel, Gender, DietType, MealRegularity, WaterIntake, ExerciseFrequency, SleepQuality, AdminContact } from './types';

export const initialClientInfo: ClientInfo = {
  name: '',
  age: '',
  gender: '',
  occupation: '',
  activityLevel: '',
  mainGoal: '',
  priorityGoalDetails: '',
  dietType: '',
  customDietType: '',
  mealRegularity: '',
  waterIntake: '',
  exerciseFrequency: '',
  exerciseType: '',
  sleepHours: '',
  sleepQuality: '',
  commonSymptoms: [],
  medicalConditions: '',
  currentMedications: '',
  additionalInfo: '',
};

export const HEALTH_GOALS: string[] = [
  'Control de Peso',
  'Energía',
  'Digestión',
  'Sistema Inmunológico',
  'Estrés/Ánimo',
  'Sueño',
  'Salud Articular/Muscular',
  'Rendimiento Deportivo',
  'Belleza',
  'Desintoxicación',
  'Salud Femenina', // Added based on Probal
];

export const ACTIVITY_LEVELS: ActivityLevel[] = Object.values(ActivityLevel);
export const GENDERS: Gender[] = Object.values(Gender);
export const DIET_TYPES: DietType[] = Object.values(DietType);
export const MEAL_REGULARITIES: MealRegularity[] = Object.values(MealRegularity);
export const WATER_INTAKES: WaterIntake[] = Object.values(WaterIntake);
export const EXERCISE_FREQUENCIES: ExerciseFrequency[] = Object.values(ExerciseFrequency);
export const SLEEP_QUALITIES: SleepQuality[] = Object.values(SleepQuality);


export const SYMPTOM_OPTIONS: string[] = [
  'Fatiga frecuente',
  'Problemas digestivos (hinchazón, estreñimiento, etc.)',
  'Estrés/Ansiedad alto',
  'Enfermedades frecuentes / Defensas bajas',
  'Dolores articulares/musculares',
  'Dificultad para concentrarse',
  'Problemas de piel',
  'Antojos de dulces/comida chatarra',
  'Molestias del ciclo menstrual', // Added for Probal
  'Bochornos / Síntomas de menopausia', // Added for Probal
];

export const ADMIN_CONTACT_INFO: AdminContact = {
  name: 'Ing. Alexandra Campos',
  phone: '0996480402',
};

// Data for Berry Balance image (P008)
const berryBalanceBase64Image = 'data:image/webp;base64,UklGRtIJAABXRUJQVlA4IMSJAACwfwCdASo8AjwCPm00lkgkIq thermostatsCgQgljbtgLUA02H354q/pA9AD+If1H+8/uB/Pf8D+PXsf+z9QH0AP5b/bPUA/lj/Aekh6Qv0hPQA/kP8t6gH8s/qP+F/3HqAfrV+9/tN/nf9N/tfcB/Lz+z/5X/R/7P/l+oB/Mv7F/qv9f/uP+H8AX8u/sH+z/0X+2/3XkA/mz+H/3X+7/3n/L/zX9gv5B/bf9z/sP+L/fv8F/hvQA/ln9g/1P+v/3X/D+AD+Xf2f/f/7r/kf+X/iv7N/////+iH85fzv+9/4H/m/5r/////gBfqz/U9ADAAA/rwA7oEzSHOAYn85uQ/OUhG3C0w2A30yALN9Ea0Dq8V0L06YyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9L4qYyY8fG04tKk8i9G0gAP77V0eJAAAA==';


export const PRODUCTS: Product[] = [
  {
    id: 'P001',
    name: 'Termo T3',
    category: 'Control de Peso',
    benefits: ['Acelera el metabolismo', 'Ayuda a quemar grasa eficientemente', 'Convierte grasa en energía', 'Reduce la acumulación de grasa corporal'],
    keyIngredients: ['Mix de Tés (Verde, Negro y Rojo)', 'Cetonas de Frambuesa', 'Garcinia Cambogia', 'L-Carnitina', 'Café Verde', 'Ácido Alfa Lipoico', 'Vitamina B6', 'Cromo'],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua caliente o fría, preferiblemente antes del ejercicio o por la mañana.',
    expectedResults: 'Mayor energía, reducción de medidas, mejor control del apetito con el uso continuo. Ayuda a aumentar la resistencia y reducir riesgos en la salud asociados al sobrepeso.',
    imageUrl: 'https://picsum.photos/seed/termo_t3_fuxion/400/300',
    tags: ['control de peso', 'quema grasa', 'metabolismo', 'energía', 'grasa corporal', 'té'],
  },
  {
    id: 'P002',
    name: 'Biopro Fit', // Actually Biopro+ Fit in catalog
    category: 'Control de Peso',
    benefits: ['Promueve la saciedad', 'Ayuda a tonificar los músculos', 'Contribuye a la reducción de grasa corporal', 'Mejora la nutrición a nivel celular', 'Acelera el metabolismo'],
    keyIngredients: ['Bioprotein+ con Colostrum®', 'Prolibra®', 'Aminoácidos', 'Tamarindo Malabar', 'Vitaminas', 'DHA y ARA'],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua, como snack entre comidas o después del ejercicio.',
    expectedResults: 'Mejor control del apetito, mantenimiento de masa muscular durante la pérdida de peso, tonificación. Reducción de la sensación de apetito.',
    imageUrl: 'https://picsum.photos/seed/biopro_plus_fit_fuxion/400/300',
    tags: ['control de peso', 'proteína', 'saciedad', 'tonificación', 'músculo', 'colostrum', 'prolibra'],
  },
  {
    id: 'P003',
    name: 'Vita Xtra T+',
    category: 'Energía',
    benefits: ['Proporciona energía física y mental sostenida', 'Mejora la concentración y el estado de alerta', 'Potente efecto antioxidante', 'Reduce la fatiga', 'Mantiene alerta y de buen ánimo', 'Mejora rendimiento físico y desempeño diario'],
    keyIngredients: ['Guayusa', 'Té Verde', 'Acai Berry', 'Goji Berry', 'Micelio de Cordyceps', 'Maca', 'Ginseng', 'Antocianina de Maíz Morado', 'Vitaminas del Complejo B'],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua, preferiblemente por la mañana o cuando se necesite un impulso de energía.',
    expectedResults: 'Aumento de vitalidad y resistencia, mejor rendimiento mental y físico, reducción del cansancio, ánimo mejorado.',
    imageUrl: 'https://picsum.photos/seed/vita_xtra_t_fuxion/400/300',
    tags: ['energía', 'vitalidad', 'concentración', 'antioxidante', 'fatiga', 'maca', 'ginseng', 'guayusa', 'maíz morado'],
  },
  {
    id: 'P004',
    name: 'Flora Liv',
    category: 'Digestión',
    benefits: ['Regenera y equilibra la flora intestinal', 'Mejora la digestión y el tránsito intestinal', 'Fortalece el sistema inmunológico desde el intestino', 'Previene trastornos digestivos', 'Recupera flora intestinal post-tratamientos'],
    keyIngredients: ['Cultivos Probióticos (10 mil millones UFC)', 'Fibra Prebiótica (Inulina de Achicoria)', 'Pulpa de Granadilla', 'Aguaymanto'],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua fría, preferiblemente en ayunas o antes de dormir.',
    expectedResults: 'Mejora en la digestión, regularidad intestinal, reducción de hinchazón, fortalecimiento general de defensas.',
    imageUrl: 'https://picsum.photos/seed/flora_liv_fuxion/400/300',
    tags: ['digestión', 'probióticos', 'flora intestinal', 'sistema inmunológico', 'tránsito intestinal', 'granadilla', 'aguaymanto'],
  },
  {
    id: 'P005',
    name: 'ON (No Stress)', // Catalog has "No Stress", also "ON" for mental vigor. Combined.
    category: 'Estrés/Ánimo',
    benefits: ['Ayuda a reducir el estrés y la ansiedad', 'Mejora la concentración y el enfoque mental', 'Promueve la relajación sin causar somnolencia', 'Equilibra el estado de ánimo', 'Nutre el cerebro y mejora función neuronal'],
    keyIngredients: ['L-Teanina', 'Glicina', 'Triptófano', 'Extracto de Súper Frutas (Ashwagandha, Amalaki, Limón)', 'Magnesio en molécula orgánica', 'Vitaminas del Complejo B', 'GABA', 'Taurina', 'Extracto de Yerba Mate', 'Acai Berry', 'Camu Camu', 'DHA', 'ARA'], // Combined from ON and No Stress
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua, en momentos de estrés o cuando se necesite mejorar la concentración y calma.',
    expectedResults: 'Mayor calma y claridad mental, mejor manejo del estrés, mejora en el humor y enfoque, función cognitiva reforzada.',
    imageUrl: 'https://picsum.photos/seed/on_no_stress_fuxion/400/300',
    tags: ['estrés', 'ansiedad', 'concentración', 'relajación', 'ánimo', 'mental', 'cerebro', 'gaba', 'ashwagandha', 'yerba mate'],
  },
  {
    id: 'P006',
    name: 'Beauty In',
    category: 'Belleza',
    benefits: ['Promueve una piel más saludable, firme, elástica y uniforme', 'Fortalece cabello y uñas', 'Protege contra el daño oxidativo y previene envejecimiento prematuro', 'Mejora la hidratación de la piel', 'Nutre, protege y repara la piel dañada'],
    keyIngredients: ['Péptidos de Colágeno Bioactivo Optimizado', 'Coenzima Q10', 'Sesbania (Biotina Natural)', 'Concentrado de Súper Frutas Exóticas (Vitaminas C y E)', 'Zinc', 'Ácido Hialurónico'], // Added Ácido Hialurónico based on general knowledge and previous data.
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua, preferiblemente por la noche.',
    expectedResults: 'Piel más radiante y juvenil, cabello y uñas más fuertes, mejora general en la apariencia. Disminución de arrugas.',
    imageUrl: 'https://picsum.photos/seed/beauty_in_fuxion/400/300', // Corrected typo
    tags: ['belleza', 'piel', 'cabello', 'uñas', 'colágeno', 'antienvejecimiento', 'biotina', 'coq10', 'zinc'],
  },
   {
    id: 'P007',
    name: 'Alpha Balance',
    category: 'Desintoxicación',
    benefits: ['Ayuda a equilibrar el pH del cuerpo', 'Promueve la desintoxicación y eliminación de toxinas', 'Fortalece el sistema inmunológico', 'Rico en clorofila y antioxidantes', 'Libera de residuos y toxinas', 'Aumenta energía'],
    keyIngredients: ['Alfalfa', 'Algas (Chlorella + Espirulina)', 'Pasto de Trigo (Libre de Gluten)', 'Espinaca', 'Manzana Verde', 'Limón', 'Jengibre', 'Minerales (Magnesio + Zinc)'],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua, preferiblemente en ayunas.',
    expectedResults: 'Mayor sensación de bienestar, mejora en niveles de energía, apoyo a la limpieza interna del organismo, pH equilibrado.',
    imageUrl: 'https://picsum.photos/seed/alpha_balance_fuxion/400/300',
    tags: ['desintoxicación', 'detox', 'pH', 'alcalinizar', 'antioxidante', 'energía', 'clorofila', 'espirulina', 'chlorella'],
  },
  {
    id: 'P008',
    name: 'Berry Balance',
    category: 'Sistema Inmunológico', // Also good for urinary tract health
    benefits: ['Protege el tracto urinario y previene molestias', 'Evita la retención de líquidos', 'Promueve el equilibrio del pH de la flora protectora del tracto urinario', 'Potente efecto antioxidante'],
    keyIngredients: ['Cranberry', 'Concentrado de Berries y Frutas Tropicales', 'Infusión de Piña', 'Bacterias Probióticas', 'Antocianina', 'Calcio Orgánico', 'Vitaminas C y E'],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua, como preventivo o al primer síntoma.',
    expectedResults: 'Mejora en la salud del tracto urinario, reducción de recurrencia de ITU, defensas fortalecidas.',
    imageUrl: berryBalanceBase64Image,
    tags: ['sistema inmunológico', 'tracto urinario', 'infecciones urinarias', 'antioxidante', 'cranberry', 'retención de líquidos', 'probióticos'],
  },
  {
    id: 'P009',
    name: 'Rexet',
    category: 'Desintoxicación',
    benefits: ["Mantener óptimas las funciones metabólicas del hígado.", "Mantener el cuerpo en equilibrio, limpio de toxinas.", "Promover la función depurativa desde el sistema digestivo."],
    keyIngredients: ["Mix de Extractos Vegetales (Tuna Roja, Alcachofa, Hierba Luisa, Perejil, Acerola, Clorofila)", "Bicarbonato de Sodio", "Mix de Minerales (Zinc, Magnesio)", "Taurina", "Vitaminas del Complejo B, Vitamina C y D", "Acetilcisteína"],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua. Bebida efervescente.',
    expectedResults: 'Mejora en función hepática y digestiva, sensación de limpieza y equilibrio.',
    imageUrl: 'https://picsum.photos/seed/rexet_fuxion/400/300',
    tags: ['desintoxicación', 'hígado', 'limpieza', 'equilibrio', 'digestivo', 'tuna roja', 'alcachofa'],
  },
  {
    id: 'P010',
    name: 'Liquid Fiber',
    category: 'Digestión',
    benefits: ["Mejorar la nutrición y el balance de la flora intestinal.", "Mejorar la frecuencia de las evacuaciones intestinales de manera natural.", "Promover la salud digestiva."],
    keyIngredients: ["Fibras Prebióticas (Inulina y Oligofructuosa de raíz de Achicoria)", "Micronutrientes"],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua. Sabor limón.',
    expectedResults: 'Tránsito intestinal regular, mejor digestión, flora intestinal saludable.',
    imageUrl: 'https://picsum.photos/seed/liquid_fiber_fuxion/400/300',
    tags: ['digestión', 'fibra', 'prebiótico', 'flora intestinal', 'tránsito intestinal', 'achicoria'],
  },
  {
    id: 'P011',
    name: 'Prunex1',
    category: 'Digestión',
    benefits: ["Sentirte más liviano sin las molestias de la hinchazón abdominal.", "Tener un adecuado tránsito intestinal.", "Liberarte de desechos perjudiciales para tu organismo."],
    keyIngredients: ["Mix de Fibras (Psyllium, Inulina de Achicoria, Mucílago de Linaza)", "Extracto de Guindón", "Kelp", "Anís Estrella"],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua caliente o fría, preferiblemente por la noche.',
    expectedResults: 'Alivio del estreñimiento, tránsito intestinal regular, reducción de hinchazón.',
    imageUrl: 'https://picsum.photos/seed/prunex1_fuxion/400/300',
    tags: ['digestión', 'tránsito intestinal', 'laxante suave', 'estreñimiento', 'hinchazón', 'psyllium', 'guindón'],
  },
  {
    id: 'P012',
    name: 'Biopro+ Tect',
    category: 'Sistema Inmunológico',
    benefits: ["Elevar cualitativa y cuantitativamente el perfil proteico de la dieta diaria.", "Mejorar los procesos de regeneración celular.", "Mantener saludable el sistema de defensas del organismo.", "Fortalecer los huesos."],
    keyIngredients: ["Bioprotein+ con Colostrum®", "Bioferrín®", "Aminoácidos", "Calcio Lácteo", "DHA y ARA"],
    suggestedUsage: 'Tomar 1 stick al día, disuelto en agua o bebida de preferencia.',
    expectedResults: 'Sistema de defensas fortalecido, mejor recuperación celular, huesos más fuertes.',
    imageUrl: 'https://picsum.photos/seed/biopro_tect_fuxion/400/300',
    tags: ['sistema inmunológico', 'proteína', 'defensas', 'regeneración celular', 'huesos', 'colostrum', 'bioferrin'],
  },
  {
    id: 'P013',
    name: 'Protein Active',
    category: 'Nutrición General', // Can also be 'Control de Peso' or 'Rendimiento Deportivo'
    benefits: ["Asimilación óptima de aminoácidos esenciales para regenerar tejidos.", "Elevar el perfil proteico de la dieta.", "Reducir el daño oxidativo y mejorar desempeño mental."],
    keyIngredients: ["Bioprotein Active® (Proteína de Quinua Germinada, Arroz Integral Germinado, Arveja, Algas)", "Aminoácidos", "Vitaminas", "DHA y ARA", "Aceite de Coco"],
    suggestedUsage: 'Tomar 1 stick disuelto en agua o bebida vegetal, después del ejercicio o como complemento nutricional.',
    expectedResults: 'Mejor recuperación muscular, nutrición completa, apoyo al sistema de defensa.',
    imageUrl: 'https://picsum.photos/seed/protein_active_fuxion/400/300',
    tags: ['proteína', 'vegetal', '100% vegetal', 'regeneración', 'aminoácidos', 'salud general', 'vegan', 'quinua', 'arroz germinado'],
  },
  {
    id: 'P014',
    name: 'Nutraday',
    category: 'Energía',
    benefits: ["Complementar nutrición con antioxidantes, vitaminas y minerales.", "Mantener en estado óptimo el sistema inmunológico.", "Óptimo desarrollo físico y mental."],
    keyIngredients: ["Extracto de Moringa", "Guayaba", "Limón", "Albahaca", "Camu Camu", "Acai Berry", "Acerola", "Quinua Germinada", "12 Vitaminas", "5 Minerales Orgánicos"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua.',
    expectedResults: 'Mayor vitalidad, sistema inmunológico fuerte, mejor desarrollo general.',
    imageUrl: 'https://picsum.photos/seed/nutraday_fuxion/400/300',
    tags: ['energía', 'vitaminas', 'minerales', 'antioxidantes', 'sistema inmunológico', 'moringa', 'nutrición diaria', 'desarrollo físico', 'desarrollo mental'],
  },
  {
    id: 'P015',
    name: 'Vitaenergia',
    category: 'Energía',
    benefits: ["Disipar la sensación de fatiga.", "Mejorar la asimilación de proteínas y regeneración celular.", "Reforzar el sistema inmunológico.", "Reducir la oxidación celular."],
    keyIngredients: ["Aminoácidos", "Vitaminas", "Minerales", "Fibra Prebiótica", "Antocianina de Maíz Morado", "Acai Berry", "Camu Camu", "Luteína (Extracto de Marigold)"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua.',
    expectedResults: 'Menos fatiga, más energía, mejor recuperación, defensas altas.',
    imageUrl: 'https://picsum.photos/seed/vitaenergia_fuxion/400/300',
    tags: ['energía', 'fatiga', 'multivitamínico', 'minerales', 'antioxidante', 'maíz morado', 'luteína', 'regeneración celular'],
  },
  {
    id: 'P016',
    name: 'Xpeed',
    category: 'Energía',
    benefits: ["Brinda energía saludable de forma natural.", "Efecto burbujeante y refrescante."],
    keyIngredients: ["Mix Energético Ancestral (Maca + Guaraná + Teína)", "Taurina", "Acetil Tirosina", "Vitamina C", "Vitamina B5"],
    suggestedUsage: 'Tomar una lata cuando se necesite un impulso de energía. Bebida lista para tomar.',
    expectedResults: 'Aumento inmediato de energía y estado de alerta.',
    imageUrl: 'https://picsum.photos/seed/xpeed_fuxion/400/300',
    tags: ['energía', 'bebida energizante', 'maca', 'guaraná', 'taurina', 'alerta', 'teína', 'natural sparkling effect'],
  },
  {
    id: 'P017',
    name: 'Duo Defense',
    category: 'Sistema Inmunológico',
    benefits: ["Modula la generación de radicales libres.", "Reduce el estrés oxidativo.", "Fortalece el sistema inmunológico."],
    keyIngredients: ["Vera+ (Aloe Vera, Olivactive®, Wellmune®, Aminoácidos)", "Camu-C (Extracto de Camu-Camu, Fresa Liofilizada, Agua Ozonizada)"],
    suggestedUsage: 'Tomar según indicaciones del envase (producto listo para tomar con mecanismo especial).',
    expectedResults: 'Defensas reforzadas, mayor protección antioxidante.',
    imageUrl: 'https://picsum.photos/seed/duo_defense_fuxion/400/300',
    tags: ['sistema inmunológico', 'defensas', 'antioxidante', 'aloe vera', 'camu camu', 'wellmune', 'fresa'],
  },
  {
    id: 'P018',
    name: 'Vera+',
    category: 'Sistema Inmunológico',
    benefits: ["Mantener activas las defensas naturales.", "Reducir el daño oxidativo que ocasiona deterioro celular."],
    keyIngredients: ["Extracto de Aloe Vera", "Beta Glucanos (Wellmune®)", "Mix de Aminoácidos (N-Acetilcisteína, Glicina, L-Glutamina)", "Extracto de Hoja de Oliva (Olivactive®)", "Amalaki (Vitamina C)"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua.',
    expectedResults: 'Defensas activas, protección celular contra oxidación.',
    imageUrl: 'https://picsum.photos/seed/vera_plus_fuxion/400/300',
    tags: ['sistema inmunológico', 'defensas', 'aloe vera', 'beta glucanos', 'wellmune', 'olivactive', 'antioxidante', 'vitamina c'],
  },
  {
    id: 'P019',
    name: 'Gano+ T',
    category: 'Sistema Inmunológico',
    benefits: ["Mantener activas las defensas naturales.", "Reducir el daño oxidativo.", "Modular el sistema inmunológico para una vida plena."],
    keyIngredients: ["Ganoderma Lucidum", "Extracto de Té Blanco", "Vitamina C y D"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua caliente o tibia.',
    expectedResults: 'Sistema inmunológico optimizado, protección antioxidante.',
    imageUrl: 'https://picsum.photos/seed/gano_t_fuxion/400/300',
    tags: ['sistema inmunológico', 'ganoderma', 'té blanco', 'antioxidante', 'defensas', 'vitamina c', 'vitamina d'],
  },
  {
    id: 'P020',
    name: 'Golden FLX',
    category: 'Salud Articular/Muscular',
    benefits: ["Contribuye a prevenir molestias articulares (edad, sobrepeso, ejercicio).", "Contribuye a mejorar la flexibilidad y movilidad de articulaciones.", "Ayuda a controlar los procesos oxidativos."],
    keyIngredients: ["Extracto de Cúrcuma (orgánica certificada)", "Jengibre", "Cardamomo", "Leche de Coco", "Pimienta Negra", "Canela"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua caliente.',
    expectedResults: 'Mejora en confort articular, mayor flexibilidad, reducción de procesos oxidativos.',
    imageUrl: 'https://picsum.photos/seed/golden_flx_fuxion/400/300',
    tags: ['articulaciones', 'flexibilidad', 'movilidad', 'antioxidante', 'cúrcuma', 'jengibre', 'antiinflamatorio natural', 'dolor articular'],
  },
  {
    id: 'P021',
    name: 'Probal',
    category: 'Salud Femenina',
    benefits: ["Reforzar la salud femenina.", "Controlar las molestias del periodo.", "Mantener el balance durante la menopausia (cambios de humor, bochornos)."],
    keyIngredients: ["Extracto de Aguaje", "Extracto de Dong Quai", "Extracto de Orégano", "Triptófano", "Magnesio", "Extracto de Camu-Camu", "Extracto de Marigold (Luteína)"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua.',
    expectedResults: 'Alivio de síntomas menstruales y menopáusicos, equilibrio hormonal femenino.',
    imageUrl: 'https://picsum.photos/seed/probal_fuxion/400/300',
    tags: ['salud femenina', 'menstruación', 'periodo', 'menopausia', 'bochornos', 'equilibrio hormonal', 'aguaje', 'dong quai'],
  },
  {
    id: 'P022',
    name: 'Passion',
    category: 'Energía', // Also 'Vitality' or 'Libido' if we had such category
    benefits: ["Mejorar la vitalidad gracias a L-arginina, isoleucina y glutamina.", "Incrementar la energía por su contenido de maca, ginseng y teína del té negro.", "Vigorizar el cuerpo gracias a jalea real y zinc orgánico."],
    keyIngredients: ["Aminoácidos (L-Arginina, Isoleucina, Glutamina)", "Extracto de Jalea Real", "Maca", "Ginseng", "Zinc Orgánico", "Teína (Té Negro)"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua.',
    expectedResults: 'Aumento de vigor, energía y vitalidad general.',
    imageUrl: 'https://picsum.photos/seed/passion_fuxion/400/300',
    tags: ['energía', 'vitalidad', 'vigor', 'libido', 'l-arginina', 'maca', 'ginseng', 'jalea real', 'zinc'],
  },
  {
    id: 'P023',
    name: 'Youth Elixir HGH',
    category: 'Anti-Edad', // Also 'Sueño'
    benefits: ["Aumentar la vitalidad, la elasticidad de la piel y mejorar la calidad del sueño.", "Prevenir los efectos del envejecimiento prematuro producido por los radicales libres."],
    keyIngredients: ["Aminoácidos", "Antioxidantes", "Resveratrol", "Optiberry® (Mix de Berries)"],
    suggestedUsage: 'Tomar 1 stick al día disuelto en agua, preferiblemente antes de dormir.',
    expectedResults: 'Mejora en vitalidad, calidad de piel y sueño. Efecto antienvejecimiento.',
    imageUrl: 'https://picsum.photos/seed/youth_elixir_fuxion/400/300',
    tags: ['anti-edad', 'antienvejecimiento', 'vitalidad', 'elasticidad piel', 'sueño', 'hgh', 'resveratrol', 'antioxidantes'],
  },
  {
    id: 'P024',
    name: 'Pre Sport',
    category: 'Rendimiento Deportivo',
    benefits: ["Mantener la hidratación corporal gracias a su aporte de electrolitos.", "Aumentar la resistencia, al promover la vasodilatación (mejora nutrición y oxigenación muscular).", "Reducir la fatiga y mejorar el desempeño deportivo gracias a energía extra."],
    keyIngredients: ["Aminoácidos (Citrulina de Sandía, B-Alanina de Beterraga, L-Creatina Nitrato)", "Mix Isotónico (Dextrosa, Potasio, Sodio, Zinc)", "Hierba Mate"],
    suggestedUsage: 'Tomar 1 stick disuelto en agua, 15-30 minutos antes del ejercicio.',
    expectedResults: 'Mayor energía, resistencia e hidratación durante el ejercicio. Reducción de fatiga.',
    imageUrl: 'https://picsum.photos/seed/pre_sport_fuxion/400/300',
    tags: ['rendimiento deportivo', 'pre-entreno', 'energía', 'resistencia', 'hidratación', 'electrolitos', 'citrulina', 'beta-alanina', 'creatina', 'hierba mate'],
  },
  {
    id: 'P025',
    name: 'Xtra Mile',
    category: 'Rendimiento Deportivo',
    benefits: ["Mantener saludables los niveles de glucosa.", "Mantener la energía de manera sostenida.", "Reducir la fatiga durante el ejercicio."],
    keyIngredients: ["Palatinose®", "Agua de Coco Amazónico", "Sal de Maras", "Mix de Electrolitos (Potasio, Sodio, Calcio, Magnesio)", "Minerales (Zinc, Cromo)"],
    suggestedUsage: 'Tomar 1 stick disuelto en agua, durante ejercicios de larga duración.',
    expectedResults: 'Energía sostenida, mejor hidratación, reducción de fatiga en pruebas de resistencia.',
    imageUrl: 'https://picsum.photos/seed/xtra_mile_fuxion/400/300',
    tags: ['rendimiento deportivo', 'intra-entreno', 'resistencia', 'energía sostenida', 'hidratación', 'electrolitos', 'palatinose', 'agua de coco'],
  },
  {
    id: 'P026',
    name: 'Post Sport',
    category: 'Rendimiento Deportivo',
    benefits: ["Reparar, incrementar y fortalecer las fibras musculares.", "Reponer los electrolitos de forma natural, gracias al agua de coco.", "Neutralizar el efecto catabólico producido durante el ejercicio intenso."],
    keyIngredients: ["Aminoácidos (BCAAs + Glutamina)", "Acerola", "Granada", "Agua de Coco"],
    suggestedUsage: 'Tomar 1 stick disuelto en agua, inmediatamente después del ejercicio.',
    expectedResults: 'Recuperación muscular más rápida, reposición de electrolitos, reducción de daño muscular.',
    imageUrl: 'https://picsum.photos/seed/post_sport_fuxion/400/300',
    tags: ['rendimiento deportivo', 'post-entreno', 'recuperación muscular', 'bcaas', 'glutamina', 'electrolitos', 'antioxidantes', 'agua de coco'],
  },
  {
    id: 'P027',
    name: 'Biopro+ Sport',
    category: 'Rendimiento Deportivo',
    benefits: ["Incrementar el flujo sanguíneo y el rendimiento gracias a Actinos®.", "Generar masa muscular magra y marcada en menos tiempo.", "Mejorar la recuperación y aporte de oxígeno al músculo."],
    keyIngredients: ["Bioprotein+ con Colostrum®", "Actinos®", "Aminoácidos", "Calcio Lácteo", "DHA y ARA"],
    suggestedUsage: 'Tomar 1 stick disuelto en agua, después del ejercicio o como batido proteico.',
    expectedResults: 'Aumento de masa muscular, mejor rendimiento, recuperación optimizada.',
    imageUrl: 'https://picsum.photos/seed/biopro_sport_fuxion/400/300',
    tags: ['rendimiento deportivo', 'proteína', 'masa muscular', 'recuperación', 'fuerza', 'actinos', 'colostrum'],
  },
  // Add more products as identified from the catalog...
];


export const FORM_STEPS: FormStep[] = [
  { 
    id: 1, 
    name: 'Información Personal', 
    fields: ['name', 'age', 'gender', 'occupation', 'activityLevel'] 
  },
  { 
    id: 2, 
    name: 'Objetivo Principal de Bienestar', 
    fields: ['mainGoal', 'priorityGoalDetails'] 
  },
  { 
    id: 3, 
    name: 'Hábitos de Estilo de Vida', 
    fields: ['dietType', 'customDietType', 'mealRegularity', 'waterIntake', 'exerciseFrequency', 'exerciseType', 'sleepHours', 'sleepQuality'] 
  },
  { 
    id: 4, 
    name: 'Salud General y Síntomas', 
    fields: ['commonSymptoms', 'medicalConditions', 'currentMedications', 'additionalInfo'] 
  },
];