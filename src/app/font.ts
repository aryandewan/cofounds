import { Outfit, MuseoModerno } from "next/font/google";

const outfit = Outfit({
    subsets: ['latin'], // Specify the character subset (e.g., 'latin' for English)
    weight: ['100','200','300', '400', '500','600', '700', '800', '900'], // Specify desired font weights
    style: ['normal'], // Optional: specify styles (normal, italic)
    display: 'swap', // Ensures font swapping to prevent invisible text during loading
});

const museo = MuseoModerno({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    display: 'swap',
})

export {
    outfit,
    museo
};