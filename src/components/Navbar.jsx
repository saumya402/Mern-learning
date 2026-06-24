import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const logouthandler = ()=>{
    // localStorage.clear()
    document.cookie = "token=; max-age=0; path=/;";
    navigate("/login")

  }
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        <NavLink class="nav-link" to='/NetflixHome' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
        })}>
          Netflix Home
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to='/NetflixShows' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
          NetflixShows
        </NavLink>
      </li>
       <li class="nav-item">
        <NavLink class="nav-link" to='/NetflixMovie' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
          NetflixMovies
        </NavLink>
      </li>
    
       <li class="nav-item">
        <NavLink class="nav-link" to='/Team' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
        })}>
          IPL TEAM
        </NavLink>
      </li>


       <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo1' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo1
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo2' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo2
        </NavLink>
      </li>
       <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo3' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo3
        </NavLink>
      {/* </li>
       <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo4' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo4
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo5' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo5
        </NavLink>
      </li>
         <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo6'style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormPrac 1 
        </NavLink>
      </li>
        <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo7'style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo6
        </NavLink>
      </li>
       <li class="nav-item">
        <NavLink class="nav-link" to='/Formdemo8' style={({ isActive }) => ({
          color: isActive ? 'red' : '#ffffff' 
         
        })}>
         FormDemo7
        </NavLink>
      </li>
      <li class="nav-item">
  <NavLink 
    to="/Formdemo9" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    FormDemo8
  </NavLink>
</li>
   <li class="nav-item">
  <NavLink 
    to="/common" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    Common
  </NavLink>
</li>
    <li class="nav-item">
  <NavLink 
    to="/Formdemo10" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    FormDemo9
  </NavLink>
</li>

<li class="nav-item">
  <NavLink 
    to="/usedemo1" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    UseDemo1 
  </NavLink> */}
</li>
<li class="nav-item">
  <NavLink 
    to="/bomb" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    Bomb Game
  </NavLink>
</li>
<li class="nav-item">
  <NavLink 
    to="apidemo1" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    Api Demo1
  </NavLink>
</li>

<li class="nav-item">
  <NavLink 
    to="odmb" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    OdmbMovies Api
  </NavLink>
</li>
<li class="nav-item">
  <NavLink 
    to="MovieDetail" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    OdmbMovies Api
  </NavLink>
</li>

<li class="nav-item">
  <NavLink 
    to="apidemo2" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    Api Demo2
  </NavLink>
</li>
<li class="nav-item">
  <NavLink 
    to="apidemo22" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    Form Demo
  </NavLink>
</li>
<li class="nav-item">
  <NavLink 
    to="add" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
    ADD product
  </NavLink>
</li>
<li class="nav-item">
  <NavLink 
    to="login" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
   Login 
  </NavLink>
</li>
<li class="nav-item">
  <NavLink 
    to="item" 
    
    style={({ isActive }) => ({
      color: isActive ? 'red' : '#ffffff'
     
    })}
  >
   Item
  </NavLink>
</li>

<li class="nav-item">
  
    <button onClick={logouthandler}>Logout</button>
</li>
    </ul>
    
  </div>
  </nav>
    </div>
  )
}
