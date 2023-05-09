import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolateTable = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, country, category, photo } = chocolate; 
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chocolate-house-server-ns-sheam.vercel.app/chocolates/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = chocolates.filter(choco => choco._id !== _id);
                            setChocolates(remaining);
                        }
                    })
            }
        })
    }
    return (
        <>
            <tr className='container'>
                <td>
                    <div className=" ">
                        <img className='h-10 lg:h-28 w-10 lg:w-28 rounded-lg shadow-2xl' src={photo} />
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{country}</td>
                <td>{category}</td>
                <td className='h-full'>
                    <div className='lg:flex gap-4 justify-center items-center'>
                        <Link to={`/chocolates/${_id}`} className='mx-auto'>
                            <button className="btn btn-warning btn-xs">edit</button>
                        </Link>
                        <Link>
                            <button onClick={handleDelete} className="btn btn-error btn-xs">delete</button>
                        </Link>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ChocolateTable;