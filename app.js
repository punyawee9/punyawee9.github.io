const inputBar = document.getElementById('data-input');
const displayButton = document.getElementById('data-input-button');
const displayContent = document.getElementById('data-output');


displayButton.addEventListener('click', ()=>{
// Get the text entered in the input bar
const inputValue = inputBar.value;
// Check if the input is not empty
if (inputValue.trim() !== '') {
// Display the content and set its text to the input value
displayContent.textContent = Hat(inputValue);
    }
});

function Hat(n){
let s = new Array(n+1);
for(let i=0;i<n+1;i++){
    s[i] = new Array(n+1);
    for(let j=0;j<n+1;j++){
        if(j>i) s[i][j]=0;
        else if(i==j) s[i][j]=1;
        else if(i==0 || j==0) s[i][j]=0;
        else{
 
            s[i][j]= j*s[i-1][j] + s[i-1][j-1];
        }
 
    }
}
let ans=0;
for(let i=0;i<n+1;i++){
    ans += s[n][i];
}
return ans;
}