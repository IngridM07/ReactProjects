import {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);
    const [value, setValue] = useState('');

    const addCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    
    }
    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ addCategory }></AddCategory>

            { categories.map( (category) => (
                <GifGrid key={ category }  category={ category}/>
            ))
            }
        </>
         
    )
}