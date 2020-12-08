import React from "react";
import './App.css';
import Layout from "./components/Layout/Layout";
import TasksList from "./containers/TasksList/TasksList";
import Routes from "./Routes";


function App() {
    return (
        <Layout>
            <Routes/>
        </Layout>
    );
}

export default App;
