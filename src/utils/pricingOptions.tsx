// export const pricingOptions = [
//     {
//       id: 1,
//       header: "Ibizamin bitanu",
//       description: "Niba ushaka kwiga mugihe gitoya",
//       price: 500,
//       options: [
//         { id: 1, description: "Gukora ibizamini bitandatu gusa", status: true },
//         { id: 2, description: "Inshuro 5 gusa", status: true },
//         { id: 3, description: "Niwemerewe kureba video", status: false },
//         { id: 4, description: "Niwemerewe gusoma", status: false },
//         { id: 5, description: "iminsi 3", status: false },
//       ],
//     },
//     {
//         id: 2,
//         header: "Ibizamin bitanu",
//         description: "Niba ushaka kwiga mugihe gitoya",
//         price: 4000,
//         options: [
//           { id: 1, description: "Gukora ibizamini wifuza", status: true },
//           { id: 2, description: "wemewe gusoma ibizamini byose", status: true },
//           { id: 3, description: "wemerewe kureba video", status: true },
//           { id: 4, description: "Gusoma amasomo", status: true },
//           { id: 5, description: "iminsi 10", status: true },
//         ],
//       },
//       {
//         id: 3,
//         header: "Ibizamin bitanu",
//         description: "Niba ushaka kwiga mugihe gitoya",
//         price: 6500,
//         options: [
//           { id: 1, description: "Gukora ibizamini wifuza", status: true },
//           { id: 2, description: "wemerewe gusoma ibizamini byose", status: true },
//           { id: 3, description: "wemerewe kureba video", status: true },
//           { id: 4, description: "wemerewe gusoma", status: true },
//           { id: 5, description: "iminsi 14", status: true },
//         ],
//       },
//       {
//         id: 4,
//         header: "Ibizamin bitanu",
//         description: "Niba ushaka kwiga mugihe gitoya",
//         price: 8500,
//         options: [
//           { id: 1, description: "Gukora ibizamini wifuza", status: true },
//           { id: 2, description: "Gusoma ibizamini byose wifuza", status: true },
//           { id: 3, description: "wemerewe kureba video", status: true },
//           { id: 4, description: "wemerewe gusoma", status: true },
//           { id: 5, description: "iminsi 30", status: true },
//         ],
//       },
//   ];
export const pricingOptions = [
  {
    id: 1,
    header: "plan_one_header", // translation key for header
    description: "plan_one_description", // translation key for description
    price: 500,
    options: [
      { id: 1, description: "exam_only_option", status: true }, // translation key
      { id: 2, description: "limited_attempts", status: true }, // translation key
      { id: 3, description: "video_access", status: false }, // translation key
      { id: 4, description: "reading_permission", status: false }, // translation key
      { id: 5, description: "duration_three_days", status: false }, // translation key
    ],
  },
  {
    id: 2,
    header: "plan_two_header", // translation key for header
    description: "plan_two_description", // translation key for description
    price: 4000,
    options: [
      { id: 1, description: "unlimited_exam", status: true }, // translation key
      { id: 2, description: "unlimited_reading", status: true }, // translation key
      { id: 3, description: "video_permission", status: true }, // translation key
      { id: 4, description: "reading_lessons", status: true }, // translation key
      { id: 5, description: "duration_ten_days", status: true }, // translation key
    ],
  },
  {
    id: 3,
    header: "plan_three_header", // translation key for header
    description: "plan_three_description", // translation key for description
    price: 6500,
    options: [
      { id: 1, description: "unlimited_exam_three", status: true }, // translation key
      { id: 2, description: "unlimited_reading_three", status: true }, // translation key
      { id: 3, description: "video_permission_three", status: true }, // translation key
      { id: 4, description: "reading_lessons_three", status: true }, // translation key
      { id: 5, description: "duration_thirty_days", status: true }, // translation key
    ],
  },
  {
    id: 4,
    header: "plan_three_header", // translation key for header
    description: "plan_three_description", // translation key for description
    price: 8500,
    options: [
      { id: 1, description: "unlimited_exam_three", status: true }, // translation key
      { id: 2, description: "unlimited_reading_three", status: true }, // translation key
      { id: 3, description: "video_permission_three", status: true }, // translation key
      { id: 4, description: "reading_lessons_three", status: true }, // translation key
      { id: 5, description: "duration_thirty_days", status: true }, // translation key
    ],
  },
];
