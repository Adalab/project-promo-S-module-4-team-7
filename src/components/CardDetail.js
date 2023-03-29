import Header from "./Header";
 import cover from "../images/cover.jpeg";
import Card from "./Card";

const CardDetail = ({data}) => {
    return (
        <>
            <Header></Header>
            <section className='preview'>
                <img className='image' src={data.photo || cover} alt='' />
            </section>
        </>
    );
};

export default CardDetail;