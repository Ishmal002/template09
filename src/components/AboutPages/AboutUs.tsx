import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      
      <section className="text-blue-400 body-font">
        <div className="container mx-auto flex px-5 py-24">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src= "/aboutus.png" width={309} height={536} 
            />
          </div>
          
          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src='/about4.png'
              width={309} height={271}
            />
            
            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/about3.png"
              width={309} height={382}
            />
          </div>
          
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              OUR DIETARY PLAN
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
            

A balanced diet is essential for maintaining good health,enhancing energy levels&supporting bodily functions. 
Food forms the cornerstone of this balance providing the essential nutrients, vitamins & minerals needed for physical&mental well-being.
 
<br />A balanced diet refers to a meal plan that includes all the necessary nutrients in appropriate proportions. These nutrients include:  
<br /><b>1.Carbohydrates:</b> <br />The body’s primary energy source. Found in foods like bread, rice, pasta, and fruits.  
<br /><b>2.Proteins:</b> <br />Essential for growth, repair, and maintenance of body tissues. Sources include meat, fish, eggs, legumes, and nuts.  
<br /><b>3.Fats:</b> <br />Necessary for energy storage, insulation, and cell membrane structure. Healthy fats come from nuts, seeds, avocados, and fatty fish.  
<br /><b>4.Vitamins and Minerals:</b> <br />Vital for various biochemical processes, immunity, and overall health. Fruits, vegetables, and fortified foods are excellent sources.  
<br /><b>5.Fiber:</b> <br />Important for digestive health, found in whole grains, fruits, and vegetables.  
<br /><b>6.Water:</b> <br />Crucial for hydration, temperature regulation, and bodily functions.

<br /><b><u>The Role of Food in a Balanced Diet</u></b>  
<br />Food is the vehicle that delivers these nutrients to the body. Consuming a diverse array of foods ensures that the body receives all essential nutrients. Here’s why food is indispensable in achieving dietary balance:  
<br /><b>1.Energy Production:</b> <br />The body relies on food for energy. Carbohydrates and fats are metabolized to fuel daily activities, while proteins support energy during fasting or intense physical activity.  
<br /><b>2.Growth and Repair:</b> <br />Proteins and minerals like calcium and phosphorus are vital for the growth and repair of tissues, especially in children and adolescents.  
<br /><b>3.Immune Support:</b> <br />A balanced diet rich in vitamins (like C and D) and minerals (like zinc) strengthens the immune system.  
<br /><b>4.Cognitive Function:</b> <br />Nutrients like omega-3 fatty acids and antioxidants support brain health and cognitive function.  
<br /><b>5.Disease Prevention:</b> <br />A diet rich in whole foods, fiber, and healthy fats reduces the risk of chronic diseases like heart disease, diabetes, and cancer.  


<br /><b><u>Conclusion</u></b>  
<br />Food is not just a means to satisfy hunger but a critical component of a balanced diet that supports health, energy, and longevity. By making informed food choices and understanding the role of nutrients, individuals can maintain a balanced diet and lead healthier lives.
            </p>
            <div className="flex justify-center">
             
              
            </div>
          </div>
        </div>
      </section>

      
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col w-[579px]">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src = "/about.png"
            width={1320} height={386}
          />
        </div>
      </section>
      
      <section className="text-white body-font">
  <div className="container px-3 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
          <Image
        
            src="/student.png"
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=""
            src="/coffee.png"
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=" flex flex-col justify-center items-center"
            src="/man.png"
            width={80} height={80}
            alt="blog"
            
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}