<template>
  <!--Navbar-->
  <header class="top-0 bg-white">
    <nav class="flex justify-center items-center pt-5 px-5 lg:pt-5 lg:px-10">
      <NuxtLink class="text-2xl" to="/">LOGO</NuxtLink>
      <ul class="flex flex-1 justify-end items-center gap-2">
        <div class="flex gap-1">
          <li><img src="../assets/img/user.png" alt="user-icon" /></li>
          <li class="hidden lg:block">Account</li>
        </div>

        <div class="flex gap-1">
          <li><img src="../assets/img/favorite.png" alt="favorite-icon" /></li>
          <li class="hidden lg:block">WishList</li>
        </div>

        <div class="flex gap-1">
          <li><img src="../assets/img/cart.png" alt="cart-icon" /></li>
          <li class="hidden lg:block">Cart</li>
        </div>
      </ul>
    </nav>
  </header>

  <button class="lg:hidden px-5">
    <img src="../assets/img/menu.png" alt="menu-button" />
  </button>

  <!--Category List-->
  <ul
    class="justify-center items-center hidden lg:flex gap-[2.5rem] bg-[#FBFBFB] h-[2.8rem] text-bold"
  >
    <li>Groceries</li>
    <li>Electronics</li>
    <li>Clothing</li>
    <li>Furniture</li>
    <li>Toys & Video Games</li>
    <li>Baby</li>
    <li>Beauty</li>
    <li>Personal Care</li>
    <li>Pets</li>
    <li>Sports</li>
    <li>Stationary</li>
    <li>Brands</li>
  </ul>

  <!--Breadcrumb-->
  <ul class="flex text-sm items-center lg:gap-[0.3rem] lg:pl-10 pl-7 gap-3">
    <li>Home</li>
    <li>/</li>
    <li>Furniture</li>
    <li class="text-gray-400">/</li>
    <li class="text-gray-400">Dining Room Tables</li>
  </ul>

  <div>
    <slot />
  </div>
</template>
