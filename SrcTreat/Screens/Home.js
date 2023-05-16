import { SafeAreaView, ScrollView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Details } from './Details'
const Home = (props) => {
    const Arr = [
        {
        "image":require("../assets/Images/b0.jpg"),
        "title" : "Rose Pedicure", 
        "desc" :"This treatment starts with rose petals on your feet followed by a foot soak which is also infused with rose petals. The scent of roses already helps calm your mind. The foot soak is followed by an exfoliation using a petal as the scrub.Your nails are clipped and filed, cuticles pushed back, and your feet ready for an application of rose mask. The next step is a foot massage and a fresh coating of nail polish.",
        "ingredients" : ["top coat", "polish", "base coat", "Pre-Soaked Pads", "Relaxing Rose and Peppermint Foot Mask", "Relaxing Rose Exfoliating Sugar Scrub"],
        "link" : "https://www.thenailasaurus.com/2014/07/easy-watermelon-nail-art-tutorial.html",
        "method" : 
           [
            "Step 1: Soak the client’s feet in a blend of warm water and two tablespoons of The Nail Lounge Relaxing Rose Foot Soak.  Once the water is frothy with bubbles, sprinkle Bella Luccè Madi Lular Petal Bath into the tub and around the foot bath area.",
            "Step 2: Apply Be Natural Callus Eliminator Pre-Soaked Pads to heels. Prep nails.",
            "Step 3: Remove the pads, then use a foot file to lessen calluses.",
            "Step 4: Exfoliate the client’s feet and lower legs with The Nail Lounge Relaxing Rose Sugar Scrub. Rinse.",
            "Step 5: Apply The Nail Lounge Relaxing Rose and Peppermint Foot Mask to feet. Leave on for about five minutes, then remove with hot towels."
           ]  
        },
        {
            "image":require("../assets/Images/b1.jpg"),
        "title" : "French Pedicure",
         "desc" :" Who would have thought that it is possible to do a French pedicure at home and save all the money that you would have otherwise wasted on a fancy salon? Not any patchy job of a French pedicure either, mind you. It is possible to achieve a salon-like French pedicure finish at home, and we’ll tell you how. Scroll down to find a definitive step-by-step guide to getting a perfect French pedicure at home. Go on.",
         "ingredients" : ["Nail Polish Remover", "Cotton Balls", "Nail Cutter"],
         "link" : "https://sonailicious.com/geometric-nail-art-tutorial-textured-nail-polish/",
         "method" : ["Step 1: Prep Your Nails"]  
        },{
            "image":require("../assets/Images/b2.jpg"),
           
           "title" : "Gel polish pedicure",
           "desc" :"The most beautiful colours of this season, amazing glossy finish but most of all durability and resistance to scratches - no wonder gel polish pedicure gets more and more popular. Let us explain what a gel polish pedicure is and how to create it. How do you spot a woman that takes care of herself? The answer is obviously - by her nails! During summer, when we show off our well cared for feet in fashionable sandals, a pedicure is a must.",
           "ingredients" : ["Top Coat and Base Coat", "UV or LED Lamp", "Pure Acetone", "Crystal/Glass Files"],
           "link" : "https://www.brit.co/geometric-manicure-topcoat/",
           "method" : ["preparation.","applying the base coat.","applying the colour gel polish.","finishing."]    
        },{
            "image":require("../assets/Images/b3.jpg"),
           
           "title" : "paraffin wax",
           "desc" :"Paraffin wax is a white or colorless soft, solid wax. It’s made from saturated hydrocarbons.It’s often used in skin-softening salon and spa treatments on the hands, cuticles, and feet because it’s colorless, tasteless, and odorless. It can also be used to provide pain relief to sore joints and muscles.Paraffin wax has many other uses, too. It’s often used as lubrication, electrical insulation, and to make candles and crayons.",
           "ingredients" : ["double boiler", "measuring cup", "mineral oil", "thermometer"],
           "link" : "https://www.brit.co/geometric-manicure-topcoat/",
           "method" : ["Melt the wax", " Apply the wax", " Bag your hand or foot", " Remove the wax"]    
        },{
            "image":require("../assets/Images/b4.jpg"),
           
           "title" : "Fish Pedicures",
           "desc" :"If you book yourself in for a pedicure, you expect the beautician to use a pumice stone or file to remove hard patches and calluses from your feet. However, for those with a strong stomach, there is another way to achieve silky smooth soles. Fish pedicures employ hundreds of tiny toothless carp (Garra rufa) to nibble the dead skin from your feet and were hugely popular in North America and Europe towards the end of the 2010s.",
           "ingredients" : ["tub of water", "doctor fish"],
           "link" : "https://www.brit.co/geometric-manicure-topcoat/",
           "method" :["Known colloquially as doctor fish"," Garra rufa are native to Turkey and several Middle Eastern countries including Syria", "Iran and Iraq. They are used almost exclusively for fish pedicures because of a survival tactic that enables them to thrive on dead scales and skin whenever their preferred food is scarce." ,"Usually, the fish are kept in a communal tank at the spa; then when a customer arrives, around 100 of them are transferred into an individual foot bath.","After removing your shoes and socks, your feet should be rinsed thoroughly and inspected for any cuts or infections before you immerse them in the warm water of the fish tank.","The Garra rufa are attracted by the vibration of your feet entering the water, and will immediately congregate around any patches of hard or dead skin to feed.","Because they have no teeth, their nibbles should feel ticklish rather than painful - though accounts vary from person to person.","Most fish pedicures last for between 15 and 30 minutes and may be followed by a traditional pedicure."]     
        },{
            "image":require("../assets/Images/b5.jpg"),
           
           "title" : "Mini Pedicure", 
           "desc" :"A mini pedicure is a pedicure that focuses mainly on the toes. It is designed mainly for toenail maintenance between regular pedicure visits. Mini pedicures usually include a soak, nail shaping and polish, but do not include any massage or sole care.Other types of pedicures can be combined with the mini pedicure to keep feet healthy and looking clean. The normal pedicure should be a regularly scheduled appointment for foot maintenance. A spa pedicure adds luxury treatments such as dips, masks and seaweed treatments. Stone pedicures pamper the feet with hot stone and an essential-oil massage to de-stress and moisturize feet.",
           "ingredients" : ["2 litres boiled water", "2 cups pine needles", "2 cups rose petals", "2 tsp peppermint oil"],
           "link" : "https://www.lulus.com/blog/beauty/mani-monday-pink-and-white-flower-nail-tutorial/",
           "method" :["Clean your nails with acetone and cut and file them according to the required length and shape.","Massage a little cream or honey on the nails and dip into a tub of hot soapy water to which you have added some fresh lemon slices and marigold petals (believe me it makes all the difference and you’ll feel like a queen!).","Once the nails and skins have softened, clean the nails with the help of the brush, and use a pumice stone to dislodge dead skin on the heels. Pat dry and clean the nails with a cleaner and cuticle pusher.","Rub the lemon slices on the skin to remove tan and use a towel to pat dry.","Use the loofah to smooth out dead skin and mix 2 tsp each of honey and cream and massage well into the skin."," Wipe off with hot towels and you are done!"]      
        },{
            "image":require("../assets/Images/b6.jpg"),
           "title" : "Ice Cream Pedicure",
           "desc" :"Strawberry Ice Cream Oil & Mineral Soak, Strawberry Sherbet Scrub, Ice Cream Sandwich Pumice Stone, Marshmallow Hydrating Mask, Choco-holic Body Icing; base coat, polish, top coat.",
           "ingredients" : ["Strawberry Ice Cream Oil", "Strawberry Sherbet Scrub", "Ice Cream Sandwich Pumice Stone" ],
           "link" : "http://alldaychic.com/extravagant-nail-art-tutorial/",
           "method" : ["Soak the feet in warm water with Strawberry Ice Cream Oil & Mineral Soak for five to 10 minutes.","Prep the nails.","Exfoliate the feet and lower legs with Strawberry Sherbet Scrub.","Use the Ice Cream Sandwich Pumice Stone to lessen the calluses."]      
        },{
            "image":require("../assets/Images/b7.jpg"),
           "title" : "Margarita Spa Pedicure",
           "desc" :"The feet are the most neglected part of the body, yet they do a really hard and important job! Here are some recipes for happy, pampered, sandal-ready feet. Be sure to massage and pay special attention to your feet, toes, ankles and calves as you are doing the steps.",
           "ingredients" : ["Unscented foot soak", "Thinly sliced fresh lime" ],
           "link" : "https://www.more.com/beauty/nails/summer-nails-pineapple-party-nail-art/?crlt.pid=camp.iuoaAu1tMrIX",
           "method" : ["Take of all old polish (if you use polish) If nails are yellowed due to bright polishes, go to the nail restore recipe.","If not, skip on to the foot soak recipe.","Foot soaks are good for sore feet and to soften calluses."," If there are any fungus problems with the feet or nails you can add tea tree oil, an anti-fungal to address those issues as well.","Now it’s time to soften the feet even further.","If you want to take a small detour at this point you can first use the pit of an avocado to massage the feet.","Margaritaville Foot Scrub: Any kind of salt (margarita salt if you have it handy) Lime juice or lime essential oil Oil Mix until slushy, massage into feet, rinse, then pick one of the following two recipes:A.","Pina Colada Foot Treat:Moisturize"]     
        },{
            "image":require("../assets/Images/b8.jpg"),
           "title" : "Waterless Pedicure",
           "desc" :"This foot treatment starts like a regular pedicure where your nails are trimmed. Afterward, your feet are covered with a sanitizing spray and then followed by wrapping your in warm towels and plastic. The effect is similar to having a foot soak where your feet, cuticles, and skin are left moisturized, soft, and smooth.However, this treatment is simpler, safer, and more effective. It is often used in places or situations that have water restrictions. You don’t have to prepare and look for a water source. Plus, the preparation and procedure is less messy with no water dripping on your floor. This makes it more sanitary, hygienic, and friendly to the environment.",
           "ingredients" : ["Foot Scrub", "Mud Masque", "Massage Lotion", "Scent:Green Tea"],
           "link" : "https://abeautifulmess.com/2014/11/use-nail-wraps-to-create-a-geometric-nail-design.html",
           "method" :["Put your foot bath or soak in a spray bottle and fill with water. Spray the foot.","Simply massage your soak directly onto the skin and massage or cleanse","Wrap the foot with a heated towel, apply light squeezing pressure (alternate) and when cool,wipe off.","Use a facial steamer directed at the feet allowing the pores to open and sooth, cleanse and soften the skin.","You can also just spray or massage the foot and let sit while performing cuticle work.","Another method is to make a solution of foot bath or soak in a large bowl.  Place clean towels and let the solution wet the towels.  Place the wet towels in a towel warmer and use those as a cleansing cloth.","Finally, if you wanted to skip the bath or soak all together, use a foot deodorizer or a disinfectant which is safe for the skin.  Spray on the foot and proceed."]  
        },{
            "image":require("../assets/Images/b9.jpg"),
           "title" : "Salt Pedicure",
           "desc" :"A salt pedicure uses salt and rock to efficiently scrub the skin and remove the dead skin cells. This usually replaces the step of exfoliation or scrub in other pedicures. First, you soak your feet in warm water for at least 15 minutes followed by a rock and salt scrub to eliminate the dirt on your feet.",
           "ingredients" : ["A Tub Of Warm Water", "Bath Salt", "A Good Foot Scrub", "Nail clippers", "Cuticle Pusher"],
           "link" : "https://abeautifulmess.com/2018/09/grunge-glam-studded-nail-tutorial.html",
           "method" :["1.Fill a plastic tub with warm water.","After that, add Epsom salt to the water.","Now, place your feet in the water and soak for at least ten whole minutes.","After soaking, remove one foot (right or left, your preference) from the water and leave the other to soak.","Rub a pumice stone on the bottom of your foot (the one taken out from the water), concentrating on the roughest areas.","Place the foot you just scrubbed back into the water and repeat the previous step on the opposite foot.","Remove your feet from the water and gently pat them dry."]      
        },{
            "image":require("../assets/Images/b10.jpg"),
           "title" : "Chocolate Pedicure",
           "desc" :"Giving your feet a relaxing treat every once in a while is very necessary. A pedicure not only relaxes your foot, but also keeps them clean and healthy. And when this pedicure includes chocolate, it sure becomes a delight.Chocolate is being widely used in many beauty treatments nowadays. Most of you might have heard about chocolate waxing that is quite effective in removing the tanning. Chocolate can also be used to do a pedicure. Well, your dream of having a dip in the yummy chocolate might just come true. What's more is that you can do it in the comfort of your home.",
           "ingredients" : ["4 ½ cup melted chocolate", "A basin of warm water", "1 tsp Epsom salt"],
           "link" : "https://abeautifulmess.com/2018/03/easy-gold-stripe-nail-tutorial.html",
           "method" :["Prepping your feet and toenails","Warm soak","Chocolate treat for your feet","Chocolate-sugar scrub","Moisturise"]       
        }
     ]
    useEffect(()=>{
        if(props.item !=null){
        props.onEdit(true)
        }
    },[props.item])
    if(!props.edit){
    return (
    <SafeAreaView style={{flex:1,}}>
        <ScrollView style={{flex:1,marginHorizontal:10,paddingVertical:10}}>
            {
                Arr.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=>{
                            props.onItem(item)
                        }} style={{marginVertical:10,}}>
                        <View style={{height:110,borderRadius:16,}}>
                        <Image source={item.image} style={{height:"100%",width:"100%", borderRadius:16, }} resizeMode="cover" />
                        </View>
                        <Text style={{fontSize:15,fontWeight:"700",color:"black",textAlign:"center",marginTop:10}}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </SafeAreaView>
  )}else{
      return(
          <Details item={props.item} onItem={(e)=>props.onItem(e)} onEdit={(e)=>props.onEdit(e)}/>
      )
  }
}

export default Home

const styles = StyleSheet.create({})