import ft from './ft.module.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

export default function Formtest() {
    const [men, setMen] = useState([]);
    const {register, handleSubmit, watch, formState: {errors} } = useForm();
    const [fdata, setFdata] = useState([])

    const onSubmit = (data) => {
        setFdata(data);
        console.log(fdata)
        axios.post(`http://192.168.2.96`, fdata).then(res => {console.log(res); console.log(res.data);}).then(request)
    }

    async function request() {
        axios.get(`http://192.168.2.96`).then(res => {
            setMen(res.data);
            console.log(res.data)
        })
    }

    return (
    <div className={ft.container}>
        <div className={ft.adder}>
            <h2>Add People</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name: </label>
                <input {...register("fname", {required: true, maxLength: 20})}/>
                <br/><br/>
                <label>Likes: </label>
                <input {...register("lname", {required: true, maxLength: 20})}/>
                <br/><br/>
                <label>Age: </label>
                <input type="number" {...register("age", {required: true})}/>
                <input type="submit" value="Submit"/> 
            </form>
        </div>

        <div className={ft.viewer}>
            <button className={ft.bubbon} onClick={request}>Show Tables</button>
            <div>
                <h2>People Listed</h2>
                <table className={ft.teble}>
                    <tr className={ft.teble}>
                        <th className={ft.teble}>Name</th>
                        <th className={ft.teble}>Age</th>
                        <th className={ft.teble}>Interests</th>
                    </tr>
                   {
                    men.map((value,key) => {
                        return(
                            <tr key={key} className={ft.teble}>
                                <td className={ft.teble}>{value.name}</td>
                                <td className={ft.teble}>{value.age}</td>
                                <td className={ft.teble}>{value.likes}</td>
                            </tr>
                        )
                    })
                   }
                </table>
            </div>
        </div>
    </div>
    )
}