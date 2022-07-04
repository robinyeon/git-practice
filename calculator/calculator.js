function printExpression(value) {
  let expressionString = document.querySelector("#expression");
  expressionString.innerHTML += value;
}

function calculate() {
  let expression = document.querySelector("#expression").innerHTML;
  console.log(expression.search("\\+"));
  // search를 이용해서 연산자들을 찾아내고, split으로 앞뒤숫자를 구분하고(조건문) 실제 연산한 내용으로 answer로 내보내기
  //   document.querySelector("#answer").innerHTML = eval(expression);
  //   eval()함수를 사용하면 string->수식으로 변환 바로 가능하지만 mdn에서는 해당 함수를 절대 사용하지 말 것을 권장한다.
}
