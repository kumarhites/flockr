// import { formatDate } from "../utils/authUtils";

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
            likeCount: 89,
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
        comments: [
            {
                _id: "d952061f-eh563-463d-b101-e90ff9ec37f4",
                text: "Let me know if you need any help.",
                username: "superman",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
        ],
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
        comments: [
            {
                _id: "d952061f-e4a3-463d-b101-e90ff9ec37f4",
                text: "yo! looks delicious",
                username: "darkKnight",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
        ],
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
        comments: [
            {
                _id: "57e55b55-92c0-45e3-8adc-f5a5a80be4c6",
                text: "hahaha why so serious 🃏",
                username: "joker",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
        ],
    },
    {
        _id: "a36638f4-b48b-4bbd-aaf2-93828e827c46",
        heading: `Tried this new delicacy, its delicious!🃏`,
        content: `I dare to savor life's flavors, one bite at a time. From chaos to cuisine, I master the art of indulgence – a culinary journey fit for a jester's palate! 🤡`,
        mediaURL:
            "https://i.pinimg.com/564x/f9/67/4f/f9674f2a1b07fa958a4a88a7e80f6faf.jpg",
        likes: {
            likeCount: 31,
            likedBy: [],
            dislikedBy: [],
        },
        username: "joker",
        createdAt: "2023-01-28T19:02:00+05:30",
        updatedAt: "2023-01-28T19:02:00+05:30",
        comments: [
            {
                _id: "57e55b55-92c0-45e3-8afg-f5a5a80be4c6",
                text: "Looks great Joker!",
                username: "darkKnight",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
        ],
    },
    {
        _id: "a36638f4-b48b-4bbd-asdaf2-93828e827c46",
        heading: `Riddle me this, Batman 🦇`,
        content: `🎩 Riddle me this, if you dare:
        I'm a word of letters three,
        Take one away and I am less,
        Add one more and I become me.
        What am I? 🧐🔍`,
        mediaURL:
            "https://i.pinimg.com/564x/8f/d3/7a/8fd37a87c124ba8d611170809a87b3c6.jpg",
        likes: {
            likeCount: 31,
            likedBy: [],
            dislikedBy: [],
        },
        username: "riddler",
        createdAt: "2023-01-28T19:02:00+05:30",
        updatedAt: "2023-01-28T19:02:00+05:30",
        comments: [
            {
                _id: "57e55b55-92c0-45e3-8afg-f5a5adds80be4c6",
                text: "haha !!",
                username: "joker",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
            {
                _id: "57e55b55-92c0-45e3-8afg-f5a5a80beds4c6",
                text: `Ah, Riddler, your puzzles persist, 'Age' it is,
                I will find the answers in the shades you've laid.`,
                username: "darkKnight",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
        ],
    },
    {
        _id: "a36638f4-b48b-4bbd-akhjgdaf2-93828e827c46",
        heading: `Check this out, my recent trip to outer space! 🌏`,
        content: `Captured from celestial heights, witness Earth's beauty from my cosmic lens. A planet worth safeguarding, a home embraced by the stars. 🌍🌌`,
        mediaURL:
            "https://i.pinimg.com/564x/a1/96/d5/a196d5b1ad03871536874dd01d116957.jpg",
        likes: {
            likeCount: 200,
            likedBy: [],
            dislikedBy: [],
        },
        username: "superman",
        createdAt: "2023-01-28T19:02:00+05:30",
        updatedAt: "2023-01-28T19:02:00+05:30",
        comments: [
            {
                _id: "57e55b55-92c0-45e3-8afg-f5a5adds80be4c6",
                text: "haha !! still wont be able to save it!",
                username: "joker",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
            {
                _id: "57e55b55-92c0-45e3-8afg-f5a5a80beds4c6",
                text: `We will stop you! Joker`,
                username: "darkKnight",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
                createdAt: "2023-08-15T14:03:16+05:30",
                updatedAt: "2023-08-15T14:03:16+05:30",
            },
        ],
    },

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
];
