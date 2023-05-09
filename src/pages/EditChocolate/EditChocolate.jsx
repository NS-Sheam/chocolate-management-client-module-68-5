import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditChocolate = () => {
    const loadedChocolate = useLoaderData();
    const { _id, name, country, category, photo } = loadedChocolate;
    // console.log(category);
    const handleEditCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const updatedChocolate = { name, country, category, photo };
        // console.log(updatedChocolate);
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedChocolate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your change saved successfully'
                })
            }
        })
        

    }
    return (
        <div className='px-2 lg:px-5 container'>
            <h1 className='text-xl lg:text-6xl text-amber-700 text-center font-bold my-4'>Edit Chocolate</h1>
            <Link to="/chocolates">
                <button className='btn btn-outline'>All chocolates</button>
            </Link>
            <form onSubmit={handleEditCoffee} className=''>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" defaultValue={name} />
                    </label>
                </div>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='country' placeholder="Country" className="input input-bordered w-full" defaultValue={country} />
                    </label>
                </div>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered w-full" defaultValue={photo} />
                    </label>
                </div>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <div className="input-group">
                        <select defaultValue={category} name='category' className="select select-bordered w-full">
                            <option disabled >Category</option>
                            <option>Black Chocolate</option>
                            <option>White Chocolate</option>
                            <option>milk Chocolate</option>
                        </select>
                    </div>
                </div>
                <div className="form-control w-3/4 mx-auto my-8">
                    <button type='submit' className="btn btn-block">Save</button>
                </div>

            </form>
        </div>
    );
};

export default EditChocolate;