<template>
    <ul class="nav nav-pills">
  <li class="nav-item">
    <router-link :to="{name:'home'}" class="nav-link " active-class="active" exact >home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about" class="nav-link" active-class="active">about us</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/users" class="nav-link" active-class="active">all users</router-link>
  </li>
 
</ul>
</template>
