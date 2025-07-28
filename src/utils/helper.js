import { Facebook, Instagram, Linkedin } from "./icon"
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