import React from "react";
import AreaCard from "./AreaCard";


const AreaCards = () => {
return(
    // Area Cards for displaying cards
    <section>
        
        <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Todays Sales",
          value: "$20.4K",
          text: "We have sold 123 items.",
        }}/>

<AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={60}
        cardInfo={{
          title: "Todays Revenue",
          value: "$8.2K",
          text: "Available to payout",
        }}/>

        <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escrow",
          value: "$18.2K",
          text: "Available to payout",
        }}
      />
    </section>
)
}

export default AreaCards