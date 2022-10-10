censor = () => {
    let zameni = [];
    return (a, b = 0) => {
        if (b == 0) {
            let str = a;
            for (let i = 0; i < zameni.length; i++) {
                str = str.replace(new RegExp(zameni[i][0], 'g'), zameni[i][1]);
            }
            return str;
        }
        else {
            const para =[];
            para.push(a);
            para.push(b);
            zameni.push(para);
            return zameni;
        }
        };
}


const changeScene = censor();
changeScene('PHP','JS');
changeScene('backend', 'frontend');
console.log(changeScene('PHP is the most popular programming language for backend web-development'));