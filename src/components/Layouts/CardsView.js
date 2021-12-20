import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
    if (cards) {
        return (
            <div className='cards_view__container'>
                {cards.map((card, idx) => <ShopCard card={card} key={`${'card'}-${idx}`}/>)}
            </div>
        );
    }

    return null;
}
