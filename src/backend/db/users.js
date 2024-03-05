import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "ceec46f2-51e1-4f81-97db-6236de51e708",
    avatar:
      "https://pbs.twimg.com/profile_images/1605458814068674563/V2sT6f64_400x400.jpg",
    bio: "Tech-loving IT student | Passionate web developer | AWS Certified | Embracing innovation | Founder <a href='profile/karigiri' data data-username='karigiri'>@karigiri</a>",
    link: "https://parasarya.netlify.app/",
    firstName: "Paras",
    lastName: "Arya",
    username: "parasarya",
    password: "parasarya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "ceec46f2-51e1-4g289-97db-6236de51e708",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1D2I8QTTIipmHmaxknwoVDdzHaQj90w7TKqOMNiKJhk92FbNKnDmRv3e0RjHzoXJr5UE&usqp=CAU",
    bg: "https://images.pexels.com/photos/1487711/pexels-photo-1487711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: true,
    bio: "Crafting beauty, one stitch at a time.",
    link: "",
    firstName: "Karigiri",
    lastName: "",
    username: "karigiri",
    password: "karigiri123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "ceec46f2-51e1-4f81-97db-6236de51e704",
    avatar: "https://www.svgrepo.com/show/8137/avatar.svg",
    bio: "Passionate developer exploring new technologies",
    link: "https://example.com",
    firstName: "John",
    lastName: "Smith",
    username: "johnsmith",
    password: "johnsmith123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "976be752-6cc4-4ee7-98e6-38d5ed08e3a0",
    avatar: "https://www.svgrepo.com/show/26474/avatar.svg",
    bio: "Web developer with a passion for creativity",
    link: "https://example.com",
    firstName: "Emily",
    lastName: "Johnson",
    username: "emilyjohnson",
    password: "emilyjohnson123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "ad84b92a-ff14-4fe1-9124-763ccbb7083d",
    avatar: "https://www.svgrepo.com/show/26325/avatar.svg",
    bio: "Tech enthusiast exploring the possibilities",
    link: "https://example.com",
    firstName: "Michael",
    lastName: "Brown",
    username: "michaelbrown",
    password: "michaelbrown123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "1e2dbd0c-0808-4d9d-a53d-7e22f066faa2",
    avatar: "https://www.svgrepo.com/show/27220/avatar.svg",
    bio: "Frontend developer passionate about user experiences",
    link: "https://example.com",
    firstName: "Sophia",
    lastName: "Davis",
    username: "sophiadavis",
    password: "sophiadavis123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "f40d6b0e-6f6d-4814-bb5f-883c0e11e267",
    avatar: "https://www.svgrepo.com/show/26995/avatar.svg",
    bio: "Passionate about creating innovative solutions",
    link: "https://example.com",
    firstName: "David",
    lastName: "Wilson",
    username: "davidwilson",
    password: "davidwilson123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "4cbe8b3e-4c8b-4c48-aef6-4f899f59d5dd",
    avatar: "https://www.svgrepo.com/show/8137/avatar.svg",
    bio: "IT student with a passion for problem-solving",
    link: "https://example.com",
    firstName: "Olivia",
    lastName: "Martinez",
    username: "oliviamartinez",
    password: "oliviamartinez123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "781685b9-ee59-4f41-ae56-1c2f2ef79d53",
    avatar: "https://www.svgrepo.com/show/26474/avatar.svg",
    bio: "Curious developer exploring new technologies",
    link: "https://example.com",
    firstName: "William",
    lastName: "Miller",
    username: "williammiller",
    password: "williammiller123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "9898d583-0a29-4e4e-aa9d-8a5f2f4e0c70",
    avatar: "https://www.svgrepo.com/show/26325/avatar.svg",
    bio: "Web developer on a mission to build user-friendly interfaces",
    link: "https://example.com",
    firstName: "Emma",
    lastName: "Taylor",
    username: "emmataylor",
    password: "emmataylor123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "4df64bfc-4247-4071-96b7-f625de429d4d",
    avatar: "https://www.svgrepo.com/show/27220/avatar.svg",
    bio: "Passionate about building secure and scalable web applications",
    link: "https://example.com",
    firstName: "Liam",
    lastName: "Anderson",
    username: "liamanderson",
    password: "liamanderson123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "870efef4-6822-4b95-bc39-140c0e3a1f3c",
    avatar: "https://www.svgrepo.com/show/26995/avatar.svg",
    bio: "Eager learner in the world of web development",
    link: "https://example.com",
    firstName: "Ava",
    lastName: "Thomas",
    username: "avathomas",
    password: "avathomas123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
  {
    _id: "9e2a58f9-aa1e-4de7-bd2c-14009a6e2bdc",
    avatar: "https://www.svgrepo.com/show/8137/avatar.svg",
    bio: "IT student passionate about building efficient systems",
    link: "https://example.com",
    firstName: "Noah",
    lastName: "White",
    username: "noahwhite",
    password: "noahwhite123",
    createdAt: "2023-06-27",
    updatedAt: "2023-06-27",
  },
];
