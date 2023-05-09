import React from 'react';
import { Link, json } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddChocolate = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = { name, country, category, photo };
        console.log(newChocolate);
        fetch("https://chocolate-house-server-ns-sheam.vercel.app/chocolates", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Chocolate added successfully'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className='px-2 lg:px-5 container'>
            <h1 className='text-xl lg:text-6xl text-amber-700 text-center font-bold my-4'>Add a chocolate</h1>
            <Link to="/chocolates">
                <button className='btn btn-outline'>All chocolates</button>
            </Link>
            <form onSubmit={handleAddCoffee} className='form'>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='country' placeholder="Country" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-3/4 mx-auto my-4">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <div className="input-group">
                        <select defaultValue="default" name='category' className="select select-bordered w-full">
                            <option disabled value="default">Category</option>
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

export default AddChocolate;