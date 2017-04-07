function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;


  //your code goes here
  //do not modify words that start with a vowel
  if(!/[AEIOU]/i.test(str[0])) {
    firstHalf = str.match(/[^aeiou]+/i);
    secondHalf = str.replace(/[^aeiou]+/i, "");
    str = secondHalf + firstHalf + "ay";
  }

  //change the HTML content of a <p> element with id="pig-latin-word":
  document.getElementById("pig-latin-word").innerHTML = str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});
