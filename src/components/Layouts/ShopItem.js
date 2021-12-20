export default function ShopItem({ item }) {
    return (
        <div className='shop_item'>
            <div className='shop_item__preview'>
                <img className='shop_item__img' src={item.img} alt=''/>
            </div>
            <div className='shop_item__title'>{item.name}</div>
            <div className='shop_item__color'>{item.color}</div>
            <div className='shop_item__price'>${item.price}</div>
            <div className='shop_item__button'>Add to card</div>
        </div>
    );
}
