import useMates from '../hooks/useMates';

function Mates(props) {

    const { mates, deleteMate, errorMsg } = useMates();

    return (
        <>
            <div className='mates flex flex-col justify-center items-center'>
                {mates ? mates.map(e => (
                    <div key={e.id} className='flex flex-col w-[300px] m-2 bg-blue-600'>
                        <img height={100} width={100} src={e.url} alt={e.url} />
                        <div className='name'>{e.name}</div>
                        <div className='note'>{e.description}</div>
                        <button className='w-fit rounded border-2 bg-white px-4' onClick={() => { deleteMate(e.id, e.ref) }}>X</button>
                    </div>
                ))
                    :
                    errorMsg
                }
            </div>
        </>
    );
}

export default Mates;