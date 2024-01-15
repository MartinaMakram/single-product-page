<template>
  <div class="lg:flex items-center lg:gap-[4rem]">
    <div class="lg:hidden pt-5 pl-5 flex justify between">
      <div class="flex gap-2">
        <p>4.6</p>
        <ReviewStars/>
      </div>
      <p class="pl-[6rem]">Based on 119 reviews </p>
    </div>
    <div class="flex p-5 gap-2  ">
      <ul>
        <li class="flex gap-1"><p>5</p> stars</li>
        <li class="flex gap-1"><p>4</p> stars</li>
        <li class="flex gap-1"><p>3</p> stars</li>
        <li class="flex gap-1"><p>2</p> stars</li>
        <li class="flex gap-1"><p>1</p> stars</li>
      </ul>

      <ul class="pt-2 flex flex-col gap-4">
        <li class="bg-[#F5F8FF] w-[18rem] h-[0.5rem]">
          <div class="w-[15rem] h-[0.5rem] bg-[#FFB300] rounded"></div>
        </li>
        <li class="bg-[#F5F8FF] w-[18rem] h-[0.5rem]">
          <div class="w-[5rem] h-[0.5rem] bg-[#FFB300] rounded"></div>
        </li>
        <li class="bg-[#F5F8FF] w-[18rem] h-[0.5rem]">
          <div class="w-[3rem] h-[0.5rem] bg-[#FFB300] rounded"></div>
        </li>
        <li class="bg-[#F5F8FF] w-[18rem] h-[0.5rem]">
          <div class="w-[2rem] h-[0.5rem] bg-[#FFB300] rounded"></div>
        </li>
        <li class="bg-[#F5F8FF] w-[18rem] h-[0.5rem]">
          <div class="w-[1rem] h-[0.5rem] bg-[#FFB300] rounded"></div>
        </li>
      </ul>

      <ul>
        <li>(95)</li>
        <li>(13)</li>
        <li>(3)</li>
        <li>(0)</li>
        <li>(7)</li>
      </ul>
    </div>

    <div>
      <div class="lg:flex hidden gap-1">
        <p>4.6</p>
        <ReviewStars />
      </div>
      <p class="lg:flex hidden">Based on 119 Reviews</p>
    </div>

    <button class="flex flex-col items-center w-full border-2 lg:w-[23rem] h-[2rem] rounded color-[#00ABEB]">
      Write a Review
    </button>
  </div>

  <div class="flex bg-[#F5F5F5] items-center lg:pl-[5rem] h-[2rem] m-3">
    <p>Sort by:</p>
    <div class="relative">
      <label for="sortDropdown" class="sr-only">Sort by:</label>
      <select id="sortDropdown" class="border-2 ml-2 rounded color-[#00ABEB]">
        <option value="option1">Most Recent</option>
        <option value="option2">Name</option>
      </select>
    </div>
  </div>
</template>
