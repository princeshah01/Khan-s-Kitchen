const rating =(rate,totalrating = 5)=>{
    let i = rate ;
    for (let j = 1 ; j <= totalrating ; j++){
        if (j<=i){
            <span className="red">★</span>
            
        }
        else{
            <span className="black">★</span>

        }
    }
}
rating(4);