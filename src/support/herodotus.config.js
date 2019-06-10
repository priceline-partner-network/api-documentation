import hero from 'assets/support/support-hero.png';
import contact from './contact.md';
import faq from './faq.md';
import terms from './terms.md';

export default {
    id: "Support",
    content: {
        faq: {
            title: "FAQ",
            subtitle: "Frequently Asked Questions",
            content: faq,
            image: hero
        },
        terminology: {
            title: "Terminology",
            subtitle: "A list of terms used across documentation",
            image: hero,
            content: terms
        },
        contact: {
            title: "Contact Us",
            subtitle: "For any help!",
            markdown: contact,
            image: hero
        }
    }
};