import PopularMenuItem from "@component/components/menu/PopularMenuItem";
import React from "react";
import BuggerImage from "../../../public/assets/bugger.jpg";
import PizzaImage from "../../../public/assets/pizza.jpg";
import ChickenSandwichImage from "../../../public/assets/chicken-sandwich.jpg";
import BarbeCueImage from "../../../public/assets/barbecuechicken.jpg";

export default function PopularMenu() {
  return (
    <div className="px-4 md:px-20 py-24">
      <h1 className="text-black text-4xl">Our Popular Food Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 gap-10">
        <PopularMenuItem
          image={BuggerImage}
          name="Chicken Bugger"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas repudiandae molestias dignissimos ex sed eaque et quas, error impedit?"
          price={199.99}
        />
        <PopularMenuItem
          image={PizzaImage}
          name="Pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas repudiandae molestias dignissimos ex sed eaque et quas, error impedit?"
          price={999.99}
        />
        <PopularMenuItem
          image={ChickenSandwichImage}
          name="Chicken Sandwich"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas repudiandae molestias dignissimos ex sed eaque et quas, error impedit?"
          price={199.99}
        />
        <PopularMenuItem
          image={BarbeCueImage}
          name="Barbecue & Fries"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas repudiandae molestias dignissimos ex sed eaque et quas, error impedit?"
          price={599.99}
        />
      </div>
    </div>
  );
}
