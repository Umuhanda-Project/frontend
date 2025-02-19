import { ibyapaCourse } from "./ibyapaCourse";
import lesson2 from "../assets/ibyapa/Picture2.png";
import lesson3 from "../assets/ibyapa/Picture3.png";
import { signsCourse } from "./signsCourse";

export const courses = [
 ibyapaCourse,
 signsCourse,
  {
    id: 2,
    title: "Isomo rya mbere",
    description:
      "Ibibazo n’ ibisubizo byagufasha kwitegura ikizami cya provisoire",
    image: lesson2,
    label: "Kinyarwanda",
    notes: [
      {
        id: 1,
        image: lesson2,
        description: "Igice cy’ibanze ku mategeko y’umuhanda.",
      },
      {
        id: 2,
        image: lesson2,
        description: "Uko ukwiye kwitwara mu masangano y’imihanda.",
      },
      {
        id: 3,
        image: lesson2,
        description: "Ibimenyetso by’amatara yo mu muhanda.",
      },
      {
        id: 4,
        image: lesson2,
        description: "Amategeko yo kwihuta no guhagarara.",
      },
      {
        id: 5,
        image: lesson2,
        description: "Uburyo bwo kwirinda impanuka mu muhanda.",
      },
    ],
  },
  {
    id: 3,
    title: "Isomo rya kabiri",
    description:
      "Ibibazo n’ ibisubizo byagufasha kwitegura ikizami cya provisoire",
    image: lesson3,
    label: "Kinyarwanda",
    notes: [
      {
        id: 1,
        image: lesson3,
        description: "Ubumenyi bw’ibanze ku gutwara ibinyabiziga.",
      },
      {
        id: 2,
        image: lesson3,
        description: "Ibyo ugomba kugenzura mbere yo kwatsa imodoka.",
      },
      {
        id: 3,
        image: lesson3,
        description: "Inyito y’ibikoresho by’imodoka.",
      },
      {
        id: 4,
        image: lesson3,
        description: "Kumenya ibyuma by’ingenzi bigize imodoka.",
      },
      {
        id: 5,
        image: lesson3,
        description: "Icyo gukora igihe imodoka yangiritse mu muhanda.",
      },
    ],
  },
];
