import PriceOption from "../PriceOptionn/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: "$29/month",
          features: [
            "Access to cardio and weightlifting areas",
            "Locker room and shower facilities",
            "Fitness assessment upon signup",
            "24/7 gym access",
            "Monthly fitness workshops",
          ],
        },
        {
          id: 2,
          name: "Premium Membership",
          price: "$49/month",
          features: [
            "Unlimited access to all gym facilities",
            "Personalized workout plans",
            "Nutritional counseling",
            "Group fitness classes included",
            "Access to sauna and steam room",
          ],
        },
        {
          id: 3,
          name: "Family Membership",
          price: "$89/month",
          features: [
            "Access for two adults and up to two children",
            "Kids' fitness programs",
            "Discounts on personal training sessions",
            "Family-friendly workout hours",
          ],
        },
      ];
      
    return (
        <div>
            <h2 className="text-5xl text-center py-4">Best Price in the town</h2>
       <div className="grid md:grid-cols-3 gap-4">
       {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
       </div>
        </div>
    );
};

export default PriceOptions;