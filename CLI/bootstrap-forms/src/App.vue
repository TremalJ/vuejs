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
        <b-nav-item :to="{ name: 'Grid'}" exact>Grid</b-nav-item>
        <b-nav-item :to="{ name: 'Card'}" exact>Card</b-nav-item>
        <b-nav-item :to="{ name: 'Form'}" exact>Form</b-nav-item>
        <b-nav-item :to="{ name: 'Validations'}" exact>Validations</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
      </b-container>
      </b-navbar> 
      <b-container>
        <router-view/>
      </b-container>
    </div>
  </div>
</template>
