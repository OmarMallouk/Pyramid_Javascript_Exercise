function pyramids(){
    const n = parseInt(document.getElementById('input').value);
    let result = '';

    for (let i = 1; i <= n; i++){
        let k = 1
        let space = " "
    for(let j = 1; j<=i; j++){
        space += k + " " ;
        k += 2
        

     }
     result += space.trim() + '\n';
     
    }
    console.log(result.trim())
    document.getElementById('out').textContent = result.trim();
}

