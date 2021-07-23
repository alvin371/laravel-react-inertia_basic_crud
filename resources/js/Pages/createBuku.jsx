import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Inertia } from "@inertiajs/inertia";
const Create = () => {
    const [values, setValues] = React.useState({
        judul: "",
        nama_penulis: "",
        deskripsi: "",
        penerbit: "",
    })


    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Inertia.post(route('storeBuku'), values);
    }
    return (
        <React.Fragment>

            <Helmet>
                <title>Tambah Halaman </title>
            </Helmet>
            <div className=" flex items-center justify-center w-100">
                <form onSubmit={handleSubmit} id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <br />
                    <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Form Tambah Buku</h1>
                    <br />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Judul Buku
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="judul" id="judul" type="text" value={values.judul} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nama Penulis
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="nama_penulis" id="nama_penulis" type="text" value={values.nama_penulis} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">
                            Penerbit
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="penerbit" id="penerbit" type="text" value={values.penerbit} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Deskripsi Buku
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="deskripsi" id="deskripsi" type="text" cols="30" rows="10" value={values.deskripsi} onChange={handleChange}></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button id="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Tambah Data Buku
                        </button>
                    </div>
                    <div className="mb-4">
                    </div></form>
            </div>
        </React.Fragment>

    )
}
Create.layout = page => <Layout children={page} />
export default Create;