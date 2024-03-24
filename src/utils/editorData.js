import image1 from "../assets/images/global_temp_landscape_temp_10_Design_Pattern.png"
import image2 from "../assets/images/global_temp_landscape_temp_10_Mask_stroke.png"
import image3 from "../assets/images/global_temp_landscape_temp_10_mask.png"


const  initialEditorData = 
{
    "caption": {
        "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
        "position": {
            "x": 50,
            "y": 50
        },
        "max_characters_per_line": 31,
        "font_size": 44,
        "alignment": "left",
        "text_color": "#FFFFFF"
    },
    "cta": {
        "text": "Shop Now",
        "position": {
            "x": 190,
            "y": 320
        },
        "text_color": "#FFFFFF",
        "background_color": "#000000"
    },
    "image_mask": {
        "x": 56,
        "y": 442,
        "width": 970,
        "height": 600
    },
    "urls": {
        "mask": image1,
        "stroke": image2,
        "design_pattern": image3
    }
}



export default initialEditorData;