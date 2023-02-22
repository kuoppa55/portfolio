import React, {useState, useEffect} from 'react'

import { Loader, Card, FormField } from '../components'

const RenderCards = ({data, title}) => {
    if(data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post}/>)
    }

    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    
    const [searchText, setSearchText] = useState('');
    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[32px]">
                    Welcome
                </h1>
                <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
                    Page currently under construction. Click "Create" to mess with AI Generated Images
                </p>
            </div>

            
        </section>
    )
}

export default Home