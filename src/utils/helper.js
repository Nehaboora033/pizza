import { Chef, Facebook, Instagram, Linkedin, Order, Pizza, Quality, support, Track } from "./icon"
import galleryImg1 from "../assets/webp/galleryimg1.webp";
import galleryImg2 from "../assets/webp/galleryimg2.webp";
import galleryImg3 from "../assets/webp/galleryimg3.webp";
import galleryImg4 from "../assets/webp/galleryimg4.webp";
import galleryImg5 from "../assets/webp/galleryimg5.webp";
import galleryImg6 from "../assets/webp/galleryimg6.webp";
import galleryImg7 from "../assets/webp/galleryimg7.webp";


export const NavLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Menu',
        link: 'menu',
    },
    {
        name: 'Customize Pizza',
        link: 'customize',
    },
    {
        name: 'Offers',
        link: 'offers',
    },
    {
        name: 'About Us',
        link: 'about',
    },
]

export const SocialLinks = [
    {
        icon: Facebook,
        link: 'https://www.facebook.com/',
    },
    {
        icon: Instagram,
        link: 'https://www.instagram.com/',
    },
    {
        icon: Linkedin,
        link: 'https://in.linkedin.com/',
    },
]

export const Footer_Links = [
    {
        title: 'Quick Links',
        link: ['Home', 'About Us', 'Menu', 'Gallery', 'Testimonial', 'Contact'],

    },
    {
        title: 'Support',
        link: ['Terms & Conditions', 'Privacy Policy'],

    },
]


export const GALLERY_DATA = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
]

export const Fooddelivery_Data = [
    {
        info: '30-Minute Delivery Promise',
    },
    {
        info: 'Hygienic, Contactless Delivery',
    },
    {
        info: 'Real-time Order Tracking',
    },
    {
        info: 'Eco-Friendly Packaging'
    },
]

export const About_Data = [
    {

        info: "At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India.",
    },
    {
        info: "Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep.",
    },

]

export const About_card = [
    {
        info: 'Professional Chefs',
        svg: Chef,
    },
    {
        info: "Best Quality Food",
        svg: Quality,
    },
    {
        info: 'Online Support ',
        svg: support,
    },
]

export const Steps = [
    {
        svg: Pizza,
        title: "Choose Your Pizza",
        description: 'Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.',
    },
    {
        svg: Order,
        title: "Place Your Order",
        description: 'Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.',
    },
    {
        svg: Track,
        title: 'Track & Enjoy',
        description: 'Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!',

    },
]