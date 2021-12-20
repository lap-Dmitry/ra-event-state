export default function ShopCard({ card }) {
    return (
        <div className='shop_card'>
            <div className='shop_card__title'>{card.name}</div>
            <div className='shp_card__color'>{card.color}</div>
            <div className='shop_card__preview'>
                <img className='shop_card__img' src={card.img} alt=''/>
            </div>
            <div className='shop_card__footer'>
            <div className='shop_card__price'>${card.price}</div>
            <div className='shop_card__button'>Add to card</div>
            </div>
        </div>
    );
}
