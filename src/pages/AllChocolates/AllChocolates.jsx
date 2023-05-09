import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChocolateTable from '../../components/ChocolateTable';

const AllChocolates = () => {
    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolates);
    return (
        <div className='container mx-auto'>
            <h1 className='text-xl lg:text-6xl text-amber-800 text-center font-bold my-4'>All Chocolates</h1>
            <Link to="/addchocolate">
                <button className='btn btn-outline'>New Chocolates</button>
            </Link>
            <div className="w-full my-4">
                <table className="w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>Country/factory</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chocolates.map(chocolate => <ChocolateTable
                            key={chocolate._id}
                            chocolate={chocolate}
                            setChocolates={setChocolates}
                            chocolates={chocolates}
                        >
                        </ChocolateTable>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllChocolates;