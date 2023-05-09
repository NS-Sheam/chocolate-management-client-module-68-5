import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import ChocolateTable from '../../components/ChocolateTable';
import LoadingSpinner from '../../components/LoadingSpinner';

const AllChocolates = () => {
    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolates);
    const navigation = useNavigation();
    console.log(loadedChocolates);
    return (
        <div className='container mx-auto'>
            <h1 className='text-xl lg:text-6xl text-amber-800 text-center font-bold my-4'>All Chocolates</h1>
            <Link to="/addchocolate">
                <button className='btn btn-outline'>New Chocolates</button>
            </Link>
            <div className="w-full my-4 text-xs lg:text-base">
                <table className="w-11/12 mx-auto">
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
                        {chocolates
                            ? chocolates?.map(chocolate => <ChocolateTable
                                key={chocolate._id}
                                chocolate={chocolate}
                                setChocolates={setChocolates}
                                chocolates={chocolates}
                            >
                            </ChocolateTable>) :
                            <LoadingSpinner />
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllChocolates;