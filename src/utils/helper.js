import { Chef, Email, Facebook, Instagram, Linkedin, Order, Pizza, Quality, support, Track, Visit } from "./icon"
import galleryImg1 from "../assets/webp/galleryimg1.webp";
import galleryImg2 from "../assets/webp/galleryimg2.webp";
import galleryImg3 from "../assets/webp/galleryimg3.webp";
import galleryImg4 from "../assets/webp/galleryimg4.webp";
import galleryImg5 from "../assets/webp/galleryimg5.webp";
import galleryImg6 from "../assets/webp/galleryimg6.webp";
import galleryImg7 from "../assets/webp/galleryimg7.webp";
import sellerImg1 from '../assets/webp/bestsellerimg1.webp'
import sellerImg2 from '../assets/webp/bestsellerimg2.webp'
import sellerImg3 from '../assets/webp/bestsellerimg3.webp'
import sellerImg4 from '../assets/webp/bestsellerimg4.webp'
import menuImg1 from '../assets/webp/menuimg1.webp'
import menuImg2 from '../assets/webp/menuimg2.webp'
import menuImg3 from '../assets/webp/menuimg3.webp'
import teamimg1 from '../assets/webp/teamimg1.webp'
import teamimg2 from '../assets/webp/teamimg2.webp'
import teamimg3 from '../assets/webp/teamimg3.webp'
import teamimg4 from '../assets/webp/teamimg4.webp'



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
        link:
            [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About Us',
                    path: '/about',
                },
                {
                    name: 'Menu',
                    path: '/menu',
                },
                {
                    name: 'Gallery',
                    path: '/gallery',
                },
                {
                    name: 'Testinomial',
                    path: '/testinomial'
                },
                {
                    name: 'Contact',
                    path: '/contact',
                },
            ],


    },
    {
        title: 'Support',
        link: [
            {
                name: 'Terms & Conditions',
                path: '/terms',
            },
            {
                name: 'Privacy Policy',
                path: '/policy',
            },
        ],

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

export const Seller_Data = [
    {
        pizza: sellerImg1,
        price: '₹279',
        title: 'Tandoori Paneer ',
        description: 'Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs',

    },
    {
        pizza: sellerImg2,
        price: '₹299',
        title: 'Cheese Overload',
        description: 'Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust',
    },
    {
        pizza: sellerImg3,
        price: '₹239',
        title: 'Veggie Fiesta',
        description: 'Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese',
    },
    {
        pizza: sellerImg4,
        price: '₹249',
        title: 'Masala Paneer',
        description: 'Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese',
    },
]

export const Menu_Data = [
    {
        img: menuImg1,
        price: '₹229 / ₹359 / ₹499',
        title: 'Farmhouse Magic',
        description: 'Onion, capsicum, tomato, grilled mushroom, mozzarella cheese'
    },
    {
        img: menuImg2,
        price: '₹279 / ₹399 / ₹519',
        title: 'Masala Paneer',
        description: 'Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese',
    },
    {
        img: menuImg3,
        price: '₹379',
        title: 'Solo Meal Combo',
        description: '1 Regular Pizza + Garlic Bread + 1 Soft Drink',
    },
]

export const Testimonial_Data = [
    {
        description: 'The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.',
        name: 'Aarav Mehta',
        profession: 'Software Developer',


    },
    {
        description: 'The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.',
        name: 'Ritesh Malik',
        profession: 'Software Engineer',
    },
    {
        description: 'The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.',
        name: 'Pooja Rajput',
        profession: 'UI Designer',
    },
]

export const Team_Data = [
    {
        img: teamimg1,
        name: 'Ankit Bansal ',
        role: 'Founder',
    },
    {
        img: teamimg2,
        name: 'Raj Malhotra ',
        role: 'Head Chef',
    },
    {
        img: teamimg3,
        name: 'Neha Sharma',
        role: 'Customer Support Lead',
    },
    {
        img: teamimg4,
        name: 'Amit Rathi',
        role: 'Delivery Ops Manager',
    },
]

export const Why_choose_Data = [
    {
        svg: Chef,
        title: 'Professional Chefs',
        description: 'Our dishes are crafted by experienced chefs who bring authentic flavors and expert techniques to every bite.',
    },
    {
        svg: Quality,
        title: 'Best Quality Food',
        description: 'We use only the freshest ingredients to ensure every meal is delicious, safe, and satisfying.',
    },
    {
        svg: support,
        title: 'Online Support',
        description: 'Got a question or issue? Our friendly support team is available online to help you anytime.',
    },
]

export const Contactcard = [
    {
        svg: Email,
        title: 'Call Us 24/7',
        data: 'Call - +91 98765 43210',
        link:'tel:+919876543210',

    },
    {
        svg: Visit,
        title: 'Visit Us',
        data: '5th Floor, Sector 44, Gurugram, Haryana – 122003',
        link:'',
    },
    {
        svg: Email,
        title: 'Email Us',
        data: 'mailto:Pizzanest235@gmail.com',
        link:'mailto:Pizzanest235@gmail.com',
    },
]