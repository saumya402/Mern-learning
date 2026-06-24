import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { ContentHeader } from './components/ContentHeader'
import { Content } from './components/Content'
import ContentFooter from './components/ContentFooter'
import { Task } from './components/Task'
import New from './components/New'
import { Practical } from './components/Practical'
import { Net } from './components/Net'
import NetFooter from './components/NetFooter'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { Link, Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/Netflix/NetflixHome'
import { NetflixShow } from './components/Netflix/NetflixShow'
import { Navbar } from './components/Navbar'
import { Error404 } from './components/Error404'
import { Watch } from './components/Netflix/Watch'
import { NetflixMovie } from './components/Netflix/NetflixMovie'
import { Team } from './components/Netflix/Team'
import { TeamDetail } from './components/Netflix/TeamDetail'
import { UserStateDemo1 } from './components/UserStateDemo1'
import { UserStateDemo2 } from './components/UserStateDemo2'
import { UserStateDemo3 } from './components/UserStateDemo3'
import { UserStateDemo4 } from './components/UserStateDemo4'
import { StudentList } from './components/StudentList'
import { TableDemo1 } from './components/TableDemo1'
import { TableDemo2 } from './components/TableDemo2'
import { Student } from './components/Student'
import { Book } from './components/Book'
import { FormDemo1 } from './components/Form/FormDemo1'
import { FormDemo2 } from './components/Form/FormDemo2'
import { FormDemo3 } from './components/Form/FormDemo3'
import { FormDemo4 } from './components/Form/FormDemo4'
import { FormDemo5 } from './components/Form/FormDemo5'
import { Form1ex } from './components/Form/Form1ex'
import { FormDemo6 } from './components/Form/FormDemo6'
import { FormDemo7 } from './components/Form/FormDemo7'
import { FormDemo8 } from './components/Form/FormDemo8'
import { Common1 } from './components/Form/Common1'
import { FormDemo9 } from './components/Form/FormDemo9'
import { UseMemoDemo1 } from './components/Form/UseMemoDemo1'
import { FindBomb } from './components/Form/FindBomb'
import { ApiDemo1 } from './components/api/ApiDemo1'
import { OmdbSearch } from './components/api/OmdbSearch'
import { MovieDetail } from './components/api/MovieDetail'
import { ApiDemo2 } from './components/api/ApiDemo2'
import { ApiDemo22 } from './components/api/ApiDemo22'
import { ToastContainer, Zoom } from 'react-toastify'
import { ProductPost } from './components/Product/ProductPost'
import { Login } from './components/api/Login'
import { Item } from './components/api/Item'
// import { ToastContainer, Zoom } from 'react-toastify/unstyled'

// import './App.css'
// import "./assets/css/header.css"

function App() {


  return (
    <div >
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Zoom}
/>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MapDemo5 />}></Route>
        <Route path='/netflixhome' element={<NetflixHome />}></Route>
        <Route path='/netflixshows' element={<NetflixShow />}></Route>
        <Route path='/netflixmovie' element={<NetflixMovie />}></Route>
        {/* <Route path='/team' element = {<Team/>}></Route>
        <Route path = '/TeamDetail/:name' element = {<TeamDetail/>}></Route>
        <Route path = '/Watch/:name' element = {<Watch/>}></Route>
        <Route path='/*' element = {<Error404/>}></Route>
        <Route path='/Table' element = {<TableDemo1></TableDemo1>}></Route>
         <Route path='/Table2' element = {<TableDemo2></TableDemo2>}></Route>
         <Route path='S' element = {<Student></Student>}></Route>
        <Route path='B' element = {<Book></Book>}></Route>
        <Route path = 'Formdemo1' element = {<FormDemo1></FormDemo1>}></Route> */}
        {/* <Route path = 'Formdemo2' element = {<FormDemo2></FormDemo2>}></Route>
        <Route path = 'Formdemo3' element = {<FormDemo3></FormDemo3>}></Route>
        <Route path = 'Formdemo4' element = {<FormDemo4></FormDemo4>}></Route>
         <Route path = 'Formdemo5' element = {<FormDemo5></FormDemo5>}></Route>
          <Route path = 'Formdemo6' element = {<Form1ex></Form1ex>}></Route> */}
        {/* <Route path = 'Formdemo7' element = {<FormDemo6></FormDemo6>}></Route>
           <Route path = 'Formdemo8' element = {<FormDemo7></FormDemo7>}></Route>
           <Route path = 'Formdemo9' element = {<FormDemo8></FormDemo8>}></Route>
           <Route path='common' element = {<Common1></Common1>}></Route> */}
        {/* <Route path='formdemo10' element = {<FormDemo9></FormDemo9>}></Route>
           <Route path='usedemo1' element = {<UseMemoDemo1/>}></Route> */}
        <Route path='bomb' element={<FindBomb />}></Route>
        <Route path='apidemo1' element={<ApiDemo1 />}></Route>
        <Route path='odmb' element={<OmdbSearch></OmdbSearch>}></Route>
        <Route path='MovieDetail/:moviename' element={<MovieDetail />}></Route>
        <Route path='apidemo2' element={<ApiDemo2 />}></Route>
        <Route path='apidemo22' element={<ApiDemo22 />}></Route>
        <Route path='add' element = {<ProductPost/>}></Route>
        <Route path='login'element = {<Login/>}></Route>
        <Route path='item' element = {<Item/>}></Route>
      </Routes>
      {/* <UserStateDemo1></UserStateDemo1>
  <UserStateDemo2></UserStateDemo2>
  <UserStateDemo3></UserStateDemo3>
  <UserStateDemo4></UserStateDemo4>
  <StudentList></StudentList> */}

    </div>
  )

}

export default App
