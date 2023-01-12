import useMates from '../hooks/useMates';


function Mates(props) {

    const { mates, deleteMate } = useMates();

    return (
        <>
            <div className='mates flex flex-col justify-center items-center'>
                {mates?.map((e, key) => (
                    <div className='flex flex-col w-[300px] m-2 bg-blue-600'>
                        {/* <Image height={100} width={100} src={e.photo} alt="mates n°1" /> */}
                        <div className='name'>{e.name}</div>
                        <div className='note'>{e.description}</div>
                        <button className='w-fit rounded border-2 bg-white px-4' onClick={()=>{deleteMate(e.id)}}>X</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Mates;