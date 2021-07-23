import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import swal from 'sweetalert';
import { Inertia } from "@inertiajs/inertia";

const handleDelete = (id) => {
    swal({
        title: "Apakah anda yakin ingin menghapus data?",
        text: "sekali dihapus data tidak dapat dikembalikan!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                Inertia.delete(route('deleteBuku', id), {
                    onSuccess: () => {
                        swal('Data Buku berhasil dihapus')
                    }
                })
            }
        });
}


const Home = ({ bukus }) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Halaman Buku</title>
            </Helmet>
            <div className="container mx-auto table w-full p-20">
                <InertiaLink href={route('createBuku')}>
                    <button type="button" className="bg-red-400 font-bold text-white rounded-lg shadow-2xl text-2xl p-2">Tambah Buku</button>
                </InertiaLink>
                <table className="w-full border mt-9">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    ID
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Nama Penulis
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Penerbit
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Deskripsi
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bukus.map((bukus, index) => (
                            <tr key={bukus.id} className="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td className="p-2 border-r">{index + 1}</td>
                                <td className="p-2 border-r">{bukus.nama_penulis}</td>
                                <td className="p-2 border-r">{bukus.penerbit}</td>
                                <td className="p-2 border-r">{bukus.deskripsi}</td>
                                <td>
                                    <InertiaLink href={route('editBuku', bukus.id)}>
                                        <a className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                    </InertiaLink>
                                    <a onClick={handleDelete.bind(this, bukus.id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">Remove</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </React.Fragment>
    );
};
Home.layout = page => <Layout children={page} />

export default Home;