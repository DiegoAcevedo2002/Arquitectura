import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "Actas Cientificas",
    icon: StarIcon,
    description:
      " Estos documentos contienen resúmenes, artículos o comunicaciones científicas que abordan investigaciones, hallazgos, metodologías y análisis en un área específica del conocimiento. ",
  },
  {
    color: "red",
    title: "Revistas cientificas",
    icon: ArrowPathIcon,
    description:
      "Estos artículos son revisados por expertos en el campo, a través de un proceso de revisión por pares, para garantizar su calidad, rigor metodológico y contribución significativa al conocimiento existente.",
  },
  {
    color: "teal",
    title: "Informe Tecnico",
    icon: FingerPrintIcon,
    description:
      "Este tipo de informe se utiliza para comunicar datos, análisis, resultados de experimentos, investigaciones o proyectos a un público técnico o especializado.",
  },
];

export default featuresData;
