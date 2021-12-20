export function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    const SelectFilter = (e) => {
        onSelectFilter(e.target.textContent);
    }
    
    return (
        <div className='fFilters'>
            {filters.map(filt => <button className={selected===filt ? 'filter selected' : 'filter'} key = {filt}
            onClick={SelectFilter}>{filt}</button>)}
        </div>
    );
}
