import search from '../assets/icons/search.svg';
import cart from '../assets/icons/cart.svg';
import authorization from '../assets/icons/authorization.svg';

let state = {
    "header": {
        "logo": "https://cdn.create.vista.com/downloads/f9043aab-5091-4ec9-9a75-19a0582aa16b_1024.jpeg",
        "links": [
            {
                "name": "Home",
                "path": "/"
            },
            {
                "name": "Shop",
                "path": "/shop"
            },
            {
                "name": "Blog",
                "path": "/blog"
            },
            {
                "name": "About",
                "path": "/our-story"
            }
        ],
        "icons": [search, authorization, cart]
    },
    "startPage": {
        "slider": [
            {
                "id": 1,
                "image": "https://cdn.create.vista.com/api/media/small/189532800/stock-photo-spoons-with-variety-of-dry",
                "title": "What is the best tea?",
                "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla consequuntur odio neque ullam."
            },
            {
                "id": 2,
                "image": "https://cdn.create.vista.com/api/media/medium/174634908/stock-photo-person-pouring-tea?token=",
                "title": "How to make tea correctly?",
                "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 3,
                "image": "https://cdn.create.vista.com/api/media/medium/258383536/stock-photo-cropped-view-young-woman-pouring?token=",
                "title": "10 secrets of delicious tea",
                "text": "Quis voluptatibus facilis hic sunt architecto quas, animi enim placeat cupiditate veniam"
            },
            {
                "id": 4,
                "image": "https://cdn.create.vista.com/api/media/medium/196736544/stock-photo-smiling-asian-girl-tea-room?token=",
                "title": "Our experts will help you choose tea",
                "text": "Nulla consequuntur odio neque ullam, eius libero ut nostrum quisquam!"
            }
        ],
        "videoUrl": "https://cdn.create.vista.com/api/media/medium/406237710/stock-video-dried-organic-tea-leaves-falling?token="
    }


}

export default state;