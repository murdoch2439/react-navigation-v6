import newsCategories from "./newsCategories";

export const  getCategoryNumber  = (category:string) => {
    let num : number = 0;
    if(category === "Info"){
        num = 2;
    }if(category === "Société"){
        num = 3;
    }if(category === "Politique"){
        num = 4;
    }if(category === "économie"){
        num = 5;
    }if(category === "Sport"){
        num = 6;
    }if(category === "Culture"){
        num = 7;
    }if(category === "International"){
        num = 8;
    }//  if(category === "éducation"){
    //   num = 9;
    // }
    if(category === "Santé") {
        num = 10;
    }if(category === "A la une") {
        num = 12;
    }if(category === "Environnement"){
        num = 13;
    }if(category === "Justice"){
        num = 14;
    }if(category === "Actualités"){
        num = 15;
    }if(category === "Sécurité"){
        num = 16;
    }// else if(category == "Sécurité"){
    //   num = 16;
    // }
     if(category === "Interviews") {
        num = 17;
    }if(category === "Communiqué"){
        num = 23;
    }

    // else if(category == "Sécurité"){
    //    num = 16;
    // }


    return num
}




// export const timeFormater = (element:string) =>{
//     const split = element.split("T")
//     const customDate = split[0]
//     let customTime = split[1].split("+")[0]
//     customTime = customTime.substring(0, 5)
//
//     return  `${customDate} ${customTime}`
//
// }


 export const categoriesFilter = (categories:string) =>{
    categories = categories.replace(' ', '')
    console.log(categories)
    let result :any  = []
    if(categories.includes(',')){
        const splited = categories.split(',')
        // console.log(splited)
        // @ts-ignore
        result = splited.map((item):string => newsCategories[getCategoryNumber(item)])
        // console.log(result)
        return result
    }
     // else{
    //     result = [...result, newsCategories[categories]]
    // }
}

