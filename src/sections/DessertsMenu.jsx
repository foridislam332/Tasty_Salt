import React, { useEffect, useState } from 'react';
import MenuCard from '../components/MenuCard';

const DessertsMenu = () => {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenuData(data))
    }, [])
    console.log(menuData)

    return (
        <section className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto my-24'>
            <div className='text-center'>
                <p className='text-secondary text-2xl mb-4'>Sweet Dreams</p>
                <h1 className='text-5xl font-bold'>Desserts Menu</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {
                    menuData.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default DessertsMenu;