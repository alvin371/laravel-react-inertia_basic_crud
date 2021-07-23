import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const Buku = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title>Halaman Buku</title>
            </Helmet>
            <h1>Halo Selamat Datang</h1>
        </React.Fragment>

    )
}
Buku.layout = page => <Layout children={page} />
export default Buku;