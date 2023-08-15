import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: "688e6e59-4d2a-4b7e-a8b9-7b3ad1de1b84",
        content: `What's the best thing about JavaScript? It's not Java.`,
        mediaURL: "",
        likes: {
            likeCount: 8955,
            likedBy: [],
            dislikedBy: [],
        },
        username: "hiteshkumar",
        createdAt: "2021-07-25T19:57:00+05:30",
        updatedAt: "2021-07-25T19:57:00+05:30",
        comments: [],
    },
    {
        _id: "f1a16ff7-815c-4529-aa72-97d17f5437c2",
        content: `can you solve this riddle?
    
    what do you find at the end of the rainbow?     "W" 😂😂😂`,
        mediaURL:
            "https://i.pinimg.com/564x/89/9e/b2/899eb28bbd9273296a38253682725b49.jpg",
        likes: {
            likeCount: 2202,
            likedBy: [],
            dislikedBy: [],
        },
        username: "coco",
        createdAt: "2022-09-12T15:52:00+05:30",
        updatedAt: "2022-09-12T15:52:00+05:30",
        comments: [],
    },
    {
        _id: "3f5f4e7a-df8c-4a68-8cb6-5db4c0a7d76e",
        heading: `🦇 Attention to All Citizens of Gotham 🦇`,
        content: `A message to the one who thrives on chaos and terror: Joker, your reign of destruction ends now. Your actions have caused pain and suffering, and I won't let it continue. Meet me at the heart of Gotham, and let's settle this once and for all.

But remember, Joker, this isn't a game. Lives are at stake, and your recklessness won't be tolerated. Gotham deserves better, and I'll make sure justice prevails.

🔦 #GothamStrong #BatmanVsJoker`,
        mediaURL:
            "https://i.pinimg.com/564x/65/af/ed/65afed260de783a2085df0bae212c3d8.jpg",
        likes: {
            likeCount: 95,
            likedBy: [],
            dislikedBy: [],
        },
        username: "darkKnight",
        createdAt: "2023-03-09T10:53:00+05:30",
        updatedAt: "2023-03-09T10:53:00+05:30",
        comments: [],
    },
    {
        _id: "77a5c0a7-9083-46f2-8b59-f78870811d45",
        content: `Start your day off right with a delicious and nutritious breakfast!`,
        mediaURL:
            "https://res.cloudinary.com/dzyndbf5l/image/upload/v1691841202/pexels-chokniti-khongchum-2280545_kjai8k.jpg",
        likes: {
            likeCount: 3911,
            likedBy: [],
            dislikedBy: [],
        },
        username: "hiteshkumar",
        createdAt: "2021-11-12T15:08:00+05:30",
        updatedAt: "2021-11-12T15:08:00+05:30",
        comments: [],
    },
    {
        _id: "d2d3fb09-781e-44ed-a55a-33f2391d0e47",
        content: `you know, the usual Gotham chaos. Crime never takes a vacation.`,
        mediaURL:
            "https://i.pinimg.com/564x/85/19/f5/8519f555389761959b707ce314a1ecbc.jpg",
        likes: {
            likeCount: 17,
            likedBy: [],
            dislikedBy: [],
        },
        username: "darkKnight",
        createdAt: "2023-06-11T21:37:00+05:30",
        updatedAt: "2023-06-11T21:37:00+05:30",
        comments: [],
    },
    {
        _id: "a36638f4-b48b-4bbd-aaf2-93828e827c46",
        heading: `🃏 The Joker's Sinister Post: Chaos Unleashed 🃏`,
        content: `Hello, my dear Gotham. Miss me? It's time to play a little game. You see, I've scattered a series of surprises throughout your beloved city. Explosive delights that will paint the town red with chaos. Oh, the fireworks will be spectacular`,
        mediaURL:
            "https://i.pinimg.com/564x/f4/1b/e4/f41be4ecb643047b1943907852a96bb4.jpg",
        likes: {
            likeCount: 31,
            likedBy: [],
            dislikedBy: [],
        },
        username: "joker",
        createdAt: "2023-01-28T19:02:00+05:30",
        updatedAt: "2023-01-28T19:02:00+05:30",
        comments: [],
    },
    // {
    //     _id: "6c420b4e-9dfe-4d35-80e9-597a0459e918",
    //     content: `Finally..!! INDIA WON THE ASIA CUP 2016☆☆☆`,
    //     mediaURL: "",
    //     likes: {
    //         likeCount: 11,
    //         likedBy: [],
    //         dislikedBy: [],
    //     },
    //     username: "ManishaG15",
    //     createdAt: "2016-03-06T23:46:00+05:30",
    //     updatedAt: "2016-03-06T23:46:00+05:30",
    //     comments: [],
    // },
    // {
    //     _id: "fbd4a746-41c7-4c26-9980-1fb4ef5e69af",
    //     content: `I'm now a 4 kyū blue belt on @codewars! Come join me #codewarriors!.`,
    //     mediaURL: "",
    //     likes: {
    //         likeCount: 23,
    //         likedBy: [],
    //         dislikedBy: [],
    //     },
    //     username: "Niharika_twt",
    //     createdAt: "2023-04-14T03:32:00+05:30",
    //     updatedAt: "2023-04-14T03:32:00+05:30",
    //     comments: [],
    // },
    // {
    //     _id: "84c9e418-2ed3-471e-8b7a-c73e9f3d8b78",
    //     content: `Had an amazing session on Call Stack with @hiteshkumar sir. I've never had a chance to learn from someone who makes you understand things so effortlessly. I'm grateful to be a part of @neogcamp 2023. I feel like haule haule I'll also get there. 💫🙏🏻💜
    // #haulehaule #iykyk`,
    //     mediaURL:
    //         "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687307973/Social%20Media/FqZmyW_WcAAEjnC_xb9nbj.jpg",
    //     likes: {
    //         likeCount: 66,
    //         likedBy: [],
    //         dislikedBy: [],
    //     },
    //     username: "SandhyaR1007",
    //     createdAt: "2023-03-05T01:15:00+05:30",
    //     updatedAt: "2023-03-05T01:15:00+05:30",
    //     comments: [],
    // },
    // {
    //     _id: "9c12aee1-6b7e-4ad6-99f2-2028f192692f",
    //     content: `#StopAsianHate #StopAAPIHate`,
    //     mediaURL:
    //         "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687308608/Social%20Media/ExsRBTSVIAIm2jr_nhsjcz.jpg",
    //     likes: {
    //         likeCount: 2400000,
    //         likedBy: [],
    //         dislikedBy: [],
    //     },
    //     username: "bts_bighit",
    //     createdAt: "2021-03-30T07:18:00+05:30",
    //     updatedAt: "2021-03-30T07:18:00+05:30",
    //     comments: [],
    // },
    {
        _id: "b67d07e7-4e72-46a0-946a-7b3bcbf39e59",
        content: `Kicks is an ecommerce app to buy cool sneakers. It has various features like landing page, product listing page, single product page, cart management, wishlist management, address management and login logout features.

    kicks-ecomm.netlify.app/`,
        mediaURL:
            "https://res.cloudinary.com/dzyndbf5l/image/upload/v1691834683/Capture_xquhw3.png",
        likes: {
            likeCount: 450,
            likedBy: [],
            dislikedBy: [],
        },
        username: "hiteshkumar",
        createdAt: "2023-03-23T16:01:00+05:30",
        updatedAt: "2023-03-23T16:01:00+05:30",
        comments: [],
    },
    // {
    //     _id: "54fd5411-50c1-4a0a-b650-2e580b503d46",
    //     content: `Waiting for the day we will meet again after the end of warm winter, the record of Tuesday, December 13th 🎞️ Our Jin!! Come back safely!! 💜Love You💜 (https://youtu.be/L-orDkbsuHk)`,
    //     mediaURL:
    //         "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687309035/Social%20Media/Fj_07TdXwAIb8W5_z5fkku.jpg",
    //     likes: {
    //         likeCount: 2300000,
    //         likedBy: [],
    //         dislikedBy: [],
    //     },
    //     username: "bts_bighit",
    //     createdAt: "2022-12-13T13:08:00+05:30",
    //     updatedAt: "2022-12-13T13:08:00+05:30",
    //     comments: [],
    // },
];
