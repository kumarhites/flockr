import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
    {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Hitesh",
        lastName: "Kumar",
        username: "hiteshkumar",
        password: "admin",
        bio: "Dream big, hustle hard.",
        website: "https://kumarhitesh.netlify.app/",
        avatar: "https://pbs.twimg.com/profile_images/1640914990772396032/pnPQG7st_400x400.jpg",
        backgroundImage:
            "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267838/Social%20Media/1500x500_uioyad.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [
            {
                _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
                firstName: "Anushka",
                lastName: "Jaiswal",
                username: "TheIndianGirl56",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
            },

            {
                _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
                firstName: "Sandhya",
                lastName: "Rajwanshi",
                username: "SandhyaR1007",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
            },
        ],
        bookmarks: [],
    },
    {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Dark",
        lastName: "Knight",
        username: "darkKnight",
        password: "darkKnight",
        bio: `I'm vengeance`,
        website: "https://kumarhitesh.netlify.app/",
        avatar: "https://i.pinimg.com/564x/f8/1b/f0/f81bf032d0a33a7d4a79214c5edc4816.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [
            {
                _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
                firstName: "Tanay",
                lastName: "Pratap",
                username: "tanaypratap",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
            },
        ],
        followers: [
            {
                _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
                firstName: "Isha",
                lastName: "Patel",
                username: "shaaaviii",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
            },
        ],
        bookmarks: [],
    },
    {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Coco",
        lastName: "Coco",
        username: "coco",
        password: "coco",
        bio: `😺 Expert in purring, head boops, and stealing hearts. Meowgical vibes only!`,
        website: "https://kumarhitesh.netlify.app/",
        avatar: "https://i.pinimg.com/564x/6b/05/b2/6b05b294fd1939f96b94a3d287115681.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [
            {
                _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
                firstName: "Tanay",
                lastName: "Pratap",
                username: "tanaypratap",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
            },
        ],
        followers: [
            {
                _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
                firstName: "Anushka",
                lastName: "Jaiswal",
                username: "TheIndianGirl56",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
            },
        ],
        bookmarks: [],
    },
    {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Joker",
        lastName: "",
        username: "joker",
        password: "joker",
        bio: "🔺 Beware the Joker's laughter, for it heralds a storm of chaos unlike any other. In a city already teetering on the edge, he stands as the ultimate test of Batman's unyielding resolve.",
        website: "https://kumarhitesh.netlify.app/",
        avatar: "https://i.pinimg.com/564x/b7/cc/71/b7cc71a1eaccb5ee3cc91fe8143cdce0.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [
            {
                _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
                firstName: "Tanay",
                lastName: "Pratap",
                username: "tanaypratap",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
            },
        ],
        followers: [
            {
                _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
                firstName: "Sandhya",
                lastName: "Rajwanshi",
                username: "SandhyaR1007",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
            },
        ],
        bookmarks: [],
    },
    {
        _id: "ebc81259-10e1-402b-8dc5-62e724afdjfgyf",
        firstName: "Mr.",
        lastName: "Riddler",
        username: "riddler",
        password: "riddler",
        bio: "If puzzles were poetry, and enigmas were art – that's where you'd find me. 🎩",
        website: "https://kumarhitesh.netlify.app/",
        avatar: "https://i.pinimg.com/564x/d8/65/bc/d865bcecd528f9e9ec4e81186aa1d403.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [
            {
                _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
                firstName: "Tanay",
                lastName: "Pratap",
                username: "tanaypratap",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
            },
        ],
        followers: [
            {
                _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
                firstName: "Sandhya",
                lastName: "Rajwanshi",
                username: "SandhyaR1007",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
            },
        ],
        bookmarks: [],
    },
    {
        _id: "ebc81259-10e1-402b-8dc5-6245484afdjfgyf",
        firstName: "Clark",
        lastName: "Kent",
        username: "superman",
        password: "superman",
        bio: "Come let's see the stars!",
        website: "https://kumarhitesh.netlify.app/",
        avatar: "https://i.pinimg.com/564x/3b/de/b0/3bdeb0e8fab7912d40f58c9e03a26fd8.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [
            {
                _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
                firstName: "Tanay",
                lastName: "Pratap",
                username: "tanaypratap",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
            },
        ],
        followers: [
            {
                _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
                firstName: "Sandhya",
                lastName: "Rajwanshi",
                username: "SandhyaR1007",
                avatar: "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
            },
        ],
        bookmarks: [],
    },
];
