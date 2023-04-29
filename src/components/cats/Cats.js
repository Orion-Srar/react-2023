import React from 'react';
import {useForm} from "react-hook-form";


const Cats = () => {
    const {register,reset, handleSubmit} = useForm();

    function saveCats(cat) {
        console.log(cat);
        reset();
    }

    return (
        <div>

            <form onSubmit={handleSubmit(saveCats)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>Save</button>
            </form>
            {

            }
        </div>
    );
};

export default Cats;