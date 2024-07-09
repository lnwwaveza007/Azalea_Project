interface BlockInfoProps {
    text : string
    method? : any
}

const BlockInfo = (props: BlockInfoProps) => {
    const { text,method } = props;
    return (
        <>
            <div>
                <h1 style={{ fontSize: '16px', fontWeight: 'regular', color: 'black', backgroundColor: '#ffffff', borderBottom: '1px solid #b5b5b5', marginBottom: '22px' }}>
                    {}
                    <span style={{ fontFamily: 'Roboto',  display: 'flex' }}>{text}</span>
                    <div style={{display: 'flex'
                        , justifyContent: 'center'
                        , alignItems: 'center'
                        , paddingLeft: '15px'
                        , paddingTop: '5px'}}>
                        
                        {/* มันควรจะใส่รูปมาจากตรงอื่นได้ แต่ยังคิดไม่ออก */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#b5b5b5">
                        <path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z"/></svg>
                        <input onChange={(e) => method(e.target.value)} type="text" placeholder = {`Enter your ${text}`}
                                style={{ backgroundColor: '#FFFFFF'
                                        , color: '#252525'
                                        , fontFamily : 'roboto'
                                        , fontSize: '12px'
                                        , padding: '20px'
                                        , width: '268px'
                                        , height: '33px'
                                        , cursor: 'pointer'
                                        , display: 'flex'
                                        , alignItems: 'center'
                                        , justifyContent: 'center' }} 
                        />
                            
                    </div>
                    

                </h1>  

                <p>
                </p>
            </div> 
        </>
    );
}

export default BlockInfo;