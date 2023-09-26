import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "Autores",
    icon: StarIcon,
    description:
      " Estos documentos contienen resúmenes, artículos o comunicaciones científicas que abordan investigaciones, hallazgos, metodologías y análisis en un área específica del conocimiento. ",
    path:"/autores"

  },
  {
    color: "red",
    title: "Revistas cientificas",
    icon: ArrowPathIcon,
    description:
      "Estos artículos son revisados por expertos en el campo, a través de un proceso de revisión por pares, para garantizar su calidad, rigor metodológico y contribución significativa al conocimiento existente.",
      path:"/revista-cientifica"
  },
];

export default featuresData;
