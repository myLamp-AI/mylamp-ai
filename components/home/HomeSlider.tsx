
import SliderCard from "./SliderCard";

const data = [
    {
        id: "1",
        imageUrl: "/home/Slider1.svg"
    },
    {
        id: "2",
        imageUrl: "/home/Slider2.svg"
    },
    {
        id: "3",
        imageUrl: "/home/Slider3.svg"
    },
    {
        id: "4",
        imageUrl: "/home/Slider4.svg"
    },
]

const HomeSlider: React.FC = () => {

    return (
        <>
            <div>
                <div>
                    {
                        data.map((item, index) => {
                            return (
                                <SliderCard imageUrl={item.imageUrl} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default HomeSlider;
