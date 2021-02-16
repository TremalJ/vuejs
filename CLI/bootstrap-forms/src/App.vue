<template>
  <div id="app">
    <div id="nav">
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse is-nav id="nav-collapse">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home'}" exact>Home</b-nav-item>
        <b-nav-item :to="{ name: 'About'}" exact>About</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
      </b-container>
      </b-navbar> 
    <router-view/>
    </div>
  </div>
</template>
