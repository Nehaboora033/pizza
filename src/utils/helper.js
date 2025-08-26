import { Chef, Email, Facebook, Instagram, Large, Linkedin, Medium, Order, Pizza, Quality, Regular, support, Track, Visit } from "./icon"
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
import farmhouse from '../assets/webp/farmhouse.webp'
import peppyPanner from '../assets/webp/peppypaneerpizza.webp'
import cheessecorn from '../assets/webp/cheesecornpizza.webp'
import margherita from '../assets/webp/margheritapizza.webp'
import cheeseloaded from '../assets/webp/cheeseloadedpizza.webp'
import veggieFiesta from '../assets/webp/veggiefiestapizza.webp'
import masalaPaneer from '../assets/webp/masalapaneerpizza.webp'
import periPeri from '../assets/webp/periperipizza.webp'
import dominos from '../assets/png/dominos.png'
import mcdonald from '../assets/png/mcdonald.png'
import burgerking from '../assets/png/burgerking.png'
import pizzahut from '../assets/png/pizzahut.png'
import Restaurantimg1 from '../assets/webp/restaurantimg1.webp'
import Restaurantimg2 from '../assets/webp/restaurantimg2.webp'
import Restaurantimg3 from '../assets/webp/restaurantimg3.webp'
import Restaurantimg4 from '../assets/webp/restaurantimg4.webp'
import profile1 from '../assets/png/profile1.png'
import profile2 from '../assets/png/profile2.png'
import profile3 from '../assets/png/profile3.png'
import profile4 from '../assets/png/profile4.png'
import profile5 from '../assets/png/profile5.png'
import profile6 from '../assets/png/profile6.png'
import profile7 from '../assets/png/profile7.png'
import coke from '../assets/webp/coke.webp'
import fries from '../assets/webp/fires.webp'
import brownie from '../assets/webp/brownie.webp'
import onion from "../assets/webp/onion.webp"
import redpepper from '../assets/webp/redpepper.webp'
import mushroom from '../assets/webp/mushroom.webp'
import tomato from '../assets/webp/tomato.webp'
import olive from '../assets/webp/blackolive.webp'
import mozzarella from '../assets/webp/Mozzarellacheesse.webp'
import periperichiken from '../assets/webp/periperichicken.webp'
import sausage from '../assets/webp/sausage .webp'
import pepperoni from '../assets/webp/pepperoni.webp'



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
        link: 'tel:+919876543210',

    },
    {
        svg: Visit,
        title: 'Visit Us',
        data: '5th Floor, Sector 44, Gurugram, Haryana – 122003',
        link: '',
    },
    {
        svg: Email,
        title: 'Email Us',
        data: 'mailto:Pizzanest235@gmail.com',
        link: 'mailto:Pizzanest235@gmail.com',
    },
]

export const menupizza = [
    {
        img: margherita,
        title: 'Classic Margherita',
        description: 'Classic delight with 100% real mozzarella cheese.',
        price: '₹ 150',
        category: "Veg",
        id: '1',

    },
    {
        img: peppyPanner,
        title: 'Peppy Paneer',
        description: 'Flavorful paneer chunks with crisp capsicum and red paprika.',
        price: '₹ 300',
        category: "Veg",
        id: '2',
    },
    {
        img: farmhouse,
        title: 'Farmhouse',
        description: 'Loaded with onion, capsicum, tomato, and mushrooms.',
        price: '₹ 300',
        category: "Non-Veg",
        id: '3',
    },
    {
        img: cheessecorn,
        title: 'Cheese Corn',
        description: '100% real mozzarella with sweet golden corn',
        price: '₹ 180',
        category: "Veg",
        id: '4',
    },
    {
        img: margherita,
        title: 'Paneer Makhani',
        description: 'Desi-style paneer chunks in creamy makhani sauce with onion & capsicum',
        price: '₹ 270',
        category: "Veg",
        id: '5',
    },
    {
        img: peppyPanner,
        title: 'Deluxe Veggie',
        description: 'Extra loaded with onion, capsicum, mushroom, corn & paneer',
        price: '₹ 290',
        category: "Veg",
        id: '6',
    },
    {
        img: farmhouse,
        title: 'Tandoori Onion ',
        description: 'Tandoori-flavored onions with green capsicum and extra cheese',
        price: '₹ 310',
        category: "Non-Veg",
        id: '7',
    },
    {
        img: peppyPanner,
        title: 'Peri Peri Veg',
        description: 'Spicy peri peri sauce with tomato, onion, jalapeno, and mozzarella',
        price: '₹ 250',
        category: "Non-Veg",
        id: '8',
    },

]

export const Famous_Data = [
    {
        img: margherita,
        title: 'Classic Margherita',
        description: 'Pizza Paradise',
        price: '₹ 249',
        rating: '4.0',
        category: 'Non-Vegetarian',

    },
    {
        img: cheeseloaded,
        title: 'Cheese Overload',
        description: 'Desi Dhaba',
        price: '₹ 299',
        rating: '4.5',
        category: 'Vegetarian',
    },
    {
        img: veggieFiesta,
        title: 'Veggie Fiesta',
        description: "La Pino'z Pizza",
        price: '₹ 269',
        rating: '4.2',
        category: 'Vegetarian',
    },
    {
        img: masalaPaneer,
        title: 'Masala Paneer',
        description: 'Pizza Wings',
        price: '₹ 299',
        rating: '4.4',
        category: 'Vegetarian',
    },
    {
        img: farmhouse,
        title: 'Farmhouse Magic',
        description: 'Oven Story',
        price: '₹ 279',
        rating: '4.0',
        category: 'Non-Vegetarian',
    },
    {
        img: peppyPanner,
        title: 'Peppy Paneer',
        description: 'Pizza Wings',
        price: '₹ 289',
        rating: '4.5',
        category: 'Non-Vegetarian',
    },
    {
        img: periPeri,
        title: 'Peri Peri Paneer',
        description: 'Oven Story',
        price: '₹ 299',
        rating: '4.2',
        category: 'Non-Vegetarian',
    },
    {
        img: cheessecorn,
        title: 'Cheese n Corn',
        description: 'Domino’s Pizza',
        price: '₹ 259',
        rating: '4.4',
        category: 'Vegetarian',
    },
]

export const What_Pizza_Data = [
    {
        img: margherita,
        title: 'Margherita',
    },
    {
        img: masalaPaneer,
        title: 'Masala Paneer',
    },
    {
        img: farmhouse,
        title: 'Farmhouse Magic',
    },
    {
        img: cheeseloaded,
        title: 'Cheese Overload',
    },
    {
        img: margherita,
        title: 'Margherita',
    },
    {
        img: masalaPaneer,
        title: 'Masala Paneer',
    },
    {
        img: farmhouse,
        title: 'Farmhouse Magic',
    },
    {
        img: cheeseloaded,
        title: 'Cheese Overload',
    },
]

export const Brands = [
    {
        img: dominos,
        title: 'Domino`s Pizza',
        rating: '4.2',
        time: '30 min',
        offer: '50% OFF up to ₹100',
    },

    {
        img: pizzahut,
        title: "Pizza's Hut",
        rating: '4.1',
        time: '30 min',
        offer: '₹150 OFF on orders above ₹400',
    },
    {
        img: burgerking,
        title: 'Burger King',
        rating: '4.0',
        time: '25 min',
        offer: '40% OFF up to ₹80',
    },
    {
        img: mcdonald,
        title: "McDonald's",
        rating: '4.0',
        time: '20 min',
        offer: '30% OFF on combos',
    },
    {
        img: dominos,
        title: 'Domino`s Pizza',
        rating: '4.2',
        time: '30 min',
        offer: '50% OFF up to ₹100',
    },

    {
        img: pizzahut,
        title: "Pizza's Hut",
        rating: '4.1',
        time: '30 min',
        offer: '₹150 OFF on orders above ₹400',
    },
    {
        img: burgerking,
        title: 'Burger King',
        rating: '4.0',
        time: '25 min',
        offer: '40% OFF up to ₹80',
    },
    {
        img: mcdonald,
        title: "McDonald's",
        rating: '4.0',
        time: '20 min',
        offer: '30% OFF on combos',
    },
]

export const Restaurant = [
    {
        img: Restaurantimg1,
        title: 'Punjabi Tadka',
        description: 'North Indian, Punjabi',
        rating: '4.0',

    },
    {
        img: Restaurantimg2,
        title: 'Pizza Paradise',
        description: 'Pizza, Fast Food',
        rating: '4.3',
    },
    {
        img: Restaurantimg3,
        title: 'Desi Dhaba',
        description: 'North Indian, Street Food',
        rating: '3.9',
    },
    {
        img: Restaurantimg4,
        title: 'Sharma Sweets ',
        description: 'Sweets, North Indian',
        rating: '4.4',
    },
    {
        img: Restaurantimg1,
        title: 'Punjabi Tadka',
        description: 'North Indian, Punjabi',
        rating: '4.0',

    },
    {
        img: Restaurantimg2,
        title: 'Pizza Paradise',
        description: 'Pizza, Fast Food',
        rating: '4.3',
    },
    {
        img: Restaurantimg3,
        title: 'Desi Dhaba',
        description: 'North Indian, Street Food',
        rating: '3.9',
    },
    {
        img: Restaurantimg4,
        title: 'Sharma Sweets ',
        description: 'Sweets, North Indian',
        rating: '4.4',
    },
]

export const OurClient_Data = [
    {
        name: 'Reet Malik',
        role: 'Software Engineer',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
    {
        name: 'Ankita Bansal ',
        role: 'UI/UX Designer',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
    {
        name: 'Ragini Malhotra ',
        role: 'Head Chef',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
    {
        name: 'Ritesh Malik',
        role: 'Customer Support Lead',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
    {
        name: 'Amit Rathi',
        role: 'Delivery Ops Manager',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
    {
        name: 'Raj Kapoor',
        role: 'Front End Developer',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
    {
        name: 'Karina Verma',
        role: 'Back End Developer',
        description: '“Veggie Fiesta hit all the right spots – fresh toppings, generous cheese, and just the right amount of spice. Even my kids loved it!”',
    },
]

export const Profile = [
    {
        img: profile1,
    },
    {
        img: profile2,
    },
    {
        img: profile3,
    },
    {
        img: profile4,
    },
    {
        img: profile5,
    },
    {
        img: profile6,
    },
    {
        img: profile7,
    },

]

export const Select_Size_Pizza = [
    {
        img: Regular,
        name: 'Regular',
        serve: 'Serve 1',
    },
    {
        img: Medium,
        name: 'Medium',
        serve: 'Serve 2',
    },
    {
        img: Large,
        name: 'Large',
        serve: 'Serve 4',
    },
]

export const Select_Crust = [
    {
        name: 'New Hand Tossed',
        price: '₹ 185',
    },
    {
        name: '100%Wheat Crust',
        price: '₹ 200',
    },
    {
        name: 'Cheese Burst',
        price: '₹ 259',
    },
]
export const Menu_Tabs = [
    "Pizzas",
    "Sides & Starters",
    "Beverages",
    "Desserts",
    "Meal Combos",
]

export const Cart_Swiper_Data = [
    {
        img: coke,
        name: 'Coca-Cola',
        price: '₹40',
    },
    {
        img: fries,
        name: 'Crispy Fries',
        price: '₹89',
    },
    {
        img: brownie,
        name: 'Fudge Brownie',
        price: '₹109',
    },
    {
        img: coke,
        name: 'Coca-Cola',
        price: '₹40',
    },
    {
        img: fries,
        name: 'Crispy Fries',
        price: '₹89',
    },
    {
        img: brownie,
        name: 'Fudge Brownie',
        price: '₹109',
    },
]

export const Cart_Payment_Method = [
    {
        id: 'upi',
        name: 'UPI (Google Pay, PhonePe, Paytm)',
    },
    {
        id: 'card',
        name: 'Credit / Debit Card',
    },
    {
        id: 'cash',
        name: 'Cash on Delivery',
    },
]

export const Toppings = [
    {
        name: 'Grilled Mushrooms',
        img: mushroom,

    },
    {
        name: 'Onion',
        img: onion,
    },
    {
        name: 'Red Pepper',
        img: redpepper,
    },
    {
        name: 'Tomato',
        img: tomato,

    },
    {
        name: 'Mozzarella Cheese',
        img: mozzarella,
    },
    {
        name: 'Black Olive',
        img: olive,
    },
]


export const Select_Crust_Price = [
    { name: 'New Hand Tossed', extra: 0 },   // base crust → no extra
    { name: '100% Wheat Crust', extra: 50 }, // wheat → +50
    { name: 'Cheese Burst', extra: 100 },    // cheese → +100
];

export const Select_Size_Pizza_Price = [
    { name: 'Regular', serve: 'Serves 1', extra: 0 },   // base size
    { name: 'Medium', serve: 'Serves 2', extra: 50 },   // +50
    { name: 'Large', serve: 'Serves 4', extra: 100 },   // +100
];


export const Exchange_Data = [
    {
        name: 'Grilled Mushrooms',
    },
    {
        name: 'Onion',
    },
    {
        name: 'Red Pepper',
    },
    {
        name: 'Tomato',
    },
]

export const NonVeg_Topping = [
    {
        name: 'Chiken Pepperoni',
        img:pepperoni,
    },
    {
        name: 'Chiken Sausage',
        img:sausage,
    },
    {
        name: 'Peri Peri Chiken ',
        img:periperichiken,

    },
]