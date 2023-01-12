import useMates from '../hooks/useMates';


function Mates(props) {

    const { mates, deleteMate } = useMates();

    return (
        <>
            <div className='mates flex justify-around w-full flex-wrap'>
                {mates?.map((e, key) => (
                    <div className='flex flex-col min-w-[300px]'>
                        {/* <Image height={100} width={100} src={e.photo} alt="mates n°1" /> */}
                        <div className='name'>{e.name}</div>
                        <div className='note'>{e.description}</div>
                        <button onClick={()=>{deleteMate(e.id)}}>X</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Mates;