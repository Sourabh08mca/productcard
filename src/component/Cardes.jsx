import React from 'react'

function Cardes() {
  return (
    <div>
        <div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Responsive Product card </h1>
    
</div>


<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name : Nike</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">Rs: 1299</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">399 of</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>

                     </div>
                      <a class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" href='#'>
                Buy Now
            </a>
                      
            </div>
        </a>
       
       

    </div>


    
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-eGGO5hj_wir6CbFbwYleZwAT0atYfKffA&s"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name : Puma</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">Rs: 1499</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">499 of</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
               
                <a class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" href='#'>
                Buy Now
            </a>

            </div>
        </a>
    </div>
    
</section>
    </div>
  );
      
    
  
}

export default Cardes
