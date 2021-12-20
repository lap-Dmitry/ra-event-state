export function ProjectList(props) {
    const { projects } = props;
    let i = 0;
    return(
        <div className='projects'>
            {projects.map((image) => {
                i += 1;
                return ( <img className='image' src={image.img} key={i} alt='img'></img>)
            })}
        </div>
    );
}
