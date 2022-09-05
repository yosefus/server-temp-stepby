export const projects: any = [
   {
      _id: "12",
      name: "אתר תדמית מורכב",
      creatorId: "1234",
      client: {
         _id: "4567",
         clientName: "ברנקו וייס",
      },
      isTemplate: false,
      status: 'done', //'biz', 'client' , 'new' 
      lastApprove: new Date("25/08/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            des: "לפני שמדליקים מבערים, הזדמנות חשובה להסתכל על אתרים דומים או מתחרים חשובים - ולשתף איתנו את הטוב הזה, ככה שנוכל להעמיק ולייצר את האתר הנכון והטוב ביותר אפשר להעלות קבצים (צילומי מסך), או להוסיף קישורים לאתרים הרלוונטים. ברגע שסיימתם, ליחצו למטה על כפתור האישור.",
            name: "איסוף השראות ומתחרים1",
            approvedDate: new Date("25/08/2022"),
            data: [
               {
                  owner: 'biz',// 'client',
                  type: 'pdf', // 'img' , 'file' , 'answer'
                  title: 'description of pdf',
                  content: 'files/blabla.pdf',
                  index: 0
               },
               {
                  owner: 'biz',// 'client',
                  type: 'img',
                  title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
                  content: 'https://cdn.pixabay.com/photo/2022/08/23/06/55/village-7405160_960_720.jpg',
                  index: 1
               },

            ]
         },]
   },
   {
      _id: "11",
      name: "איש תדמית מורכב",
      creatorId: "1234",
      client: {
         _id: "4567",
         clientName: "משה בס",
      },
      isTemplate: false,
      status: "biz",
      lastApprove: new Date("27/08/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            des: "לפני שמדליקים מבערים, הזדמנות חשובה להסתכל על אתרים דומים או מתחרים חשובים - ולשתף איתנו את הטוב הזה, ככה שנוכל להעמיק ולייצר את האתר הנכון והטוב ביותר אפשר להעלות קבצים (צילומי מסך), או להוסיף קישורים לאתרים הרלוונטים. ברגע שסיימתם, ליחצו למטה על כפתור האישור.",
            name: "איסוף השראות ומתחרים1",
            approvedDate: new Date("27/08/2022"),
            data: [
               {
                  owner: 'biz',// 'client',
                  type: 'pdf', // 'img' , 'file' , 'answer'
                  title: 'description of pdf',
                  content: 'files/blabla.pdf',
                  index: 0
               },
               {
                  owner: 'biz',// 'client',
                  type: 'img',
                  title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
                  content: 'https://cdn.pixabay.com/photo/2022/08/23/06/55/village-7405160_960_720.jpg',
                  index: 1
               },

            ]
         },
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: true,
            des: "לפני שמדליקים מבערים, הזדמנות חשובה להסתכל על אתרים דומים או מתחרים חשובים - ולשתף איתנו את הטוב הזה, ככה שנוכל להעמיק ולייצר את האתר הנכון והטוב ביותר אפשר להעלות קבצים (צילומי מסך), או להוסיף קישורים לאתרים הרלוונטים. ברגע שסיימתם, ליחצו למטה על כפתור האישור.",
            name: "איסוף השראות ומתחרים1",
            approvedDate: undefined,
            data: [
               {
                  owner: 'biz',// 'client',
                  type: 'pdf', // 'img' , 'file' , 'answer'
                  title: 'description of pdf',
                  content: 'files/blabla.pdf',
                  index: 0
               },
               {
                  owner: 'biz',// 'client',
                  type: 'img',
                  title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
                  content: 'https://cdn.pixabay.com/photo/2022/08/23/06/55/village-7405160_960_720.jpg',
                  index: 1
               },

            ]
         },
      ]
   },
]
