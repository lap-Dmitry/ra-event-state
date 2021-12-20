import ShopItem from './ShopItem';

export default function ListView({ items }) {
    if (!items) return null;

    return (
        <div className='items_view__container'>
            {items.map((item, idx) => <ShopItem item={item} key={`${'card'}-${idx}`}/>)}
        </div>
    );
}
